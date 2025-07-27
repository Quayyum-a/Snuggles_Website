'use client'

import React from 'react'
import Image from 'next/image'
import { X, Plus, Minus, ShoppingBag, CreditCard, Trash2, ArrowRight } from 'lucide-react'
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
    // In a real app, this would redirect to checkout page or integrate with payment processor
    alert('Redirecting to secure checkout...')
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={closeCart}
      />
      
      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-300 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <ShoppingBag size={24} className="text-gray-900" />
            <h2 className="text-xl font-semibold text-gray-900">
              Shopping Bag ({itemCount})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag size={64} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg mb-4">Your bag is empty</p>
              <button
                onClick={closeCart}
                className="nike-button"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => {
                const itemId = `${item.product.id}-${item.size}-${item.color}`
                
                return (
                  <div key={itemId} className="flex space-x-4 border-b border-gray-200 pb-6">
                    {/* Product Image */}
                    <div className="relative w-20 h-20 rounded overflow-hidden bg-gray-100">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-gray-900 font-medium text-sm mb-1">
                        {item.product.name}
                      </h3>
                      
                      <div className="text-xs text-gray-500 mb-2">
                        <span>Size: {item.size}</span>
                        <span className="mx-2">•</span>
                        <span>Color: {item.color}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 font-semibold">
                          ${item.product.price}
                        </span>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(itemId, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors duration-200"
                          >
                            <Minus size={12} />
                          </button>
                          
                          <span className="text-gray-900 text-sm w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => updateQuantity(itemId, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors duration-200"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(itemId)}
                        className="flex items-center space-x-1 text-red-500 text-xs mt-2 hover:text-red-600 transition-colors duration-200"
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
          <div className="border-t border-gray-200 p-6 space-y-4">
            {/* Shipping Info */}
            <div className="text-sm text-green-600 text-center py-2 bg-green-50 rounded">
              🚚 Eligible for FREE shipping
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between text-lg">
              <span className="text-gray-900">Subtotal</span>
              <span className="font-semibold text-gray-900">₦{(total * 800).toLocaleString()}</span>
            </div>
            
            <div className="text-sm text-gray-500">
              <p>Shipping and taxes calculated at checkout</p>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full nike-button flex items-center justify-center space-x-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={16} />
            </button>

            {/* Payment Methods */}
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">We accept</p>
              <div className="flex justify-center space-x-2">
                <div className="text-xs bg-gray-100 px-2 py-1 rounded">Paystack</div>
                <div className="text-xs bg-gray-100 px-2 py-1 rounded">Stripe</div>
                <div className="text-xs bg-gray-100 px-2 py-1 rounded">Bank Transfer</div>
              </div>
            </div>

            {/* Continue Shopping */}
            <button
              onClick={closeCart}
              className="w-full text-center text-gray-600 hover:text-gray-900 text-sm py-2 transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
