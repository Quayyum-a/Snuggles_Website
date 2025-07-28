import { PrismaClient } from '../lib/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // Migrate existing products to database
  const products = [
    {
      id: 'kids-next-door-tee',
      name: 'The Kids Next Door Tee',
      price: 18000,
      description: 'Nostalgic cartoon vibes meet streetwear culture. Premium cotton tee featuring your favorite childhood crew.',
      category: 'TSHIRT' as const,
      images: ['https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F3ea37fd4c46e403298758b84e2afb0c0?format=webp&width=800'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White'],
      featured: true,
    },
    {
      id: 'peace-of-mind-tee',
      name: 'Peace of Mind Tee',
      price: 17000,
      description: 'Colorful expression of inner peace. Bold typography that speaks to your soul and the streets.',
      category: 'TSHIRT' as const,
      images: ['https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fbe8221afd58149f88576702979408a9b?format=webp&width=800'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White'],
      featured: true,
    },
    {
      id: 'pandit-psychedelic-tee',
      name: 'PANDIT Psychedelic Tee',
      price: 19500,
      description: 'Mind-expanding art meets premium streetwear. Psychedelic brain design for the conscious culture.',
      category: 'TSHIRT' as const,
      images: ['https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2F16062a88c37b4e3cbc71eac11783d4b2?format=webp&width=800'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White'],
      featured: true,
      isDrop: true,
    },
    {
      id: 'snuggles-rainbow-hoodie',
      name: 'SNUGGLES Rainbow Hoodie',
      price: 32000,
      description: 'Ultimate comfort meets vibrant expression. Premium heavyweight hoodie with rainbow SNUGGLES branding.',
      category: 'HOODIE' as const,
      images: ['https://cdn.builder.io/api/v1/image/assets%2Fe4be0ebfbe0245c78c482ccb62c8df0a%2Fa64f82ed3645429787f2c4364e39ddf7?format=webp&width=800'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White'],
      featured: true,
    },
  ]

  // Create products
  for (const product of products) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: product,
      create: product,
    })

    // Create inventory for each size/color combination
    for (const size of product.sizes) {
      for (const color of product.colors) {
        await prisma.productInventory.upsert({
          where: {
            productId_size_color: {
              productId: product.id,
              size,
              color,
            },
          },
          update: { quantity: 10 }, // Default stock
          create: {
            productId: product.id,
            size,
            color,
            quantity: 10,
          },
        })
      }
    }
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
