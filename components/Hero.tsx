'use client'

import React, { useEffect, useState } from 'react'
import { ArrowRight, Sparkles, Star, Zap, Crown, Flame } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Gold Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Mouse Follow Effect */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            {/* Electric Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-black rounded-full px-6 py-3 shadow-2xl animate-pulse-gold sparkle-container">
              <Zap className="w-5 h-5 animate-sparkle" />
              <span className="text-sm font-black uppercase tracking-wider">NEW COLLECTION DROP</span>
              <Fire className="w-5 h-5 animate-sparkle" />
            </div>

            {/* Explosive Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-black font-playfair leading-none">
                <span className="block text-white animate-slide-up">UNLEASH</span>
                <span className="block gradient-text text-glow animate-slide-up" style={{ animationDelay: '0.2s' }}>YOUR</span>
                <span className="block text-white animate-slide-up" style={{ animationDelay: '0.4s' }}>STYLE</span>
              </h1>
              
              <div className="relative">
                <p className="text-xl lg:text-2xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  Experience the <span className="gradient-text font-bold">ultimate fusion</span> of comfort and streetwear culture. 
                  From nostalgic graphics to mind-bending art, discover pieces that define your <span className="gradient-text font-bold">authentic self</span>.
                </p>
                
                {/* Floating Elements */}
                <Crown className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 animate-float opacity-60" />
                <Sparkles className="absolute bottom-4 -left-8 w-6 h-6 text-yellow-400 animate-sparkle" />
              </div>
            </div>

            {/* Magnetic CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <Link href="/shop" className="btn-primary magnetic group">
                <span>SHOP THE MAGIC</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link href="/about" className="btn-secondary magnetic">
                <span>OUR STORY</span>
                <Sparkles className="w-4 h-4" />
              </Link>
            </div>

            {/* Mesmerizing Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8 animate-slide-up" style={{ animationDelay: '1s' }}>
              <div className="text-center group">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-sparkle" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-sm text-gray-400 group-hover:text-yellow-400 transition-colors">2K+ Reviews</p>
              </div>
              
              <div className="h-10 w-px bg-yellow-400 opacity-50"></div>
              
              <div className="text-center group">
                <p className="text-3xl font-black gradient-text group-hover:scale-110 transition-transform">5K+</p>
                <p className="text-sm text-gray-400 group-hover:text-yellow-400 transition-colors">Happy Customers</p>
              </div>
              
              <div className="h-10 w-px bg-yellow-400 opacity-50"></div>
              
              <div className="text-center group">
                <p className="text-3xl font-black gradient-text group-hover:scale-110 transition-transform">24H</p>
                <p className="text-sm text-gray-400 group-hover:text-yellow-400 transition-colors">Express Delivery</p>
              </div>
            </div>
          </div>

          {/* Right Content - Captivating Product Showcase */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {/* Main Featured Product */}
            <div className="relative z-20 transform hover:scale-105 transition-all duration-700 magnetic">
              <div className="card-product overflow-hidden shadow-2xl animate-pulse-gold">
                <div className="relative">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F3ea37fd4c46e403298758b84e2afb0c0?format=webp&width=800"
                    alt="The Kids Next Door Tee"
                    width={500}
                    height={500}
                    className="w-full h-96 object-cover"
                    priority
                  />
                  
                  {/* Electric Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Hot Badge */}
                  <div className="absolute top-4 left-4 badge badge-hot animate-pulse-gold">
                    <Fire className="w-3 h-3" />
                    <span>HOT</span>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-gray-900 to-black">
                  <h3 className="font-black text-xl text-white mb-2">The Kids Next Door Tee</h3>
                  <p className="text-gray-400 mb-4">Nostalgic vibes, premium comfort</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black price-glow">₦18,000</span>
                    <button className="btn-primary text-sm magnetic">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Product Cards */}
            <div className="absolute -top-8 -left-8 transform -rotate-12 opacity-80 animate-float z-10">
              <div className="w-40 h-40 card-product overflow-hidden shadow-xl hover-magnetic">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fbe8221afd58149f88576702979408a9b?format=webp&width=800"
                  alt="Peace of Mind Tee"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 transform rotate-12 opacity-80 animate-float z-10" style={{ animationDelay: '1s' }}>
              <div className="w-40 h-40 card-product overflow-hidden shadow-xl hover-magnetic">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fa64f82ed3645429787f2c4364e39ddf7?format=webp&width=800"
                  alt="SNUGGLES Rainbow Hoodie"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute top-1/2 -right-12 transform rotate-6 opacity-70 animate-float z-5" style={{ animationDelay: '2s' }}>
              <div className="w-32 h-32 card-product overflow-hidden shadow-xl hover-magnetic">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F16062a88c37b4e3cbc71eac11783d4b2?format=webp&width=800"
                  alt="PANDIT Psychedelic Tee"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Glowing Aura */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl -z-10 animate-pulse-gold"></div>
            
            {/* Sparkle Effects */}
            <Sparkles className="absolute top-10 right-10 w-8 h-8 text-yellow-400 animate-sparkle" />
            <Zap className="absolute bottom-20 left-10 w-6 h-6 text-yellow-400 animate-sparkle" style={{ animationDelay: '1s' }} />
            <Crown className="absolute top-1/3 left-0 w-6 h-6 text-yellow-400 animate-sparkle" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>

      {/* Hypnotic Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-yellow-400 rounded-full flex justify-center animate-pulse-gold">
          <div className="w-1 h-4 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-yellow-400 text-xs font-bold mt-2 text-center tracking-wider">SCROLL</p>
      </div>
    </section>
  )
}

export default Hero
