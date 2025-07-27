'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Twitter, Youtube, Mail, MapPin, Phone, Sparkles, Crown, Zap } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Sparkling Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-sparkle opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Electric Newsletter Section */}
        <div className="py-20 border-b-2 border-yellow-400 sparkle-container">
          <div className="text-center space-y-8 magnetic hover-magnetic">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-black rounded-full px-8 py-4 shadow-2xl animate-pulse-gold">
              <Crown className="w-6 h-6 animate-sparkle" />
              <span className="text-sm font-black uppercase tracking-widest">JOIN THE ELITE</span>
              <Sparkles className="w-6 h-6 animate-sparkle" />
            </div>
            
            <h3 className="text-4xl lg:text-5xl font-black font-playfair gradient-text text-glow">
              STAY IN THE LOOP
            </h3>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Get exclusive access to <span className="text-yellow-400 font-bold">limited drops</span>, 
              <span className="text-yellow-400 font-bold"> VIP discounts</span>, and 
              <span className="text-yellow-400 font-bold"> style inspiration</span> delivered straight to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email to join the movement"
                className="flex-1 form-input bg-gray-800 border-yellow-400 text-white placeholder-gray-400 font-medium"
              />
              <button type="submit" className="btn-primary magnetic text-lg px-8">
                <Zap className="w-5 h-5" />
                <span>JOIN NOW</span>
              </button>
            </form>
            
            <p className="text-xs text-gray-500 font-medium">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime. 🇳🇬
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 magnetic hover-magnetic">
            <div className="flex items-center space-x-3 mb-8">
              <div className="relative w-16 h-16">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fab90a36d11134189a68895eb56c9c1e2?format=webp&width=800"
                  alt="SNUGGLES Logo"
                  fill
                  className="object-contain brightness-0 invert animate-pulse-gold"
                />
              </div>
              <div>
                <span className="text-2xl font-black font-playfair gradient-text">SNUGGLES</span>
                <p className="text-xs text-yellow-400 font-bold tracking-widest -mt-1">
                  YOUR COMFORT HAS ARRIVED
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Express yourself boldly with our <span className="text-yellow-400 font-bold">captivating collection</span> of streetwear. 
              From Lagos to the world, we're redefining what it means to be <span className="text-yellow-400 font-bold">unforgettable</span>.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                <MapPin size={18} className="text-yellow-400" />
                <span className="font-medium">Victoria Island, Lagos, Nigeria 🇳🇬</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                <Phone size={18} className="text-yellow-400" />
                <span className="font-medium">+234 (0) 812 345 6789</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                <Mail size={18} className="text-yellow-400" />
                <span className="font-medium">hello@snuggles.ng</span>
              </div>
            </div>

            {/* Magnetic Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/snuggles" 
                className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black border border-yellow-400/50 rounded-full flex items-center justify-center text-yellow-400 hover:bg-gradient-to-br hover:from-yellow-600 hover:to-orange-600 hover:text-black transition-all duration-500 magnetic animate-pulse-gold"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com/snuggles" 
                className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black border border-yellow-400/50 rounded-full flex items-center justify-center text-yellow-400 hover:bg-gradient-to-br hover:from-yellow-600 hover:to-orange-600 hover:text-black transition-all duration-500 magnetic animate-pulse-gold"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://youtube.com/snuggles" 
                className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black border border-yellow-400/50 rounded-full flex items-center justify-center text-yellow-400 hover:bg-gradient-to-br hover:from-yellow-600 hover:to-orange-600 hover:text-black transition-all duration-500 magnetic animate-pulse-gold"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="magnetic hover-magnetic">
            <h4 className="font-black text-xl mb-6 text-yellow-400 font-playfair">SHOP</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium hover:translate-x-2 transform block">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/tshirts" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium hover:translate-x-2 transform block">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/hoodies" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium hover:translate-x-2 transform block">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium hover:translate-x-2 transform block">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-yellow-400 hover:text-orange-400 transition-colors duration-300 font-black hover:translate-x-2 transform block animate-pulse">
                  🔥 SALE
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="magnetic hover-magnetic">
            <h4 className="font-black text-xl mb-6 text-yellow-400 font-playfair">SUPPORT</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium hover:translate-x-2 transform block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium hover:translate-x-2 transform block">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium hover:translate-x-2 transform block">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium hover:translate-x-2 transform block">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium hover:translate-x-2 transform block">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="magnetic hover-magnetic">
            <h4 className="font-black text-xl mb-6 text-yellow-400 font-playfair">COMPANY</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium hover:translate-x-2 transform block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium hover:translate-x-2 transform block">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium hover:translate-x-2 transform block">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium hover:translate-x-2 transform block">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium hover:translate-x-2 transform block">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="py-8 border-t border-yellow-400/30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 magnetic hover-magnetic">
              <h4 className="text-sm font-black text-yellow-400 mb-3 uppercase tracking-wider">NIGERIAN PAYMENT METHODS</h4>
              <div className="flex space-x-3">
                <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-black px-3 py-2 rounded font-black text-sm magnetic">🏦 PAYSTACK</div>
                <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-black px-3 py-2 rounded font-black text-sm magnetic">💳 FLUTTERWAVE</div>
                <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-black px-3 py-2 rounded font-black text-sm magnetic">📱 USSD</div>
              </div>
            </div>
            
            <div className="text-center md:text-right magnetic hover-magnetic">
              <h4 className="text-sm font-black text-yellow-400 mb-3 uppercase tracking-wider">SECURE SHOPPING</h4>
              <div className="flex space-x-2">
                <div className="bg-green-600 text-white px-3 py-2 rounded text-sm font-black">🔒 SSL</div>
                <div className="bg-blue-600 text-white px-3 py-2 rounded text-sm font-black">✅ VERIFIED</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-yellow-400/30">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <div className="text-gray-400 mb-4 md:mb-0 font-medium">
              © 2024 SNUGGLES. All rights reserved. Made with <span className="text-red-500">❤️</span> in Lagos, Nigeria. 🇳🇬
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 magnetic">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 magnetic">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 magnetic">
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
