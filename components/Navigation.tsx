'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

const Navigation = () => {
  const { items } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fc4b7e7fb1ec948dd893e5b11fb6a7c0a?format=webp&width=200"
              alt="SNUGGLES"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-black hover:text-gray-600 font-medium uppercase text-sm tracking-wider transition-colors">
              SHOP
            </Link>
            <Link href="/collections" className="text-black hover:text-gray-600 font-medium uppercase text-sm tracking-wider transition-colors">
              COLLECTIONS
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600 font-medium uppercase text-sm tracking-wider transition-colors">
              ABOUT
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-black hover:text-gray-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-black hover:text-gray-600 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-black hover:text-gray-600 transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-4">
              <Link 
                href="/shop" 
                className="block text-black font-medium uppercase text-sm tracking-wider py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SHOP
              </Link>
              <Link 
                href="/collections" 
                className="block text-black font-medium uppercase text-sm tracking-wider py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                COLLECTIONS
              </Link>
              <Link 
                href="/about" 
                className="block text-black font-medium uppercase text-sm tracking-wider py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <button className="p-2 text-black">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 text-black">
                  <User className="w-5 h-5" />
                </button>
                <button className="p-2 text-black relative">
                  <ShoppingBag className="w-5 h-5" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                      {itemCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
