import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { LanguageProvider, VisitorProvider } from "@/lib/contexts"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Thang - Software Engineer | Portfolio",
    template: "%s | Thang",
  },
  description:
    "IT Specialist focused on Software Engineering and Development. View my portfolio, projects and get in touch!",
  keywords: ["Software Engineer", "Full Stack Developer", "Portfolio", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Thang" }],
  creator: "Thang",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thang.dev",
    title: "Thang - Software Engineer | Portfolio",
    description:
      "IT Specialist focused on Software Engineering and Development. View my portfolio, projects and get in touch!",
    siteName: "Thang Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thang - Software Engineer | Portfolio",
    description:
      "IT Specialist focused on Software Engineering and Development.",
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
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <VisitorProvider>
              <div className="min-h-screen flex flex-col">
                <Navigation />
                <div className="flex-1">{children}</div>
                <Footer />
              </div>
            </VisitorProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


