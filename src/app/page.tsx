import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import EventTypesSection from '@/components/EventTypesSection'
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <EventTypesSection />
      <ContactSection />
    </main>
  )
}
