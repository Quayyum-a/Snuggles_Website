'use client'

import React, { useState, useEffect } from 'react'
import { Zap, Clock, Users, Star } from 'lucide-react'
import ProductCard from './ProductCard'
import { getDropProducts } from '@/lib/products'

const DropsCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const dropProducts = getDropProducts()

  useEffect(() => {
    // Set target date to 7 days from now for demo
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gold/5 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 street-grid opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold text-black rounded-full px-6 py-2 mb-6 font-bold">
            <Zap size={16} />
            <span className="text-sm">NEXT DROP</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="brand-text">Limited</span>
            <br />
            <span className="text-white">Release</span>
          </h2>
          
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Exclusive pieces dropping soon. When they're gone, they're gone forever.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 glass-effect min-w-[80px]">
                <div className="text-3xl font-bold brand-text">{timeLeft.days}</div>
                <div className="text-xs text-muted">DAYS</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 glass-effect min-w-[80px]">
                <div className="text-3xl font-bold brand-text">{timeLeft.hours}</div>
                <div className="text-xs text-muted">HOURS</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 glass-effect min-w-[80px]">
                <div className="text-3xl font-bold brand-text">{timeLeft.minutes}</div>
                <div className="text-xs text-muted">MINS</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 glass-effect min-w-[80px]">
                <div className="text-3xl font-bold brand-text">{timeLeft.seconds}</div>
                <div className="text-xs text-muted">SECS</div>
              </div>
            </div>
          </div>

          {/* Drop Stats */}
          <div className="flex justify-center space-x-12 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock size={20} className="text-gold" />
                <span className="text-2xl font-bold text-white">48H</span>
              </div>
              <p className="text-sm text-muted">Limited Time</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users size={20} className="text-gold" />
                <span className="text-2xl font-bold text-white">100</span>
              </div>
              <p className="text-sm text-muted">Pieces Only</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Star size={20} className="text-gold" />
                <span className="text-2xl font-bold text-white">VIP</span>
              </div>
              <p className="text-sm text-muted">Early Access</p>
            </div>
          </div>
        </div>

        {/* Drop Products Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dropProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Notify Button */}
        <div className="text-center">
          <button className="bg-gold text-black font-bold text-lg px-12 py-4 rounded hover-glow hover:bg-gold-light transition-all duration-300 transform hover:scale-105">
            Notify Me on Drop
          </button>
          <p className="text-sm text-muted mt-4">
            Get exclusive early access 24 hours before public release
          </p>
        </div>
      </div>
    </section>
  )
}

export default DropsCountdown
