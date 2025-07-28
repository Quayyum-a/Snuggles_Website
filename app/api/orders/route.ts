import { NextRequest } from 'next/server'
import { db } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'
import { sendEmail, emailTemplates } from '@/lib/email'
import { withOrderRateLimit, withApiRateLimit } from '@/lib/rateLimiter'
import { validateOrderData, sanitizeString } from '@/lib/validation'
import { logInfo, logError, logWarn } from '@/lib/logger'

async function createOrderHandler(request: NextRequest) {
  try {
    const rawData = await request.json()

    // Validate order data
    const validation = validateOrderData(rawData)
    if (!validation.isValid) {
      logWarn('Invalid order attempt', {
        errors: validation.errors,
        ip: request.headers.get('x-forwarded-for')
      })
      return Response.json(
        { error: validation.errors.join(', ') },
        { status: 400 }
      )
    }

    // Get authenticated user (if any)
    const user = await getAuthUser(request)

    // Sanitize input
    const email = sanitizeString(rawData.email.toLowerCase())
    const items = rawData.items
    const shippingInfo = rawData.shippingInfo

    // Calculate total and validate products
    let total = 0
    const orderItems = []

    for (const item of items) {
      const product = await db.product.findUnique({
        where: { id: item.productId }
      })

      if (!product || !product.isActive) {
        return Response.json(
          { error: `Product ${item.productId} not found or unavailable` },
          { status: 400 }
        )
      }

      // Check inventory
      const inventory = await db.productInventory.findUnique({
        where: {
          productId_size_color: {
            productId: item.productId,
            size: item.size,
            color: item.color,
          }
        }
      })

      if (!inventory || inventory.quantity < item.quantity) {
        return Response.json(
          { error: `Insufficient stock for ${product.name} (${item.size}, ${item.color})` },
          { status: 400 }
        )
      }

      const itemTotal = product.price * item.quantity
      total += itemTotal

      orderItems.push({
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
        size: item.size,
        color: item.color,
      })
    }

    // Create order
    const order = await db.order.create({
      data: {
        userId: user?.id,
        email,
        total,
        status: 'PENDING',
        paymentStatus: 'PENDING',
        shippingName: shippingInfo?.fullName,
        shippingPhone: shippingInfo?.phone,
        shippingAddressText: shippingInfo?.address,
        items: {
          create: orderItems
        }
      },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    })

    // Reserve inventory
    for (const item of items) {
      await db.productInventory.update({
        where: {
          productId_size_color: {
            productId: item.productId,
            size: item.size,
            color: item.color,
          }
        },
        data: {
          quantity: {
            decrement: item.quantity
          }
        }
      })
    }

    // Send order confirmation email (don't wait for it)
    const confirmationTemplate = emailTemplates.orderConfirmation(order)
    sendEmail({
      to: order.email,
      subject: confirmationTemplate.subject,
      html: confirmationTemplate.html,
    }).catch(error => {
      logError('Failed to send order confirmation email', error)
    })

    logInfo('Order created successfully', {
      orderId: order.id,
      email: order.email,
      total: order.total,
      itemCount: order.items.length,
      userId: user?.id,
      ip: request.headers.get('x-forwarded-for')
    })

    return Response.json({
      order,
      message: 'Order created successfully'
    })

  } catch (error) {
    logError('Order creation error', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function getOrdersHandler(request: NextRequest) {
  try {
    const user = await getAuthUser(request)
    
    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const orders = await db.order.findMany({
      where: { userId: user.id },
      include: {
        items: {
          include: {
            product: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return Response.json({ orders })

  } catch (error) {
    logError('Orders fetch error', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export const POST = withOrderRateLimit(createOrderHandler)
export const GET = withApiRateLimit(getOrdersHandler)
