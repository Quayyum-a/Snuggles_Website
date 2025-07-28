import { NextRequest } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import { db } from '@/lib/db'

export const GET = requireAdmin(async (request: NextRequest, user) => {
  try {
    const { searchParams } = new URL(request.url)
    const lowStock = searchParams.get('lowStock') === 'true'
    const productId = searchParams.get('productId')

    let where: any = {}
    
    if (lowStock) {
      where.quantity = { lte: 5 } // Consider 5 or less as low stock
    }
    
    if (productId) {
      where.productId = productId
    }

    const inventory = await db.productInventory.findMany({
      where,
      include: {
        product: {
          select: {
            name: true,
            images: true,
            category: true,
            price: true,
            isActive: true,
          }
        }
      },
      orderBy: [
        { quantity: 'asc' }, // Show low stock first
        { productId: 'asc' },
        { size: 'asc' },
        { color: 'asc' }
      ]
    })

    return Response.json({ inventory })

  } catch (error) {
    console.error('Inventory fetch error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
})

export const PUT = requireAdmin(async (request: NextRequest, user) => {
  try {
    const { inventoryUpdates } = await request.json()

    if (!Array.isArray(inventoryUpdates)) {
      return Response.json(
        { error: 'inventoryUpdates must be an array' },
        { status: 400 }
      )
    }

    // Update inventory in batch
    const updatePromises = inventoryUpdates.map((update: any) => 
      db.productInventory.update({
        where: {
          productId_size_color: {
            productId: update.productId,
            size: update.size,
            color: update.color,
          }
        },
        data: {
          quantity: update.quantity
        }
      })
    )

    await Promise.all(updatePromises)

    return Response.json({
      message: 'Inventory updated successfully'
    })

  } catch (error) {
    console.error('Inventory update error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
})
