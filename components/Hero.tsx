'use client'

import React from 'react'
import { ArrowRight, Star, Truck, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="bg-gray-50">
      {/* Main Hero */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  {/* Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gold text-white mb-4">
                    New Collection
                  </div>

                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Your Comfort</span>{' '}
                    <span className="block text-gold xl:inline">Has Arrived</span>
                  </h1>
                  
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Premium streetwear that blends Lagos street culture with global fashion. 
                    Crafted for comfort, designed for impact.
                  </p>

                  {/* CTA Buttons */}
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        href="/shop"
                        className="nike-button flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10"
                      >
                        Shop Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        href="/new"
                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                      >
                        New Arrivals
                      </Link>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-8 grid grid-cols-3 gap-4 text-center sm:text-left">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-5 w-5 text-gold" />
                      <span className="text-sm text-gray-600">Free Shipping</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-gold" />
                      <span className="text-sm text-gray-600">Authentic</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-gold" />
                      <span className="text-sm text-gray-600">Premium Quality</span>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F8d63283de99d4fb592a98f736653490a?format=webp&width=800"
            alt="SNUGGLES Street Culture"
            width={800}
            height={600}
            priority
          />
        </div>
      </div>

      {/* Product Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our most popular streetwear pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured Product 1 */}
          <div className="group relative">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F39e25d9778c8423db7ee03df6ca707b4?format=webp&width=800"
                alt="PANDIT Psychedelic Tee"
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link href="/product/snuggles-pandit-tee">
                    <span aria-hidden="true" className="absolute inset-0" />
                    PANDIT Psychedelic Tee
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Mind-bending street art</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$65</p>
            </div>
          </div>

          {/* Featured Product 2 */}
          <div className="group relative">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F6f4925ee968d401a9f2da1cf1e7dbb55?format=webp&width=800"
                alt="Rainbow Comfort Hoodie"
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link href="/product/snuggles-rainbow-hoodie">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Rainbow Comfort Hoodie
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Premium comfort</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$95</p>
            </div>
          </div>

          {/* Featured Product 3 */}
          <div className="group relative">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F49dab3b2da1b46b48f7c4280df20127c?format=webp&width=800"
                alt="The Kids Next Door Tee"
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link href="/product/kids-next-door-tee">
                    <span aria-hidden="true" className="absolute inset-0" />
                    The Kids Next Door Tee
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Nostalgic vibes</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$55</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Stay updated with our latest drops
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
              Be the first to know about new collections, exclusive releases, and special offers.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gold hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gold"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
