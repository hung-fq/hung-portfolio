"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "ja" ? "en" : "ja")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-[12px] font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 h-8 px-3"
    >
      <Globe className="h-3.5 w-3.5" strokeWidth={1.5} />
      <span>{language === "ja" ? "EN" : "日本語"}</span>
    </Button>
  )
}
