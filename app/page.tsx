import Hero from '@/components/Hero'
import ManifestoSection from '@/components/ManifestoSection' 
import ServicesSection from '@/components/ServicesSection'
import PhilosophySection from '@/components/PhilosophySection'
import ClienteleSection from '@/components/ClienteleSection'
import ResultsSection from '@/components/ResultsSection'
import PartnersSaySection from '@/components/PartnersSaySection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />
      <Hero />
      <ManifestoSection />
      <ServicesSection />
      <PhilosophySection />
      <ClienteleSection />
      <ResultsSection />
      <PartnersSaySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
