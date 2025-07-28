'use client'

import { useEffect, useState } from 'react'
import { Plus, Edit, Eye, Trash2 } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  category: string
  featured: boolean
  isDrop: boolean
  isActive: boolean
  images: string[]
  inStock: boolean
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/admin/products', {
        credentials: 'include'
      })
      if (response.ok) {
        const data = await response.json()
        setProducts(data.products)
      }
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleProductStatus = async (productId: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/admin/products/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !isActive }),
        credentials: 'include'
      })
      
      if (response.ok) {
        fetchProducts() // Refresh products
      }
    } catch (error) {
      console.error('Failed to update product:', error)
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-display font-bold text-foreground">Product Management</h1>
        <div className="text-muted-foreground">Loading products...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-display font-bold text-foreground">Product Management</h1>
        <button className="bg-gold text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-muted/50 rounded-lg border border-muted overflow-hidden">
            <div className="relative aspect-square">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-1">
                {product.featured && (
                  <span className="bg-gold text-black text-xs px-2 py-1 rounded">Featured</span>
                )}
                {product.isDrop && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Drop</span>
                )}
                {!product.isActive && (
                  <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded">Inactive</span>
                )}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-1 truncate">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <p className="font-bold text-lg text-foreground mb-3">
                ₦{(product.price / 100).toLocaleString()}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    className="p-1 hover:bg-muted rounded"
                    title="View details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    className="p-1 hover:bg-muted rounded"
                    title="Edit product"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    className="p-1 hover:bg-muted rounded text-red-500"
                    title="Delete product"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                <button
                  onClick={() => toggleProductStatus(product.id, product.isActive)}
                  className={`text-xs px-2 py-1 rounded font-medium ${
                    product.isActive 
                      ? 'bg-green-500/20 text-green-600 hover:bg-green-500/30' 
                      : 'bg-gray-500/20 text-gray-600 hover:bg-gray-500/30'
                  }`}
                >
                  {product.isActive ? 'Active' : 'Inactive'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">No products found</div>
          <button className="bg-gold text-black px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Add Your First Product
          </button>
        </div>
      )}
    </div>
  )
}
