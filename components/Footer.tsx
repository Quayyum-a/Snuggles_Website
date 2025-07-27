'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto container-padding">
        
        {/* Newsletter Section */}
        <div className="section-padding border-b border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl lg:text-4xl font-black mb-4">
              STAY IN THE LOOP
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Get first access to new drops, exclusive releases, and street culture updates.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 font-medium uppercase tracking-wider hover:bg-gray-200 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand */}
            <div className="md:col-span-2">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fc4b7e7fb1ec948dd893e5b11fb6a7c0a?format=webp&width=200"
                alt="SNUGGLES"
                width={150}
                height={50}
                className="h-10 w-auto mb-6"
              />
              <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
                Authentic streetwear from Lagos to the world. 
                We represent the culture, the streets, and the people who make it real.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-black text-white mb-6 uppercase tracking-wider">Shop</h4>
              <ul className="space-y-3">
                <li><Link href="/shop" className="text-gray-400 hover:text-white transition-colors">All Products</Link></li>
                <li><Link href="/collections" className="text-gray-400 hover:text-white transition-colors">Collections</Link></li>
                <li><Link href="/shop?category=tees" className="text-gray-400 hover:text-white transition-colors">T-Shirts</Link></li>
                <li><Link href="/shop?category=hoodies" className="text-gray-400 hover:text-white transition-colors">Hoodies</Link></li>
                <li><Link href="/shop?category=accessories" className="text-gray-400 hover:text-white transition-colors">Accessories</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-black text-white mb-6 uppercase tracking-wider">Support</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping Info</Link></li>
                <li><Link href="/returns" className="text-gray-400 hover:text-white transition-colors">Returns</Link></li>
                <li><Link href="/size-guide" className="text-gray-400 hover:text-white transition-colors">Size Guide</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 SNUGGLES. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
