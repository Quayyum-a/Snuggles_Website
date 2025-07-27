'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

const CartDrawer = () => {
  const { 
    items, 
    isOpen, 
    total, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    itemCount 
  } = useCart()

  if (!isOpen) return null

  const handleCheckout = () => {
    // In production, this would redirect to checkout page
    window.location.href = '/checkout'
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={closeCart}
      />
      
      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold text-black">
              BAG
            </h2>
            <p className="text-sm text-gray-600" suppressHydrationWarning>
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X size={20} className="text-black" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag size={32} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Your bag is empty</h3>
              <p className="text-gray-600 mb-6">Start building your streetwear collection</p>
              <button
                onClick={closeCart}
                className="btn-primary"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => {
                const itemId = `${item.product.id}-${item.size}-${item.color}`
                
                return (
                  <div key={itemId} className="flex space-x-4 pb-6 border-b border-gray-100">
                    {/* Product Image */}
                    <div className="relative w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <div>
                        <h3 className="font-semibold text-black text-sm">
                          {item.product.name}
                        </h3>
                        <div className="text-xs text-gray-600 space-x-2">
                          <span>Size: {item.size}</span>
                          <span>•</span>
                          <span>Color: {item.color}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-bold text-black">
                          ₦{item.product.price.toLocaleString()}
                        </span>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(itemId, item.quantity - 1)}
                            className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:border-black transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={12} />
                          </button>
                          
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => updateQuantity(itemId, item.quantity + 1)}
                            className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:border-black transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(itemId)}
                        className="flex items-center space-x-1 text-gray-500 text-xs hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={12} />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4 bg-gray-50">
            
            {/* Total */}
            <div className="flex items-center justify-between text-lg font-bold">
              <span className="text-black">Total</span>
              <span className="text-black" suppressHydrationWarning>
                ₦{total.toLocaleString()}
              </span>
            </div>

            <div className="text-xs text-gray-600 space-y-1">
              <p>✓ Free shipping on orders over ₦50,000</p>
              <p>✓ Taxes included</p>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white py-4 font-semibold hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Continue Shopping */}
            <button
              onClick={closeCart}
              className="w-full border border-gray-300 text-black py-3 font-medium hover:border-black transition-colors duration-200"
            >
              Continue Shopping
            </button>

            {/* Payment Methods */}
            <div className="text-center pt-2">
              <p className="text-xs text-gray-500 mb-2">We accept</p>
              <div className="flex justify-center space-x-2 text-xs text-gray-600">
                <span>💳 Cards</span>
                <span>•</span>
                <span>🏦 Bank Transfer</span>
                <span>•</span>
                <span>📱 USSD</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
