"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "./language-toggle"
import { Download } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const { t } = useLanguage()
  const [cvOpen, setCvOpen] = useState(false)
  const [cvPassword, setCvPassword] = useState("")
  const [cvError, setCvError] = useState("")

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
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-border/50 px-3 py-1.5 text-[11px] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground hover:border-border"
              onClick={() => {
                setCvOpen(true)
                setCvPassword("")
                setCvError("")
              }}
            >
              <Download className="h-3.5 w-3.5" strokeWidth={1.5} />
              CV
            </button>
            <LanguageToggle />
          </div>
        </div>
      </nav>
      {cvOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-xl border border-border/40 bg-background p-6 shadow-lg">
            <h3 className="text-sm font-semibold text-foreground">CV Download</h3>
            <p className="mt-2 text-xs text-muted-foreground">Enter the password to download.</p>
            <input
              type="password"
              value={cvPassword}
              onChange={(e) => setCvPassword(e.target.value)}
              className="mt-4 w-full rounded-md border border-border/50 bg-transparent px-3 py-2 text-sm text-foreground outline-none focus:border-border"
              placeholder="Password"
            />
            {cvError && <p className="mt-2 text-xs text-destructive">{cvError}</p>}
            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                type="button"
                className="rounded-md px-3 py-2 text-xs text-muted-foreground hover:text-foreground"
                onClick={() => setCvOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-md bg-foreground px-3 py-2 text-xs font-medium text-background hover:opacity-90"
                onClick={() => {
                  const expected = process.env.NEXT_PUBLIC_CV_PASSWORD
                  if (!expected || cvPassword !== expected) {
                    setCvError("Incorrect password.")
                    return
                  }
                  setCvOpen(false)
                  window.location.href = "/CV/Pham_Quoc_Hung_CV_JP_2026.pdf"
                }}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
