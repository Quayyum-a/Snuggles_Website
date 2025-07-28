import { NextRequest } from 'next/server'
import { db } from '@/lib/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
          },
          orderBy: { createdAt: 'desc' }
        }
      }
    })

    if (!product || !product.isActive) {
      return Response.json({ error: 'Product not found' }, { status: 404 })
    }

    // Calculate average rating
    const ratings = product.ratings
    const averageRating = ratings.length > 0 
      ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length 
      : 0

    // Group inventory by size and color
    const availability = product.inventory.reduce((acc, inv) => {
      const key = `${inv.size}-${inv.color}`
      acc[key] = {
        size: inv.size,
        color: inv.color,
        quantity: inv.quantity,
        inStock: inv.quantity > 0
      }
      return acc
    }, {} as Record<string, any>)

    const productWithMeta = {
      ...product,
      averageRating: Math.round(averageRating * 10) / 10,
      ratingCount: ratings.length,
      availability: Object.values(availability),
      inventory: undefined, // Remove detailed inventory
    }

    return Response.json({ product: productWithMeta })

  } catch (error) {
    console.error('Product fetch error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
