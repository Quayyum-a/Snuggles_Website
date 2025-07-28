'use client'

import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getProductById } from '@/lib/products'
import { useCart } from '@/contexts/CartContext'
import { ArrowLeft, Star, ShoppingBag, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react'
import Link from 'next/link'

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  
  const product = getProductById(params.id as string)

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto container-padding text-center">
            <h1 className="text-4xl font-black text-black mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">Sorry, we couldn't find that SNUGGLES product.</p>
            <Link href="/shop" className="bg-black text-white px-8 py-4 font-bold tracking-wider hover:bg-gray-800 transition-colors">
              BACK TO SHOP
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // Set default selections
  React.useEffect(() => {
    if (product.colors.length > 0 && !selectedColor) {
      setSelectedColor(product.colors[0])
    }
    if (product.sizes.length > 0 && !selectedSize) {
      setSelectedSize(product.sizes[0])
    }
  }, [product, selectedColor, selectedSize])

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color')
      return
    }
    
    addItem(product, selectedSize, selectedColor)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto container-padding">
          
          {/* Breadcrumb */}
          <div className="mb-8">
            <button 
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <div className="mt-2 text-sm text-gray-500">
              <Link href="/shop" className="hover:text-black">Shop</Link> 
              <span className="mx-2">/</span>
              <span className="capitalize">{product.category}</span>
              <span className="mx-2">/</span>
              <span className="text-black">{product.name}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail images */}
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 ${i === 0 ? 'border-gold' : 'border-transparent hover:border-gray-300'} transition-colors`}>
                    <img
                      src={product.image}
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 text-xs font-bold tracking-wider uppercase">
                    {product.featured && <span>FEATURED</span>}
                    {product.drop && <span>LIMITED DROP</span>}
                    {!product.featured && !product.drop && <span>SNUGGLES</span>}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-black text-black leading-tight">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-black text-gold">
                    ₦{(product.price / 100).toLocaleString()}
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">(4.8) 234 reviews</span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-black">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-3 border-2 font-bold text-sm transition-colors ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 text-black hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <Link href="/size-guide" className="text-sm text-gray-600 hover:text-black underline">
                  Size Guide
                </Link>
              </div>

              {/* Color Selection */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-black">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-3 border-2 font-bold text-sm transition-colors ${
                        selectedColor === color
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 text-black hover:border-black'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-black">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 hover:bg-gray-100 transition-colors"
                    >
                      −
                    </button>
                    <span className="px-6 py-3 font-bold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  
                  {product.inStock ? (
                    <span className="text-sm text-green-600 font-medium">✓ In Stock</span>
                  ) : (
                    <span className="text-sm text-red-600 font-medium">Out of Stock</span>
                  )}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full bg-gold text-black py-4 font-black text-lg tracking-wider hover:bg-yellow-400 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3"
                >
                  <ShoppingBag className="w-5 h-5" />
                  ADD TO CART
                </button>
                
                <button className="w-full border-2 border-black text-black py-4 font-bold text-sm tracking-wider hover:bg-black hover:text-white transition-colors">
                  BUY NOW
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center space-y-2">
                  <Truck className="w-8 h-8 mx-auto text-gold" />
                  <div className="font-bold text-sm">FREE SHIPPING</div>
                  <div className="text-xs text-gray-600">Orders over ₦50,000</div>
                </div>
                
                <div className="text-center space-y-2">
                  <RotateCcw className="w-8 h-8 mx-auto text-gold" />
                  <div className="font-bold text-sm">EASY RETURNS</div>
                  <div className="text-xs text-gray-600">30-day return policy</div>
                </div>
                
                <div className="text-center space-y-2">
                  <Shield className="w-8 h-8 mx-auto text-gold" />
                  <div className="font-bold text-sm">AUTHENTIC</div>
                  <div className="text-xs text-gray-600">100% genuine SNUGGLES</div>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6 pt-8 border-t border-gray-200">
                <h3 className="font-black text-xl text-black">Product Details</h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-600">Material:</div>
                    <div className="font-medium">100% Premium Cotton</div>
                    
                    <div className="text-gray-600">Fit:</div>
                    <div className="font-medium">Regular Fit</div>
                    
                    <div className="text-gray-600">Care:</div>
                    <div className="font-medium">Machine Wash Cold</div>
                    
                    <div className="text-gray-600">Made In:</div>
                    <div className="font-medium">Lagos, Nigeria</div>
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
