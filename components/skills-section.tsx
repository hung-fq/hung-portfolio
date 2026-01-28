"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

const skillGroups = [
  {
    labelKey: "skills.category.languages",
    items: ["Java", "Kotlin (Android)", "Swift", "Objective-C", "SQL", "HTML", "JavaScript"],
  },
  {
    labelKey: "skills.category.frameworks",
    items: ["Spring MVC", "Spring Boot", "Spring Data JPA", "Hibernate", "MyBatis", "Vue.js", "Node.js", "Firebase"],
  },
  {
    labelKey: "skills.category.platforms",
    items: ["Windows", "Linux", "CentOS"],
  },
  {
    labelKey: "skills.category.databases",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    labelKey: "skills.category.ui",
    items: ["Swagger", "Thymeleaf"],
  },
  {
    labelKey: "skills.category.cloud",
    items: ["AWS (EC2, VPC, S3)", "NTT ECL", "Firebase (FCM, Analytics, Crashlytics)"],
  },
  {
    labelKey: "skills.category.version",
    items: ["Git", "GitLab", "Bitbucket", "SVN"],
  },
  {
    labelKey: "skills.category.tools",
    items: ["Eclipse", "STS", "Android Studio", "Xcode", "VS Code", "Sublime Text", "Atom"],
  },
  {
    labelKey: "skills.category.ai",
    items: ["ChatGPT", "OpenAI API", "Codex", "Cline", "Roo Code", "V0"],
  },
  {
    labelKey: "skills.category.devops",
    items: ["Apache Tomcat", "Bitrise", "DeployGate", "Vercel"],
  },
]

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-6 md:py-8">
      <div className="flex items-center gap-4 mb-10">
        <span className="w-8 h-px bg-primary/40" />
        <h2 className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
          {t("skills.title")}
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Card
            key={group.labelKey}
            className="border-border/30 bg-card/50 shadow-none hover:border-border/50 transition-colors duration-500"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <CardContent className="p-6 md:p-7 space-y-4">
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
                {t(group.labelKey)}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="text-[11px] font-normal bg-secondary/50 text-muted-foreground px-2.5 py-1"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
