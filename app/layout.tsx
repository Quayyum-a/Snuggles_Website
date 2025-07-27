import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'
import CartDrawer from '@/components/CartDrawer'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SNUGGLES - Your Comfort Has Arrived',
  description: 'Premium streetwear from Lagos to the world. We dont sell clothes. We sell attitude. Energy. Community.',
  keywords: 'streetwear, premium fashion, Lagos, Nigeria, urban culture, comfort wear',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-black text-white antialiased`}>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
