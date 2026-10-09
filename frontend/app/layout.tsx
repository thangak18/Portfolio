import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { LanguageProvider, VisitorProvider } from "@/lib/contexts"

import ZenFloatingPill from "@/components/zen-floating-pill"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono" })

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nguyen Tan Thang",
  alternateName: ["Nguyễn Tấn Thắng", "Thang Nguyen", "thangak18"],
  url: "https://portfolio-thangak18.vercel.app",
  image: "https://portfolio-thangak18.vercel.app/Personal.jpg",
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Netcompany",
    url: "https://www.netcompany.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "VNUHCM - University of Science (HCMUS)",
    alternateName: "HCMUS",
    url: "https://hcmus.edu.vn",
  },
  sameAs: [
    "https://github.com/thangak18",
    "https://www.linkedin.com/in/th%E1%BA%AFng-nguy%E1%BB%85n-598741283/",
    "mailto:thangak18@gmail.com",
  ],
  award: [
    "Top 10 Finalist - VinUniversity Datathon 'The Gridbreaker' 2026 (Team GenCore)",
    "3rd Runner Up / Top Finalist - HSU AI-Driven Challenge 2026 (Team Firewall404)",
    "Second Runner-up - Study Jams / GenAI Express Demo Day 2026 (GDG on Campus SGU)",
  ],
  knowsAbout: [
    "Software Engineering",
    "Backend Systems Architecture",
    "Java",
    "Spring Boot",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "Cloud Computing (AWS, GCP)",
    "Microservices",
    "Distributed Systems",
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-thangak18.vercel.app"),
  title: {
    default: "Nguyen Tan Thang - Software Engineer | Portfolio",
    template: "%s | Nguyen Tan Thang",
  },
  description:
    "Software Engineer focused on reliable backend systems, cloud delivery, and modern web applications. HCMUS undergraduate & Netcompany IT Accelerator Intern.",
  keywords: [
    "Nguyen Tan Thang",
    "thangak18",
    "Software Engineer",
    "Backend Developer",
    "HCMUS",
    "Netcompany",
    "Java",
    "Spring Boot",
    "Next.js",
    "Datathon 2026",
  ],
  authors: [{ name: "Nguyen Tan Thang", url: "https://github.com/thangak18" }],
  creator: "Nguyen Tan Thang",
  alternates: {
    canonical: "https://portfolio-thangak18.vercel.app",
    types: {
      "text/plain": "/llms.txt",
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://portfolio-thangak18.vercel.app",
    title: "Nguyen Tan Thang - Software Engineer | Portfolio",
    description:
      "Software Engineer focused on reliable backend systems, cloud delivery, and modern web applications. HCMUS undergraduate & Netcompany IT Accelerator Intern.",
    siteName: "Nguyen Tan Thang Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Tan Thang - Software Engineer | Portfolio",
    description:
      "Software Engineer focused on reliable backend systems, cloud delivery, and modern web applications.",
    creator: "@thangdev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <VisitorProvider>
              <div className="min-h-screen flex flex-col">
                <Navigation />
                <div className="flex-1">{children}</div>
                <Footer />
                <ZenFloatingPill />
              </div>
            </VisitorProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
