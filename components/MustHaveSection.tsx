'use client'

import React from 'react'
import Link from 'next/link'

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
            <Link href="/product/kids-next-door-tee">
              <div className="relative aspect-[4/3] bg-black rounded-lg overflow-hidden cursor-pointer group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F3ea37fd4c46e403298758b84e2afb0c0?format=webp&width=800"
                  alt="The Kids Next Door Tee"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
          </div>

          {/* Side Products */}
          <div className="space-y-8">
            
            {/* Product 1 */}
            <Link href="/product/peace-of-mind-tee">
              <div className="relative cursor-pointer group">
                <div className="aspect-square bg-white overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fbe8221afd58149f88576702979408a9b?format=webp&width=800"
                    alt="Peace of Mind Tee"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-2">
                  <div className="text-xs text-gray-500 group-hover:text-black transition-colors">Peace of Mind Tee</div>
                  <div className="font-bold text-sm">₦17,000</div>
                </div>
              </div>
            </Link>

            {/* Product 2 */}
            <Link href="/product/pandit-psychedelic-tee">
              <div className="relative cursor-pointer group">
                <div className="aspect-square bg-white overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F16062a88c37b4e3cbc71eac11783d4b2?format=webp&width=800"
                    alt="PANDIT Psychedelic Tee"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-2">
                  <div className="text-xs text-gray-500 group-hover:text-black transition-colors">PANDIT Psychedelic Tee</div>
                  <div className="font-bold text-sm">₦19,500</div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Additional Products Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <h4 className="font-black text-lg mb-2">MORE TO EXPLORE</h4>
            <p className="text-sm text-gray-600">SNUGGLES COLLECTION</p>
          </div>
          
          <Link href="/product/snuggles-rainbow-hoodie">
            <div className="relative cursor-pointer group">
              <div className="aspect-square bg-white overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fa64f82ed3645429787f2c4364e39ddf7?format=webp&width=800"
                  alt="SNUGGLES Hoodie"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-2 text-center">
                <div className="text-xs text-gray-500 group-hover:text-black transition-colors">SNUGGLES Hoodie</div>
                <div className="font-bold text-sm">₦32,000</div>
              </div>
            </div>
          </Link>

          <Link href="/product/peace-of-mind-tee">
            <div className="relative cursor-pointer group">
              <div className="aspect-square bg-white overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fbe8221afd58149f88576702979408a9b?format=webp&width=800"
                  alt="Peace of Mind Tee"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-2 text-center">
                <div className="text-xs text-gray-500 group-hover:text-black transition-colors">Peace of Mind Tee</div>
                <div className="font-bold text-sm">₦17,000</div>
              </div>
            </div>
          </Link>

          <Link href="/product/pandit-psychedelic-tee">
            <div className="relative cursor-pointer group">
              <div className="aspect-square bg-white overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F16062a88c37b4e3cbc71eac11783d4b2?format=webp&width=800"
                  alt="PANDIT Psychedelic Tee"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-2 text-center">
                <div className="text-xs text-gray-500 group-hover:text-black transition-colors">PANDIT Psychedelic Tee</div>
                <div className="font-bold text-sm">₦19,500</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MustHaveSection
