import { NextRequest } from 'next/server'
import { db } from '@/lib/db'
import { hashPassword, generateToken } from '@/lib/auth'
import { sendEmail, emailTemplates } from '@/lib/email'
import { withAuthRateLimit } from '@/lib/rateLimiter'
import { validateRegistrationData, sanitizeString, logSuspiciousActivity } from '@/lib/validation'
import { logInfo, logError } from '@/lib/logger'

async function registerHandler(request: NextRequest) {
  try {
    const rawData = await request.json()

    // Validate input data
    const validation = validateRegistrationData(rawData)
    if (!validation.isValid) {
      logSuspiciousActivity('Invalid registration attempt', {
        errors: validation.errors,
        ip: request.headers.get('x-forwarded-for')
      })
      return Response.json(
        { error: validation.errors.join(', ') },
        { status: 400 }
      )
    }

    // Sanitize input
    const email = sanitizeString(rawData.email.toLowerCase())
    const password = rawData.password
    const firstName = rawData.firstName ? sanitizeString(rawData.firstName) : null
    const lastName = rawData.lastName ? sanitizeString(rawData.lastName) : null
    const phone = rawData.phone ? sanitizeString(rawData.phone) : null

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return Response.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user
    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phone,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
      }
    })

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    })

    // Send welcome email (don't wait for it)
    const welcomeTemplate = emailTemplates.welcomeEmail(user)
    sendEmail({
      to: user.email,
      subject: welcomeTemplate.subject,
      html: welcomeTemplate.html,
    }).catch(error => {
      logError('Failed to send welcome email', error)
    })

    logInfo('User registered successfully', {
      userId: user.id,
      email: user.email,
      ip: request.headers.get('x-forwarded-for')
    })

    // Set cookie
    const response = Response.json({
      user,
      token,
      message: 'User created successfully'
    })

    response.headers.set(
      'Set-Cookie',
      `auth-token=${token}; HttpOnly; Path=/; Max-Age=${7 * 24 * 60 * 60}; SameSite=Strict${
        process.env.NODE_ENV === 'production' ? '; Secure' : ''
      }`
    )

    return response

  } catch (error) {
    logError('Registration error', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export const POST = withAuthRateLimit(registerHandler)
