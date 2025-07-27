'use client'

import React from 'react'
import ProductCard from './ProductCard'
import { getFeaturedProducts } from '@/lib/products'
import { ArrowRight, Sparkles, Crown, Flame, Zap, Star } from 'lucide-react'
import Link from 'next/link'

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-sparkle opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Explosive Section Header */}
        <div className="text-center mb-20 sparkle-container">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-black rounded-full px-8 py-4 mb-8 shadow-2xl animate-pulse-gold magnetic">
            <Crown className="w-6 h-6 animate-sparkle" />
            <span className="text-sm font-black uppercase tracking-widest">FEATURED COLLECTION</span>
            <Flame className="w-6 h-6 animate-sparkle" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black font-playfair mb-8 leading-none">
            <span className="block text-white animate-slide-up">PIECES THAT</span>
            <span className="block gradient-text text-glow animate-slide-up" style={{ animationDelay: '0.2s' }}>COMMAND</span>
            <span className="block text-white animate-slide-up" style={{ animationDelay: '0.4s' }}>ATTENTION</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
            Curated streetwear that makes <span className="gradient-text font-bold">impossible to ignore</span>. 
            Each piece tells a story of <span className="gradient-text font-bold">bold expression</span> and 
            <span className="gradient-text font-bold"> unapologetic style</span>.
          </p>
        </div>

        {/* Magnetic Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-slide-up" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProductCard 
                product={product} 
                priority={index < 4}
              />
            </div>
          ))}
        </div>

        {/* Electric CTA Section */}
        <div className="text-center mb-20">
          <div className="card inline-block p-12 magnetic hover-magnetic sparkle-container animate-pulse-gold">
            <div className="text-center space-y-6">
              <div className="relative">
                <Sparkles className="w-16 h-16 text-yellow-400 mx-auto animate-sparkle" />
                <Zap className="absolute top-0 right-2 w-6 h-6 text-yellow-400 animate-sparkle" style={{ animationDelay: '0.5s' }} />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-black text-white font-playfair">
                Ready to <span className="gradient-text">Turn Heads?</span>
              </h3>
              
              <p className="text-gray-400 max-w-md mx-auto text-lg">
                Explore our complete collection of <span className="text-yellow-400 font-bold">jaw-dropping streetwear</span> pieces
              </p>
              
              <Link href="/shop" className="btn-primary inline-flex magnetic text-lg px-8 py-4">
                <span>EXPLORE ALL HEAT</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hypnotic Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group magnetic hover-magnetic">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gold group-hover:scale-110 transition-transform duration-500">
              <span className="text-3xl animate-sparkle">🚚</span>
            </div>
            <h3 className="font-black text-xl text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">EXPRESS DELIVERY</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Lightning-fast delivery across Nigeria. Lagos same-day delivery available.
            </p>
          </div>
          
          <div className="text-center group magnetic hover-magnetic">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gold group-hover:scale-110 transition-transform duration-500">
              <span className="text-3xl animate-sparkle">⭐</span>
            </div>
            <h3 className="font-black text-xl text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">PREMIUM QUALITY</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Only the finest materials and craftsmanship. Each piece built to last and impress.
            </p>
          </div>
          
          <div className="text-center group magnetic hover-magnetic">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gold group-hover:scale-110 transition-transform duration-500">
              <span className="text-3xl animate-sparkle">🔄</span>
            </div>
            <h3 className="font-black text-xl text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">EASY RETURNS</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              30-day hassle-free returns. Not satisfied? We'll make it right, guaranteed.
            </p>
          </div>
        </div>

        {/* Testimonial Burst */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-gray-900 to-black border border-yellow-400 magnetic hover-magnetic animate-pulse-gold">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-sparkle" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <blockquote className="text-xl font-playfair text-white mb-4 italic">
              "SNUGGLES pieces don't just make me look good, they make me <span className="gradient-text font-bold">feel unstoppable</span>!"
            </blockquote>
            <cite className="text-yellow-400 font-bold">- Kemi A., Lagos</cite>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
