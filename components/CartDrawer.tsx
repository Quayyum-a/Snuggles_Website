'use client'

import React from 'react'
import Image from 'next/image'
import { X, Plus, Minus, ShoppingBag, CreditCard, Trash2, ArrowRight, Sparkles, Crown, Fire } from 'lucide-react'
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
    alert('Proceeding to secure checkout...')
  }

  return (
    <>
      {/* Magnetic Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 z-50 backdrop-blur-md"
        onClick={closeCart}
      />
      
      {/* Captivating Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-gray-900 to-black z-50 shadow-2xl transform transition-transform duration-500 flex flex-col border-l-2 border-yellow-400">
        {/* Electric Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-yellow-400 bg-gradient-to-r from-gray-900 to-black">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center animate-pulse-gold magnetic">
              <ShoppingBag className="w-6 h-6 text-black" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white font-playfair" suppressHydrationWarning>
                YOUR CART
              </h2>
              <p className="text-sm text-yellow-400 font-bold" suppressHydrationWarning>
                {itemCount} {itemCount === 1 ? 'ITEM' : 'ITEMS'} OF PURE FIRE
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="p-3 hover:bg-yellow-400 hover:text-black rounded-full transition-all duration-300 magnetic border border-yellow-400/50"
          >
            <X size={20} className="text-yellow-400" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-16 sparkle-container">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gold">
                <ShoppingBag size={48} className="text-yellow-400" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 font-playfair">YOUR CART IS EMPTY</h3>
              <p className="text-gray-400 mb-8 text-lg">Start building your legendary streetwear collection</p>
              <button
                onClick={closeCart}
                className="btn-primary magnetic"
              >
                <Sparkles className="w-4 h-4" />
                <span>START SHOPPING</span>
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => {
                const itemId = `${item.product.id}-${item.size}-${item.color}`
                
                return (
                  <div key={itemId} className="card p-4 magnetic hover-magnetic animate-slide-up">
                    {/* Product Image */}
                    <div className="flex space-x-4">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-black border border-yellow-400/30">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                        
                        {/* Mini Badge */}
                        {item.product.drop && (
                          <div className="absolute top-1 left-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-black px-1 py-0.5 rounded animate-pulse">
                            HOT
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 space-y-2">
                        <h3 className="font-black text-white text-sm font-playfair">
                          {item.product.name}
                        </h3>
                        
                        <div className="text-xs text-gray-400 space-x-4">
                          <span className="text-yellow-400">Size: {item.size}</span>
                          <span className="text-yellow-400">Color: {item.color}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="font-black text-yellow-400 price-glow">
                            ₦{item.product.price.toLocaleString()}
                          </span>

                          {/* Magnetic Quantity Controls */}
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(itemId, item.quantity - 1)}
                              className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors duration-200 magnetic font-bold"
                            >
                              <Minus size={12} />
                            </button>
                            
                            <span className="text-sm font-black w-8 text-center text-white bg-gray-800 px-2 py-1 rounded">
                              {item.quantity}
                            </span>
                            
                            <button
                              onClick={() => updateQuantity(itemId, item.quantity + 1)}
                              className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors duration-200 magnetic font-bold"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>

                        {/* Electric Remove Button */}
                        <button
                          onClick={() => removeItem(itemId)}
                          className="flex items-center space-x-1 text-red-400 text-xs hover:text-red-300 transition-colors duration-200 magnetic"
                        >
                          <Trash2 size={12} />
                          <span className="font-bold uppercase">REMOVE</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Explosive Footer */}
        {items.length > 0 && (
          <div className="border-t-2 border-yellow-400 p-6 space-y-6 bg-gradient-to-r from-gray-900 to-black">
            {/* Promo Code */}
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="PROMO CODE"
                className="flex-1 form-input text-sm font-bold uppercase"
              />
              <button className="btn-secondary text-sm px-6 magnetic">
                APPLY
              </button>
            </div>

            {/* Subtotal */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-lg">
                <span className="font-black text-white">SUBTOTAL</span>
                <span className="font-black text-yellow-400 price-glow" suppressHydrationWarning>
                  ₦{total.toLocaleString()}
                </span>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>✅ FREE shipping across Nigeria</p>
                <p>✅ Taxes included in price</p>
              </div>
            </div>

            {/* Total Display */}
            <div className="flex items-center justify-between text-2xl font-black border-t border-yellow-400 pt-4">
              <span className="text-white">TOTAL</span>
              <span className="gradient-text price-glow" suppressHydrationWarning>
                ₦{total.toLocaleString()}
              </span>
            </div>

            {/* Magnetic Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full py-5 bg-gradient-to-r from-yellow-600 to-orange-600 text-black font-black text-lg transition-all duration-500 flex items-center justify-center space-x-3 magnetic animate-pulse-gold relative overflow-hidden group"
            >
              <Crown className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10">SECURE CHECKOUT</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            {/* Payment Methods */}
            <div className="text-center pt-2">
              <p className="text-xs text-gray-500 mb-3 font-bold uppercase tracking-wider">WE ACCEPT</p>
              <div className="flex justify-center space-x-3">
                <div className="text-xs bg-gradient-to-r from-yellow-600 to-orange-600 text-black font-black px-3 py-2 rounded magnetic">💳 CARD</div>
                <div className="text-xs bg-gradient-to-r from-yellow-600 to-orange-600 text-black font-black px-3 py-2 rounded magnetic">🏦 BANK</div>
                <div className="text-xs bg-gradient-to-r from-yellow-600 to-orange-600 text-black font-black px-3 py-2 rounded magnetic">📱 USSD</div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 text-green-400 text-xs font-bold">
                <span>🔒</span>
                <span>SSL ENCRYPTED • 100% SECURE</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
