'use client'

import React from 'react'
import ProductCard from './ProductCard'
import { getFeaturedProducts } from '@/lib/products'
import { ArrowRight, TrendingUp, Zap } from 'lucide-react'
import Link from 'next/link'

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts()
  const [firstProduct, ...otherProducts] = featuredProducts

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        
        {/* Nike-style Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 badge badge-new mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>TRENDING NOW</span>
          </div>
          
          <h2 className="heading-hero mb-6">
            MUST-HAVE
            <br />
            <span className="text-gold">STREETWEAR</span>
          </h2>
          
          <p className="text-body max-w-2xl mx-auto mb-8">
            The pieces that define the culture. Carefully curated for those who 
            understand that streetwear is more than clothing—it's a statement.
          </p>

          <Link 
            href="/shop" 
            className="inline-flex items-center gap-2 text-black hover:text-gold font-semibold transition-colors duration-200 group"
          >
            SHOP ALL FEATURED
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Nike-style Hero Product + Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Featured Product - Large */}
          <div className="lg:col-span-2">
            <ProductCard 
              product={firstProduct} 
              priority={true}
              layout="featured"
            />
          </div>

          {/* Side Products */}
          <div className="space-y-8">
            {otherProducts.slice(0, 2).map((product, index) => (
              <ProductCard 
                key={product.id}
                product={product} 
                priority={index < 2}
                layout="default"
              />
            ))}
          </div>
        </div>

        {/* Nike-style Grid Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-black">MORE TO EXPLORE</h3>
            <Link 
              href="/collections" 
              className="text-black hover:text-gold font-medium transition-colors duration-200"
            >
              VIEW COLLECTIONS
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 space-nike-lg">
            {otherProducts.slice(2).map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard 
                  product={product} 
                  priority={false}
                  layout="default"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Nike-style Feature Highlight */}
        <div className="bg-gray-100 p-8 lg:p-16 rounded-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 badge badge-limited">
                <Zap className="w-4 h-4" />
                <span>EXCLUSIVE ACCESS</span>
              </div>
              
              <h3 className="heading-hero">
                JOIN THE
                <br />
                <span className="text-gold">SNUGGLES FAMILY</span>
              </h3>
              
              <p className="text-body">
                Get early access to drops, exclusive colorways, and members-only pieces. 
                Join thousands of street culture enthusiasts who never miss a release.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm text-gray-600">First access to limited editions</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm text-gray-600">Exclusive member colorways</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm text-gray-600">Free shipping on all orders</span>
                </div>
              </div>

              <Link href="/signup" className="btn-primary-gold inline-flex items-center gap-2 hover-lift">
                JOIN NOW
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-black to-gray-800 rounded-none flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <div className="text-6xl font-black text-gold">5K+</div>
                  <div className="text-xl font-semibold">MEMBERS</div>
                  <div className="text-sm text-gray-300">AND GROWING</div>
                </div>
              </div>
              
              {/* Gold accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gold"></div>
            </div>
          </div>
        </div>

        {/* Nike-style Simple Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 group">
            <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto group-hover:bg-gold transition-colors duration-300">
              <span className="text-2xl text-white group-hover:text-black transition-colors duration-300">🚚</span>
            </div>
            <h4 className="font-bold text-black">FAST DELIVERY</h4>
            <p className="text-sm text-gray-600">Same-day delivery in Lagos. Express shipping nationwide.</p>
          </div>
          
          <div className="text-center space-y-4 group">
            <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto group-hover:bg-gold transition-colors duration-300">
              <span className="text-2xl text-white group-hover:text-black transition-colors duration-300">✨</span>
            </div>
            <h4 className="font-bold text-black">PREMIUM QUALITY</h4>
            <p className="text-sm text-gray-600">Carefully selected materials. Built to last and make statements.</p>
          </div>
          
          <div className="text-center space-y-4 group">
            <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto group-hover:bg-gold transition-colors duration-300">
              <span className="text-2xl text-white group-hover:text-black transition-colors duration-300">🔄</span>
            </div>
            <h4 className="font-bold text-black">EASY RETURNS</h4>
            <p className="text-sm text-gray-600">30-day hassle-free returns. Your satisfaction guaranteed.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
