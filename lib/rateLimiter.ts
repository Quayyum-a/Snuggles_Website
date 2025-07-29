import { RateLimiterMemory } from "rate-limiter-flexible";
import { NextRequest } from "next/server";

// Helper to get client IP
const getClientIP = (request: NextRequest): string => {
  const forwarded = request.headers.get("x-forwarded-for");
  const real = request.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  if (real) {
    return real;
  }

  return "unknown";
};

// Different rate limiters for different endpoints
const authLimiter = new RateLimiterMemory({
  points: 5, // Number of requests
  duration: 900, // Per 15 minutes
});

const apiLimiter = new RateLimiterMemory({
  points: 100, // Number of requests
  duration: 900, // Per 15 minutes
});

const orderLimiter = new RateLimiterMemory({
  points: 10, // Number of requests
  duration: 3600, // Per hour
});

// When consuming the rate limiter, use the getClientIP function to generate the key
const consumeAuthRateLimiter = async (request: NextRequest) => {
  const ip = getClientIP(request);
  await authLimiter.consume(ip);
};

const consumeApiRateLimiter = async (request: NextRequest) => {
  const ip = getClientIP(request);
  await apiLimiter.consume(ip);
};

const consumeOrderRateLimiter = async (request: NextRequest) => {
  const ip = getClientIP(request);
  await orderLimiter.consume(ip);
};
