'use client'

import React, { useState } from 'react'
import { ArrowRight, Star } from 'lucide-react'

const NewsletterSection = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-sm tracking-wider">JOIN THE FAMILY</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-black leading-tight">
                NEVER MISS
                <br />
                A <span className="text-gold">SNUGGLES</span>
                <br />
                DROP
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Be the first to know about new <span className="text-gold font-semibold">SNUGGLES</span> releases, 
                exclusive collaborations, and street culture updates.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:bg-white/20 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="bg-gold text-black px-8 py-4 font-black text-sm tracking-wider hover:bg-yellow-400 transition-colors inline-flex items-center gap-2 justify-center"
                >
                  SUBSCRIBE
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from <span className="text-gold font-medium">SNUGGLES</span>.
              </p>
            </form>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-black text-gold mb-2">5K+</div>
                <div className="text-sm text-gray-400">MEMBERS</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-black text-gold mb-2">24H</div>
                <div className="text-sm text-gray-400">EARLY ACCESS</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-black text-gold mb-2">100%</div>
                <div className="text-sm text-gray-400">EXCLUSIVE</div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center relative overflow-hidden">
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-4 h-full">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="border border-white/20"></div>
                  ))}
                </div>
              </div>
              
              {/* Main Content */}
              <div className="text-center space-y-6 relative z-10">
                <div className="text-7xl font-black text-gold">24/7</div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">STREET CULTURE</div>
                  <div className="text-sm text-gray-400 tracking-wider">NEVER STOPS</div>
                </div>
                
                <div className="inline-block bg-gold text-black px-6 py-3 font-black text-sm tracking-wider">
                  SNUGGLES LIFESTYLE
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-gold/20 rounded-full"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 bg-gold/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
