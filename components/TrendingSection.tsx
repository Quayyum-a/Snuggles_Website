'use client'

import React from 'react'
import Link from 'next/link'
import { Star } from 'lucide-react'

const TrendingSection = () => {
  const trendingProducts = [
    {
      id: 'peace-of-mind-tee',
      name: 'Peace of Mind Tee',
      price: 17000,
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fbe8221afd58149f88576702979408a9b?format=webp&width=800'
    },
    {
      id: 'snuggles-rainbow-hoodie',
      name: 'SNUGGLES Rainbow Hoodie',
      price: 32000,
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fa64f82ed3645429787f2c4364e39ddf7?format=webp&width=800'
    },
    {
      id: 'pandit-psychedelic-tee',
      name: 'PANDIT Psychedelic Tee',
      price: 19500,
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F16062a88c37b4e3cbc71eac11783d4b2?format=webp&width=800'
    }
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto container-padding">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-black px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 text-gold fill-current" />
            <span className="font-black text-lg tracking-wide">TRENDING</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-black mb-6">
            TRENDING
            <br />
            <span className="text-gold">SNUGGLES</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The pieces everyone's talking about. Street culture meets premium craftsmanship 
            in these must-have designs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {trendingProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="group cursor-pointer">
                <div className="relative aspect-square bg-white rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-gold text-black px-3 py-2 rounded-full font-bold text-sm">
                    ₦{(product.price / 100).toLocaleString()}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-black group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 uppercase tracking-wider">
                    SNUGGLES STREETWEAR
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/shop"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-bold text-sm tracking-wider hover:bg-gray-800 transition-colors"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TrendingSection
