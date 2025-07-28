'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const CollectionShowcase = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-black text-white px-4 py-2 text-sm font-bold tracking-wider">
                NEW ARRIVAL
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight">
                <span className="text-gold">SNUGGLES</span>
                <br />
                COLLECTION
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Discover our latest streetwear collection. Each piece tells a story of 
                authentic culture and premium comfort that defines modern street style.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-0.5 bg-gold"></div>
                <span className="text-sm font-semibold text-black tracking-wider">PREMIUM QUALITY</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-0.5 bg-gold"></div>
                <span className="text-sm font-semibold text-black tracking-wider">AUTHENTIC DESIGNS</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-0.5 bg-gold"></div>
                <span className="text-sm font-semibold text-black tracking-wider">STREET CULTURE</span>
              </div>
            </div>

            <Link 
              href="/collections"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-bold text-sm tracking-wider hover:bg-gray-800 transition-colors group"
            >
              EXPLORE COLLECTION
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F3ea37fd4c46e403298758b84e2afb0c0?format=webp&width=800"
                alt="SNUGGLES Collection - The Kids Next Door Tee"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-gold text-black p-6 rounded-xl shadow-xl">
              <div className="text-xs font-semibold tracking-wider mb-1">BESTSELLER</div>
              <div className="font-black text-lg">₦18,000</div>
              <div className="text-xs text-gray-700">THE KIDS NEXT DOOR TEE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionShowcase
