'use client'

import React, { useState } from 'react'
import { Filter, Grid, List, X, ChevronDown, ChevronRight, SlidersHorizontal } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 50000])
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)

  const categories = ['tshirt', 'hoodie', 'limited']
  const sizes = ['S', 'M', 'L', 'XL', 'XXL']
  const colors = ['Black', 'White', 'Gold']
  
  const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'newest', label: 'Newest' },
    { id: 'rating', label: 'Customer Rating' }
  ]

  const filteredProducts = products.filter(product => {
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false
    }
    
    // Size filter
    if (selectedSizes.length > 0 && !product.sizes.some(size => selectedSizes.includes(size))) {
      return false
    }
    
    // Color filter
    if (selectedColors.length > 0 && !product.colors.some(color => selectedColors.includes(color))) {
      return false
    }
    
    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false
    }
    
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'newest':
        return b.name.localeCompare(a.name)
      case 'rating':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const toggleFilter = (filterArray: string[], setFilter: (arr: string[]) => void, value: string) => {
    if (filterArray.includes(value)) {
      setFilter(filterArray.filter(item => item !== value))
    } else {
      setFilter([...filterArray, value])
    }
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedSizes([])
    setSelectedColors([])
    setPriceRange([0, 50000])
  }

  const activeFiltersCount = selectedCategories.length + selectedSizes.length + selectedColors.length

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-4">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="breadcrumb">
            <a href="/" className="hover:text-gold">Home</a>
            <ChevronRight size={16} />
            <span className="text-gray-900 font-medium">Shop</span>
          </nav>
        </div>

        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Shop All Products
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of premium streetwear pieces
            </p>
          </div>

          {/* Filters Toggle (Mobile) */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-md"
            >
              <SlidersHorizontal size={20} />
              <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:block ${showFilters ? 'block' : 'hidden'} space-y-6`}>
              <div className="filter-sidebar p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleFilter(selectedCategories, setSelectedCategories, category)}
                          className="h-4 w-4 text-gold border-gray-300 rounded focus:ring-gold"
                        />
                        <span className="ml-2 text-sm text-gray-700 capitalize">
                          {category === 'limited' ? 'Limited Edition' : `${category}s`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleFilter(selectedSizes, setSelectedSizes, size)}
                        className={`py-2 text-sm border rounded transition-colors duration-200 ${
                          selectedSizes.includes(size)
                            ? 'border-gray-900 bg-gray-900 text-white'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
                  <div className="space-y-2">
                    {colors.map((color) => (
                      <label key={color} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(color)}
                          onChange={() => toggleFilter(selectedColors, setSelectedColors, color)}
                          className="h-4 w-4 text-gold border-gray-300 rounded focus:ring-gold"
                        />
                        <span className="ml-2 text-sm text-gray-700">{color}</span>
                        <div
                          className="ml-auto w-4 h-4 rounded-full border border-gray-300"
                          style={{
                            backgroundColor: 
                              color.toLowerCase() === 'gold' ? '#d4a422' : 
                              color.toLowerCase() === 'white' ? '#ffffff' : '#000000'
                          }}
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Sort and View Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    {sortedProducts.length} products
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {/* View Mode Toggle */}
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${
                        viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      <Grid size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${
                        viewMode === 'list' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      <List size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {activeFiltersCount > 0 && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {selectedCategories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      <span className="capitalize">{category}</span>
                      <button
                        onClick={() => toggleFilter(selectedCategories, setSelectedCategories, category)}
                        className="ml-1 text-gray-500 hover:text-gray-700"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                  {selectedSizes.map((size) => (
                    <span
                      key={size}
                      className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      <span>Size {size}</span>
                      <button
                        onClick={() => toggleFilter(selectedSizes, setSelectedSizes, size)}
                        className="ml-1 text-gray-500 hover:text-gray-700"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                  {selectedColors.map((color) => (
                    <span
                      key={color}
                      className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      <span>{color}</span>
                      <button
                        onClick={() => toggleFilter(selectedColors, setSelectedColors, color)}
                        className="ml-1 text-gray-500 hover:text-gray-700"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {/* Products Grid */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1 sm:grid-cols-2'
              }`}>
                {sortedProducts.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    priority={index < 6}
                  />
                ))}
              </div>

              {/* Empty State */}
              {sortedProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-lg mb-4">No products found matching your filters.</p>
                  <button
                    onClick={clearAllFilters}
                    className="nike-button"
                  >
                    Clear all filters
                  </button>
                </div>
              )}

              {/* Load More */}
              {sortedProducts.length > 0 && (
                <div className="text-center mt-12">
                  <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:border-gray-400 transition-colors duration-200">
                    Load More Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
