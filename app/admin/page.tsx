'use client'

import { useEffect, useState } from 'react'
import { Package, ShoppingCart, Users, TrendingUp } from 'lucide-react'

interface DashboardStats {
  totalProducts: number
  totalOrders: number
  totalCustomers: number
  totalRevenue: number
  recentOrders: any[]
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardStats()
  }, [])

  const fetchDashboardStats = async () => {
    try {
      const response = await fetch('/api/admin/dashboard', {
        credentials: 'include'
      })
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Failed to fetch dashboard stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-display font-bold text-foreground">Dashboard Overview</h1>
        <div className="text-muted-foreground">Loading dashboard data...</div>
      </div>
    )
  }

  const statCards = [
    {
      title: 'Total Products',
      value: stats?.totalProducts || 0,
      icon: Package,
      color: 'text-blue-500',
    },
    {
      title: 'Total Orders',
      value: stats?.totalOrders || 0,
      icon: ShoppingCart,
      color: 'text-green-500',
    },
    {
      title: 'Customers',
      value: stats?.totalCustomers || 0,
      icon: Users,
      color: 'text-purple-500',
    },
    {
      title: 'Revenue',
      value: `₦${((stats?.totalRevenue || 0) / 100).toLocaleString()}`,
      icon: TrendingUp,
      color: 'text-gold-500',
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-display font-bold text-foreground">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.title} className="bg-muted/50 rounded-lg p-6 border border-muted">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Orders */}
      <div className="bg-muted/50 rounded-lg border border-muted">
        <div className="p-6 border-b border-muted">
          <h2 className="text-lg font-semibold text-foreground">Recent Orders</h2>
        </div>
        <div className="p-6">
          {stats?.recentOrders?.length ? (
            <div className="space-y-4">
              {stats.recentOrders.map((order: any) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Order #{order.id.slice(-8)}</p>
                    <p className="text-sm text-muted-foreground">{order.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">₦{(order.total / 100).toLocaleString()}</p>
                    <p className={`text-sm ${
                      order.status === 'CONFIRMED' ? 'text-green-500' :
                      order.status === 'PENDING' ? 'text-yellow-500' :
                      order.status === 'SHIPPED' ? 'text-blue-500' :
                      'text-muted-foreground'
                    }`}>
                      {order.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-8">
              No recent orders found
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
