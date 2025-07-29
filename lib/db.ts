import { PrismaClient } from './generated/prisma'
import { isDatabaseAvailable } from './env'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Create Prisma client with better error handling
function createPrismaClient() {
  if (!isDatabaseAvailable()) {
    console.warn('DATABASE_URL not available, creating minimal Prisma client')
    // During build time, we might not have database access
    // Return a client that will be created later when needed
  }

  try {
    return new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
      errorFormat: 'pretty',
    })
  } catch (error) {
    console.error('Failed to initialize Prisma client:', error)
    // Don't throw during build time, just log the error
    if (process.env.NODE_ENV === 'production' && process.env.VERCEL) {
      console.warn('Prisma client creation failed, this might be expected during build')
      return new PrismaClient() // Try with default settings
    }
    throw error
  }
}

export const db = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
