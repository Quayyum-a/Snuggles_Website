'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/types'
import { ShoppingBag, Heart, Plus } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

interface ProductCardProps {
  product: Product
  priority?: boolean
  layout?: 'default' | 'featured' | 'minimal'
  viewMode?: 'grid' | 'list'
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  priority = false,
  layout = 'default',
  viewMode = 'grid'
}) => {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

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

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (product.inStock) {
      addItem(product, selectedSize, product.colors[0])
    }
  }

  if (layout === 'featured') {
    return (
      <div className="card-nike group cursor-pointer">
        <Link href={`/product/${product.id}`}>
          <div className="relative aspect-nike-card overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover transition-all duration-700 ${imageLoaded ? 'scale-100' : 'scale-105'} group-hover:scale-105`}
              priority={priority}
              onLoad={() => setImageLoaded(true)}
            />
            
            <div className="overlay-dark"></div>
            
            {/* Nike-style Badges */}
            <div className="absolute top-4 left-4 space-y-2">
              {product.drop && (
                <div className="badge badge-new">
                  NEW
                </div>
              )}
              {!product.inStock && (
                <div className="badge badge-hot">
                  SOLD OUT
                </div>
              )}
            </div>

            {/* Wishlist */}
            <button
              onClick={handleWishlist}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white"
            >
              <Heart 
                className={`w-5 h-5 transition-colors ${isWishlisted ? 'text-red-500 fill-current' : 'text-black'}`} 
              />
            </button>

            {/* Nike-style Overlay Content */}
            <div className="overlay-content">
              <div className="space-y-3">
                <h3 className="font-bold text-xl text-white">{product.name}</h3>
                <p className="text-white/80">{product.category}</p>
                
                {/* Sizes */}
                <div className="flex gap-2">
                  {product.sizes.slice(0, 4).map((size) => (
                    <button
                      key={size}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setSelectedSize(size)
                      }}
                      className={`w-8 h-8 text-xs font-bold transition-all duration-200 ${
                        selectedSize === size 
                          ? 'bg-gold text-black' 
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-white">
                    ₦{product.price.toLocaleString()}
                  </span>
                  
                  {product.inStock && (
                    <button
                      onClick={handleQuickAdd}
                      className="bg-gold text-black px-6 py-2 font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      ADD
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div className="card-nike group">
      <Link href={`/product/${product.id}`}>
        {/* Product Image */}
        <div className="relative aspect-nike-product overflow-hidden mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className={`object-cover transition-all duration-500 ${imageLoaded ? 'scale-100' : 'scale-105'} group-hover:scale-105`}
            priority={priority}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Loading State */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          )}

          {/* Nike-style Badges */}
          <div className="absolute top-3 left-3 space-y-2">
            {product.drop && (
              <div className="badge badge-new">
                NEW
              </div>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <Heart 
              className={`w-4 h-4 ${isWishlisted ? 'text-red-500 fill-current' : 'text-black'}`} 
            />
          </button>

          {/* Quick Add - Nike Style */}
          {product.inStock && (
            <button
              onClick={handleQuickAdd}
              className="absolute bottom-3 right-3 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-gold hover:text-black"
            >
              <Plus className="w-5 h-5" />
            </button>
          )}

          {/* Stock Status Overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-white text-black px-4 py-2 font-semibold text-sm">
                SOLD OUT
              </span>
            </div>
          )}
        </div>

        {/* Product Info - Nike Style */}
        <div className="space-y-2">
          {/* Category */}
          <div className="text-sm text-gray-500 uppercase tracking-wider">
            {product.category}
          </div>
          
          {/* Product Name */}
          <h3 className="font-bold text-black group-hover:text-gold transition-colors duration-200">
            {product.name}
          </h3>
          
          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="font-black text-lg text-black">
              ₦{product.price.toLocaleString()}
            </span>
            
            {/* Colors Available */}
            <div className="flex gap-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                ></div>
              ))}
            </div>
          </div>

          {/* Sizes Preview */}
          <div className="text-xs text-gray-500">
            {product.sizes.length > 4 
              ? `${product.sizes.slice(0, 4).join(', ')}...` 
              : product.sizes.join(', ')
            }
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
