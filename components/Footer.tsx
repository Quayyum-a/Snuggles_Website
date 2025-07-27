'use client'

import React from 'react'
import Link from 'next/link'
import { Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-800">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold font-poppins">Stay in the Loop</h3>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              Get the latest drops, exclusive offers, and style inspiration delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 form-input bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center font-black text-white">
                S
              </div>
              <span className="text-xl font-bold font-poppins">SNUGGLES</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Express yourself boldly with our unique collection of streetwear. 
              From nostalgic graphics to psychedelic art, find your perfect vibe.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={16} className="text-indigo-400" />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} className="text-indigo-400" />
                <span className="text-sm">+234 (0) 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} className="text-indigo-400" />
                <span className="text-sm">hello@snuggles.com</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white transition-colors duration-200">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/tshirts" className="text-gray-400 hover:text-white transition-colors duration-200">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/hoodies" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a 
                href="https://instagram.com/snuggles" 
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com/snuggles" 
                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://youtube.com/snuggles" 
                className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">We accept</p>
              <div className="flex space-x-2">
                <div className="bg-white text-gray-900 px-2 py-1 rounded text-xs font-medium">Visa</div>
                <div className="bg-white text-gray-900 px-2 py-1 rounded text-xs font-medium">Mastercard</div>
                <div className="bg-white text-gray-900 px-2 py-1 rounded text-xs font-medium">PayPal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              © 2024 SNUGGLES. All rights reserved. Made with ❤️ in Lagos.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors duration-200">
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
