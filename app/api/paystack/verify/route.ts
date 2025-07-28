import { NextRequest } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { reference } = await request.json()

    // Verify transaction with Paystack
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    })

    const data = await response.json()

    if (data.status && data.data.status === 'success') {
      const orderId = data.data.metadata?.orderId

      if (orderId) {
        // Update order status
        const order = await db.order.update({
          where: { id: orderId },
          data: {
            status: 'CONFIRMED',
            paymentStatus: 'SUCCESS',
            paymentId: reference,
          },
          include: {
            items: {
              include: {
                product: true
              }
            }
          }
        })

        return Response.json({
          status: true,
          message: 'Payment verified successfully',
          order,
        })
      }
    }

    // If payment failed, restore inventory
    if (data.data?.metadata?.orderId) {
      const orderId = data.data.metadata.orderId
      
      const order = await db.order.findUnique({
        where: { id: orderId },
        include: { items: true }
      })

      if (order) {
        // Restore inventory
        for (const item of order.items) {
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
                increment: item.quantity
              }
            }
          })
        }

        // Update order status
        await db.order.update({
          where: { id: orderId },
          data: {
            status: 'CANCELLED',
            paymentStatus: 'FAILED',
          }
        })
      }
    }

    return Response.json(
      { error: 'Payment verification failed' },
      { status: 400 }
    )

  } catch (error) {
    console.error('Payment verification error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
