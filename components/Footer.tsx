'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="border-b border-gray-700 pb-12 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay in the loop</h3>
            <p className="text-gray-300 mb-6">
              Be the first to know about new collections and exclusive offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="amazon-button rounded-l-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F75e7da6b57174e41803145b7fabee2d1?format=webp&width=800"
                  alt="SNUGGLES Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-2xl font-bold">SNUGGLES</span>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Premium streetwear from Lagos to the world. Your comfort has arrived.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-gold" />
                <span className="text-gray-300">Victoria Island, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gold" />
                <span className="text-gray-300">+234 (0) 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gold" />
                <span className="text-gray-300">hello@snuggles.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/snuggles" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com/snuggles" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://youtube.com/snuggles" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-white transition-colors duration-200">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=tshirt" className="text-gray-300 hover:text-white transition-colors duration-200">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/shop?category=hoodie" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link href="/new" className="text-gray-300 hover:text-white transition-colors duration-200">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Investors
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-medium text-gray-400 mb-2">We accept</h4>
              <div className="flex space-x-4">
                <div className="bg-white text-gray-900 px-3 py-1 rounded text-sm font-medium">Paystack</div>
                <div className="bg-white text-gray-900 px-3 py-1 rounded text-sm font-medium">Stripe</div>
                <div className="bg-white text-gray-900 px-3 py-1 rounded text-sm font-medium">Bank Transfer</div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Secure Shopping</h4>
              <div className="flex space-x-2">
                <div className="bg-green-600 text-white px-2 py-1 rounded text-xs">SSL</div>
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs">256-bit</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 SNUGGLES. All rights reserved. Made in Lagos, Nigeria.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
