"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, GraduationCap, Sparkles, Target } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SummarySection() {
  const { t } = useLanguage()

  const summaryItems = [
    "summary.item.1",
    "summary.item.6",
    "summary.item.5",
    "summary.item.2",
    "summary.item.3",
    "summary.item.7",
    "summary.item.4",
  ]

  const educationItems = ["education.item.1", "education.item.2"]

  return (
    <section className="py-6 md:py-8">
      <div className="flex items-center gap-4 mb-10">
        <span className="w-8 h-px bg-primary/40" />
        <h2 className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
          {t("summary.title")}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/30 bg-card/50 shadow-none hover:border-border/50 transition-colors duration-500">
          <CardContent className="p-8 md:p-10 space-y-5">
            <div className="flex items-center gap-2 text-primary/80">
              <CheckCircle2 className="h-4 w-4" strokeWidth={1.5} />
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase">{t("summary.subtitle")}</p>
            </div>
            <ul className="space-y-3 text-[13px] leading-[1.9] text-muted-foreground">
              {summaryItems.map((key) => (
                <li key={key} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-border/30 bg-card/50 shadow-none hover:border-border/50 transition-colors duration-500">
            <CardContent className="p-8 md:p-10 space-y-4">
              <div className="flex items-center gap-2 text-primary/80">
                <Target className="h-4 w-4" strokeWidth={1.5} />
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase">{t("strengths.title")}</p>
              </div>
              <ul className="space-y-2 text-[13px] leading-[1.8] text-muted-foreground">
                <li>{t("strengths.item.1")}</li>
                <li>{t("strengths.item.2")}</li>
                <li>{t("strengths.item.3")}</li>
                <li>{t("strengths.item.4")}</li>
                <li>{t("strengths.item.5")}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/30 bg-card/50 shadow-none hover:border-border/50 transition-colors duration-500">
            <CardContent className="p-8 md:p-10 space-y-4">
              <div className="flex items-center gap-2 text-primary/80">
                <GraduationCap className="h-4 w-4" strokeWidth={1.5} />
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase">{t("education.title")}</p>
              </div>
              <ul className="space-y-2 text-[13px] leading-[1.8] text-muted-foreground">
                {educationItems.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/30 bg-card/50 shadow-none hover:border-border/50 transition-colors duration-500">
            <CardContent className="p-8 md:p-10 space-y-3">
              <div className="flex items-center gap-2 text-primary/80">
                <Sparkles className="h-4 w-4" strokeWidth={1.5} />
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase">{t("ai.title")}</p>
              </div>
              <p className="text-[13px] leading-[1.8] text-muted-foreground">{t("ai.description")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
