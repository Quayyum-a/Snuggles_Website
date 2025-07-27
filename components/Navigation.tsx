'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag, Search, User, Heart } from 'lucide-react'
import Link from 'next/link'
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center font-black text-white group-hover:scale-110 transition-transform duration-300">
                S
              </div>
            </div>
            <span className="text-xl font-bold font-poppins text-gray-900">SNUGGLES</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300">
              Shop
            </Link>
            <Link href="/collections" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300">
              Collections
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              <Search size={20} />
            </button>
            
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              <Heart size={20} />
            </button>
            
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              <User size={20} />
            </button>
            
            <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-pulse-glow" suppressHydrationWarning>
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/shop"
                className="block text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/collections"
                className="block text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors duration-300"
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
