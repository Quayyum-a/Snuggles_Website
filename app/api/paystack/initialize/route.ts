import { NextRequest, NextResponse } from 'next/server'

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || 'sk_test_your_paystack_secret_key'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, amount, currency = 'NGN', reference, metadata } = body

    // Validate required fields
    if (!email || !amount) {
      return NextResponse.json(
        { error: 'Email and amount are required' },
        { status: 400 }
      )
    }

    // Initialize Paystack payment
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount: amount * 100, // Convert to kobo
        currency,
        reference: reference || `SNUG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        metadata: {
          ...metadata,
          custom_fields: [
            {
              display_name: "Order Items",
              variable_name: "order_items",
              value: metadata?.items || "N/A"
            }
          ]
        },
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/payment/callback`,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Paystack initialization failed:', data)
      return NextResponse.json(
        { error: 'Payment initialization failed', details: data },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      data: data.data,
      authorization_url: data.data.authorization_url,
      access_code: data.data.access_code,
      reference: data.data.reference
    })

  } catch (error) {
    console.error('Payment initialization error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
