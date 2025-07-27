import { NextRequest, NextResponse } from 'next/server'

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || 'sk_test_your_paystack_secret_key'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const reference = searchParams.get('reference')

    if (!reference) {
      return NextResponse.json(
        { error: 'Payment reference is required' },
        { status: 400 }
      )
    }

    // Verify payment with Paystack
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Paystack verification failed:', data)
      return NextResponse.json(
        { error: 'Payment verification failed', details: data },
        { status: 400 }
      )
    }

    const paymentData = data.data

    // Check if payment was successful
    if (paymentData.status === 'success') {
      // In production, you would:
      // 1. Save order to database
      // 2. Update inventory
      // 3. Send confirmation email
      // 4. Trigger fulfillment process
      
      return NextResponse.json({
        success: true,
        verified: true,
        data: {
          reference: paymentData.reference,
          amount: paymentData.amount / 100, // Convert back from kobo
          currency: paymentData.currency,
          status: paymentData.status,
          paid_at: paymentData.paid_at,
          customer: {
            email: paymentData.customer.email,
            customer_code: paymentData.customer.customer_code
          },
          metadata: paymentData.metadata
        }
      })
    } else {
      return NextResponse.json({
        success: false,
        verified: false,
        status: paymentData.status,
        message: 'Payment was not successful'
      })
    }

  } catch (error) {
    console.error('Payment verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
