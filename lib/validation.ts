import { logWarn } from './logger'

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone validation (Nigerian format)
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+234|234|0)?[789]\d{9}$/
  return phoneRegex.test(phone.replace(/\s+/g, ''))
}

// Password validation
export const isValidPassword = (password: string): boolean => {
  return password.length >= 8
}

// Sanitize string input
export const sanitizeString = (input: string): string => {
  return input.trim().replace(/[<>]/g, '')
}

// Validate and sanitize order data
export const validateOrderData = (data: any): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Valid email is required')
  }

  if (!data.items || !Array.isArray(data.items) || data.items.length === 0) {
    errors.push('Order items are required')
  }

  if (data.items) {
    data.items.forEach((item: any, index: number) => {
      if (!item.productId || typeof item.productId !== 'string') {
        errors.push(`Item ${index + 1}: Product ID is required`)
      }
      if (!item.quantity || typeof item.quantity !== 'number' || item.quantity < 1) {
        errors.push(`Item ${index + 1}: Valid quantity is required`)
      }
      if (!item.size || typeof item.size !== 'string') {
        errors.push(`Item ${index + 1}: Size is required`)
      }
      if (!item.color || typeof item.color !== 'string') {
        errors.push(`Item ${index + 1}: Color is required`)
      }
    })
  }

  if (data.shippingInfo) {
    if (!data.shippingInfo.fullName || data.shippingInfo.fullName.trim().length < 2) {
      errors.push('Full name is required')
    }
    if (!data.shippingInfo.phone || !isValidPhone(data.shippingInfo.phone)) {
      errors.push('Valid phone number is required')
    }
    if (!data.shippingInfo.address || data.shippingInfo.address.trim().length < 10) {
      errors.push('Complete address is required')
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Validate user registration data
export const validateRegistrationData = (data: any): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Valid email is required')
  }

  if (!data.password || !isValidPassword(data.password)) {
    errors.push('Password must be at least 8 characters long')
  }

  if (data.firstName && data.firstName.length > 50) {
    errors.push('First name is too long')
  }

  if (data.lastName && data.lastName.length > 50) {
    errors.push('Last name is too long')
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.push('Invalid phone number format')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Log suspicious activity
export const logSuspiciousActivity = (activity: string, details: any) => {
  logWarn(`Suspicious activity detected: ${activity}`, details)
}

// Check for common attack patterns
export const checkForAttacks = (input: string): boolean => {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /union\s+select/i,
    /drop\s+table/i,
    /insert\s+into/i,
    /delete\s+from/i,
  ]

  return suspiciousPatterns.some(pattern => pattern.test(input))
}
