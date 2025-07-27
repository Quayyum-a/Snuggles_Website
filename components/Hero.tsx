'use client'

import React, { useState, useEffect } from 'react'
import { ArrowDown, Play, Volume2, VolumeX, Sparkles, Flame } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const slogans = [
    "WE DON'T SELL CLOTHES",
    "WE SELL ATTITUDE",
    "WE SELL ENERGY",
    "WE SELL COMMUNITY"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#d4a422_0%,transparent_50%)] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,#d4a422_0%,transparent_50%)] opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(212,164,34,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,164,34,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Video Background Overlay */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center space-x-2 bg-black/80 border border-gold/30 rounded-full px-4 py-2 backdrop-blur-sm hover:border-gold transition-all duration-300"
        >
          {isPlaying ? <VolumeX size={16} className="text-gold" /> : <Volume2 size={16} className="text-gold" />}
          <span className="text-gold text-sm font-medium">VIBE</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Brand Statement */}
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold/20 to-gold/10 border border-gold/50 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
                <Sparkles size={16} className="text-gold" />
                <span className="text-gold text-sm font-bold tracking-wide">LAGOS BORN • GLOBALLY WORN</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
                <span className="block text-white">STREET</span>
                <span className="block bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent animate-pulse">
                  CULTURE
                </span>
                <span className="block text-white">REDEFINED</span>
              </h1>

              {/* Dynamic Slogan */}
              <div className="h-16 mb-8">
                <p className="text-2xl md:text-3xl font-bold text-gold transition-all duration-500">
                  {slogans[currentSlogan]}
                </p>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                From the vibrant streets of <span className="text-gold font-semibold">Lagos</span> to global fashion capitals.
                We craft premium streetwear that speaks the language of <span className="text-gold font-semibold">rebellion</span>,
                <span className="text-gold font-semibold"> comfort</span>, and <span className="text-gold font-semibold">authenticity</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/shop"
                  className="group relative bg-gold text-black font-black text-lg px-8 py-4 rounded-none border-4 border-gold hover:bg-transparent hover:text-gold transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>SHOP THE CULTURE</span>
                    <Flame size={20} className="group-hover:animate-bounce" />
                  </span>
                  <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>

                <Link
                  href="/drops"
                  className="group border-2 border-gold text-gold font-bold text-lg px-8 py-4 rounded-none hover:bg-gold hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  <span>WATCH DROPS</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-black text-gold">100K+</div>
                  <div className="text-sm text-gray-400">COMMUNITY</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-gold">50+</div>
                  <div className="text-sm text-gray-400">DROPS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-gold">24/7</div>
                  <div className="text-sm text-gray-400">STREET MODE</div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Hero */}
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-gold/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl overflow-hidden border-2 border-gold/30 group-hover:border-gold/60 transition-all duration-500">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F8d63283de99d4fb592a98f736653490a?format=webp&width=800"
                    alt="Lagos Street Culture"
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gold font-bold text-sm mb-1">BORN IN LAGOS</div>
                        <div className="text-white font-bold text-lg">Premium Street Energy</div>
                      </div>
                      <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                        <Play size={20} className="text-black ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Brand Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center font-black text-black text-xl animate-spin-slow">
                S
              </div>

              <div className="absolute -bottom-4 -left-4 bg-black border-2 border-gold rounded-lg p-4 backdrop-blur-sm">
                <div className="text-gold font-bold text-sm">EST. 2024</div>
                <div className="text-white font-bold">LAGOS, NG</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-gold text-xs font-medium">SCROLL</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
