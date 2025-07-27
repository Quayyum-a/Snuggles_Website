'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/types'
import { ShoppingBag, Zap } from 'lucide-react'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  return (
    <div className="group relative product-card-hover">
      <Link href={`/product/${product.id}`}>
        <div className="bg-black/50 border border-gold/20 rounded-lg overflow-hidden glass-effect">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority={priority}
            />
            
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center">
                <ShoppingBag size={32} className="text-gold mx-auto mb-2" />
                <p className="text-white font-medium">Quick Add</p>
              </div>
            </div>

            {/* Drop Badge */}
            {product.drop && (
              <div className="absolute top-3 left-3 bg-gold text-black text-xs font-bold px-2 py-1 rounded-full flex items-center space-x-1">
                <Zap size={12} />
                <span>DROP</span>
              </div>
            )}

            {/* Featured Badge */}
            {product.featured && (
              <div className="absolute top-3 right-3 bg-black/80 text-gold text-xs font-bold px-2 py-1 rounded-full border border-gold/50">
                FEATURED
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-4">
            <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-gold transition-colors duration-300">
              {product.name}
            </h3>
            
            <p className="text-muted text-sm mb-3 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold brand-text">
                ${product.price}
              </span>
              
              <div className="flex space-x-1">
                {product.colors.slice(0, 3).map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-gold/30"
                    style={{
                      backgroundColor: color.toLowerCase() === 'gold' ? '#d4a422' : 
                                     color.toLowerCase() === 'white' ? '#ffffff' : '#000000'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-3 flex space-x-2">
              {product.sizes.slice(0, 4).map((size) => (
                <span
                  key={size}
                  className="text-xs px-2 py-1 border border-gold/30 rounded text-muted"
                >
                  {size}
                </span>
              ))}
            </div>

            {/* Stock Status */}
            <div className="mt-3 flex items-center justify-between">
              <span className={`text-xs ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                {product.inStock ? 'In Stock' : 'Sold Out'}
              </span>
              
              <span className="text-xs text-muted">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
