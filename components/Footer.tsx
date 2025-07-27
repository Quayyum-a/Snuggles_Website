'use client'

import React from 'react'
import Link from 'next/link'
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
                <span className="text-gold font-bold">S</span>
              </div>
              <span className="text-2xl font-bold brand-text">SNUGGLES</span>
            </div>
            <p className="text-muted text-lg mb-6 max-w-md">
              Your Comfort Has Arrived. Premium streetwear from Lagos to the world. 
              We don't sell clothes. We sell attitude. Energy. Community.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/snuggles" 
                className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com/snuggles" 
                className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://youtube.com/snuggles" 
                className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="mailto:hello@snuggles.com" 
                className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop/tshirts" className="text-muted hover:text-gold transition-colors duration-300">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/shop/hoodies" className="text-muted hover:text-gold transition-colors duration-300">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link href="/drops" className="text-muted hover:text-gold transition-colors duration-300">
                  Limited Drops
                </Link>
              </li>
              <li>
                <Link href="/shop/new" className="text-muted hover:text-gold transition-colors duration-300">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted hover:text-gold transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-gold transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted hover:text-gold transition-colors duration-300">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted hover:text-gold transition-colors duration-300">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gold/20 pt-12 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white font-semibold text-xl mb-4">Join The Crew</h3>
            <p className="text-muted mb-6">
              Get early access to drops, exclusive content, and street culture updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-black/50 border border-gold/30 rounded-l px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-gold"
              />
              <button className="bg-gold text-black font-semibold px-6 py-3 rounded-r hover:bg-gold-light transition-colors duration-300">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-muted text-sm mb-4 md:mb-0">
              © 2024 SNUGGLES. All rights reserved. Born in Lagos, Worn Everywhere.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted hover:text-gold transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted hover:text-gold transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/size-guide" className="text-muted hover:text-gold transition-colors duration-300">
                Size Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
