import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import CollectionShowcase from '@/components/CollectionShowcase'
import TrendingSection from '@/components/TrendingSection'
import MustHaveSection from '@/components/MustHaveSection'
import JoinFamilySection from '@/components/JoinFamilySection'
import NewsletterSection from '@/components/NewsletterSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <StatsSection />
      <CollectionShowcase />
      <TrendingSection />
      <MustHaveSection />
      <JoinFamilySection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
