'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { ArrowLeft, ShoppingBag, Heart, Share2, Star, Truck, Shield, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import { getProductById } from '@/lib/products'
import { useCart } from '@/contexts/CartContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = getProductById(productId)
  
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color')
      return
    }
    
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/shop"
            className="inline-flex items-center space-x-2 text-muted hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Shop</span>
          </Link>
        </div>

        {/* Product Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold brand-text">
                    ${product.price}
                  </span>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-gold fill-current" />
                    ))}
                    <span className="text-muted text-sm ml-2">(4.8)</span>
                  </div>
                </div>

                <p className="text-muted text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-white font-semibold mb-3">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-center border rounded transition-colors duration-300 ${
                        selectedSize === size 
                          ? 'border-gold bg-gold text-black font-semibold' 
                          : 'border-gold/30 text-white hover:border-gold'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-white font-semibold mb-3">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                        selectedColor === color 
                          ? 'border-gold scale-110' 
                          : 'border-gold/30 hover:border-gold'
                      }`}
                      style={{
                        backgroundColor: color.toLowerCase() === 'gold' ? '#d4a422' : 
                                       color.toLowerCase() === 'white' ? '#ffffff' : '#000000'
                      }}
                    >
                      <span className="sr-only">{color}</span>
                    </button>
                  ))}
                </div>
                <p className="text-sm text-muted mt-2">
                  Selected: {selectedColor || 'None'}
                </p>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-white font-semibold mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-gold/20 text-gold rounded flex items-center justify-center hover:bg-gold hover:text-black transition-colors duration-300"
                  >
                    -
                  </button>
                  <span className="text-white text-lg w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 bg-gold/20 text-gold rounded flex items-center justify-center hover:bg-gold hover:text-black transition-colors duration-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock || !selectedSize || !selectedColor}
                  className="w-full bg-gold text-black font-bold py-4 rounded hover:bg-gold-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <ShoppingBag size={20} />
                  <span>{product.inStock ? 'Add to Cart' : 'Sold Out'}</span>
                </button>

                <div className="flex space-x-4">
                  <button className="flex-1 border border-gold/30 text-gold py-3 rounded hover:border-gold transition-colors duration-300 flex items-center justify-center space-x-2">
                    <Heart size={20} />
                    <span>Wishlist</span>
                  </button>
                  <button className="flex-1 border border-gold/30 text-gold py-3 rounded hover:border-gold transition-colors duration-300 flex items-center justify-center space-x-2">
                    <Share2 size={20} />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="border-t border-gold/20 pt-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Truck size={20} className="text-gold" />
                    <span className="text-white">Free shipping within Lagos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RotateCcw size={20} className="text-gold" />
                    <span className="text-white">30-day return policy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield size={20} className="text-gold" />
                    <span className="text-white">Authentic streetwear guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
