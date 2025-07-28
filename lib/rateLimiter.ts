import { RateLimiterMemory } from 'rate-limiter-flexible'
import { NextRequest } from 'next/server'

// Different rate limiters for different endpoints
const authLimiter = new RateLimiterMemory({
  keyGenerator: (req: any) => req.ip || 'unknown',
  points: 5, // Number of requests
  duration: 900, // Per 15 minutes
})

const apiLimiter = new RateLimiterMemory({
  keyGenerator: (req: any) => req.ip || 'unknown',
  points: 100, // Number of requests
  duration: 900, // Per 15 minutes
})

const orderLimiter = new RateLimiterMemory({
  keyGenerator: (req: any) => req.ip || 'unknown',
  points: 10, // Number of requests
  duration: 3600, // Per hour
})

// Helper to get client IP
const getClientIP = (request: NextRequest): string => {
  const forwarded = request.headers.get('x-forwarded-for')
  const real = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (real) {
    return real
  }
  
  return 'unknown'
}

// Rate limiting wrapper
export const withRateLimit = (
  limiter: RateLimiterMemory,
  handler: (request: NextRequest) => Promise<Response>
) => {
  return async (request: NextRequest) => {
    const ip = getClientIP(request)
    
    try {
      await limiter.consume(ip)
      return handler(request)
    } catch (rejRes: any) {
      const remainingPoints = rejRes?.remainingPoints || 0
      const msBeforeNext = rejRes?.msBeforeNext || 0
      
      return Response.json(
        {
          error: 'Too many requests',
          message: 'Rate limit exceeded. Please try again later.',
          retryAfter: Math.round(msBeforeNext / 1000),
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.round(msBeforeNext / 1000)),
            'X-RateLimit-Limit': String(limiter.points),
            'X-RateLimit-Remaining': String(Math.max(remainingPoints - 1, 0)),
            'X-RateLimit-Reset': String(new Date(Date.now() + msBeforeNext).toISOString()),
          },
        }
      )
    }
  }
}

// Export specific limiters
export const withAuthRateLimit = (handler: (request: NextRequest) => Promise<Response>) =>
  withRateLimit(authLimiter, handler)

export const withApiRateLimit = (handler: (request: NextRequest) => Promise<Response>) =>
  withRateLimit(apiLimiter, handler)

export const withOrderRateLimit = (handler: (request: NextRequest) => Promise<Response>) =>
  withRateLimit(orderLimiter, handler)
