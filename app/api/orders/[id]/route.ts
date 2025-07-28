import { NextRequest } from 'next/server'
import { db } from '@/lib/db'
import { getAuthUser, requireAdmin } from '@/lib/auth'
import { sendEmail, emailTemplates } from '@/lib/email'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getAuthUser(request)
    
    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const order = await db.order.findUnique({
      where: { id: params.id },
      include: {
        items: {
          include: {
            product: true
          }
        },
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          }
        }
      }
    })

    if (!order) {
      return Response.json({ error: 'Order not found' }, { status: 404 })
    }

    // Users can only view their own orders, admins can view all
    if (user.role !== 'ADMIN' && order.userId !== user.id) {
      return Response.json({ error: 'Forbidden' }, { status: 403 })
    }

    return Response.json({ order })

  } catch (error) {
    console.error('Order fetch error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await getAuthUser(request)

  if (!user || user.role !== 'ADMIN') {
    return Response.json({ error: 'Admin access required' }, { status: 403 })
  }

  try {
    const { status } = await request.json()

    const order = await db.order.update({
      where: { id: params.id },
      data: { status },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    })

    // Send status update email (don't wait for it)
    if (status === 'SHIPPED' || status === 'DELIVERED' || status === 'PROCESSING') {
      const statusTemplate = emailTemplates.orderStatusUpdate(order)
      sendEmail({
        to: order.email,
        subject: statusTemplate.subject,
        html: statusTemplate.html,
      }).catch(error => {
        console.error('Failed to send order status update email:', error)
      })
    }

    return Response.json({
      order,
      message: 'Order updated successfully'
    })

  } catch (error) {
    console.error('Order update error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
