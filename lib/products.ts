import { Product } from './types'

export const products: Product[] = [
  {
    id: 'snuggles-pandit-tee',
    name: 'PANDIT Psychedelic Tee',
    price: 65,
    description: 'Mind-bending vibes from Lagos to the world. Premium cotton with psychedelic street art design.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F39e25d9778c8423db7ee03df6ca707b4?format=webp&width=800',
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    inStock: true,
    featured: true,
    drop: true
  },
  {
    id: 'peace-of-mind-tee',
    name: 'Peace of Mind Tee',
    price: 60,
    description: 'Street wisdom meets comfort. Bold graphics that speak to the culture.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F77d62b4b7b584ebf89da3bac8ee55789?format=webp&width=800',
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Gold'],
    inStock: true,
    featured: true
  },
  {
    id: 'kids-next-door-tee',
    name: 'The Kids Next Door Tee',
    price: 55,
    description: 'Nostalgic vibes with a Lagos twist. For the culture, by the culture.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F49dab3b2da1b46b48f7c4280df20127c?format=webp&width=800',
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    inStock: true,
    featured: true
  },
  {
    id: 'snuggles-rainbow-hoodie',
    name: 'Rainbow Comfort Hoodie',
    price: 95,
    description: 'Where Lagos streets meet rainbow dreams. Premium comfort in streetwear form.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F6f4925ee968d401a9f2da1cf1e7dbb55?format=webp&width=800',
    category: 'hoodie',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Gold'],
    inStock: true,
    featured: true
  },
  {
    id: 'snuggles-signature-hoodie',
    name: 'Signature Hoodie',
    price: 120,
    description: 'The ultimate comfort statement. Clean, minimal, iconic.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F9e19d8a73d134af9973606731912a2f0?format=webp&width=800',
    category: 'hoodie',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Gold'],
    inStock: true,
    featured: true
  },
  {
    id: 'classic-logo-tee-black',
    name: 'Classic Logo Tee',
    price: 60,
    description: 'Essential streetwear. Clean logo, maximum impact.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fea9e5bb4c4ca400385b64c3ccbe15480?format=webp&width=800',
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Gold'],
    inStock: true
  },
  {
    id: 'flame-logo-tshirt',
    name: 'Flame Logo T-shirt',
    price: 65,
    description: 'Heat meets street. Bold flame graphics for the fearless.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F544614f86cb2497b89733fe849a763aa?format=webp&width=800',
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    inStock: true,
    drop: true
  },
  {
    id: 'black-snuggles-hoodie',
    name: 'Black Snuggles Hoodie',
    price: 125,
    description: 'Premium comfort in stealth mode. The hoodie that started it all.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F8913997f619f45b0a79dccb89fba6c87?format=webp&width=800',
    category: 'hoodie',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gold'],
    inStock: true
  }
]

export const getFeaturedProducts = () => products.filter(p => p.featured)
export const getDropProducts = () => products.filter(p => p.drop)
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category)
export const getProductById = (id: string) => products.find(p => p.id === id)
