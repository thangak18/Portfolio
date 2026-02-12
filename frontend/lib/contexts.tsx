"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

interface VisitorContextType {
  visitorCount: number
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)
const VisitorContext = createContext<VisitorContextType | undefined>(undefined)

// ═══════════════════════════════════════════════════════
// TRANSLATIONS
// ═══════════════════════════════════════════════════════
const translations = {
  en: {
    /* ── Hero ── */
    "hero.title": "Hi, I'm Thang",
    "hero.subtitle": "Software Engineer | Passionate about building user-friendly applications",
    "hero.description":
      "I create modern, responsive applications using React, Next.js, TypeScript, and other technologies. Always eager to learn new technologies and solve complex problems through clean, efficient code.",
    "hero.viewWork": "View My Work",
    "hero.contactMe": "Contact Me",

    /* ── Nav ── */
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.certificates": "Certificates",
    "nav.community": "Community",
    "nav.contact": "Contact",

    /* ── Skills ── */
    "skills.title": "Technologies & Tools",

    /* ── Footer ── */
    "footer.visitors": "Visitors",
    "footer.madeWith": "Made with",
    "footer.using": "using Next.js & Tailwind CSS",

    /* ── About ── */
    "about.title": "About Me",
    "about.subtitle": "Get to know me better",
    "about.description":
      "I'm a passionate software engineer with a strong foundation in modern software development technologies.",
    "about.experience": "Experience",
    "about.education": "Education",
    "about.skills": "Skills",
    "about.interests": "Interests",
    "about.contact": "Get In Touch",
    "about.intro":
      "Hello! I'm Thang, a passionate software engineer based in Ho Chi Minh City, Vietnam. I discovered my love for programming during college and have been dedicated to creating amazing software solutions ever since.",
    "about.journey":
      "My journey started with programming fundamentals and I quickly fell in love with software development. I enjoy the problem-solving aspect of development and the satisfaction of bringing ideas to life through code.",
    "about.personal":
      "When I'm not coding, you can find me exploring new coffee shops, hiking local trails, or contributing to open-source projects. I'm always eager to learn new technologies and collaborate with other developers.",
    "about.funFacts": "Fun Facts",
    "about.coffee": "Cups of coffee per week",
    "about.languages": "Programming languages",
    "about.passion": "Passion for learning",
    "about.badges.coffee": "Coffee Enthusiast",
    "about.badges.hiking": "Hiking Lover",
    "about.badges.opensource": "Open Source Contributor",
    "about.badges.learner": "Continuous Learner",
    "about.badges.solver": "Problem Solver",
    "about.interests.cleanCode": "Clean Code",
    "about.interests.cleanCodeDesc": "Writing maintainable and readable code",
    "about.interests.uiux": "UI/UX Design",
    "about.interests.uiuxDesc": "Creating beautiful user experiences",
    "about.interests.performance": "Performance",
    "about.interests.performanceDesc": "Optimizing for speed and efficiency",
    "about.interests.opensource": "Open Source",
    "about.interests.opensourceDesc": "Contributing to the developer community",
    "about.interests.flutter": "Mobile Development",
    "about.interests.flutterDesc": "Building cross-platform mobile applications",

    /* ── Projects ── */
    "projects.title": "My Projects",
    "projects.subtitle":
      "Here are some of the projects I've worked on. Each one represents a learning journey.",
    "projects.featured": "Featured Projects",
    "projects.other": "Other Projects",
    "projects.pacman.title": "Pacman AI (DFS, BFS, UCS, A*)",
    "projects.pacman.desc":
      "An AI-driven Pacman game implementing classic search algorithms in Python to find optimal paths and strategies.",
    "projects.collaborate": "Interested in Working Together?",
    "projects.collaborateDesc":
      "I'm always open to discussing new opportunities and interesting projects. Let's connect and see how we can create something amazing together!",
    "projects.getInTouch": "Get In Touch",
    "projects.expenseTracker.title": "Expense Tracker App",
    "projects.expenseTracker.desc":
      "A full-stack expense tracking application with user authentication, category management, and detailed analytics.",
    "projects.weather.title": "Weather Dashboard",
    "projects.weather.desc":
      "A responsive weather application that displays current conditions and 5-day forecasts.",
    "projects.portfolio.title": "Portfolio Website",
    "projects.portfolio.desc":
      "This very website! A responsive portfolio built with Next.js, featuring dark mode, smooth animations, and optimized performance.",
    "projects.ecommerce.title": "E-commerce Store",
    "projects.ecommerce.desc":
      "A modern e-commerce platform with product catalog, shopping cart, payment integration, and admin dashboard.",

    /* ── Contact ── */
    "contact.title": "Get In Touch",
    "contact.subtitle":
      "I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out.",
    "contact.sendMessage": "Send Me a Message",
    "contact.contactInfo": "Contact Information",
    "contact.connectWithMe": "Connect With Me",
    "contact.letsCollaborate": "Let's Collaborate",
    "contact.alwaysInterested": "I'm always interested in:",
    "contact.frontendDev": "Frontend development projects",
    "contact.openSource": "Open source contributions",
    "contact.learning": "Learning opportunities",
    "contact.mentorship": "Mentorship and networking",
    "contact.followMe":
      "Follow me on social media to stay updated with my latest projects.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Thank you! Your message has been sent successfully.",
    "contact.error": "Sorry, there was an error sending your message. Please try again.",
    "contact.placeholder.name": "Your full name",
    "contact.placeholder.email": "your.email@example.com",
    "contact.placeholder.subject": "What's this about?",
    "contact.placeholder.message": "Tell me about your project or just say hello!",
    "contact.quickLinks": "Quick Links",
    "contact.aboutMe": "About Me",
    "contact.myProjects": "My Projects",
    "contact.alwaysOpen": "Always open to interesting conversations and opportunities.",
    "contact.brand": "Thang",
    "contact.brandDesc":
      "Software Engineer passionate about creating beautiful, functional applications that make a difference.",
  },

}

// ═══════════════════════════════════════════════════════
// PROVIDERS
// ═══════════════════════════════════════════════════════

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)[typeof language]] || key
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function VisitorProvider({ children }: { children: React.ReactNode }) {
  const [visitorCount, setVisitorCount] = useState(0)
  const hasRecorded = React.useRef(false)

  useEffect(() => {
    const recordVisit = async () => {
      if (hasRecorded.current) return
      hasRecorded.current = true

      try {
        const response = await fetch("/api/visitors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        })
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json()
        setVisitorCount(data.count)
      } catch (error) {
        console.error("Failed to record visit:", error)
      }
    }

    recordVisit()
  }, [])

  return (
    <VisitorContext.Provider value={{ visitorCount }}>
      {children}
    </VisitorContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function useVisitor() {
  const context = useContext(VisitorContext)
  if (context === undefined) {
    throw new Error("useVisitor must be used within a VisitorProvider")
  }
  return context
}
