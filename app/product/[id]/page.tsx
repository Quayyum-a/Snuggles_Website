'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { ArrowLeft, ShoppingBag, Heart, Share2, Star, Truck, Shield, RotateCcw, Plus, Minus, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { getProductById, products } from '@/lib/products'
import { useCart } from '@/contexts/CartContext'
import { getProductRating } from '@/lib/productRatings'
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
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Get static rating to prevent hydration mismatch
  const { rating, reviewCount } = getProductRating(productId)
  const relatedProducts = products.filter(p => p.id !== productId).slice(0, 4)

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-4">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="breadcrumb">
            <Link href="/" className="hover:text-gold">Home</Link>
            <ChevronRight size={16} />
            <Link href="/shop" className="hover:text-gold">Shop</Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>

        {/* Product Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {[product.image, product.image, product.image, product.image].map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`aspect-square relative overflow-hidden rounded border-2 ${
                      index === activeImageIndex ? 'border-gray-900' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Brand & Title */}
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">SNUGGLES</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <div className="star-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {rating.toFixed(1)} ({reviewCount} reviews)
                    </span>
                  </div>
                  <button className="text-sm text-blue-600 hover:underline">
                    See all reviews
                  </button>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-black">₦{product.price.toLocaleString()}</span>
                  {product.drop && (
                    <span className="original-price ml-3 text-lg line-through text-gray-500">₦{(product.price * 1.2).toLocaleString()}</span>
                  )}
                  <p className="text-sm text-gray-600 mt-1">
                    FREE shipping on orders over ₦50,000 | Same-day delivery in Lagos
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === color 
                          ? 'border-gray-900 scale-110' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{
                        backgroundColor: 
                          color.toLowerCase() === 'gold' ? '#d4a422' : 
                          color.toLowerCase() === 'white' ? '#ffffff' : '#000000'
                      }}
                    >
                      <span className="sr-only">{color}</span>
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Selected: {selectedColor || 'None'}
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Size</h3>
                  <button className="text-sm text-blue-600 hover:underline">
                    Size guide
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-center border rounded-md transition-colors duration-200 ${
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

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:border-gray-400 transition-colors duration-200"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:border-gray-400 transition-colors duration-200"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock || !selectedSize || !selectedColor}
                  className="w-full amazon-button py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <ShoppingBag size={20} />
                  <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </button>

                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 py-3 rounded-md hover:border-gray-400 transition-colors duration-200"
                  >
                    <Heart size={18} className={isWishlisted ? 'text-red-500 fill-current' : ''} />
                    <span>Wishlist</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 py-3 rounded-md hover:border-gray-400 transition-colors duration-200">
                    <Share2 size={18} />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Truck size={20} className="text-green-600" />
                    <span className="text-gray-700">FREE shipping and returns</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RotateCcw size={20} className="text-blue-600" />
                    <span className="text-gray-700">30-day return policy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield size={20} className="text-gold" />
                    <span className="text-gray-700">Authentic guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Review Summary */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold">{rating.toFixed(1)}</span>
                  <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${
                          i < Math.floor(rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{reviewCount} reviews</p>
              </div>

              {/* Sample Reviews */}
              <div className="md:col-span-2 space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="star-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">by John D.</span>
                  </div>
                  <p className="text-gray-700">Amazing quality and comfortable fit. The design is exactly what I was looking for!</p>
                </div>
                
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="star-rating">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400 fill-current" />
                      ))}
                      <Star size={14} className="text-gray-300" />
                    </div>
                    <span className="text-sm text-gray-600">by Sarah M.</span>
                  </div>
                  <p className="text-gray-700">Great streetwear piece. Fast delivery and excellent customer service.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`} className="group">
                  <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100 mb-4">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">{relatedProduct.name}</h3>
                  <p className="text-sm text-gray-600">${relatedProduct.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
