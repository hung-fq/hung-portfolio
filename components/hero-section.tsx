"use client"

import { MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 relative">
      <div className="absolute top-8 left-0 w-16 h-px bg-primary/60 animate-fade-in" />

      <div className="space-y-10">
        <div className="space-y-5 opacity-0 animate-fade-up">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-primary">{t("hero.title")}</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground">Hung Pham</h1>
        </div>

        <p className="max-w-lg text-base md:text-lg leading-[1.8] text-muted-foreground opacity-0 animate-fade-up animation-delay-100">
          {t("hero.description")}
        </p>

        <div className="flex items-center gap-2.5 text-muted-foreground/80 opacity-0 animate-fade-up animation-delay-200">
          <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span className="text-[13px] tracking-wide">{t("hero.location")}</span>
        </div>
      </div>
    </section>
  )
}
