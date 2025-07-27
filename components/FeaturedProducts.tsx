'use client'

import React from 'react'
import ProductCard from './ProductCard'
import { getFeaturedProducts } from '@/lib/products'
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600">Trending Now</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black font-poppins mb-6">
            <span className="text-gray-900">Featured</span>
            <span className="gradient-text ml-3">Collection</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked selection of unique streetwear pieces that define your style
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard 
                product={product} 
                priority={index < 4}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card inline-block">
            <div className="text-center space-y-4">
              <Sparkles className="w-12 h-12 text-indigo-600 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900">
                Discover More Styles
              </h3>
              <p className="text-gray-600 max-w-md">
                Explore our complete collection of unique streetwear pieces
              </p>
              <Link href="/shop" className="btn-primary inline-flex">
                <span>View All Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🚚</span>
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Free Shipping</h3>
            <p className="text-gray-600">Free delivery on orders over $50</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⭐</span>
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">High-quality materials and craftsmanship</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔄</span>
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Easy Returns</h3>
            <p className="text-gray-600">30-day hassle-free return policy</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
