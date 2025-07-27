'use client'

import React from 'react'
import ProductCard from './ProductCard'
import { getFeaturedProducts } from '@/lib/products'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Clean Section Header */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black text-black mb-4 leading-tight">
                FEATURED
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Curated pieces that define the streets. 
                Each item tells a story of culture and authenticity.
              </p>
            </div>
            
            <Link 
              href="/shop" 
              className="hidden lg:flex items-center gap-2 text-black hover:text-gray-600 font-medium uppercase text-sm tracking-wider transition-colors group"
            >
              VIEW ALL
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard product={product} priority={index < 4} />
            </div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="lg:hidden text-center">
          <Link 
            href="/shop" 
            className="btn-primary inline-flex"
          >
            VIEW ALL PRODUCTS
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Simple Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-black text-lg text-black mb-2 uppercase tracking-wider">Fast Delivery</h3>
            <p className="text-gray-600">Express shipping across Nigeria. Same-day delivery in Lagos.</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-black text-lg text-black mb-2 uppercase tracking-wider">Premium Quality</h3>
            <p className="text-gray-600">Carefully selected materials. Built to last and make a statement.</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="font-black text-lg text-black mb-2 uppercase tracking-wider">Easy Returns</h3>
            <p className="text-gray-600">30-day hassle-free returns. Your satisfaction is our priority.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
