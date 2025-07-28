'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const MustHaveSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto container-padding">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-black mb-6">
            MUST-HAVE
            <br />
            <span className="text-gold">SNUGGLES</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The SNUGGLES pieces that define the culture. Carefully curated for those who understand 
            that streetwear is more than clothing—it's a statement.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Large Featured Product */}
          <div className="lg:col-span-2">
            <Link href="/product/kids-next-door-tee">
              <div className="group relative aspect-[4/3] bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F3ea37fd4c46e403298758b84e2afb0c0?format=webp&width=800"
                  alt="The Kids Next Door Tee"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-8 left-8 text-white space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm text-gold font-black tracking-wider uppercase">
                      SNUGGLES EXCLUSIVE
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black">
                      The Kids Next Door Tee
                    </h3>
                    <p className="text-white/80 max-w-md">
                      Nostalgic cartoon vibes meet streetwear culture. Premium cotton tee 
                      featuring your favorite childhood crew.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between max-w-md">
                    <span className="text-2xl font-black text-gold">₦18,000</span>
                    <div className="flex items-center gap-2 bg-gold text-black px-4 py-2 font-bold text-sm rounded-full">
                      SHOP NOW
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Side Products */}
          <div className="space-y-8">
            
            {/* Product 1 */}
            <Link href="/product/peace-of-mind-tee">
              <div className="group cursor-pointer">
                <div className="relative aspect-square bg-white rounded-xl overflow-hidden mb-4 shadow-lg">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fbe8221afd58149f88576702979408a9b?format=webp&width=800"
                    alt="Peace of Mind Tee"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Price overlay */}
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-2 rounded-full font-bold text-sm">
                    ₦17,000
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h4 className="font-bold text-black group-hover:text-gold transition-colors">
                    Peace of Mind Tee
                  </h4>
                  <p className="text-sm text-gray-600">SNUGGLES CLASSIC</p>
                </div>
              </div>
            </Link>

            {/* Product 2 */}
            <Link href="/product/pandit-psychedelic-tee">
              <div className="group cursor-pointer">
                <div className="relative aspect-square bg-white rounded-xl overflow-hidden mb-4 shadow-lg">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F16062a88c37b4e3cbc71eac11783d4b2?format=webp&width=800"
                    alt="PANDIT Psychedelic Tee"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Special badge */}
                  <div className="absolute top-4 left-4 bg-gold text-black px-3 py-2 rounded-full font-bold text-xs">
                    LIMITED DROP
                  </div>
                  
                  {/* Price overlay */}
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-2 rounded-full font-bold text-sm">
                    ₦19,500
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h4 className="font-bold text-black group-hover:text-gold transition-colors">
                    PANDIT Psychedelic Tee
                  </h4>
                  <p className="text-sm text-gray-600">SNUGGLES LIMITED</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MustHaveSection
