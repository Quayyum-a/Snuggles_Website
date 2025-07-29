// Product data constants to avoid duplication across components
export const FEATURED_PRODUCTS = [
  {
    id: 'kids-next-door-tee',
    name: 'The Kids Next Door Tee',
    price: 18500,
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F3ea37fd4c46e403298758b84e2afb0c0?format=webp&width=800',
    category: 'TSHIRT'
  },
  {
    id: 'peace-of-mind-tee',
    name: 'Peace of Mind Tee',
    price: 17000,
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fbe8221afd58149f88576702979408a9b?format=webp&width=800',
    category: 'TSHIRT'
  },
  {
    id: 'pandit-psychedelic-tee',
    name: 'PANDIT Psychedelic Tee',
    price: 19500,
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F16062a88c37b4e3cbc71eac11783d4b2?format=webp&width=800',
    category: 'TSHIRT'
  },
  {
    id: 'snuggles-rainbow-hoodie',
    name: 'SNUGGLES Hoodie',
    price: 32000,
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fa64f82ed3645429787f2c4364e39ddf7?format=webp&width=800',
    category: 'HOODIE'
  }
]

// Reusable product card component props
export interface SimpleProduct {
  id: string
  name: string
  price: number
  image: string
  category: string
}
