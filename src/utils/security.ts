/**
 * Security utilities for input validation and sanitization
 */

/**
 * Sanitize user input to prevent XSS attacks
 * Removes potentially dangerous characters and HTML tags
 */
export const sanitizeInput = (input: string): string => {
  if (!input || typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .slice(0, 1000); // Limit length to prevent DoS
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  if (!email) return true; // Email is optional
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Validate phone number format
 */
export const isValidPhone = (phone: string): boolean => {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,20}$/;
  return phoneRegex.test(phone);
};

/**
 * Validate unit number format
 */
export const isValidUnitNumber = (unitNumber: string): boolean => {
  if (!unitNumber) return false;
  const unitRegex = /^[A-Za-z0-9\-\s]{1,20}$/;
  return unitRegex.test(unitNumber);
};

/**
 * Validate name format
 */
export const isValidName = (name: string): boolean => {
  if (!name) return false;
  const nameRegex = /^[A-Za-z\s\-\.]{1,100}$/;
  return nameRegex.test(name);
};

/**
 * Rate limiting helper for client-side operations
 */
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  
  isAllowed(key: string, maxAttempts: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < windowMs);
    
    if (validAttempts.length >= maxAttempts) {
      return false;
    }
    
    // Add current attempt
    validAttempts.push(now);
    this.attempts.set(key, validAttempts);
    
    return true;
  }
}

export const rateLimiter = new RateLimiter();