'use client'

import React from 'react'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      {/* Main Hero Section - Nike Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F3ea37fd4c46e403298758b84e2afb0c0?format=webp&width=1600"
            alt="Hero Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
          {/* Nike-style Badge */}
          <div className="inline-flex items-center gap-2 badge badge-new mb-8 animate-fade-in">
            <span>NEW ARRIVALS</span>
          </div>

          {/* Hero Typography */}
          <div className="space-y-6 mb-12">
            <h1 className="heading-display animate-slide-up">
              JUST DO
              <br />
              <span className="text-gold">STREET</span>
            </h1>
            
            <p className="text-subtitle text-gray-600 max-w-2xl mx-auto animate-slide-up stagger-1">
              Authentic streetwear that moves with you. 
              From Lagos to the world, we create pieces that define the culture.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up stagger-2">
            <Link href="/shop" className="btn-primary-gold inline-flex items-center gap-2 hover-lift">
              SHOP NOW
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <button className="btn-ghost inline-flex items-center gap-2">
              <Play className="w-5 h-5" />
              WATCH STORY
            </button>
          </div>

          {/* Nike-style Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-slide-up stagger-3">
            <div className="text-center">
              <div className="text-3xl font-black text-black mb-1">5K+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">CUSTOMERS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-black mb-1">24H</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">DELIVERY</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-gold mb-1">100%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">AUTHENTIC</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Nike-style Feature Section */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Text Content */}
            <div className="flex items-center p-8 lg:p-16">
              <div className="space-y-6">
                <div className="badge badge-limited">LIMITED EDITION</div>
                
                <h2 className="heading-hero">
                  The Kids Next Door
                  <br />
                  <span className="text-gold">Collection</span>
                </h2>
                
                <p className="text-body">
                  Nostalgia meets street culture. This exclusive drop captures the essence 
                  of childhood dreams with premium streetwear execution.
                </p>
                
                <div className="flex gap-4">
                  <Link href="/product/kids-next-door-tee" className="btn-primary hover-lift">
                    SHOP COLLECTION
                  </Link>
                  <Link href="/collections" className="btn-secondary">
                    VIEW ALL
                  </Link>
                </div>

                {/* Product Details */}
                <div className="pt-6 border-t border-gray-300">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Starting from</span>
                    <span className="font-black text-2xl text-black">₦18,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative aspect-nike-hero lg:aspect-square overflow-hidden group">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F3ea37fd4c46e403298758b84e2afb0c0?format=webp&width=800"
                alt="Kids Next Door Collection"
                fill
                className="object-cover hover-scale"
              />
              
              <div className="overlay-dark"></div>
              
              {/* Gold accent corner */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-gold transform rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nike-style Product Showcase */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-hero mb-6">
              TRENDING
              <br />
              <span className="text-gold">NOW</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              The pieces everyone's talking about. Limited quantities, unlimited style.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-nike-lg">
            
            {/* Featured Product 1 */}
            <div className="card-product group">
              <div className="relative aspect-nike-product overflow-hidden">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fbe8221afd58149f88576702979408a9b?format=webp&width=600"
                  alt="Peace of Mind Tee"
                  fill
                  className="object-cover hover-scale"
                />
                
                <div className="overlay-dark"></div>
                
                <div className="overlay-content">
                  <h3 className="font-bold text-lg mb-2">Peace of Mind Tee</h3>
                  <p className="text-sm opacity-90 mb-3">Mindful streetwear</p>
                  <div className="flex justify-between items-center">
                    <span className="font-black text-xl">₦22,000</span>
                    <span className="text-gold text-sm">VIEW →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Product 2 */}
            <div className="card-product group">
              <div className="relative aspect-nike-product overflow-hidden">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fa64f82ed3645429787f2c4364e39ddf7?format=webp&width=600"
                  alt="SNUGGLES Rainbow Hoodie"
                  fill
                  className="object-cover hover-scale"
                />
                
                <div className="overlay-dark"></div>
                
                <div className="overlay-content">
                  <h3 className="font-bold text-lg mb-2">Rainbow Hoodie</h3>
                  <p className="text-sm opacity-90 mb-3">Oversized comfort</p>
                  <div className="flex justify-between items-center">
                    <span className="font-black text-xl">₦32,000</span>
                    <span className="text-gold text-sm">VIEW →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Product 3 */}
            <div className="card-product group">
              <div className="relative aspect-nike-product overflow-hidden">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F16062a88c37b4e3cbc71eac11783d4b2?format=webp&width=600"
                  alt="PANDIT Psychedelic Tee"
                  fill
                  className="object-cover hover-scale"
                />
                
                <div className="overlay-dark"></div>
                
                <div className="overlay-content">
                  <h3 className="font-bold text-lg mb-2">Psychedelic Tee</h3>
                  <p className="text-sm opacity-90 mb-3">Mind-bending design</p>
                  <div className="flex justify-between items-center">
                    <span className="font-black text-xl">₦25,000</span>
                    <span className="text-gold text-sm">VIEW →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <Link href="/shop" className="btn-secondary hover-lift">
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
