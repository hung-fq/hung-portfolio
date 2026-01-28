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
    "hero.title": "シニアフルスタックエンジニア / PM / ブリッジSE",
    "hero.description":
      "12年以上のソフトウェア開発経験を持つフルスタックエンジニア。モバイルアプリとバックエンドWebに強みがあり、日本企業向けの開発・PM・ブリッジSE業務に従事。",
    "hero.location": "ベトナム・ホーチミン市",

    // Profile
    "profile.title": "プロフィール",
    "profile.nationality": "国籍",
    "profile.nationality.value": "ベトナム",
    "profile.age": "年齢",
    "profile.location": "所在地",
    "profile.location.value": "ベトナム・ホーチミン市",
    "profile.experience": "経験概要",
    "profile.years.dev": "年 ソフトウェア開発",
    "profile.years.bse": "年 ブリッジSE",
    "profile.years.pm": "年 プロジェクトマネージャー",
    "profile.years.onsite": "年以上 日本駐在",

    // Summary
    "summary.title": "概要",
    "summary.subtitle": "ハイライト",
    "summary.item.1": "ソフトウェア開発分野で12年以上、ブリッジSE3年、PM2年の経験",
    "summary.item.2": "モバイルアプリケーションおよびバックエンドWebシステムの開発が得意",
    "summary.item.3": "Java/Springフレームワークでのバックエンド開発実績が豊富",
    "summary.item.4": "MVC・RESTful・OOP・AOP・Builder/Observer/Factoryに精通",
    "summary.item.5": "日本企業の開発プロセス・文化・業務ルールを理解",
    "summary.item.6": "日本オンサイト経験3年以上",
    "summary.item.7": "AI支援型開発を取り入れ、要件/設計の最終判断は人が責任を持って実施",

    // Education
    "education.title": "学歴・研修",
    "education.item.1": "ホーチミン市技術教育大学（ソフトウェア工学専攻）",
    "education.item.2": "VITECH：シニアマネジメントスキル研修 修了",

    // AI
    "ai.title": "AI活用",
    "ai.description":
      "要件整理・アーキテクチャ検討でAI提案を活用し、レビュー後に人が最終判断を行う開発スタイル。",

    // Strengths
    "strengths.title": "自己PR / 得意分野",
    "strengths.item.1": "モバイルとバックエンドの両方で要件〜運用まで一貫対応",
    "strengths.item.2": "日本向け開発でのブリッジ・PM経験により合意形成が得意",
    "strengths.item.3": "品質と納期のバランスを意識した進行とレビュー",

    // Skills
    "skills.title": "スキル",
    "skills.category.languages": "開発言語",
    "skills.category.frameworks": "フレームワーク",
    "skills.category.platforms": "OS / プラットフォーム",
    "skills.category.databases": "DB",
    "skills.category.ui": "UI / ドキュメント",
    "skills.category.cloud": "クラウド",
    "skills.category.version": "バージョン管理",
    "skills.category.tools": "開発ツール",
    "skills.category.ai": "AI支援ツール",
    "skills.category.devops": "デプロイ / CI",

    // Contact
    "contact.title": "お問い合わせ",

    // Experience
    "experience.title": "経歴",
    "experience.description":
      "これまでのキャリアで携わった主要プロジェクト。Web、モバイル、クラウド統合、AI支援開発まで幅広く対応。",
    "experience.onsite": "日本駐在",
    "experience.onsite.6months": "6ヶ月間 日本駐在",
    "experience.ai": "AI支援開発",
    "experience.responsibilities": "担当業務",

    // Projects
    "project.freelance.title": "AI支援型Webアプリ開発",
    "project.freelance.role": "フリーランス",
    "project.freelance.period": "2025年9月〜現在",
    "project.freelance.description":
      "AI支援ツールを活用し、要件整理から設計・実装・デプロイまでを一貫して担当。最終判断は人が行う開発プロセスを採用。",
    "project.freelance.tasks.1": "Webアプリケーションの設計および実装",
    "project.freelance.tasks.2": "AI支援ツールを用いたコーディング効率化",
    "project.freelance.tasks.3": "フロントエンド／バックエンド実装",
    "project.freelance.tasks.4": "Vercelを用いたデプロイおよび運用",

    "project.school.title": "学校管理システム",
    "project.school.role": "プロジェクトマネージャー",
    "project.school.period": "2022年7月〜2025年1月",
    "project.school.description":
      "日本の学校向けに出席・成績・連絡・日誌などを管理するWebアプリケーション。教職員の業務効率化と情報共有を支援。",
    "project.school.tasks.1": "プロジェクト計画および進行管理",
    "project.school.tasks.2": "見積作成、スケジュール管理",
    "project.school.tasks.3": "タスク／進捗管理",
    "project.school.tasks.4": "コードレビューおよび開発",
    "project.school.tasks.5": "顧客対応",

    "project.dj.title": "DJコントローラーアプリ",
    "project.dj.role": "プロジェクトリーダー",
    "project.dj.period": "2021年10月〜2022年6月",
    "project.dj.description":
      "BluetoothおよびMIDIによるデバイス通信を用い、DJコントローラーハードウェアを制御するモバイルアプリケーションを開発。",
    "project.dj.tasks.1": "進捗管理、コードレビュー",
    "project.dj.tasks.2": "開発およびメンバーサポート",

    "project.callcenter.title": "コールセンターシステム（調査フェーズ）",
    "project.callcenter.role": "ブリッジSE",
    "project.callcenter.period": "2021年5月〜2021年9月",
    "project.callcenter.description":
      "クラウド型コールセンターサービスの事前調査を担当。通話制御やシグナリングを中心に構成・技術検討を実施。",
    "project.callcenter.tasks.1": "要件整理、技術調査",
    "project.callcenter.tasks.2": "顧客折衝、進捗報告",

    "project.music.title": "音楽再生アプリ",
    "project.music.role": "ブリッジSE",
    "project.music.period": "2018年10月〜2021年4月",
    "project.music.description":
      "音楽・動画配信向けAndroid/iOSアプリの開発・運用。購入、ダウンロード、再生機能を備えたサービスを担当。",
    "project.music.tasks.1": "日本オンサイト対応",
    "project.music.tasks.2": "開発、テスト、コードレビュー",
    "project.music.tasks.3": "顧客対応",

    "project.container.title": "コンテナサービスシステム",
    "project.container.role": "PL / BSE",
    "project.container.period": "2018年3月〜2018年10月",
    "project.container.description":
      "RancherとDockerを統合し、プロジェクト・ホスト・スタックなどのリソースを一元管理するWebシステムを構築。",
    "project.container.tasks.1": "タスク・進捗管理",
    "project.container.tasks.2": "調査、テスト、コードレビュー",
    "project.container.tasks.3": "顧客対応",

    "project.api.title": "API統合システム",
    "project.api.role": "ブリッジSE",
    "project.api.period": "2017年4月〜2018年2月",
    "project.api.description":
      "AWSとNTT ECLを連携し、クラウドリソースを制御・管理するWebサービスを開発。",
    "project.api.tasks.1": "タスク・進捗管理",
    "project.api.tasks.2": "開発、テスト、コードレビュー",
    "project.api.tasks.3": "顧客対応",

    "project.disaster.title": "災害支援アプリ",
    "project.disaster.role": "開発者",
    "project.disaster.period": "2015年4月〜2016年11月",
    "project.disaster.description":
      "災害時に安否情報の登録・検索を可能にするコミュニティ向けアプリケーションを設計・開発。",
    "project.disaster.tasks.1": "開発",
    "project.disaster.tasks.2": "テスト",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.chat": "Chat",

    // Hero
    "hero.title": "Senior Full-stack Engineer / PM / Bridge SE",
    "hero.description":
      "Senior full-stack engineer with 12+ years of experience. Strong in mobile apps and backend web systems, delivering PM and bridge SE services for Japanese clients.",
    "hero.location": "Ho Chi Minh City, Vietnam",

    // Profile
    "profile.title": "Profile",
    "profile.nationality": "Nationality",
    "profile.nationality.value": "Vietnamese",
    "profile.age": "Age",
    "profile.location": "Location",
    "profile.location.value": "Ho Chi Minh City, Vietnam",
    "profile.experience": "Experience Summary",
    "profile.years.dev": "Years Software Development",
    "profile.years.bse": "Years Bridge SE",
    "profile.years.pm": "Years Project Manager",
    "profile.years.onsite": "Years Onsite in Japan",

    // Summary
    "summary.title": "Summary",
    "summary.subtitle": "Highlights",
    "summary.item.1": "12+ years in software development, including 3 years as Bridge SE and 2 years as Project Manager.",
    "summary.item.2": "Strong in mobile applications and backend web systems.",
    "summary.item.3": "Extensive backend development experience with Java/Spring.",
    "summary.item.4": "Solid grasp of MVC, RESTful, OOP, AOP, and design patterns (Builder, Observer, Factory).",
    "summary.item.5": "Familiar with Japanese development processes, culture, and business rules.",
    "summary.item.6": "3+ years of onsite experience in Japan.",
    "summary.item.7":
      "Adopts AI-assisted development while keeping requirements and architecture decisions human-led.",

    // Education
    "education.title": "Education & Training",
    "education.item.1": "Ho Chi Minh City University of Technology and Education (Software Engineering)",
    "education.item.2": "VITECH: Senior Management Skills Training (Completed)",

    // AI
    "ai.title": "AI-assisted Development",
    "ai.description":
      "Uses AI suggestions for requirements and architecture, then reviews and makes final decisions manually.",

    // Strengths
    "strengths.title": "Self-PR / Strengths",
    "strengths.item.1": "End-to-end delivery across mobile and backend, from requirements to operations.",
    "strengths.item.2": "Strong alignment and communication through bridge/PM experience for Japanese clients.",
    "strengths.item.3": "Balances quality and delivery with disciplined reviews.",

    // Skills
    "skills.title": "Skills",
    "skills.category.languages": "Languages",
    "skills.category.frameworks": "Frameworks",
    "skills.category.platforms": "OS / Platforms",
    "skills.category.databases": "Databases",
    "skills.category.ui": "UI / Docs",
    "skills.category.cloud": "Cloud",
    "skills.category.version": "Version Control",
    "skills.category.tools": "Tools",
    "skills.category.ai": "AI Tools",
    "skills.category.devops": "Deploy / CI",

    // Contact
    "contact.title": "Contact",

    // Experience
    "experience.title": "Experience",
    "experience.description":
      "Notable projects across web, mobile, cloud integration, and AI-assisted development.",
    "experience.onsite": "Onsite in Japan",
    "experience.onsite.6months": "6 months onsite in Japan",
    "experience.ai": "AI-assisted",
    "experience.responsibilities": "Responsibilities",

    // Projects
    "project.freelance.title": "AI-assisted Web Applications",
    "project.freelance.role": "Freelance",
    "project.freelance.period": "Sep 2025 - Present",
    "project.freelance.description":
      "Delivered end-to-end web apps with AI-assisted coding, while keeping requirements and architecture decisions human-led.",
    "project.freelance.tasks.1": "Designed and implemented web applications",
    "project.freelance.tasks.2": "Improved coding efficiency with AI-assisted tools",
    "project.freelance.tasks.3": "Implemented front-end and back-end features",
    "project.freelance.tasks.4": "Deployed and operated on Vercel",

    "project.school.title": "School Management System",
    "project.school.role": "Project Manager",
    "project.school.period": "Jul 2022 - Jan 2025",
    "project.school.description":
      "Web application for Japanese schools covering attendance, grades, communication, and daily reports for staff efficiency.",
    "project.school.tasks.1": "Project planning and execution management",
    "project.school.tasks.2": "Estimation and schedule management",
    "project.school.tasks.3": "Task and progress tracking",
    "project.school.tasks.4": "Code reviews and development",
    "project.school.tasks.5": "Client communication",

    "project.dj.title": "Deejay Controller App",
    "project.dj.role": "Project Leader",
    "project.dj.period": "Oct 2021 - Jun 2022",
    "project.dj.description":
      "Mobile app that controls DJ hardware via Bluetooth and MIDI, implementing device input handling and control UI.",
    "project.dj.tasks.1": "Progress management and code reviews",
    "project.dj.tasks.2": "Development and team support",

    "project.callcenter.title": "Call Center System (Research Phase)",
    "project.callcenter.role": "Bridge SE",
    "project.callcenter.period": "May 2021 - Sep 2021",
    "project.callcenter.description":
      "Pre-study for a cloud call center service, evaluating architecture, call control, signaling, and feasibility.",
    "project.callcenter.tasks.1": "Requirement analysis and technical research",
    "project.callcenter.tasks.2": "Client communication and progress reporting",

    "project.music.title": "Music Play App",
    "project.music.role": "Bridge SE",
    "project.music.period": "Oct 2018 - Apr 2021",
    "project.music.description":
      "Android & iOS app for music and video streaming, with purchase, download, playback, and ongoing maintenance.",
    "project.music.tasks.1": "Onsite support in Japan",
    "project.music.tasks.2": "Development, testing, and code reviews",
    "project.music.tasks.3": "Client support",

    "project.container.title": "Container Service System",
    "project.container.role": "PL / BSE",
    "project.container.period": "Mar 2018 - Oct 2018",
    "project.container.description":
      "Web system integrating Rancher and Docker to manage projects, hosts, stacks, and container resources.",
    "project.container.tasks.1": "Task and progress management",
    "project.container.tasks.2": "Research, testing, and code reviews",
    "project.container.tasks.3": "Client support",

    "project.api.title": "APIs Integration System",
    "project.api.role": "Bridge SE",
    "project.api.period": "Apr 2017 - Feb 2018",
    "project.api.description": "Integration platform connecting AWS and NTT ECL services for enterprise clients.",
    "project.api.tasks.1": "Task and progress management",
    "project.api.tasks.2": "Development, testing, and code reviews",
    "project.api.tasks.3": "Client support",

    "project.disaster.title": "Disaster Support App",
    "project.disaster.role": "Developer",
    "project.disaster.period": "Apr 2015 - Nov 2016",
    "project.disaster.description":
      "Community app enabling people to register and search safety information during disasters when connectivity is limited.",
    "project.disaster.tasks.1": "Development",
    "project.disaster.tasks.2": "Testing",
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
