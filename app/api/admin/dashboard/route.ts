import { NextRequest } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import { db } from '@/lib/db'

// Export this as a runtime function to prevent static analysis during build
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export const GET = requireAdmin(async (request: NextRequest, user) => {
  try {
    // Check if database is available
    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL not configured')
      return Response.json(
        { error: 'Database configuration error' },
        { status: 500 }
      )
    }

    // Get total counts with error handling for each query
    const [totalProducts, totalOrders, totalCustomers] = await Promise.allSettled([
      db.product.count({ where: { isActive: true } }),
      db.order.count(),
      db.user.count({ where: { role: 'CUSTOMER' } }),
    ])

    // Calculate total revenue from successful orders
    const revenueResult = await db.order.aggregate({
      where: { paymentStatus: 'SUCCESS' },
      _sum: { total: true }
    }).catch(() => ({ _sum: { total: 0 } }))
    
    const totalRevenue = revenueResult._sum.total || 0

    // Get recent orders with error handling
    const recentOrders = await db.order.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        email: true,
        total: true,
        status: true,
        paymentStatus: true,
        createdAt: true,
      }
    }).catch(() => [])

    return Response.json({
      totalProducts: totalProducts.status === 'fulfilled' ? totalProducts.value : 0,
      totalOrders: totalOrders.status === 'fulfilled' ? totalOrders.value : 0,
      totalCustomers: totalCustomers.status === 'fulfilled' ? totalCustomers.value : 0,
      totalRevenue,
      recentOrders,
    })

  } catch (error) {
    console.error('Dashboard stats error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
})
