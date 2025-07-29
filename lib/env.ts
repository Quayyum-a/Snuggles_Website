// Environment variable validation
export function validateEnvironment() {
  const requiredEnvVars = {
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  }

  const missingVars = Object.entries(requiredEnvVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key)

  if (missingVars.length > 0 && process.env.NODE_ENV === 'production') {
    console.warn(`Missing environment variables: ${missingVars.join(', ')}`)
  }

  return {
    isValid: missingVars.length === 0,
    missingVars,
  }
}

export function isDatabaseAvailable(): boolean {
  return Boolean(process.env.DATABASE_URL)
}
