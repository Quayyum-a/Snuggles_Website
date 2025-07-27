'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <footer className="bg-black text-white">
      
      {/* Nike-style Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto container-padding section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="heading-hero text-white">
                  NEVER MISS
                  <br />
                  <span className="text-gold">A DROP</span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Be the first to know about new releases, exclusive collaborations, 
                  and street culture updates. Join the SNUGGLES family.
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 form-input bg-transparent border-gray-600 text-white placeholder-gray-400 focus:border-gold"
                    required
                  />
                  <button
                    type="submit"
                    className="btn-primary-gold hover-lift inline-flex items-center gap-2"
                  >
                    SUBSCRIBE
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from SNUGGLES.
                </p>
              </form>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-black text-gold">24/7</div>
                  <div className="text-lg font-semibold text-white">STREET CULTURE</div>
                  <div className="text-sm text-gray-400">NEVER STOPS</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F305ba234b92148049f51344426bbddcb?format=webp&width=800"
              alt="SNUGGLES - Your Comfort Has Arrived"
              width={160}
              height={160}
              className="h-16 w-auto"
            />
            
            <p className="text-gray-400 max-w-md leading-relaxed">
              Authentic streetwear from Lagos to the world. We don't just make clothes—
              we create culture, build community, and celebrate the streets that raised us.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-gold" />
                <span className="text-sm">hello@snuggles.ng</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-sm">+234 (0) 800 SNUGGLES</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-gold hover:text-black transition-colors duration-200 flex items-center justify-center group"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-gold hover:text-black transition-colors duration-200 flex items-center justify-center group"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-gold hover:text-black transition-colors duration-200 flex items-center justify-center group"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">SHOP</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-gold transition-colors duration-200">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-gray-400 hover:text-gold transition-colors duration-200">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/shop?category=tees" className="text-gray-400 hover:text-gold transition-colors duration-200">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/shop?category=hoodies" className="text-gray-400 hover:text-gold transition-colors duration-200">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-gold hover:text-yellow-400 transition-colors duration-200 font-semibold">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">SUPPORT</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-gold transition-colors duration-200">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-gold transition-colors duration-200">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-400 hover:text-gold transition-colors duration-200">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto container-padding py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
              <span>© 2024 SNUGGLES. All rights reserved.</span>
              <div className="flex space-x-6">
                <Link href="/privacy" className="hover:text-gold transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-gold transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Made with ❤️ in Lagos</span>
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span className="text-gold font-semibold">STREET CULTURE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
