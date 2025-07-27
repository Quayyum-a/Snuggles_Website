'use client'

import React, { useState } from 'react'
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { toggleCart, itemCount } = useCart()

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b-2 border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-gold via-yellow-400 to-gold rounded-none border-2 border-gold flex items-center justify-center group-hover:rotate-12 transition-all duration-300">
                <span className="text-black font-black text-lg">S</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <div className="text-2xl font-black text-white group-hover:text-gold transition-colors duration-300">
                SNUGGLES
              </div>
              <div className="text-xs text-gold font-medium tracking-widest -mt-1">
                CULTURE CO.
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="relative text-white hover:text-gold transition-colors duration-300 font-bold text-sm tracking-wide group">
              SHOP
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/drops" className="relative text-white hover:text-gold transition-colors duration-300 font-bold text-sm tracking-wide group">
              DROPS
              <div className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/about" className="relative text-white hover:text-gold transition-colors duration-300 font-bold text-sm tracking-wide group">
              CULTURE
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/contact" className="relative text-white hover:text-gold transition-colors duration-300 font-bold text-sm tracking-wide group">
              CONNECT
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></div>
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2">
            <button className="w-10 h-10 bg-black/50 border border-gold/30 rounded-none text-gold hover:bg-gold hover:text-black transition-all duration-300 flex items-center justify-center">
              <Search size={18} />
            </button>
            <button className="w-10 h-10 bg-black/50 border border-gold/30 rounded-none text-gold hover:bg-gold hover:text-black transition-all duration-300 flex items-center justify-center">
              <User size={18} />
            </button>
            <button
              onClick={toggleCart}
              className="relative w-10 h-10 bg-black/50 border border-gold/30 rounded-none text-gold hover:bg-gold hover:text-black transition-all duration-300 flex items-center justify-center"
            >
              <ShoppingBag size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-black animate-bounce">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 bg-black/50 border border-gold/30 rounded-none text-gold hover:bg-gold hover:text-black transition-all duration-300 flex items-center justify-center ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gold/20">
              <Link
                href="/shop"
                className="block px-3 py-2 text-white hover:text-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/drops"
                className="block px-3 py-2 text-white hover:text-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Limited Drops
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white hover:text-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
