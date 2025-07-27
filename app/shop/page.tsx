'use client'

import React, { useState } from 'react'
import { Filter, Grid, List } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

export default function ShopPage() {
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true
    return product.category === filter
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="brand-text">Shop</span>
              <span className="text-white"> Collection</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Discover our complete range of premium streetwear. Each piece crafted for comfort, style, and street credibility.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter size={20} className="text-gold" />
                <span className="text-white font-medium">Filter:</span>
              </div>
              <div className="flex space-x-2">
                {[
                  { value: 'all', label: 'All' },
                  { value: 'tshirt', label: 'T-Shirts' },
                  { value: 'hoodie', label: 'Hoodies' },
                  { value: 'limited', label: 'Limited' }
                ].map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setFilter(category.value)}
                    className={`px-4 py-2 rounded border transition-colors duration-300 ${
                      filter === category.value
                        ? 'border-gold bg-gold text-black font-semibold'
                        : 'border-gold/30 text-gold hover:border-gold'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <span className="text-white font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-black border border-gold/30 text-white px-4 py-2 rounded focus:outline-none focus:border-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted">
              Showing {sortedProducts.length} of {products.length} products
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                priority={index < 8}
              />
            ))}
          </div>

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted text-lg mb-4">No products found in this category.</p>
              <button
                onClick={() => setFilter('all')}
                className="bg-gold text-black font-semibold px-6 py-3 rounded hover:bg-gold-light transition-colors duration-300"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
