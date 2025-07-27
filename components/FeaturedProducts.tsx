'use client'

import React from 'react'
import ProductCard from './ProductCard'
import { getFeaturedProducts } from '@/lib/products'
import { Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="py-20 bg-black/50 noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-6 py-2 mb-6">
            <Zap size={16} className="text-gold" />
            <span className="text-gold text-sm font-medium">FEATURED COLLECTION</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Essential</span>
            <br />
            <span className="brand-text">Street Pieces</span>
          </h2>
          
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Curated pieces that define the culture. Each item tells a story of Lagos streets meets global fashion.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              priority={index < 4}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link 
            href="/shop"
            className="inline-flex items-center space-x-2 bg-transparent border-2 border-gold text-gold font-semibold px-8 py-3 rounded hover:bg-gold hover:text-black transition-all duration-300 group"
          >
            <span>View All Products</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
