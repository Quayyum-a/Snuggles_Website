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
    alert('Proceeding to checkout...')
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
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900" suppressHydrationWarning>
                Shopping Bag
              </h2>
              <p className="text-sm text-gray-600" suppressHydrationWarning>
                {itemCount} {itemCount === 1 ? 'item' : 'items'}
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={32} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your bag is empty</h3>
              <p className="text-gray-600 mb-6">Start shopping to add items to your bag</p>
              <button
                onClick={closeCart}
                className="btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => {
                const itemId = `${item.product.id}-${item.size}-${item.color}`
                
                return (
                  <div key={itemId} className="flex space-x-4 p-4 bg-gray-50 rounded-xl">
                    {/* Product Image */}
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {item.product.name}
                      </h3>
                      
                      <div className="text-xs text-gray-600">
                        <span>Size: {item.size}</span>
                        <span className="mx-2">•</span>
                        <span>Color: {item.color}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-bold text-indigo-600">
                          ${item.product.price}
                        </span>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(itemId, item.quantity - 1)}
                            className="w-7 h-7 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:border-indigo-400 transition-colors duration-200"
                          >
                            <Minus size={12} />
                          </button>
                          
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => updateQuantity(itemId, item.quantity + 1)}
                            className="w-7 h-7 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:border-indigo-400 transition-colors duration-200"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(itemId)}
                        className="flex items-center space-x-1 text-red-500 text-xs hover:text-red-600 transition-colors duration-200"
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
            {/* Promo Code */}
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Promo code"
                className="flex-1 form-input text-sm"
              />
              <button className="btn-secondary text-sm px-4">
                Apply
              </button>
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between text-lg">
              <span className="font-semibold text-gray-900">Subtotal</span>
              <span className="font-bold text-gray-900" suppressHydrationWarning>
                ${total.toFixed(2)}
              </span>
            </div>
            
            <div className="text-sm text-gray-600">
              <p>Shipping and taxes calculated at checkout</p>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full btn-primary py-4 text-base"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Payment Methods */}
            <div className="text-center pt-2">
              <p className="text-xs text-gray-500 mb-2">We accept</p>
              <div className="flex justify-center space-x-2">
                <div className="text-xs bg-white border border-gray-200 px-2 py-1 rounded">💳 Card</div>
                <div className="text-xs bg-white border border-gray-200 px-2 py-1 rounded">🏦 Bank</div>
                <div className="text-xs bg-white border border-gray-200 px-2 py-1 rounded">📱 Digital</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
