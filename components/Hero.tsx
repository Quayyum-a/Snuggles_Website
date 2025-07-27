'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Clean Badge */}
            <div className="inline-flex items-center bg-black text-white px-4 py-2 text-sm font-medium tracking-wider uppercase">
              NEW DROP
            </div>

            {/* Bold Typography */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
                <span className="block text-black">STREET</span>
                <span className="block text-gray-400">CULTURE</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Authentic streetwear for the culture. 
                <br />
                From Lagos to the world.
              </p>
            </div>

            {/* Clean CTA */}
            <div className="flex gap-4">
              <Link 
                href="/shop" 
                className="bg-black text-white px-8 py-4 font-medium uppercase tracking-wider hover:bg-gray-900 transition-colors duration-200 flex items-center gap-2"
              >
                SHOP NOW
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                href="/collections" 
                className="border border-black text-black px-8 py-4 font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-200"
              >
                COLLECTIONS
              </Link>
            </div>

            {/* Simple Stats */}
            <div className="flex gap-8 pt-8 text-sm">
              <div>
                <div className="text-2xl font-black text-black">5K+</div>
                <div className="text-gray-500 uppercase tracking-wider">CUSTOMERS</div>
              </div>
              <div>
                <div className="text-2xl font-black text-black">24H</div>
                <div className="text-gray-500 uppercase tracking-wider">DELIVERY</div>
              </div>
              <div>
                <div className="text-2xl font-black text-black">100%</div>
                <div className="text-gray-500 uppercase tracking-wider">AUTHENTIC</div>
              </div>
            </div>
          </div>

          {/* Right Content - Clean Product Showcase */}
          <div className="relative">
            {/* Main Featured Product */}
            <div className="bg-gray-50 aspect-square relative group overflow-hidden">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F3ea37fd4c46e403298758b84e2afb0c0?format=webp&width=800"
                alt="Featured Product"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              
              {/* Simple Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              
              {/* Product Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-black text-lg text-black mb-1">The Kids Next Door Tee</h3>
                <p className="text-gray-600 text-sm mb-2">Premium streetwear essential</p>
                <span className="text-xl font-black text-black">₦18,000</span>
              </div>
            </div>

            {/* Small Product Cards */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gray-100 overflow-hidden">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fbe8221afd58149f88576702979408a9b?format=webp&width=400"
                alt="Product 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gray-100 overflow-hidden">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fa64f82ed3645429787f2c4364e39ddf7?format=webp&width=400"
                alt="Product 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
