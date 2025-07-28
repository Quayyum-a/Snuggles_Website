import { NextRequest } from 'next/server'
import { getAuthUser } from '@/lib/auth'
import { db } from '@/lib/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await getAuthUser(request)
  
  if (!user || user.role !== 'ADMIN') {
    return Response.json({ error: 'Admin access required' }, { status: 403 })
  }

  try {
    const product = await db.product.findUnique({
      where: { id: params.id },
      include: {
        inventory: true,
        ratings: {
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
              }
            }
          }
        },
        orderItems: {
          include: {
            order: {
              select: {
                createdAt: true,
                status: true,
              }
            }
          }
        }
      }
    })

    if (!product) {
      return Response.json({ error: 'Product not found' }, { status: 404 })
    }

    return Response.json({ product })

  } catch (error) {
    console.error('Admin product fetch error:', error)
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
    const data = await request.json()

    // Convert price to kobo if provided
    if (data.price) {
      data.price = Math.round(data.price * 100)
    }

    // Convert category to uppercase if provided
    if (data.category) {
      data.category = data.category.toUpperCase()
    }

    const product = await db.product.update({
      where: { id: params.id },
      data,
      include: {
        inventory: true
      }
    })

    return Response.json({
      product,
      message: 'Product updated successfully'
    })

  } catch (error) {
    console.error('Product update error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await getAuthUser(request)
  
  if (!user || user.role !== 'ADMIN') {
    return Response.json({ error: 'Admin access required' }, { status: 403 })
  }

  try {
    // Check if product has any orders
    const orderCount = await db.orderItem.count({
      where: { productId: params.id }
    })

    if (orderCount > 0) {
      // Don't delete, just deactivate
      await db.product.update({
        where: { id: params.id },
        data: { isActive: false }
      })

      return Response.json({
        message: 'Product deactivated (has existing orders)'
      })
    }

    // Safe to delete
    await db.product.delete({
      where: { id: params.id }
    })

    return Response.json({
      message: 'Product deleted successfully'
    })

  } catch (error) {
    console.error('Product deletion error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
