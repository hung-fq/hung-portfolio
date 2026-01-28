"use client"

import { MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="pt-8 pb-6 md:pt-10 md:pb-8 relative">
      <div className="absolute top-8 left-0 w-16 h-px bg-primary/60 animate-fade-in" />

      <div className="space-y-10">
        <div className="space-y-5 opacity-0 animate-fade-up">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-primary">{t("hero.title")}</p>
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground">
              Pham Quoc Hung
            </h1>
            <p className="text-[12px] uppercase tracking-[0.3em] text-muted-foreground">ファム・クオック・フン</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <p className="max-w-lg text-base md:text-lg leading-[1.8] text-muted-foreground opacity-0 animate-fade-up animation-delay-100">
            {t("hero.description")}
          </p>
          <div className="flex items-center justify-center rounded-2xl border border-border/40 bg-secondary/20 p-2 opacity-0 animate-fade-up animation-delay-150">
            <img
              src="/CV/Leo%20nui.jpg"
              alt="Leo nui"
              className="h-44 w-full object-contain md:h-52"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex items-center gap-2.5 text-muted-foreground/80 opacity-0 animate-fade-up animation-delay-200">
          <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span className="text-[13px] tracking-wide">{t("hero.location")}</span>
        </div>
      </div>
    </section>
  )
}
