'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-8">
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-black tracking-tight">
              SNUGGLES
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Premium streetwear from Lagos to the world.
              <br />
              We don't just make clothes—we set culture.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/shop"
              className="bg-black text-white px-8 py-4 font-bold text-sm tracking-wider hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              SHOP SNUGGLES
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link 
              href="/collections"
              className="border-2 border-black text-black px-8 py-4 font-bold text-sm tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              EXPLORE COLLECTIONS
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
