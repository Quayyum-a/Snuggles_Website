'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/types'
import { ShoppingBag, Heart } from 'lucide-react'
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

  return (
    <div className="card-product group">
      <Link href={`/product/${product.id}`}>
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority={priority}
          />
          
          {/* Simple Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>

          {/* Clean Badges */}
          <div className="absolute top-3 left-3">
            {product.drop && (
              <div className="badge badge-hot">
                NEW
              </div>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
          >
            <Heart 
              className={`w-4 h-4 ${isWishlisted ? 'text-red-500 fill-current' : 'text-black'}`} 
            />
          </button>

          {/* Size Selection Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-2 mb-3">
              {product.sizes.slice(0, 4).map((size) => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setSelectedSize(size)
                  }}
                  className={`flex-1 py-1 text-xs font-medium border transition-colors ${
                    selectedSize === size 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-300 text-black hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                product.inStock
                  ? 'bg-black text-white hover:bg-gray-900'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {product.inStock ? 'ADD TO CART' : 'SOLD OUT'}
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Category */}
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
            {product.category}
          </div>
          
          {/* Product Name */}
          <h3 className="font-black text-lg text-black mb-2 group-hover:text-gray-700 transition-colors">
            {product.name}
          </h3>
          
          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="price">
              ₦{product.price.toLocaleString()}
            </span>
            
            {/* Stock Status */}
            <div className={`text-xs font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? 'IN STOCK' : 'SOLD OUT'}
            </div>
          </div>

          {/* Available Sizes Preview */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Sizes Available</div>
            <div className="flex gap-1">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="text-xs px-2 py-1 border border-gray-200 text-gray-600"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
