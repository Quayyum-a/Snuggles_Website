'use client'

import React from 'react'
import Image from 'next/image'
import { X, Plus, Minus, ShoppingBag, CreditCard } from 'lucide-react'
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
    alert('Checkout functionality would integrate with Paystack/Stripe here!')
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={closeCart}
      />
      
      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-black border-l border-gold/20 z-50 transform transition-transform duration-300 glass-effect">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gold/20">
          <div className="flex items-center space-x-2">
            <ShoppingBag size={24} className="text-gold" />
            <h2 className="text-xl font-bold text-white">
              Your Cart ({itemCount})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-muted hover:text-gold transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag size={64} className="text-muted mx-auto mb-4" />
              <p className="text-muted text-lg mb-4">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="bg-gold text-black font-semibold px-6 py-2 rounded hover:bg-gold-light transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => {
                const itemId = `${item.product.id}-${item.size}-${item.color}`
                
                return (
                  <div key={itemId} className="flex space-x-4 bg-black/50 border border-gold/20 rounded-lg p-4">
                    {/* Product Image */}
                    <div className="relative w-20 h-20 rounded overflow-hidden">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-sm mb-1">
                        {item.product.name}
                      </h3>
                      
                      <div className="flex items-center space-x-4 text-xs text-muted mb-2">
                        <span>Size: {item.size}</span>
                        <span>Color: {item.color}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gold font-bold">
                          ${item.product.price}
                        </span>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(itemId, item.quantity - 1)}
                            className="w-6 h-6 bg-gold/20 text-gold rounded flex items-center justify-center hover:bg-gold hover:text-black transition-colors duration-300"
                          >
                            <Minus size={12} />
                          </button>
                          
                          <span className="text-white text-sm w-8 text-center">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => updateQuantity(itemId, item.quantity + 1)}
                            className="w-6 h-6 bg-gold/20 text-gold rounded flex items-center justify-center hover:bg-gold hover:text-black transition-colors duration-300"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(itemId)}
                        className="text-red-400 text-xs mt-2 hover:text-red-300 transition-colors duration-300"
                      >
                        Remove
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
          <div className="border-t border-gold/20 p-6 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-white text-lg">Subtotal</span>
              <span className="text-2xl font-bold brand-text">${total.toFixed(2)}</span>
            </div>
            
            <div className="text-sm text-muted">
              <p>Shipping: Free</p>
              <p className="mt-1">Taxes calculated at checkout</p>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between text-xl font-bold border-t border-gold/20 pt-4">
              <span className="text-white">Total</span>
              <span className="brand-text">${total.toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full bg-gold text-black font-bold py-4 rounded hover:bg-gold-light transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <CreditCard size={20} />
              <span>Proceed to Checkout</span>
            </button>

            <p className="text-xs text-muted text-center">
              Secure checkout with Paystack & Stripe
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
