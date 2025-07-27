import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import DropsCountdown from '@/components/DropsCountdown'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <DropsCountdown />
      <Footer />
    </main>
  )
}
