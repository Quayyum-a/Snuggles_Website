import { Product } from './types'

export const products: Product[] = [
  {
    id: 'kids-next-door-tee',
    name: 'The Kids Next Door Tee',
    price: 45,
    description: 'Nostalgic cartoon vibes meet streetwear culture. Premium cotton tee featuring your favorite childhood crew.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F3ea37fd4c46e403298758b84e2afb0c0?format=webp&width=800',
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White'],
    inStock: true,
    featured: true
  },
  {
    id: 'peace-of-mind-tee',
    name: 'Peace of Mind Tee',
    price: 42,
    description: 'Colorful expression of inner peace. Bold typography that speaks to your soul and the streets.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fbe8221afd58149f88576702979408a9b?format=webp&width=800',
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White'],
    inStock: true,
    featured: true
  },
  {
    id: 'pandit-psychedelic-tee',
    name: 'PANDIT Psychedelic Tee',
    price: 48,
    description: 'Mind-expanding art meets premium streetwear. Psychedelic brain design for the conscious culture.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F16062a88c37b4e3cbc71eac11783d4b2?format=webp&width=800',
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White'],
    inStock: true,
    featured: true,
    drop: true
  },
  {
    id: 'snuggles-rainbow-hoodie',
    name: 'SNUGGLES Rainbow Hoodie',
    price: 78,
    description: 'Ultimate comfort meets vibrant expression. Premium heavyweight hoodie with rainbow SNUGGLES branding.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fa64f82ed3645429787f2c4364e39ddf7?format=webp&width=800',
    category: 'hoodie',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White'],
    inStock: true,
    featured: true
  }
]

export const getFeaturedProducts = () => products.filter(p => p.featured)
export const getDropProducts = () => products.filter(p => p.drop)
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category)
export const getProductById = (id: string) => products.find(p => p.id === id)
