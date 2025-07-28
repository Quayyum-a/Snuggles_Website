'use client'

import React, { useState } from 'react'

const JoinFamilySection = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-black text-white px-4 py-2 text-xs font-bold tracking-wider uppercase">
                JOIN THE FAMILY
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight">
                JOIN THE
                <br />
                FAMILY
              </h2>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Get early access to SNUGGLES drops, exclusive 
                collaborations, and street culture updates. Join our 
                community of authentic streetwear enthusiasts.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Early access to new collections</li>
                <li>• Exclusive member discounts</li>
                <li>• Street culture insights</li>
                <li>• Limited edition drops</li>
              </ul>
              
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                  required
                />
                <button
                  type="submit"
                  className="bg-gold text-black px-6 py-3 font-bold text-sm hover:bg-yellow-400 transition-colors"
                >
                  JOIN US
                </button>
              </div>
            </form>
          </div>

          {/* Stats Side */}
          <div className="relative">
            <div className="aspect-square bg-black rounded-lg flex items-center justify-center">
              <div className="text-center text-white space-y-4">
                <div className="text-6xl font-black text-gold">5K+</div>
                <div className="text-lg font-bold">STREET CULTURE</div>
                <div className="text-sm text-gray-400">MEMBERS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center">
          <div className="space-y-2">
            <div className="w-16 h-16 bg-black rounded-full mx-auto flex items-center justify-center">
              <span className="text-gold font-bold text-sm">FS</span>
            </div>
            <div className="font-bold text-sm">FAST SHIPPING</div>
            <div className="text-xs text-gray-600">Same-day delivery in Lagos</div>
          </div>
          
          <div className="space-y-2">
            <div className="w-16 h-16 bg-black rounded-full mx-auto flex items-center justify-center">
              <span className="text-gold font-bold text-sm">PQ</span>
            </div>
            <div className="font-bold text-sm">PREMIUM QUALITY</div>
            <div className="text-xs text-gray-600">Authentic streetwear materials</div>
          </div>
          
          <div className="space-y-2">
            <div className="w-16 h-16 bg-black rounded-full mx-auto flex items-center justify-center">
              <span className="text-gold font-bold text-sm">SR</span>
            </div>
            <div className="font-bold text-sm">EASY RETURNS</div>
            <div className="text-xs text-gray-600">Hassle-free return policy</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinFamilySection
