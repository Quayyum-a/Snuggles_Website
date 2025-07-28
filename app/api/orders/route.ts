import { NextRequest } from 'next/server'
import { db } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { items, email, shippingInfo } = await request.json()
    
    // Get authenticated user (if any)
    const user = await getAuthUser(request)

    // Validate required fields
    if (!items || !Array.isArray(items) || items.length === 0) {
      return Response.json(
        { error: 'Order items are required' },
        { status: 400 }
      )
    }

    if (!email) {
      return Response.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

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

    return Response.json({
      order,
      message: 'Order created successfully'
    })

  } catch (error) {
    console.error('Order creation error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
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
    console.error('Orders fetch error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
