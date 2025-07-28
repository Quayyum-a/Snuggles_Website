'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center relative overflow-hidden pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Column */}
          <div className="space-y-8 animate-fade-in">
            
            {/* Subtle brand tagline */}
            <div className="inline-flex items-center gap-2 bg-gold/20 text-black px-6 py-3 font-medium rounded-full border-2 border-gold/30">
              <Star className="w-5 h-5 text-gold fill-current" />
              <span className="font-black text-lg tracking-wide">SNUGGLES</span>
              <span className="text-gray-700 font-semibold">STREETWEAR</span>
            </div>

            <div className="space-y-6">
              <h1 className="heading-hero text-black leading-[0.9]">
                YOUR COMFORT
                <br />
                <span className="text-gold">HAS ARRIVED</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                Authentic streetwear from Lagos to the world.
                <span className="font-black text-black text-xl"> SNUGGLES</span> creates culture,
                builds community, and celebrates the streets that raised us.
              </p>

              {/* Clean social proof */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>
                <span>Trusted by 10,000+ streetwear enthusiasts</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/shop"
                className="btn-primary-gold hover-lift inline-flex items-center gap-2 text-center"
              >
                SHOP SNUGGLES
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link 
                href="/collections"
                className="btn-secondary-black hover-lift inline-flex items-center gap-2 text-center"
              >
                VIEW COLLECTIONS
              </Link>
            </div>

            {/* Clean brand promise */}
            <div className="bg-gold/10 border-l-4 border-gold pl-6 py-4 rounded-r-lg border border-gold/20">
              <p className="text-base font-black text-black mb-1 tracking-wide">
                THE SNUGGLES PROMISE
              </p>
              <p className="text-sm text-gray-700 font-medium">
                Premium quality, authentic designs, and that perfect streetwear fit.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative animate-slide-up">
            
            {/* Main Product Showcase */}
            <div className="relative aspect-square bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl overflow-hidden group shadow-2xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F3ea37fd4c46e403298758b84e2afb0c0?format=webp&width=800"
                alt="SNUGGLES - The Kids Next Door Tee"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Clean overlay branding */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                <div className="text-white space-y-2">
                  <div className="text-sm text-gold font-black tracking-wider uppercase">
                    SNUGGLES COLLECTION
                  </div>
                  <h3 className="text-2xl font-bold">The Kids Next Door Tee</h3>
                  <p className="text-sm text-gray-300">
                    Premium cotton, authentic street culture
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-bold text-gold">₦18,000</span>
                    <span className="text-xs bg-gold text-black px-3 py-1 font-semibold rounded-full">
                      FEATURED
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black font-bold text-xs shadow-lg animate-float">
              SNG
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 p-4 rounded-xl shadow-lg">
              <div className="text-xs text-gold font-semibold mb-1">EST. 2024</div>
              <div className="font-bold text-sm text-black">SNUGGLES</div>
              <div className="text-xs text-gray-500">LAGOS, NIGERIA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-xs text-gray-400 mb-2 font-medium tracking-wider">
          DISCOVER MORE
        </div>
        <div className="w-0.5 h-8 bg-gradient-to-b from-gold to-transparent mx-auto animate-pulse"></div>
      </div>
    </section>
  )
}

export default Hero
