'use client'

import React, { useState } from 'react'
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { toggleCart, itemCount } = useCart()

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center group-hover:glow-gold transition-all duration-300">
              <span className="text-gold font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold brand-text">SNUGGLES</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-white hover:text-gold transition-colors duration-300">
              Shop
            </Link>
            <Link href="/drops" className="text-white hover:text-gold transition-colors duration-300">
              Limited Drops
            </Link>
            <Link href="/about" className="text-white hover:text-gold transition-colors duration-300">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gold transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-white hover:text-gold transition-colors duration-300">
              <Search size={20} />
            </button>
            <button className="p-2 text-white hover:text-gold transition-colors duration-300">
              <User size={20} />
            </button>
            <button
              onClick={toggleCart}
              className="p-2 text-white hover:text-gold transition-colors duration-300 relative"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:text-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
