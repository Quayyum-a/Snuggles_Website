import { NextRequest } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')
    const drop = searchParams.get('drop')

    let where: any = {
      isActive: true
    }

    if (category) {
      where.category = category.toUpperCase()
    }

    if (featured === 'true') {
      where.featured = true
    }

    if (drop === 'true') {
      where.isDrop = true
    }

    const products = await db.product.findMany({
      where,
      include: {
        inventory: true,
        ratings: {
          select: {
            rating: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    // Calculate average ratings and stock status
    const productsWithMeta = products.map(product => {
      const ratings = product.ratings
      const averageRating = ratings.length > 0 
        ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length 
        : 0

      const totalStock = product.inventory.reduce((sum, inv) => sum + inv.quantity, 0)
      const inStock = totalStock > 0

      return {
        ...product,
        averageRating: Math.round(averageRating * 10) / 10,
        ratingCount: ratings.length,
        inStock,
        inventory: undefined, // Remove detailed inventory from public API
        ratings: undefined,
      }
    })

    return Response.json({ products: productsWithMeta })

  } catch (error) {
    console.error('Products fetch error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
