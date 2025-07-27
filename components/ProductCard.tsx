'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/types'
import { ShoppingBag, Heart, Eye, Star, Zap, Fire, Crown, Sparkles } from 'lucide-react'
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

  const rating = 4.8
  const reviewCount = 156

  return (
    <div className="card-product group relative h-full magnetic hover-magnetic sparkle-container">
      <Link href={`/product/${product.id}`}>
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-125 transition-transform duration-1000"
            priority={priority}
          />
          
          {/* Electric Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 animate-shimmer"></div>
          </div>

          {/* Magnetic Quick Actions */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 space-y-3">
              <button className="btn-primary text-sm flex items-center space-x-2 animate-slide-up magnetic">
                <Eye className="w-4 h-4" />
                <span>QUICK VIEW</span>
              </button>
              
              <div className="flex justify-center space-x-2">
                {product.sizes.slice(0, 4).map((size) => (
                  <button
                    key={size}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setSelectedSize(size)
                    }}
                    className={`w-8 h-8 text-xs font-bold border-2 transition-all duration-300 magnetic ${
                      selectedSize === size 
                        ? 'border-yellow-400 bg-yellow-400 text-black' 
                        : 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mesmerizing Badges */}
          <div className="absolute top-3 left-3 space-y-2">
            {product.drop && (
              <div className="badge badge-hot animate-pulse-gold">
                <Fire className="w-3 h-3" />
                <span>HOT DROP</span>
              </div>
            )}
            {product.featured && (
              <div className="badge badge-primary">
                <Crown className="w-3 h-3" />
                <span>FEATURED</span>
              </div>
            )}
          </div>

          {/* Magnetic Wishlist */}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 w-10 h-10 bg-black/80 backdrop-blur-sm border border-yellow-400/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-yellow-400 hover:text-black magnetic animate-pulse-gold"
          >
            <Heart 
              className={`w-5 h-5 ${isWishlisted ? 'text-red-500 fill-current' : 'text-yellow-400'}`} 
            />
          </button>

          {/* Corner Sparkles */}
          <Sparkles className="absolute bottom-3 right-3 w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 animate-sparkle" />
        </div>

        {/* Electric Product Info */}
        <div className="p-6 bg-gradient-to-b from-gray-900 to-black">
          {/* Category Badge */}
          <div className="flex items-center justify-between mb-3">
            <span className="badge badge-secondary">
              {product.category.toUpperCase()}
            </span>
            
            {/* Rating Stars */}
            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(rating) 
                        ? 'text-yellow-400 fill-current animate-sparkle' 
                        : 'text-gray-600'
                    }`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400">({reviewCount})</span>
            </div>
          </div>
          
          {/* Product Name */}
          <h3 className="font-black text-lg text-white mb-3 group-hover:text-yellow-400 transition-colors duration-500 font-playfair">
            {product.name}
          </h3>
          
          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
            {product.description}
          </p>

          {/* Price Display */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-3xl font-black price-glow">
                ₦{product.price.toLocaleString()}
              </span>
              <p className="text-xs text-gray-500">Inclusive of VAT</p>
            </div>
            
            {/* Stock Status */}
            <div className={`text-xs font-bold ${product.inStock ? 'text-green-400' : 'text-red-400'} animate-pulse`}>
              {product.inStock ? '✓ IN STOCK' : '✗ SOLD OUT'}
            </div>
          </div>

          {/* Size Selection Preview */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Available Sizes:</p>
              <Zap className="w-3 h-3 text-yellow-400 animate-sparkle" />
            </div>
            <div className="flex space-x-1">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="text-xs px-2 py-1 border border-yellow-400/30 text-yellow-400 font-medium hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 cursor-pointer"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>

      {/* Magnetic Add to Cart Button */}
      <div className="px-6 pb-6">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-4 font-black text-sm transition-all duration-500 flex items-center justify-center space-x-3 magnetic relative overflow-hidden group/btn ${
            product.inStock
              ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-black hover:from-yellow-500 hover:to-orange-500 animate-pulse-gold'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingBag className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
          <span className="relative z-10">{product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}</span>
          
          {product.inStock && (
            <>
              <Sparkles className="w-4 h-4 group-hover/btn:animate-sparkle" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
            </>
          )}
        </button>
        
        {product.inStock && (
          <p className="text-xs text-yellow-400 text-center mt-2 font-medium animate-pulse">
            🚚 FREE DELIVERY IN LAGOS
          </p>
        )}
      </div>
    </div>
  )
}

export default ProductCard
