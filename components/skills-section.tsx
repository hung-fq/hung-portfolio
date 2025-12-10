"use client"

import { Badge } from "@/components/ui/badge"
import { Code2, Smartphone, Globe, Server, Database, Cloud, GitBranch } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const skills = [
  { icon: Code2, name: "Java / Spring Boot" },
  { icon: Smartphone, name: "Android / Kotlin" },
  { icon: Globe, name: "Vue.js" },
  { icon: Server, name: "RESTful API" },
  { icon: Database, name: "PostgreSQL / MySQL" },
  { icon: Cloud, name: "AWS" },
  { icon: GitBranch, name: "Git / Redmine / Backlog" },
]

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-24">
      <div className="flex items-center gap-4 mb-10">
        <span className="w-8 h-px bg-primary/40" />
        <h2 className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
          {t("skills.title")}
        </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Badge
            key={skill.name}
            variant="secondary"
            className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-normal bg-secondary/50 text-secondary-foreground border border-transparent hover:border-border/50 hover:bg-secondary/70 transition-all duration-300 rounded-md cursor-default"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <skill.icon className="h-3.5 w-3.5 text-primary/60" strokeWidth={1.5} />
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  )
}
