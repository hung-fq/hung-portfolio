"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "./language-toggle"

export function Navigation() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const navLinks = [
    { href: "/", label: t("nav.about") },
    { href: "/experience", label: t("nav.experience") },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-14 max-w-3xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="text-[15px] font-medium text-foreground/90 hover:text-foreground transition-colors duration-300"
        >
          Hung Pham
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-[13px] font-medium tracking-wide transition-colors duration-300",
                    pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-[18px] left-0 right-0 h-px bg-foreground" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageToggle />
        </div>
      </nav>
    </header>
  )
}
