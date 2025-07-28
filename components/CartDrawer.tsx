'use client'

import React from 'react'
import { useCart } from '@/contexts/CartContext'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const CartDrawer = () => {
  const { 
    items, 
    total, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity,
    clearCart,
    itemCount 
  } = useCart()

  const handleQuantityUpdate = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId)
    } else {
      updateQuantity(itemId, newQuantity)
    }
  }

  const getItemId = (item: any) => `${item.product.id}-${item.size}-${item.color}`

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={closeCart}
      />
      
      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform">
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6" />
              <h2 className="text-xl font-black text-black">CART</h2>
              {itemCount > 0 && (
                <span className="bg-gold text-black px-2 py-1 rounded-full text-sm font-bold">
                  {itemCount}
                </span>
              )}
            </div>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <ShoppingBag className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Your cart is empty</h3>
                <p className="text-gray-600 mb-6">
                  Add some SNUGGLES streetwear to get started
                </p>
                <Link 
                  href="/shop"
                  onClick={closeCart}
                  className="bg-black text-white px-6 py-3 font-bold text-sm tracking-wider hover:bg-gray-800 transition-colors"
                >
                  SHOP SNUGGLES
                </Link>
              </div>
            ) : (
              <div className="p-6 space-y-6">
                {items.map((item) => {
                  const itemId = getItemId(item)
                  return (
                    <div key={itemId} className="flex gap-4 group">
                      
                      {/* Product Image */}
                      <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-sm text-black leading-tight">
                              {item.product.name}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">
                              {item.size} • {item.color}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(itemId)}
                            className="p-1 hover:bg-gray-100 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-gray-300 rounded">
                            <button
                              onClick={() => handleQuantityUpdate(itemId, item.quantity - 1)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 py-2 text-sm font-bold min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityUpdate(itemId, item.quantity + 1)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <div className="font-bold text-sm text-black">
                              ₦{((item.product.price * item.quantity) / 100).toLocaleString()}
                            </div>
                            {item.quantity > 1 && (
                              <div className="text-xs text-gray-500">
                                ₦{(item.product.price / 100).toLocaleString()} each
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {/* Clear Cart */}
                {items.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={clearCart}
                      className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                    >
                      Clear all items
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              
              {/* Shipping Notice */}
              <div className="bg-gold/10 border border-gold/20 p-3 rounded text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-black font-medium">
                    {total >= 5000000 ? '✓' : '📦'} Free shipping
                  </span>
                  <span className="text-gray-600">
                    {total >= 5000000 
                      ? 'Qualified!' 
                      : `₦${((5000000 - total) / 100).toLocaleString()} to go`
                    }
                  </span>
                </div>
                {total < 5000000 && (
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gold rounded-full h-2 transition-all duration-300"
                      style={{ width: `${Math.min((total / 5000000) * 100, 100)}%` }}
                    />
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="flex items-center justify-between text-lg">
                <span className="font-bold text-black">Total</span>
                <span className="font-black text-xl text-gold">
                  ₦{(total / 100).toLocaleString()}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full bg-gold text-black py-4 font-black text-sm tracking-wider hover:bg-yellow-400 transition-colors inline-flex items-center justify-center gap-2"
                >
                  CHECKOUT
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="w-full border-2 border-black text-black py-3 font-bold text-sm tracking-wider hover:bg-black hover:text-white transition-colors text-center block"
                >
                  CONTINUE SHOPPING
                </Link>
              </div>

              {/* Security Badge */}
              <div className="text-center pt-2">
                <div className="text-xs text-gray-500 flex items-center justify-center gap-2">
                  <span>🔒</span>
                  <span>Secure checkout powered by Paystack</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartDrawer
