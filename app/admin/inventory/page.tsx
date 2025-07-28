'use client'

import { useEffect, useState } from 'react'
import { AlertTriangle, Package, Plus, Minus, Save } from 'lucide-react'

interface InventoryItem {
  id: string
  productId: string
  size: string
  color: string
  quantity: number
  product: {
    name: string
    images: string[]
    category: string
    price: number
    isActive: boolean
  }
}

export default function InventoryManagement() {
  const [inventory, setInventory] = useState<InventoryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [showLowStock, setShowLowStock] = useState(false)
  const [pendingUpdates, setPendingUpdates] = useState<Record<string, number>>({})
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchInventory()
  }, [showLowStock])

  const fetchInventory = async () => {
    try {
      const params = new URLSearchParams()
      if (showLowStock) params.set('lowStock', 'true')
      
      const response = await fetch(`/api/admin/inventory?${params}`, {
        credentials: 'include'
      })
      if (response.ok) {
        const data = await response.json()
        setInventory(data.inventory)
      }
    } catch (error) {
      console.error('Failed to fetch inventory:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 0) return
    
    setPendingUpdates(prev => ({
      ...prev,
      [itemId]: newQuantity
    }))
  }

  const saveUpdates = async () => {
    if (Object.keys(pendingUpdates).length === 0) return

    setSaving(true)
    try {
      const inventoryUpdates = Object.entries(pendingUpdates).map(([itemId, quantity]) => {
        const item = inventory.find(inv => inv.id === itemId)
        return {
          productId: item?.productId,
          size: item?.size,
          color: item?.color,
          quantity
        }
      }).filter(update => update.productId)

      const response = await fetch('/api/admin/inventory', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inventoryUpdates }),
        credentials: 'include'
      })

      if (response.ok) {
        setPendingUpdates({})
        fetchInventory() // Refresh data
      }
    } catch (error) {
      console.error('Failed to save inventory updates:', error)
    } finally {
      setSaving(false)
    }
  }

  const getDisplayQuantity = (item: InventoryItem) => {
    return pendingUpdates[item.id] !== undefined ? pendingUpdates[item.id] : item.quantity
  }

  const getStockStatus = (quantity: number) => {
    if (quantity === 0) return { label: 'Out of Stock', color: 'text-red-500 bg-red-500/10' }
    if (quantity <= 5) return { label: 'Low Stock', color: 'text-yellow-500 bg-yellow-500/10' }
    return { label: 'In Stock', color: 'text-green-500 bg-green-500/10' }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-display font-bold text-foreground">Inventory Management</h1>
        <div className="text-muted-foreground">Loading inventory...</div>
      </div>
    )
  }

  const hasUpdates = Object.keys(pendingUpdates).length > 0

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-display font-bold text-foreground">Inventory Management</h1>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={showLowStock}
              onChange={(e) => setShowLowStock(e.target.checked)}
              className="rounded"
            />
            Show Low Stock Only
          </label>
          {hasUpdates && (
            <button
              onClick={saveUpdates}
              disabled={saving}
              className="bg-gold text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {saving ? 'Saving...' : `Save Changes (${Object.keys(pendingUpdates).length})`}
            </button>
          )}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted/50 rounded-lg p-4 border border-muted">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-blue-500" />
            <span className="font-medium">Total Items</span>
          </div>
          <p className="text-2xl font-bold mt-2">{inventory.length}</p>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-4 border border-muted">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <span className="font-medium">Low Stock</span>
          </div>
          <p className="text-2xl font-bold mt-2">
            {inventory.filter(item => getDisplayQuantity(item) <= 5 && getDisplayQuantity(item) > 0).length}
          </p>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-4 border border-muted">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-red-500" />
            <span className="font-medium">Out of Stock</span>
          </div>
          <p className="text-2xl font-bold mt-2">
            {inventory.filter(item => getDisplayQuantity(item) === 0).length}
          </p>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-muted/50 rounded-lg border border-muted overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b border-muted">
              <tr>
                <th className="text-left p-4 font-medium text-foreground">Product</th>
                <th className="text-left p-4 font-medium text-foreground">Variant</th>
                <th className="text-left p-4 font-medium text-foreground">Current Stock</th>
                <th className="text-left p-4 font-medium text-foreground">Status</th>
                <th className="text-left p-4 font-medium text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => {
                const quantity = getDisplayQuantity(item)
                const status = getStockStatus(quantity)
                const hasChanges = pendingUpdates[item.id] !== undefined
                
                return (
                  <tr key={item.id} className={`border-b border-muted last:border-b-0 ${hasChanges ? 'bg-blue-500/5' : ''}`}>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium text-foreground">{item.product.name}</p>
                          <p className="text-sm text-muted-foreground">
                            ₦{(item.product.price / 100).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{item.size}</p>
                        <p className="text-sm text-muted-foreground">{item.color}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, quantity - 1)}
                          className="p-1 hover:bg-muted rounded"
                          disabled={quantity <= 0}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className={`font-mono text-lg min-w-[3rem] text-center ${hasChanges ? 'text-blue-500 font-bold' : ''}`}>
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, quantity + 1)}
                          className="p-1 hover:bg-muted rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${status.color}`}>
                        {status.label}
                      </span>
                    </td>
                    <td className="p-4">
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                        className="w-20 px-2 py-1 text-sm border border-muted rounded bg-background text-foreground"
                        min="0"
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {inventory.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            {showLowStock ? 'No low stock items found' : 'No inventory items found'}
          </div>
        </div>
      )}
    </div>
  )
}
