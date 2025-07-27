'use client'

import React from 'react'
import { ArrowDown, Zap } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden noise-bg street-grid">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gold/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-gold/20 animate-float">
        <Zap size={40} />
      </div>
      <div className="absolute bottom-32 right-16 text-gold/20 animate-float" style={{ animationDelay: '1s' }}>
        <Zap size={60} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-6 py-2 mb-8 glass-effect">
            <span className="text-gold text-sm font-medium">PREMIUM</span>
            <Zap size={16} className="text-gold" />
          </div>

          {/* Main Logo */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-gold bg-black/50 flex items-center justify-center glow-gold">
              <span className="text-4xl font-bold text-gold">S</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="brand-text">SNUGGLES</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-light mb-12">
              Your Comfort Has Arrived
            </p>
          </div>

          {/* Brand Statement */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-6">
              Street culture is everywhere. Embracing the energy of the city, we create elevated apparel with a focus on 
              <span className="text-gold italic"> comfort </span> and 
              <span className="text-gold italic"> contron</span>. From Lagos streets to global destinations, our style goes beyond boundaries.
            </p>
            <p className="text-2xl md:text-3xl font-medium text-white text-shadow-gold">
              PREMIUM STREETWEAR
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <Link 
              href="/shop"
              className="inline-block bg-gold text-black font-bold text-lg px-12 py-4 rounded hover-glow hover:bg-gold-light transition-all duration-300 transform hover:scale-105"
            >
              SNUGGLE UP
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown size={32} className="text-gold mx-auto" />
          </div>
        </div>
      </div>

      {/* Born in Lagos Section */}
      <div className="absolute bottom-0 left-0 right-0 p-8 glass-effect">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="brand-text">Born in Lagos.</span>
              <br />
              <span className="text-white">Worn</span>
              <br />
              <span className="text-white">Everywhere.</span>
            </h2>
          </div>
          <div className="hidden md:block flex-1">
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-6 backdrop-blur-sm">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F8d63283de99d4fb592a98f736653490a?format=webp&width=800"
                alt="Street culture lifestyle"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4 p-4 bg-black/50 rounded">
                <p className="text-sm text-gold font-medium mb-2">BORN IN LAGOS</p>
                <p className="text-white text-sm">Premium streetwear meets Lagos energy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
