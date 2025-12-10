"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const contactLinks = [
  { icon: Mail, label: "Email", href: "mailto:hungfq@gmail.com", username: "hungfq@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/hung-fq", username: "github.com/hung-fq" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/hungfq", username: "linkedin.com/in/hungfq" },
  { icon: MessageCircle, label: "Skype", href: "skype:hungfq?chat", username: "hungfq" },
]

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-24 pb-28">
      <div className="flex items-center gap-4 mb-10">
        <span className="w-8 h-px bg-primary/40" />
        <h2 className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
          {t("contact.title")}
        </h2>
      </div>

      <Card className="border-border/30 bg-card/50 shadow-none hover:border-border/50 transition-colors duration-500">
        <CardContent className="p-8 md:p-10">
          <div className="grid gap-2 sm:grid-cols-2">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg p-4 transition-all duration-300 hover:bg-secondary/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                    <contact.icon className="h-4 w-4 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-foreground">{contact.label}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{contact.username}</p>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-muted-foreground/0 group-hover:text-muted-foreground/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
