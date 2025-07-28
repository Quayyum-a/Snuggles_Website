import { NextRequest } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import { db } from '@/lib/db'

export const GET = requireAdmin(async (request: NextRequest, user) => {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const active = searchParams.get('active')

    let where: any = {}
    
    if (category && category !== 'all') {
      where.category = category.toUpperCase()
    }
    
    if (active !== null) {
      where.isActive = active === 'true'
    }

    const products = await db.product.findMany({
      where,
      include: {
        inventory: {
          select: {
            quantity: true
          }
        },
        _count: {
          select: {
            orderItems: true,
            ratings: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    // Add calculated fields
    const productsWithMeta = products.map(product => {
      const totalStock = product.inventory.reduce((sum, inv) => sum + inv.quantity, 0)
      
      return {
        ...product,
        inStock: totalStock > 0,
        totalStock,
        totalSales: product._count.orderItems,
        ratingCount: product._count.ratings,
        inventory: undefined, // Remove from response
        _count: undefined,
      }
    })

    return Response.json({ products: productsWithMeta })

  } catch (error) {
    console.error('Admin products fetch error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
})

export const POST = requireAdmin(async (request: NextRequest, user) => {
  try {
    const {
      id,
      name,
      description,
      price,
      category,
      images,
      sizes,
      colors,
      featured,
      isDrop,
      inventory
    } = await request.json()

    // Create product
    const product = await db.product.create({
      data: {
        id,
        name,
        description,
        price: Math.round(price * 100), // Convert to kobo
        category: category.toUpperCase(),
        images,
        sizes,
        colors,
        featured: featured || false,
        isDrop: isDrop || false,
      }
    })

    // Create inventory entries
    if (inventory && Array.isArray(inventory)) {
      const inventoryData = inventory.map((inv: any) => ({
        productId: product.id,
        size: inv.size,
        color: inv.color,
        quantity: inv.quantity || 0,
      }))

      await db.productInventory.createMany({
        data: inventoryData
      })
    }

    return Response.json({
      product,
      message: 'Product created successfully'
    })

  } catch (error) {
    console.error('Product creation error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
})
