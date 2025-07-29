import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

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
      <body className={`${spaceGrotesk.className} bg-white text-gray-900 antialiased`} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
