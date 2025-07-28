import { NextRequest } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import { db } from '@/lib/db'

export const GET = requireAdmin(async (request: NextRequest, user) => {
  try {
    // Get total counts
    const [totalProducts, totalOrders, totalCustomers] = await Promise.all([
      db.product.count({ where: { isActive: true } }),
      db.order.count(),
      db.user.count({ where: { role: 'CUSTOMER' } }),
    ])

    // Calculate total revenue from successful orders
    const revenueResult = await db.order.aggregate({
      where: { paymentStatus: 'SUCCESS' },
      _sum: { total: true }
    })
    const totalRevenue = revenueResult._sum.total || 0

    // Get recent orders
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
    })

    return Response.json({
      totalProducts,
      totalOrders,
      totalCustomers,
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
