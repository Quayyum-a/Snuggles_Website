'use client'

import React from 'react'
import Link from 'next/link'
import SimpleProductCard from '@/components/SimpleProductCard'
import { FEATURED_PRODUCTS } from '@/lib/productData'

const MustHaveSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto container-padding">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-4">
            MUST-HAVE
          </h2>
          <h3 className="text-4xl lg:text-5xl font-black text-gold mb-6">
            SNUGGLES
          </h3>
          
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            The SNUGGLES pieces that curate the essentials. Carefully selected 
            for those who understand that streetwear is more than clothing—
            it's your identity statement.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Large Featured Product */}
          <div className="lg:col-span-2">
            <Link href={`/product/${FEATURED_PRODUCTS[0].id}`}>
              <div className="relative aspect-[4/3] bg-black rounded-lg overflow-hidden cursor-pointer group">
                <img
                  src={FEATURED_PRODUCTS[0].image}
                  alt={FEATURED_PRODUCTS[0].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
          </div>

          {/* Side Products */}
          <div className="space-y-8">
            {FEATURED_PRODUCTS.slice(1, 3).map((product) => (
              <SimpleProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>

        {/* Additional Products Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <h4 className="font-black text-lg mb-2">MORE TO EXPLORE</h4>
            <p className="text-sm text-gray-600">SNUGGLES COLLECTION</p>
          </div>
          
          {FEATURED_PRODUCTS.slice(1).map((product) => (
            <SimpleProductCard
              key={product.id}
              product={product}
              layout="centered"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MustHaveSection
