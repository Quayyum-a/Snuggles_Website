'use client'

import React from 'react'
import Link from 'next/link'

const CollectionShowcase = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-black text-white px-4 py-2 text-xs font-bold tracking-wider uppercase">
                NEW ARRIVAL
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight">
                <span className="text-gold">SNUGGLES</span>
                <br />
                COLLECTION
              </h2>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Discover our latest streetwear collection that brings 
                together authentic culture and premium comfort. Each piece 
                tells a story of modern street style.
              </p>
            </div>

            <Link 
              href="/collections"
              className="inline-block bg-black text-white px-6 py-3 font-bold text-sm tracking-wider hover:bg-gray-800 transition-colors"
            >
              SHOP NOW
            </Link>
          </div>

          {/* Image Side */}
          <Link href="/product/kids-next-door-tee">
            <div className="relative cursor-pointer group">
              <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F3ea37fd4c46e403298758b84e2afb0c0?format=webp&width=800"
                  alt="The Kids Next Door Tee"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Yellow accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold transform rotate-45"></div>

              {/* Product info */}
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="text-xs text-gray-500 mb-1">₦18,000</div>
                <div className="font-bold text-sm text-black">THE KIDS NEXT DOOR</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CollectionShowcase
