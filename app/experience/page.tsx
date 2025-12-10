import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExperienceTimeline } from "@/components/experience-timeline"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto max-w-4xl px-4">
        <ExperienceTimeline />
      </main>
      <Footer />
    </div>
  )
}
