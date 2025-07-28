'use client'

import React, { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { Filter, Grid, List, Star } from 'lucide-react'
import { products } from '@/lib/products'

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    let filtered = [...products]

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // newest - no additional sorting needed
        break
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, sortBy])

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'tshirt', name: 'T-Shirts', count: products.filter(p => p.category === 'tshirt').length },
    { id: 'hoodie', name: 'Hoodies', count: products.filter(p => p.category === 'hoodie').length },
    { id: 'limited', name: 'Limited Edition', count: products.filter(p => p.category === 'limited').length },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with SNUGGLES branding */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6">
            
            {/* Nike-style brand header */}
            <div className="inline-flex items-center gap-2 bg-gold text-black px-4 py-2 text-sm font-bold">
              <Star className="w-4 h-4 fill-current" />
              <span>SNUGGLES COLLECTION</span>
            </div>

            <h1 className="heading-hero text-white">
              SHOP THE
              <br />
              <span className="text-gold">SNUGGLES</span>
              <br />
              EXPERIENCE
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover authentic streetwear that speaks your language. 
              Every piece in the <span className="text-gold font-semibold">SNUGGLES</span> collection 
              tells a story of street culture and premium comfort.
            </p>

            {/* Amazon-style product count */}
            <div className="text-sm text-gray-400">
              <span className="text-gold font-semibold">{products.length}</span> exclusive SNUGGLES pieces available
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto container-padding py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-gold text-black'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Sort and View Options */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600 font-medium">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>

              <div className="flex border border-gray-300">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-gold text-black' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-gold text-black' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto container-padding">
          
          {/* Section Header with SNUGGLES branding */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              {selectedCategory === 'all' ? 'ALL SNUGGLES PRODUCTS' : 
               selectedCategory === 'tshirt' ? 'SNUGGLES T-SHIRTS' :
               selectedCategory === 'hoodie' ? 'SNUGGLES HOODIES' :
               'SNUGGLES LIMITED EDITION'}
            </h2>
            <p className="text-gray-600">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="space-y-4">
                <div className="text-6xl">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900">No SNUGGLES products found</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Try adjusting your filters or check back soon for new SNUGGLES drops.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setSortBy('newest')
                  }}
                  className="btn-primary-gold"
                >
                  RESET FILTERS
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section with SNUGGLES branding */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6">
          <h2 className="text-4xl font-bold">
            CAN'T FIND WHAT YOU'RE LOOKING FOR?
          </h2>
          <p className="text-xl text-gray-300">
            Join the <span className="text-gold font-semibold">SNUGGLES</span> community 
            and be the first to know about new drops, exclusive collaborations, and limited releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary-gold">
              JOIN SNUGGLES COMMUNITY
            </button>
            <button className="btn-secondary-white">
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ShopPage
