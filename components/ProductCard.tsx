'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/types'
import { ShoppingBag, Star, Heart, Eye } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { getProductRating } from '@/lib/productRatings'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (product.inStock) {
      addItem(product, selectedSize, selectedColor)
    }
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  // Get static rating to prevent hydration mismatch
  const { rating, reviewCount } = getProductRating(product.id)

  return (
    <div className="product-card group relative p-4 h-full flex flex-col">
      <Link href={`/product/${product.id}`} className="flex-1">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority={priority}
          />
          
          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <Heart 
              size={16} 
              className={`${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
            />
          </button>

          {/* Sale Badge */}
          {product.drop && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              LIMITED
            </div>
          )}

          {/* Quick View */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium flex items-center space-x-2 hover:bg-gray-100">
              <Eye size={16} />
              <span>Quick View</span>
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col">
          {/* Brand & Category */}
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            SNUGGLES • {product.category}
          </p>
          
          {/* Product Name */}
          <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 flex-1">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={`${
                    i < Math.floor(rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600 ml-1">
              {rating.toFixed(1)} ({reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="mb-3">
            <span className="price-display">${product.price}</span>
            {product.drop && (
              <span className="original-price ml-2">${(product.price * 1.2).toFixed(0)}</span>
            )}
          </div>

          {/* Color Options */}
          <div className="mb-3">
            <p className="text-xs text-gray-600 mb-1">Colors:</p>
            <div className="flex space-x-1">
              {product.colors.slice(0, 4).map((color, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setSelectedColor(color)
                  }}
                  className={`w-4 h-4 rounded-full border-2 ${
                    selectedColor === color ? 'border-gray-900' : 'border-gray-300'
                  }`}
                  style={{
                    backgroundColor: 
                      color.toLowerCase() === 'gold' ? '#d4a422' : 
                      color.toLowerCase() === 'white' ? '#ffffff' : '#000000'
                  }}
                  title={color}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
              )}
            </div>
          </div>

          {/* Size Options */}
          <div className="mb-4">
            <p className="text-xs text-gray-600 mb-1">Sizes:</p>
            <div className="flex space-x-1">
              {product.sizes.slice(0, 4).map((size) => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setSelectedSize(size)
                  }}
                  className={`text-xs px-2 py-1 border rounded ${
                    selectedSize === size 
                      ? 'border-gray-900 bg-gray-900 text-white' 
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Stock Status */}
          <div className="mb-3">
            <span className={`text-xs ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
            </span>
            {product.inStock && (
              <span className="text-xs text-gray-500 ml-2">
                • Fast delivery available
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={!product.inStock}
        className={`w-full mt-auto py-2 px-4 rounded-md font-medium text-sm transition-colors duration-200 flex items-center justify-center space-x-2 ${
          product.inStock
            ? 'amazon-button hover:amazon-button'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        <ShoppingBag size={16} />
        <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
      </button>

      {/* Prime Shipping */}
      {product.inStock && (
        <p className="text-xs text-blue-600 mt-2 text-center">
          🚚 FREE delivery in Lagos
        </p>
      )}
    </div>
  )
}

export default ProductCard
