"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export function ExperienceTimeline() {
  const { t } = useLanguage()

  const projects = [
    {
      titleKey: "project.freelance.title",
      roleKey: "project.freelance.role",
      periodKey: "project.freelance.period",
      descriptionKey: "project.freelance.description",
      tasksKeys: [
        "project.freelance.tasks.1",
        "project.freelance.tasks.2",
        "project.freelance.tasks.3",
        "project.freelance.tasks.4",
      ],
      tech: ["Next.js", "TypeScript", "Vercel", "ChatGPT", "OpenAI API", "Codex", "Cline", "V0"],
      highlightKey: "experience.ai",
    },
    {
      titleKey: "project.school.title",
      roleKey: "project.school.role",
      periodKey: "project.school.period",
      descriptionKey: "project.school.description",
      tasksKeys: [
        "project.school.tasks.1",
        "project.school.tasks.2",
        "project.school.tasks.3",
        "project.school.tasks.4",
        "project.school.tasks.5",
      ],
      tech: ["Java", "Spring Boot", "Vue.js", "REST API", "MyBatis", "PostgreSQL"],
    },
    {
      titleKey: "project.dj.title",
      roleKey: "project.dj.role",
      periodKey: "project.dj.period",
      descriptionKey: "project.dj.description",
      tasksKeys: ["project.dj.tasks.1", "project.dj.tasks.2"],
      tech: ["Kotlin", "Objective-C", "C++", "RBX Framework", "MIDI", "BLE"],
    },
    {
      titleKey: "project.callcenter.title",
      roleKey: "project.callcenter.role",
      periodKey: "project.callcenter.period",
      descriptionKey: "project.callcenter.description",
      tasksKeys: ["project.callcenter.tasks.1", "project.callcenter.tasks.2"],
      tech: ["Asterisk", "Kamailio", "sipml5", "AWS EC2", "AWS S3", "AWS VPC"],
    },
    {
      titleKey: "project.music.title",
      roleKey: "project.music.role",
      periodKey: "project.music.period",
      descriptionKey: "project.music.description",
      tasksKeys: ["project.music.tasks.1", "project.music.tasks.2", "project.music.tasks.3"],
      tech: [
        "Java",
        "Swift",
        "Objective-C",
        "Firebase (FCM)",
        "Firebase Analytics",
        "Firebase Crashlytics",
        "GCM",
        "RESTful API",
        "SQLite",
        "Fabric",
        "DeployGate",
        "Bitrise",
      ],
      highlightKey: "experience.onsite",
    },
    {
      titleKey: "project.container.title",
      roleKey: "project.container.role",
      periodKey: "project.container.period",
      descriptionKey: "project.container.description",
      tasksKeys: ["project.container.tasks.1", "project.container.tasks.2", "project.container.tasks.3"],
      tech: ["Java", "Spring MVC", "Docker", "Rancher", "PostgreSQL"],
    },
    {
      titleKey: "project.api.title",
      roleKey: "project.api.role",
      periodKey: "project.api.period",
      descriptionKey: "project.api.description",
      tasksKeys: ["project.api.tasks.1", "project.api.tasks.2", "project.api.tasks.3"],
      tech: [
        "AWS",
        "NTT ECL",
        "Spring MVC",
        "JPA",
        "Hibernate",
        "PostgreSQL",
        "Swagger UI",
        "Thymeleaf",
        "Java",
        "HTML",
        "JavaScript",
        "CSS",
      ],
      highlightKey: "experience.onsite.6months",
    },
    {
      titleKey: "project.disaster.title",
      roleKey: "project.disaster.role",
      periodKey: "project.disaster.period",
      descriptionKey: "project.disaster.description",
      tasksKeys: ["project.disaster.tasks.1", "project.disaster.tasks.2"],
      tech: ["HTML", "JavaScript", "CSS", "Bootstrap", "CentOS", "PostgreSQL"],
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
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="w-fit text-[10px] font-medium tracking-wide border-border/50 text-muted-foreground"
                    >
                      {t(project.roleKey)}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="w-fit text-[10px] font-medium tracking-wide bg-secondary/50 text-muted-foreground"
                    >
                      {t(project.periodKey)}
                    </Badge>
                  </div>
                </div>
                {project.highlightKey && (
                  <Badge className="w-fit mt-2 bg-primary/10 text-primary text-[10px] font-medium tracking-wide hover:bg-primary/15 transition-colors">
                    {t(project.highlightKey)}
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="space-y-5 px-6 pb-6 md:px-8 md:pb-8">
                <p className="text-[13px] leading-[1.8] text-muted-foreground whitespace-pre-line">
                  {t(project.descriptionKey)}
                </p>
                {project.tasksKeys && (
                  <div className="space-y-2">
                    <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
                      {t("experience.responsibilities")}
                    </p>
                    <ul className="space-y-1.5 text-[12px] leading-[1.8] text-muted-foreground">
                      {project.tasksKeys.map((taskKey) => (
                        <li key={taskKey} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          <span>{t(taskKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
