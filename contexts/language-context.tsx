"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "ja" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  ja: {
    // Navigation
    "nav.about": "概要",
    "nav.experience": "経歴",
    "nav.chat": "チャット",

    // Hero
    "hero.title": "シニアフルスタックエンジニア",
    "hero.description":
      "12年以上のソフトウェア開発経験を持つフルスタックエンジニア。Java、Android開発を専門とし、日本企業向けのエンタープライズソリューションを提供。",
    "hero.location": "ベトナム・バリア＝ブンタウ省",

    // Profile
    "profile.title": "プロフィール",
    "profile.nationality": "国籍",
    "profile.nationality.value": "ベトナム",
    "profile.age": "年齢",
    "profile.location": "所在地",
    "profile.location.value": "ベトナム・バリア＝ブンタウ省",
    "profile.experience": "経験概要",
    "profile.years.dev": "年 ソフトウェア開発",
    "profile.years.bse": "年 ブリッジSE",
    "profile.years.pm": "年 プロジェクトマネージャー",
    "profile.years.onsite": "年以上 日本駐在",

    // Skills
    "skills.title": "スキル",

    // Contact
    "contact.title": "お問い合わせ",

    // Experience
    "experience.title": "経歴",
    "experience.description":
      "これまでのキャリアで携わった主要プロジェクト。Webアプリケーション、モバイル開発、エンタープライズシステムなど。",
    "experience.onsite": "日本駐在",
    "experience.onsite.6months": "6ヶ月間 日本駐在",

    // Projects
    "project.school.title": "学校管理システム",
    "project.school.role": "プロジェクトマネージャー",
    "project.school.description": "日本の学校向けの生徒、教師、管理業務を管理するWebアプリケーション。",

    "project.dj.title": "DJコントローラーアプリ",
    "project.dj.role": "プロジェクトリーダー",
    "project.dj.description":
      "Bluetooth経由でDJコントローラーハードウェアと連携し、プロフェッショナルなオーディオミキシングを実現するモバイルアプリケーション。",

    "project.music.title": "音楽再生アプリ",
    "project.music.role": "ブリッジSE",
    "project.music.description": "音楽・動画の購入およびストリーミングサービス向けのAndroid & iOSアプリケーション。",

    "project.container.title": "コンテナサービスシステム",
    "project.container.role": "PL / BSE",
    "project.container.description": "RancherとDockerを統合したコンテナオーケストレーション・管理用Webシステム。",

    "project.api.title": "API統合システム",
    "project.api.role": "ブリッジSE",
    "project.api.description": "企業クライアント向けにAWSとNTT ECLサービスを接続する統合プラットフォーム。",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.chat": "Chat",

    // Hero
    "hero.title": "Senior Full-stack Engineer",
    "hero.description":
      "Full-stack engineer with 12+ years of experience building robust software systems. Specialized in Java, Android, and delivering enterprise solutions for Japanese clients.",
    "hero.location": "Ba Ria - Vung Tau, Vietnam",

    // Profile
    "profile.title": "Profile",
    "profile.nationality": "Nationality",
    "profile.nationality.value": "Vietnamese",
    "profile.age": "Age",
    "profile.location": "Location",
    "profile.location.value": "Ba Ria - Vung Tau, Vietnam",
    "profile.experience": "Experience Summary",
    "profile.years.dev": "Years Software Development",
    "profile.years.bse": "Years Bridge SE",
    "profile.years.pm": "Years Project Manager",
    "profile.years.onsite": "Years Onsite in Japan",

    // Skills
    "skills.title": "Skills",

    // Contact
    "contact.title": "Contact",

    // Experience
    "experience.title": "Experience",
    "experience.description":
      "A collection of notable projects I've worked on throughout my career, spanning web applications, mobile development, and enterprise systems.",
    "experience.onsite": "Onsite in Japan",
    "experience.onsite.6months": "6 months onsite in Japan",

    // Projects
    "project.school.title": "School Management System",
    "project.school.role": "Project Manager",
    "project.school.description":
      "Web application for Japanese schools to manage students, teachers, and administrative tasks.",

    "project.dj.title": "Deejay Controller App",
    "project.dj.role": "Project Leader",
    "project.dj.description":
      "Mobile application interacting with DJ controller hardware via Bluetooth for professional audio mixing.",

    "project.music.title": "Music Play App",
    "project.music.role": "Bridge SE",
    "project.music.description": "Android & iOS application for music and video purchase and streaming services.",

    "project.container.title": "Container Service System",
    "project.container.role": "PL / BSE",
    "project.container.description":
      "Web system integrated with Rancher and Docker for container orchestration and management.",

    "project.api.title": "APIs Integration System",
    "project.api.role": "Bridge SE",
    "project.api.description": "Integration platform connecting AWS and NTT ECL services for enterprise clients.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ja")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
