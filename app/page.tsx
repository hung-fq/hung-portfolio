import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ProfileSection } from "@/components/profile-section"
import { SummarySection } from "@/components/summary-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto max-w-3xl px-6 md:px-8">
        <HeroSection />
        <ProfileSection />
        <SummarySection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
