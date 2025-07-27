'use client'

import React, { useState } from 'react'
import { Menu, X, ShoppingBag, Search, User, Heart, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/contexts/CartContext'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { toggleCart, itemCount } = useCart()

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gray-900 text-white text-center py-2 text-sm">
        Free shipping on orders over ₦50,000 | Same-day delivery in Lagos
      </div>
      
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-12 h-12">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F75e7da6b57174e41803145b7fabee2d1?format=webp&width=800"
                  alt="SNUGGLES Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">SNUGGLES</span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full search-bar pl-10 pr-4"
                />
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/shop" className="text-gray-700 hover:text-gray-900 font-medium">
                Shop
              </Link>
              <Link href="/new" className="text-gray-700 hover:text-gray-900 font-medium">
                New Arrivals
              </Link>
              <Link href="/men" className="text-gray-700 hover:text-gray-900 font-medium">
                Men
              </Link>
              <Link href="/women" className="text-gray-700 hover:text-gray-900 font-medium">
                Women
              </Link>
              <Link href="/sale" className="text-red-600 hover:text-red-700 font-medium">
                Sale
              </Link>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Location */}
              <div className="hidden md:flex items-center space-x-1 text-sm text-gray-600">
                <MapPin size={16} />
                <span>Lagos, NG</span>
              </div>
              
              {/* Search - Mobile */}
              <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
                <Search size={20} />
              </button>
              
              {/* Wishlist */}
              <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                <Heart size={20} />
              </button>
              
              {/* Account */}
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <User size={20} />
              </button>
              
              {/* Cart */}
              <button 
                onClick={toggleCart}
                className="p-2 text-gray-600 hover:text-gray-900 relative"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full search-bar pl-10 pr-4"
              />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/shop"
                className="block text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop All
              </Link>
              <Link
                href="/new"
                className="block text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                New Arrivals
              </Link>
              <Link
                href="/men"
                className="block text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                href="/women"
                className="block text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                href="/sale"
                className="block text-red-600 hover:text-red-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sale
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navigation
