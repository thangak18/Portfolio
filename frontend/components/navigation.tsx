"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/lib/contexts"
import LanguageSwitcher from "./language-switcher"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Track scroll position for active section & navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Only track sections on home page
      if (pathname !== "/") return

      const sections = ["home", "about", "skills", "projects", "certificates", "community", "contact"]
      let current = "home"
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) current = section
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  // Navigation items – anchor links on home page, regular links on other pages
  const isHomePage = pathname === "/"

  const navigation = [
    { name: "Home", href: isHomePage ? "#home" : "/", key: "home" },
    { name: "About", href: isHomePage ? "#about" : "/#about", key: "about" },
    { name: "Skills", href: isHomePage ? "#skills" : "/#skills", key: "skills" },
    { name: "Projects", href: isHomePage ? "#projects" : "/#projects", key: "projects" },
    { name: "Certificates", href: isHomePage ? "#certificates" : "/#certificates", key: "certificates" },
    { name: "Community", href: isHomePage ? "#community" : "/#community", key: "community" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact", key: "contact" },
  ]

  const isActive = (key: string) => {
    if (isHomePage) return activeSection === key
    return false
  }

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-xl bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Thang<span className="text-primary">.</span>dev
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }
                }}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  isActive(item.key)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle, Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />

            {mounted && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="relative"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col mt-8">
                  <Link
                    href="/"
                    className="font-bold text-xl mb-8 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
                  >
                    Thang<span className="text-primary">.</span>dev
                  </Link>
                  <nav className="flex flex-col space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        onClick={(e) => {
                          if (item.href.startsWith("#")) {
                            e.preventDefault()
                            handleNavClick(item.href)
                          }
                          setIsOpen(false)
                        }}
                        className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                          isActive(item.key)
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
