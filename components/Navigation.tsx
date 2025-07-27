'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag, Search, User, Heart, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/contexts/CartContext'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { toggleCart, itemCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'glass shadow-2xl' : 'bg-transparent'
    }`}>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black text-center py-2 text-sm font-bold animate-shimmer relative overflow-hidden">
        <div className="sparkle-container">
          FREE SHIPPING ON ORDERS OVER ₦25,000 ✨ LIMITED TIME OFFER
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group magnetic">
            <div className="relative w-16 h-16 hover-magnetic">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fab90a36d11134189a68895eb56c9c1e2?format=webp&width=800"
                alt="SNUGGLES Logo"
                fill
                className="object-contain animate-pulse-gold"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-black font-playfair gradient-text">SNUGGLES</span>
              <p className="text-xs text-yellow-400 font-medium tracking-widest -mt-1">
                YOUR COMFORT HAS ARRIVED
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="relative text-white hover:text-yellow-400 font-bold transition-all duration-300 magnetic group">
              <span className="relative z-10">SHOP</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/collections" className="relative text-white hover:text-yellow-400 font-bold transition-all duration-300 magnetic group">
              <span className="relative z-10">COLLECTIONS</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/about" className="relative text-white hover:text-yellow-400 font-bold transition-all duration-300 magnetic group">
              <span className="relative z-10">ABOUT</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/contact" className="relative text-white hover:text-yellow-400 font-bold transition-all duration-300 magnetic group">
              <span className="relative z-10">CONTACT</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-3 text-white hover:text-yellow-400 transition-all duration-300 magnetic hover-magnetic border border-transparent hover:border-yellow-400 relative overflow-hidden group">
              <Search size={20} />
              <div className="absolute inset-0 bg-yellow-400 transform scale-0 group-hover:scale-100 transition-transform duration-300 opacity-10"></div>
            </button>
            
            <button className="p-3 text-white hover:text-yellow-400 transition-all duration-300 magnetic hover-magnetic border border-transparent hover:border-yellow-400 relative overflow-hidden group">
              <Heart size={20} />
              <div className="absolute inset-0 bg-yellow-400 transform scale-0 group-hover:scale-100 transition-transform duration-300 opacity-10"></div>
            </button>
            
            <button className="p-3 text-white hover:text-yellow-400 transition-all duration-300 magnetic hover-magnetic border border-transparent hover:border-yellow-400 relative overflow-hidden group">
              <User size={20} />
              <div className="absolute inset-0 bg-yellow-400 transform scale-0 group-hover:scale-100 transition-transform duration-300 opacity-10"></div>
            </button>
            
            <button 
              onClick={toggleCart}
              className="relative p-3 text-white hover:text-yellow-400 transition-all duration-300 magnetic hover-magnetic border border-transparent hover:border-yellow-400 overflow-hidden group"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-black animate-pulse-gold" suppressHydrationWarning>
                  {itemCount}
                </span>
              )}
              <div className="absolute inset-0 bg-yellow-400 transform scale-0 group-hover:scale-100 transition-transform duration-300 opacity-10"></div>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 text-white hover:text-yellow-400 transition-all duration-300 magnetic"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-yellow-400/30 bg-black/95 backdrop-blur-md animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/shop"
                className="block text-white hover:text-yellow-400 font-bold py-3 transition-all duration-300 border-b border-yellow-400/20"
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP
              </Link>
              <Link
                href="/collections"
                className="block text-white hover:text-yellow-400 font-bold py-3 transition-all duration-300 border-b border-yellow-400/20"
                onClick={() => setIsMenuOpen(false)}
              >
                COLLECTIONS
              </Link>
              <Link
                href="/about"
                className="block text-white hover:text-yellow-400 font-bold py-3 transition-all duration-300 border-b border-yellow-400/20"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-yellow-400 font-bold py-3 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
