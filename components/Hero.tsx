'use client'

import React from 'react'
import { ArrowRight, Sparkles, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-indigo-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-pink-400 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-amber-400 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-float opacity-60" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full px-4 py-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-600">New Collection Drop</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black font-poppins leading-tight">
                <span className="block text-gray-900">Express</span>
                <span className="block gradient-text">Yourself</span>
                <span className="block text-gray-900">Boldly</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Discover unique streetwear that speaks your language. From nostalgic graphics to psychedelic art, 
                find your perfect vibe.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/shop" className="btn-primary">
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link href="/about" className="btn-secondary">
                <span>Our Story</span>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">500+ Reviews</p>
              </div>
              
              <div className="h-8 w-px bg-gray-300"></div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">1K+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              
              <div className="h-8 w-px bg-gray-300"></div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">24h</p>
                <p className="text-sm text-gray-600">Fast Shipping</p>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            {/* Main Product */}
            <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="card-product overflow-hidden shadow-2xl">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F3ea37fd4c46e403298758b84e2afb0c0?format=webp&width=800"
                  alt="The Kids Next Door Tee"
                  width={400}
                  height={400}
                  className="w-full h-96 object-cover"
                  priority
                />
                <div className="p-6 bg-white">
                  <h3 className="font-bold text-lg text-gray-900">The Kids Next Door Tee</h3>
                  <p className="text-gray-600">Nostalgic vibes, premium comfort</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold gradient-text">$45</span>
                    <button className="btn-primary text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Product Cards */}
            <div className="absolute -top-4 -left-4 transform -rotate-12 opacity-90 animate-float">
              <div className="w-32 h-32 card-product overflow-hidden shadow-lg">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fbe8221afd58149f88576702979408a9b?format=webp&width=800"
                  alt="Peace of Mind Tee"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 transform rotate-12 opacity-90 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-32 h-32 card-product overflow-hidden shadow-lg">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fa64f82ed3645429787f2c4364e39ddf7?format=webp&width=800"
                  alt="SNUGGLES Rainbow Hoodie"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
