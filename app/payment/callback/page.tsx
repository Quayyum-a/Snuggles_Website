'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CheckCircle, XCircle, Loader } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function PaymentCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'verifying' | 'success' | 'failed'>('verifying')
  const [paymentData, setPaymentData] = useState<any>(null)

  useEffect(() => {
    const reference = searchParams.get('reference')
    
    if (!reference) {
      setStatus('failed')
      return
    }

    // Verify payment
    const verifyPayment = async () => {
      try {
        const response = await fetch(`/api/paystack/verify?reference=${reference}`)
        const data = await response.json()

        if (data.success && data.verified) {
          setStatus('success')
          setPaymentData(data.data)
          // Clear cart after successful payment
          localStorage.removeItem('snuggles-cart')
          // Redirect to order confirmation after 3 seconds
          setTimeout(() => {
            router.push(`/order-confirmation?reference=${reference}`)
          }, 3000)
        } else {
          setStatus('failed')
        }
      } catch (error) {
        console.error('Payment verification failed:', error)
        setStatus('failed')
      }
    }

    verifyPayment()
  }, [searchParams, router])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            
            {status === 'verifying' && (
              <div className="space-y-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Loader className="w-10 h-10 text-blue-600 animate-spin" />
                </div>
                <h1 className="text-2xl font-bold text-black">Verifying Payment...</h1>
                <p className="text-gray-600">Please wait while we confirm your payment.</p>
              </div>
            )}

            {status === 'success' && (
              <div className="space-y-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold text-black">Payment Successful!</h1>
                <p className="text-gray-600">
                  Your payment of ₦{paymentData?.amount?.toLocaleString()} has been processed successfully.
                </p>
                <p className="text-sm text-gray-500">
                  Reference: {paymentData?.reference}
                </p>
                <p className="text-sm text-blue-600">Redirecting to order confirmation...</p>
              </div>
            )}

            {status === 'failed' && (
              <div className="space-y-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <XCircle className="w-12 h-12 text-red-600" />
                </div>
                <h1 className="text-2xl font-bold text-black">Payment Failed</h1>
                <p className="text-gray-600">
                  We couldn't verify your payment. If you believe this is an error, please contact support.
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => router.push('/checkout')}
                    className="btn-primary mx-auto"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={() => router.push('/contact')}
                    className="btn-secondary mx-auto"
                  >
                    Contact Support
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
