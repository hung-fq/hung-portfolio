import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_JP, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hung Pham | シニアフルスタックエンジニア",
  description:
    "12年以上のソフトウェア開発経験を持つフルスタックエンジニア。Java Web、Android開発を専門とし、日本企業向けのシステム開発に従事。",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
