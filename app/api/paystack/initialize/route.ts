import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { orderId, email, amount } = await request.json()

    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount: amount * 100, // Convert to kobo
        reference: `order_${orderId}_${Date.now()}`,
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/callback`,
        metadata: {
          orderId,
        },
      }),
    })

    const data = await response.json()

    if (data.status) {
      return Response.json({
        status: true,
        data: {
          authorization_url: data.data.authorization_url,
          access_code: data.data.access_code,
          reference: data.data.reference,
        },
      })
    } else {
      return Response.json(
        { error: 'Payment initialization failed' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Paystack initialization error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
