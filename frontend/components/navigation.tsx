"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Download, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"

const sections = [
  { label: "Home", id: "home" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Credentials", id: "certificates" },
  { label: "Community", id: "community" },
  { label: "Contact", id: "contact" },
]

export default function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === "/"

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min((window.scrollY / scrollable) * 100, 100) : 0)

      if (!isHome) return
      let current = "home"
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element && element.getBoundingClientRect().top <= 150) current = section.id
      }
      setActiveSection(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isHome])

  useEffect(() => setMenuOpen(false), [pathname])

  const hrefFor = (id: string) => (isHome ? `#${id}` : `/#${id}`)

  const navigateTo = (id: string) => {
    setMenuOpen(false)
    if (!isHome) return
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <div className="site-header-inner">
        <Link href="/" className="site-logo" aria-label="Portfolio home">
          
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={hrefFor(section.id)}
              className={isHome && activeSection === section.id ? "is-active" : ""}
              onClick={(event) => {
                if (isHome) {
                  event.preventDefault()
                  navigateTo(section.id)
                }
              }}
            >
              {section.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          {mounted && (
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle color theme"
            >
              <Sun className="theme-icon-light" />
              <Moon className="theme-icon-dark" />
            </button>
          )}
          <button type="button" className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-label">Navigation</div>
        <nav aria-label="Mobile navigation">
          {sections.map((section, index) => (
            <Link
              key={section.id}
              href={hrefFor(section.id)}
              className={isHome && activeSection === section.id ? "is-active" : ""}
              onClick={(event) => {
                if (isHome) {
                  event.preventDefault()
                  navigateTo(section.id)
                }
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {section.label}
            </Link>
          ))}
        </nav>
        <Link href="/tuyendungJava.pdf" target="_blank" className="mobile-resume-link"><Download /> Download resume</Link>
      </div>
    </header>
  )
}
