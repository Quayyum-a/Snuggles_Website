'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/types'
import { ShoppingBag, Zap, Plus, Sparkles } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (product.inStock) {
      addItem(product, selectedSize, selectedColor)
    }
  }
  return (
    <div className="group relative transform transition-all duration-500 hover:scale-105">
      <Link href={`/product/${product.id}`}>
        <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-gold/20 rounded-none overflow-hidden hover:border-gold/60 transition-all duration-500">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              priority={priority}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Interactive Overlay */}
            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6">
              {product.inStock ? (
                <div className="text-center space-y-4">
                  {/* Quick Info */}
                  <div className="mb-4">
                    <div className="text-gold font-black text-lg mb-2">${product.price}</div>
                    <div className="text-white font-bold text-sm">{product.name}</div>
                  </div>

                  {/* Size Selection */}
                  <div className="mb-4">
                    <p className="text-gold text-xs font-bold mb-2 tracking-wide">SELECT SIZE:</p>
                    <div className="flex justify-center space-x-1">
                      {product.sizes.slice(0, 4).map((size) => (
                        <button
                          key={size}
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setSelectedSize(size)
                          }}
                          className={`text-xs px-3 py-2 border-2 font-bold transition-all duration-300 ${
                            selectedSize === size
                              ? 'border-gold bg-gold text-black'
                              : 'border-gold/50 text-gold hover:border-gold hover:bg-gold/20'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Add Button */}
                  <button
                    onClick={handleAddToCart}
                    className="bg-gold text-black font-black px-6 py-3 w-full hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center space-x-2 group/btn"
                  >
                    <Plus size={18} className="group-hover/btn:rotate-90 transition-transform duration-300" />
                    <span>ADD TO CART</span>
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-red-400 font-black text-lg mb-2">SOLD OUT</div>
                  <div className="text-gray-400 text-sm">Notify when restocked</div>
                </div>
              )}
            </div>

            {/* Status Badges */}
            <div className="absolute top-3 left-3 space-y-2">
              {product.drop && (
                <div className="bg-red-500 text-white text-xs font-black px-3 py-1 flex items-center space-x-1 animate-pulse">
                  <Zap size={12} />
                  <span>LIMITED DROP</span>
                </div>
              )}

              {product.featured && (
                <div className="bg-gold text-black text-xs font-black px-3 py-1">
                  CULTURE PICK
                </div>
              )}
            </div>

            {/* Quick Action Button */}
            <div className="absolute top-3 right-3">
              <button className="w-10 h-10 bg-black/80 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100">
                <ShoppingBag size={16} />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-5 border-t border-gold/20">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-white font-black text-lg leading-tight group-hover:text-gold transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-xs font-medium tracking-wide mt-1">
                  {product.category.toUpperCase()} COLLECTION
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-gold">
                  ${product.price}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            {/* Colors & Sizes */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                {product.colors.slice(0, 3).map((color, index) => (
                  <div
                    key={index}
                    className="w-5 h-5 rounded-full border-2 border-gold/50 hover:border-gold transition-colors duration-300"
                    style={{
                      backgroundColor: color.toLowerCase() === 'gold' ? '#d4a422' :
                                     color.toLowerCase() === 'white' ? '#ffffff' : '#000000'
                    }}
                    title={color}
                  />
                ))}
              </div>

              <div className="flex space-x-1">
                {product.sizes.slice(0, 3).map((size) => (
                  <span
                    key={size}
                    className="text-xs px-2 py-1 border border-gold/30 text-gold font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold ${
                product.inStock ? 'text-green-400' : 'text-red-400'
              }`}>
                {product.inStock ? '✓ IN STOCK' : '✗ SOLD OUT'}
              </span>

              <div className="flex items-center space-x-1">
                <Sparkles size={12} className="text-gold" />
                <span className="text-xs text-gold font-medium">AUTHENTIC</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
