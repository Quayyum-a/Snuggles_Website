'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, User, ShoppingBag, Menu, X, Heart } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

const Navigation = () => {
  const { items, openCart } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center hover-lift">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fc4b7e7fb1ec948dd893e5b11fb6a7c0a?format=webp&width=200"
              alt="SNUGGLES"
              width={140}
              height={45}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/shop" 
              className="relative text-black hover:text-gray-600 font-medium transition-colors duration-200 group"
            >
              SHOP
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/collections" 
              className="relative text-black hover:text-gray-600 font-medium transition-colors duration-200 group"
            >
              COLLECTIONS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="relative text-black hover:text-gray-600 font-medium transition-colors duration-200 group"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Special Sale Link */}
            <Link 
              href="/sale" 
              className="bg-gold text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity duration-200 hover-lift"
            >
              SALE
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-black hover:text-gold transition-colors duration-200 hover-lift">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-black hover:text-gold transition-colors duration-200 hover-lift">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-black hover:text-gold transition-colors duration-200 hover-lift">
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className="p-2 text-black hover:text-gold transition-colors duration-200 relative hover-lift"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-3">
            <button className="p-2 text-black hover:text-gold transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-black hover:text-gold transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-black text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-black hover:text-gold transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-4 border-t border-gray-200">
            <Link 
              href="/shop" 
              className="block text-black font-medium py-3 border-b border-gray-100 hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SHOP
            </Link>
            <Link 
              href="/collections" 
              className="block text-black font-medium py-3 border-b border-gray-100 hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              COLLECTIONS
            </Link>
            <Link 
              href="/about" 
              className="block text-black font-medium py-3 border-b border-gray-100 hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              href="/sale" 
              className="block bg-gold text-black font-semibold py-3 px-4 text-center hover:opacity-90 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SALE
            </Link>
            
            <div className="flex items-center justify-center space-x-6 pt-4">
              <button className="p-2 text-black hover:text-gold transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-black hover:text-gold transition-colors">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Nike-style Announcement Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        <p>
          <span className="text-gold font-semibold">FREE DELIVERY</span> on orders over ₦50,000 | 
          <span className="ml-2">Lagos same-day delivery available</span>
        </p>
      </div>
    </nav>
  )
}

export default Navigation
