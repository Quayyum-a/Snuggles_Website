'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle, Package, Truck, Mail, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function OrderConfirmationPage() {
  // In production, this would get order details from URL params or state
  const orderNumber = 'SNUG-' + Math.random().toString(36).substr(2, 9).toUpperCase()
  const estimatedDelivery = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-NG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-black mb-4">
              Order Confirmed!
            </h1>
            
            <p className="text-lg text-gray-600 mb-2">
              Thank you for your order. We've received your payment and are preparing your items for shipment.
            </p>
            
            <p className="text-sm text-gray-500">
              Order #{orderNumber}
            </p>
          </div>

          {/* Order Details Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            
            {/* Delivery Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-black mb-4 flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  Order Status
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Payment Confirmed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Processing Order</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-400">Shipped</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-400">Delivered</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-4 flex items-center">
                  <Truck className="w-5 h-5 mr-2" />
                  Delivery Information
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Estimated Delivery:</strong> {estimatedDelivery}</p>
                  <p><strong>Shipping Method:</strong> Standard Delivery</p>
                  <p><strong>Tracking:</strong> Available once shipped</p>
                </div>
              </div>
            </div>

            {/* Order Actions */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  href="/account/orders"
                  className="btn-secondary text-center"
                >
                  Track Order
                </Link>
                
                <Link
                  href="/shop"
                  className="btn-primary text-center"
                >
                  Continue Shopping
                </Link>
                
                <button
                  onClick={() => window.print()}
                  className="btn-ghost text-center"
                >
                  Print Receipt
                </button>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h3 className="font-semibold text-black mb-4">What happens next?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-black">Order Confirmation Email</h4>
                  <p className="text-sm text-gray-600">We've sent a confirmation email with your order details and receipt.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-medium text-black">Processing (1-2 business days)</h4>
                  <p className="text-sm text-gray-600">Our team will prepare your items and package them with care.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-black">Shipping & Delivery</h4>
                  <p className="text-sm text-gray-600">Your order will be shipped and delivered to your address. You'll receive tracking information once shipped.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="text-center bg-gray-100 rounded-lg p-6">
            <h3 className="font-semibold text-black mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4">
              If you have any questions about your order, our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="text-sm text-blue-600 hover:underline"
              >
                Contact Support
              </Link>
              <Link
                href="/shipping"
                className="text-sm text-blue-600 hover:underline"
              >
                Shipping Information
              </Link>
              <Link
                href="/returns"
                className="text-sm text-blue-600 hover:underline"
              >
                Return Policy
              </Link>
            </div>
          </div>

          {/* Social Share */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">
              Love your SNUGGLES purchase? Share it with the community!
            </p>
            <div className="flex justify-center space-x-4">
              <span className="text-2xl">📸</span>
              <span className="text-sm text-gray-600">Tag us @snuggles_ng on Instagram</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
