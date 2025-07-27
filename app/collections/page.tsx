import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const collections = [
  {
    id: 'essentials',
    name: 'ESSENTIALS',
    description: 'Core pieces that define your streetwear foundation',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F3ea37fd4c46e403298758b84e2afb0c0?format=webp&width=800',
    itemCount: 12
  },
  {
    id: 'limited',
    name: 'LIMITED DROPS',
    description: 'Exclusive releases for the culture',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fbe8221afd58149f88576702979408a9b?format=webp&width=800',
    itemCount: 8
  },
  {
    id: 'vintage',
    name: 'VINTAGE VIBES',
    description: 'Nostalgic pieces with modern street appeal',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fa64f82ed3645429787f2c4364e39ddf7?format=webp&width=800',
    itemCount: 15
  },
  {
    id: 'oversized',
    name: 'OVERSIZED',
    description: 'Bold silhouettes for maximum impact',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F16062a88c37b4e3cbc71eac11783d4b2?format=webp&width=800',
    itemCount: 10
  }
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black text-black mb-6 leading-tight">
              COLLECTIONS
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Curated streetwear collections that represent different facets of the culture. 
              Each collection tells a unique story through design, quality, and authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <Link
                key={collection.id}
                href={`/shop?collection=${collection.id}`}
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100 mb-6">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {/* Collection Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <div className="text-white">
                      <h3 className="text-3xl font-black mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-gray-300 mb-4 text-lg">
                        {collection.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm uppercase tracking-wider">
                          {collection.itemCount} Items
                        </span>
                        <span className="text-sm uppercase tracking-wider group-hover:text-yellow-400 transition-colors">
                          Shop Now →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            CAN'T FIND WHAT YOU'RE LOOKING FOR?
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Browse our complete catalog or get in touch with our team for personalized recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/shop" 
              className="bg-white text-black px-8 py-4 font-medium uppercase tracking-wider hover:bg-gray-200 transition-colors"
            >
              Browse All Products
            </Link>
            <Link 
              href="/contact" 
              className="border border-white text-white px-8 py-4 font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
