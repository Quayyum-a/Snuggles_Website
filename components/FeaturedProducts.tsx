'use client'

import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { getFeaturedProducts } from '@/lib/products'
import { Flame, Crown, Sparkles, ArrowRight, Filter } from 'lucide-react'
import Link from 'next/link'

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts()
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'ALL HEAT', icon: Flame },
    { id: 'tshirt', label: 'TOPS', icon: Sparkles },
    { id: 'hoodie', label: 'HOODIES', icon: Crown }
  ]

  const filteredProducts = activeFilter === 'all'
    ? featuredProducts
    : featuredProducts.filter(p => p.category === activeFilter)

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border border-gold/50 rounded-full px-8 py-3 mb-8 backdrop-blur-sm">
            <Crown size={20} className="text-gold" />
            <span className="text-gold text-sm font-black tracking-widest">CULTURE COLLECTION</span>
            <Crown size={20} className="text-gold" />
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block text-white">PIECES THAT</span>
            <span className="block">
              <span className="text-stroke">SPEAK</span>
              <span className="text-gold ml-4">VOLUMES</span>
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every thread tells a story. Every piece carries the <span className="text-gold font-bold">soul of Lagos</span>
            and the <span className="text-gold font-bold">energy of the streets</span>. This isn't just clothing - it's cultural currency.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center space-x-2 bg-black/50 border border-gold/30 rounded-full p-2 backdrop-blur-sm">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gold text-black'
                      : 'text-gold hover:bg-gold/20'
                  }`}
                >
                  <IconComponent size={16} />
                  <span>{category.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="transform hover:scale-105 transition-all duration-500">
              <ProductCard
                product={product}
                priority={index < 4}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent text-2xl font-black mb-4">
              READY TO JOIN THE CULTURE?
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="group relative bg-gold text-black font-black text-lg px-10 py-4 rounded-none border-4 border-gold hover:bg-transparent hover:text-gold transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>EXPLORE ALL HEAT</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            <Link
              href="/drops"
              className="border-2 border-gold text-gold font-bold text-lg px-10 py-4 rounded-none hover:bg-gold hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Flame size={20} />
              <span>LIMITED DROPS</span>
            </Link>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            Free shipping on orders over ₦50,000 • Lagos same-day delivery available
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
