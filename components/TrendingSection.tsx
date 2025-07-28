'use client'

import React from 'react'
import Link from 'next/link'

const TrendingSection = () => {
  const trendingProducts = [
    {
      id: 'peace-of-mind-tee',
      name: 'Peace of Mind',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fbe8221afd58149f88576702979408a9b?format=webp&width=800'
    },
    {
      id: 'snuggles-rainbow-hoodie',
      name: 'SNUGGLES Hoodie',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fa64f82ed3645429787f2c4364e39ddf7?format=webp&width=800'
    },
    {
      id: 'pandit-psychedelic-tee',
      name: 'PANDIT Psychedelic',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F16062a88c37b4e3cbc71eac11783d4b2?format=webp&width=800'
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto container-padding">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-4">
            TRENDING
          </h2>
          <h3 className="text-4xl lg:text-5xl font-black text-gold mb-6">
            SNUGGLES
          </h3>
          
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            The SNUGGLES products are purposefully nostalgic. Streetwear that speaks your 
            language—with comfort that feels like you've been waiting for it your entire life.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {trendingProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square bg-white overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/shop"
            className="border-2 border-black text-black px-8 py-3 font-bold text-sm tracking-wider hover:bg-black hover:text-white transition-colors"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TrendingSection
