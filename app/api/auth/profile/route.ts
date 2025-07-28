import { NextRequest } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { db } from '@/lib/db'

export const GET = requireAuth(async (request: NextRequest, user) => {
  return Response.json({ user })
})

export const PUT = requireAuth(async (request: NextRequest, user) => {
  try {
    const { firstName, lastName, phone } = await request.json()
    
    const updatedUser = await db.user.update({
      where: { id: user.id },
      data: {
        firstName,
        lastName,
        phone,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
      }
    })

    return Response.json({ 
      user: updatedUser,
      message: 'Profile updated successfully' 
    })

  } catch (error) {
    console.error('Profile update error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
})
