"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User, Calendar, MapPin, Mail, Briefcase, Languages } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ProfileSection() {
  const { t } = useLanguage()

  const birthDate = new Date(1989, 5, 10)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const birthdayThisYear = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
  if (today < birthdayThisYear) age -= 1

  const profileItems = [
    { icon: User, label: t("profile.nationality"), value: t("profile.nationality.value") },
    { icon: Calendar, label: t("profile.age"), value: String(age) },
    { icon: MapPin, label: t("profile.location"), value: t("profile.location.value") },
    { icon: Languages, label: t("profile.jlpt"), value: t("profile.jlpt.value") },
  ]

  const experienceItems = [
    { years: "12+", label: t("profile.years.dev") },
    { years: "3", label: t("profile.years.bse") },
    { years: "2", label: t("profile.years.pm") },
    { years: "3+", label: t("profile.years.onsite") },
  ]

  return (
    <section className="py-6 md:py-8">
      <div className="flex items-center gap-4 mb-10">
        <span className="w-8 h-px bg-primary/40" />
        <h2 className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
          {t("profile.title")}
        </h2>
      </div>

      <Card className="border-border/30 bg-card/50 shadow-none hover:border-border/50 transition-colors duration-500">
        <CardContent className="p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Profile details */}
            <div className="space-y-6">
              {profileItems.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 opacity-0 animate-slide-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="h-4 w-4 text-primary/60 mt-0.5" strokeWidth={1.5} />
                  <div className="space-y-1">
                    <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-muted-foreground/70">
                      {item.label}
                    </p>
                    <p className="text-[15px] font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience summary */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Briefcase className="h-4 w-4 text-primary/60" strokeWidth={1.5} />
                <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-muted-foreground/70">
                  {t("profile.experience")}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {experienceItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="group rounded-lg bg-secondary/40 p-5 transition-all duration-300 hover:bg-secondary/60"
                  >
                    <p className="text-2xl font-semibold text-primary tracking-tight">{item.years}</p>
                    <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
