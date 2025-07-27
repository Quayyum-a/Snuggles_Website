'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Lock, CreditCard, Truck, Shield, ChevronRight } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import Navigation from '@/components/Navigation'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, itemCount, clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'card'
  })

  useEffect(() => {
    if (items.length === 0) {
      router.push('/shop')
    }
  }, [items, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In production, this would integrate with Paystack or other payment processor
      console.log('Order submitted:', { formData, items, total })
      
      // Clear cart and redirect to success page
      clearCart()
      router.push('/order-confirmation')
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Payment failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const shippingCost = total >= 50000 ? 0 : 2500
  const finalTotal = total + shippingCost

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center space-x-4">
              <Link 
                href="/shop" 
                className="flex items-center text-gray-600 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="font-semibold text-black">Checkout</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Checkout Form */}
            <div className="space-y-8">
              <div>
                <h1 className="text-2xl font-bold text-black mb-2">Checkout</h1>
                <p className="text-gray-600">Complete your order details below</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Contact Information */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-lg font-semibold text-black mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="form-input"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-lg font-semibold text-black mb-4">Shipping Address</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="form-label">Street Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                        placeholder="123 Street Name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="form-input"
                          required
                          placeholder="Lagos"
                        />
                      </div>
                      <div>
                        <label className="form-label">State</label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="form-input"
                          required
                        >
                          <option value="">Select State</option>
                          <option value="Lagos">Lagos</option>
                          <option value="Abuja">Abuja</option>
                          <option value="Kano">Kano</option>
                          <option value="Rivers">Rivers</option>
                          <option value="Ogun">Ogun</option>
                          <option value="Kaduna">Kaduna</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="form-label">ZIP Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="100001"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-lg font-semibold text-black mb-4">Payment Method</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="accent-gold"
                      />
                      <CreditCard className="w-5 h-5 text-gray-600" />
                      <label className="font-medium">Credit/Debit Card</label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        checked={formData.paymentMethod === 'bank'}
                        onChange={handleInputChange}
                        className="accent-gold"
                      />
                      <span className="text-lg">🏦</span>
                      <label className="font-medium">Bank Transfer</label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="ussd"
                        checked={formData.paymentMethod === 'ussd'}
                        onChange={handleInputChange}
                        className="accent-gold"
                      />
                      <span className="text-lg">📱</span>
                      <label className="font-medium">USSD</label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-black text-white py-4 font-semibold hover:bg-gray-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>{isLoading ? 'Processing...' : 'Complete Order'}</span>
                </button>

                <div className="text-center text-xs text-gray-500">
                  <p>🔒 Your payment information is secure and encrypted</p>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-4">
                <h2 className="text-lg font-semibold text-black mb-6">Order Summary</h2>
                
                {/* Items */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => {
                    const itemId = `${item.product.id}-${item.size}-${item.color}`
                    return (
                      <div key={itemId} className="flex items-center space-x-4">
                        <div className="relative w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-black text-sm">{item.product.name}</h3>
                          <p className="text-xs text-gray-600">
                            Size: {item.size} • Color: {item.color}
                          </p>
                          <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-sm font-semibold text-black">
                          ₦{(item.product.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Totals */}
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal ({itemCount} items)</span>
                    <span className="text-black">₦{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-black">
                      {shippingCost === 0 ? 'FREE' : `₦${shippingCost.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                    <span className="text-black">Total</span>
                    <span className="text-black">₦{finalTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Truck className="w-4 h-4 text-green-600" />
                    <span>Free shipping on orders over ₦50,000</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span>30-day return policy</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Lock className="w-4 h-4 text-gray-600" />
                    <span>Secure payment processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
