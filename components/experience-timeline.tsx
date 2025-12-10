"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export function ExperienceTimeline() {
  const { t } = useLanguage()

  const projects = [
    {
      titleKey: "project.school.title",
      roleKey: "project.school.role",
      descriptionKey: "project.school.description",
      tech: ["Java", "Spring Boot", "Vue.js", "PostgreSQL"],
    },
    {
      titleKey: "project.dj.title",
      roleKey: "project.dj.role",
      descriptionKey: "project.dj.description",
      tech: ["Kotlin", "Objective-C", "C++", "MIDI", "BLE"],
    },
    {
      titleKey: "project.music.title",
      roleKey: "project.music.role",
      descriptionKey: "project.music.description",
      tech: ["Java", "Swift", "Firebase", "SQLite"],
      highlightKey: "experience.onsite",
    },
    {
      titleKey: "project.container.title",
      roleKey: "project.container.role",
      descriptionKey: "project.container.description",
      tech: ["Java", "Spring MVC", "Docker", "PostgreSQL"],
    },
    {
      titleKey: "project.api.title",
      roleKey: "project.api.role",
      descriptionKey: "project.api.description",
      tech: ["Java Spring", "JPA", "Hibernate", "Swagger"],
      highlightKey: "experience.onsite.6months",
    },
  ]

  return (
    <section className="py-20 md:py-24">
      <div className="mb-14 opacity-0 animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-5">
          {t("experience.title")}
        </h1>
        <p className="text-base md:text-lg leading-[1.8] text-muted-foreground max-w-xl">
          {t("experience.description")}
        </p>
      </div>

      <div className="relative space-y-6">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/60 md:left-[11px]" />

        {projects.map((project, index) => (
          <div
            key={project.titleKey}
            className="relative pl-10 md:pl-14 opacity-0 animate-fade-up"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="absolute left-0 top-7 h-[15px] w-[15px] rounded-full border-2 border-primary/60 bg-background md:left-0 md:h-[23px] md:w-[23px] flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-primary/60 md:h-2 md:w-2" />
            </div>

            <Card className="border-border/30 bg-card/50 shadow-none hover:border-border/50 transition-all duration-500">
              <CardHeader className="pb-4 pt-6 px-6 md:px-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <CardTitle className="text-lg font-medium text-foreground tracking-tight">
                    {t(project.titleKey)}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="w-fit text-[10px] font-medium tracking-wide border-border/50 text-muted-foreground"
                  >
                    {t(project.roleKey)}
                  </Badge>
                </div>
                {project.highlightKey && (
                  <Badge className="w-fit mt-2 bg-primary/10 text-primary text-[10px] font-medium tracking-wide hover:bg-primary/15 transition-colors">
                    {t(project.highlightKey)}
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="space-y-5 px-6 pb-6 md:px-8 md:pb-8">
                <p className="text-[13px] leading-[1.8] text-muted-foreground">{t(project.descriptionKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-[11px] font-normal bg-secondary/50 text-muted-foreground px-2.5 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
