import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import TrendingSection from '@/components/TrendingSection'
import CollectionShowcase from '@/components/CollectionShowcase'
import MustHaveSection from '@/components/MustHaveSection'
import StatsSection from '@/components/StatsSection'
import NewsletterSection from '@/components/NewsletterSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Collection Showcase */}
      <CollectionShowcase />
      
      {/* Trending Products */}
      <TrendingSection />
      
      {/* Must-Have Section */}
      <MustHaveSection />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Newsletter Section */}
      <NewsletterSection />
      
      <Footer />
    </main>
  )
}
