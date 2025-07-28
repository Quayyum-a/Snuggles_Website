import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const response = Response.json({ message: 'Logged out successfully' })
  
  response.headers.set(
    'Set-Cookie',
    'auth-token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict'
  )

  return response
}
