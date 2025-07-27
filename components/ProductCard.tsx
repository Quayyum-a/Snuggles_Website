'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/types'
import { ShoppingBag, Heart, Eye, Star, Zap } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (product.inStock) {
      addItem(product, selectedSize, product.colors[0])
    }
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  const rating = 4.7
  const reviewCount = 142

  return (
    <div className="card-product group relative h-full">
      <Link href={`/product/${product.id}`}>
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            priority={priority}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <button className="btn-primary mb-3">
                <Eye className="w-4 h-4" />
                Quick View
              </button>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 space-y-2">
            {product.drop && (
              <div className="badge badge-error flex items-center space-x-1">
                <Zap className="w-3 h-3" />
                <span>Hot</span>
              </div>
            )}
            {product.featured && (
              <div className="badge badge-secondary">
                Featured
              </div>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
          >
            <Heart 
              className={`w-4 h-4 ${isWishlisted ? 'text-pink-500 fill-current' : 'text-gray-600'}`} 
            />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-5">
          {/* Category */}
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">
            {product.category}
          </p>
          
          {/* Product Name */}
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
            {product.name}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(rating) 
                      ? 'text-amber-400 fill-current' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600 ml-2">
              {rating} ({reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold gradient-text">
              ${product.price}
            </span>
            
            {/* Stock Status */}
            <span className={`text-xs font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
            </span>
          </div>

          {/* Size Selection */}
          <div className="mb-4">
            <p className="text-xs text-gray-600 mb-2">Size:</p>
            <div className="flex space-x-2">
              {product.sizes.slice(0, 4).map((size) => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setSelectedSize(size)
                  }}
                  className={`w-8 h-8 text-xs font-medium border rounded-lg transition-colors duration-200 ${
                    selectedSize === size 
                      ? 'border-indigo-600 bg-indigo-600 text-white' 
                      : 'border-gray-300 text-gray-600 hover:border-indigo-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-5 pb-5">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 ${
            product.inStock
              ? 'bg-gray-900 text-white hover:bg-indigo-600 hover:shadow-lg'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
