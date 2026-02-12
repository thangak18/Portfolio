"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight, ArrowDown, Facebook, Github, Linkedin, Mail,
  MapPin, GraduationCap, ExternalLink, Code, Palette, Zap,
  Heart, ChevronRight, Award, BookOpen, Users, Lock
} from "lucide-react"
import { LinkedInIcon, FacebookIcon, InstagramIcon, GoogleDevIcon } from "@/components/brand-icons"
import Link from "next/link"
import Image from "next/image"
import { useLanguage, useVisitor } from "@/lib/contexts"
import { certificates, communities } from "@/lib/data"
import { useState, useEffect, useRef } from "react"

/* ── Animated counter ─────────────────────────────────────── */
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let n = 0
    const inc = end / (duration / 16)
    const t = setInterval(() => {
      n += inc
      if (n >= end) { setCount(end); clearInterval(t) } else setCount(Math.floor(n))
    }, 16)
    return () => clearInterval(t)
  }, [visible, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ── Section with scroll-reveal ───────────────────────────── */
function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <section id={id} ref={ref} className={`transition-all duration-1000 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}>
      {children}
    </section>
  )
}

/* ══════════════════════════════════════════════════════════ */
export default function Home() {
  const { t } = useLanguage()
  const { visitorCount } = useVisitor()

  /* typing effect */
  const fullText = "Software Engineer"
  const [typed, setTyped] = useState("")
  useEffect(() => {
    let i = 0
    const id = setInterval(() => { setTyped(fullText.slice(0, ++i)); if (i >= fullText.length) clearInterval(id) }, 80)
    return () => clearInterval(id)
  }, [])

  /* ── data ─────────────────────────────────────────────── */
  const skillCategories = [
    { title: "Programming Languages", skills: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "HTML5", "CSS3", "Swift"] },
    { title: "Frameworks & Libraries", skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Vite"] },
    { title: "Tools & Platforms", skills: ["Git", "GitHub", "Docker", "VS Code", "IntelliJ IDEA", "MongoDB", "SQL Server", "Firebase"] },
    { title: "AI Tools", skills: ["ChatGPT", "Claude", "Gemini", "GitHub Copilot", "DeepSeek"] },
  ]
  const allSkills = skillCategories.flatMap(c => c.skills)

  const projects = [
    {
      id: 1, title: "Valentine's Day Surprise", category: "❤️ Interactive", featured: true,
      description: "A full-stack Valentine's experience featuring an interactive frontend built with Angular, TypeScript and CSS, backed by a scalable Java Spring Boot application. Data is securely managed in MySQL, and the entire solution is containerized with Docker for easy deployment.",
      highlights: ["Interactive UI with romantic animations", "Robust Java Spring Boot Backend", "Containerized with Docker & MySQL Database"],
      technologies: ["Angular", "Java", "Spring Boot", "TypeScript", "MySQL", "Docker", "CSS", "HTML"],
      githubUrl: "https://github.com/thangak18/Valentine-", liveUrl: "http://www.valentine-nhi.duckdns.org", isPrivate: true,
      image: "/A1.png"
    },
    {
      id: 2, title: "Instant Messaging System", category: "💬 Desktop App", featured: true,
      description: "A robust desktop messaging application built with Java, featuring real-time communication. Download the demo, extract the zip, and run the ZaloClient app to experience it.",
      highlights: ["Real-time messaging with Java Sockets", "Secure authentication & file transfer", "Desktop client for macOS and Windows"],
      technologies: ["Java", "JavaFX", "Socket", "PostgreSQL", "Threads"],
      githubUrl: "https://github.com/thangak18/Instant-Messaging-System-Project", liveUrl: "/InstantMessagingApp_macOS.zip", isPrivate: false,
      image: "/A2.png"
    },
    {
      id: 3, title: "Online Auction System", category: "🛒 E-commerce", featured: true,
      description: "A feature-rich online auction platform that allows users to bid on items in real-time. Includes user authentication, product management, and bidding history tracking.",
      highlights: ["Real-time bidding system", "User & Admin dashboards", "Payment integration"],
      technologies: ["React", "Node.js", "PostgreSQL", "HTML5", "CSS", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/hungtmh/online-auction-system", liveUrl: "", isPrivate: false,
      image: "/A3.png"
    },
  ]

  /* ═══════════════════════  JSX  ═══════════════════════════ */
  return (
    <main className="min-h-screen">

      {/* ====== HERO ====== */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* animated background blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ── LEFT: Text content ── */}
            <div className="space-y-6">
              {/* Role badge */}
              <div className="animate-fade-in">
                <Badge className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
                  <Code className="h-4 w-4 mr-2" />
                  Software Engineering
                </Badge>
              </div>

              {/* Main title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent animate-gradient">
                  Thang
                </span>
              </h1>

              {/* Typing subtitle */}
              <div className="flex items-center gap-3 text-xl md:text-2xl text-muted-foreground animate-slide-up-delay-1">
                <span className="text-primary font-mono">&lt;/&gt;</span>
                <span className="font-mono">
                  {typed}<span className="animate-pulse text-primary">|</span>
                </span>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg animate-slide-up-delay-2">
                IT Specialist focused on Software Engineering and Development. Currently pursuing Information Technology at HCMUS.
              </p>

              {/* Academic progress */}
              <div className="max-w-sm animate-slide-up-delay-2">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Academic Journey</span>
                  <span className="font-semibold text-primary">80%</span>
                </div>
                <Progress value={80} className="h-2.5 mb-1" />
                <p className="text-xs text-muted-foreground">Semester 7/12 • Currently Studying</p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 animate-slide-up-delay-3">
                <Button asChild size="lg" className="group px-8 rounded-full">
                  <Link href="#projects">
                    {t("hero.viewWork")}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group px-8 rounded-full">
                  <Link href="#contact">{t("hero.contactMe")}</Link>
                </Button>
              </div>

              {/* Social icons */}
              <div className="flex space-x-3 animate-slide-up-delay-4">
                {[
                  { href: "https://github.com/thangak18", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/th%E1%BA%AFng-nguy%E1%BB%85n-598741283/", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://www.facebook.com/nguyen.thang.739214/", icon: Facebook, label: "Facebook" },
                  { href: "mailto:thangak18@gmail.com", icon: Mail, label: "Email" },
                ].map((s) => (
                  <Link key={s.label} href={s.href}
                    className="p-3 rounded-full border bg-background/50 hover:bg-primary/10 hover:border-primary/30 hover:text-primary text-muted-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}>
                    <s.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Code editor card ── */}
            <div className="hidden lg:block animate-slide-up-delay-2">
              <div className="relative">
                {/* Glow effect behind card */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />

                {/* Code editor window */}
                <div className="relative bg-card border rounded-2xl shadow-2xl overflow-hidden">
                  {/* Title bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                      <span className="text-primary">&gt;_</span>
                      <span>developer.ts</span>
                    </div>
                    <div className="w-16" />
                  </div>

                  {/* Code content */}
                  <div className="p-6 font-mono text-sm leading-7">
                    <div className="flex">
                      <span className="text-muted-foreground/50 w-8 text-right mr-4 select-none">1</span>
                      <span><span className="text-blue-500">const</span> <span className="text-foreground">developer</span> <span className="text-muted-foreground">=</span> <span className="text-muted-foreground">{"{"}</span></span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground/50 w-8 text-right mr-4 select-none">2</span>
                      <span className="ml-6"><span className="text-primary">name</span><span className="text-muted-foreground">:</span> <span className="text-green-500">&quot;Nguyen Thang&quot;</span><span className="text-muted-foreground">,</span></span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground/50 w-8 text-right mr-4 select-none">3</span>
                      <span className="ml-6"><span className="text-primary">role</span><span className="text-muted-foreground">:</span> <span className="text-green-500">&quot;Software Engineer&quot;</span><span className="text-muted-foreground">,</span></span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground/50 w-8 text-right mr-4 select-none">4</span>
                      <span className="ml-6"><span className="text-primary">skills</span><span className="text-muted-foreground">:</span> <span className="text-muted-foreground">[</span><span className="text-orange-500">&apos;Java&apos;</span><span className="text-muted-foreground">,</span> <span className="text-orange-500">&apos;Python&apos;</span><span className="text-muted-foreground">,</span> <span className="text-orange-500">&apos;C#&apos;</span><span className="text-muted-foreground">,</span> <span className="text-orange-500">&apos;DevOps&apos;</span><span className="text-muted-foreground">,</span> <span className="text-orange-500">&apos;Cloud&apos;</span><span className="text-muted-foreground">],</span></span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground/50 w-8 text-right mr-4 select-none">5</span>
                      <span className="ml-6"><span className="text-primary">passion</span><span className="text-muted-foreground">:</span> <span className="text-green-500">&apos;Building amazing apps&apos;</span><span className="text-muted-foreground">,</span></span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground/50 w-8 text-right mr-4 select-none">6</span>
                      <span className="ml-6"><span className="text-primary">available</span><span className="text-muted-foreground">:</span> <span className="text-blue-500">true</span></span>
                    </div>
                    <div className="flex">
                      <span className="text-muted-foreground/50 w-8 text-right mr-4 select-none">7</span>
                      <span><span className="text-muted-foreground">{"}"}</span><span className="text-muted-foreground">;</span></span>
                    </div>
                  </div>
                </div>

                {/* Floating terminal button */}
                <div className="absolute -bottom-3 -left-3 bg-card border rounded-xl shadow-lg p-3 animate-float" style={{ animationDelay: "0.5s" }}>
                  <span className="text-primary font-mono text-lg">&gt;_</span>
                </div>

                {/* Floating code button */}
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-xl shadow-lg p-3 animate-float" style={{ animationDelay: "1s" }}>
                  <Code className="h-5 w-5" />
                </div>
              </div>
            </div>

          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2">
              <span className="text-xs">Scroll Down</span>
              <ArrowDown className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== ABOUT ====== */}
      <Section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1">About Me</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Background</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Passionate about technology, software development, and building innovative solutions</p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image & University */}
            <div className="space-y-6">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/personal.jpg"
                  alt="Profile"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <Card className="bg-primary/5 border-primary/10">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-sm shrink-0">
                    <Image src="/logo.jpeg" alt="HCMUS" width={40} height={40} className="object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">HCMUS</h4>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Bio */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Software Engineer & Cloud Enthusiast</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m a Software Engineer with a strong foundation in Java, and Python, currently pursuing my degree in Information Technology at HCMUS. I am passionate about building scalable, high-performance applications and optimizing development workflows.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My focus is on mastering DevOps practices and Cloud technologies to deliver reliable software solutions. I am eager to contribute to innovative projects, expand my technical expertise, and drive value through efficient engineering.
                </p>
              </div>


            </div>
          </div>
        </div>
      </Section>

      {/* ====== SKILLS ====== */}
      <Section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1">Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies &amp; Tools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Proficient in modern development tools and technologies</p>
          </div>

          {/* Marquee with Logos */}
          <div className="relative overflow-hidden mb-16 py-8">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
              {[
                { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
                { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
                { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                // Duplicate for seamless loop
                { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
                { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
                { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
              ].map((tool, i) => (
                <div key={i} className="flex flex-col items-center gap-3 bg-card border rounded-xl p-6 min-w-[140px] shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-12 h-12">
                    <Image src={tool.src} alt={tool.name} fill className="object-contain" />
                  </div>
                  <span className="font-semibold text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Categories Grid */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Programming Languages */}
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
                    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                  ].map(s => (
                    <Badge key={s.name} variant="secondary" className="px-3 py-1.5 text-sm flex gap-2 items-center hover:bg-primary/10 cursor-default">
                      <Image src={s.icon} alt={s.name} width={16} height={16} /> {s.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Frameworks & Libraries */}
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Frameworks & Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
                    { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
                    { name: "ASP.NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
                    { name: "Entity Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
                  ].map(s => (
                    <Badge key={s.name} variant="secondary" className="px-3 py-1.5 text-sm flex gap-2 items-center hover:bg-primary/10 cursor-default">
                      <Image src={s.icon} alt={s.name} width={16} height={16} className="object-contain" /> {s.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Platforms */}
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
                    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
                    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
                    { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
                    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                    { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
                    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
                    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                    { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
                    { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
                    { name: "Xcode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" },
                  ].map(s => (
                    <Badge key={s.name} variant="secondary" className="px-3 py-1.5 text-sm flex gap-2 items-center hover:bg-primary/10 cursor-default">
                      <Image src={s.icon} alt={s.name} width={16} height={16} /> {s.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>


            {/* AI Tools */}
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg font-bold">AI Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
                    { name: "Gemini", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
                    { name: "DeepSeek", icon: "https://avatars.githubusercontent.com/u/146604297?s=200&v=4" }, // Correct DeepSeek org logo on GitHub
                    { name: "Perplexity", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Perplexity_AI_logo.svg" },
                    { name: "Cursor", icon: "https://avatars.githubusercontent.com/u/126786655?s=200&v=4" }, // Cursor AI logo
                    { name: "Antigravity", icon: "https://cdn-icons-png.flaticon.com/512/3468/3468087.png" }, // Using a "Rocket" or "Future" icon for Antigravity
                  ].map(s => (
                    <Badge key={s.name} variant="secondary" className="px-3 py-1.5 text-sm flex gap-2 items-center hover:bg-primary/10 cursor-default">
                      <Image src={s.icon} alt={s.name} width={16} height={16} className="object-contain" /> {s.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Tools Section - Previous position (removed) */}


        </div>
      </Section>

      {/* ====== PROJECTS ====== */}
      <Section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1">Projects</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A selection of my best projects</p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.featured).map((proj) => (
              <Card key={proj.id} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="p-4 pb-0 flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">{proj.category}</Badge>
                  <Badge className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30 text-xs">⭐ Featured</Badge>
                </div>
                {/* @ts-ignore */}
                {proj.image && (
                  <div className="relative w-full aspect-video mt-2">
                    {/* @ts-ignore */}
                    <Image src={proj.image} alt={proj.title} fill className="object-cover" />
                  </div>
                )}
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{proj.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{proj.description}</p>
                  <ul className="space-y-1">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>{h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs px-2 py-0.5">{t}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    {proj.isPrivate ? (
                      <Button variant="outline" size="sm" className="flex-1 cursor-not-allowed opacity-80" disabled>
                        <Lock className="h-3.5 w-3.5 mr-1.5" /> Private Project
                      </Button>
                    ) : (
                      proj.githubUrl && proj.githubUrl !== "#" && (
                        <Button asChild size="sm" variant="outline" className="flex-1">
                          <Link href={proj.githubUrl} target="_blank"><Github className="h-3.5 w-3.5 mr-1.5" />Code</Link>
                        </Button>
                      )
                    )}
                    {proj.liveUrl && (
                      <Button asChild size="sm" className="flex-1">
                        <Link href={proj.liveUrl} target="_blank" download={proj.liveUrl.endsWith(".zip")}>
                          <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                          {proj.liveUrl.endsWith(".zip") ? "Download" : "Demo"}
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/projects">View All Projects<ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* ====== CERTIFICATES ====== */}
      <Section id="certificates" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1">Credentials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Professional certifications and recognition for continuous learning</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" />📜 Certificates</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {certificates.slice(0, 3).map((c, i) => (
                  <Card key={i} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="relative w-full aspect-[4/3] bg-muted/20 border-b">
                      {c.image ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="relative w-full h-full cursor-pointer hover:opacity-90 transition-opacity">
                              <Image src={c.image} alt={c.title} fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none">
                            <DialogTitle className="sr-only">{c.title}</DialogTitle>
                            <div className="relative w-full h-[80vh]">
                              <Image src={c.image} alt={c.title} fill className="object-contain" />
                            </div>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary/10">
                          <Award className="h-8 w-8 text-primary" />
                        </div>
                      )}
                    </div>
                    <CardContent className="p-5 text-left">
                      <p className="text-sm font-semibold text-primary mb-1">{c.issuer}</p>
                      <h4 className="font-bold text-lg leading-tight group-hover:text-primary/80 transition-colors">{c.title}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline" size="lg" className="group">
                  <Link href="/certificates">View All My Certifications<ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* ====== COMMUNITY ====== */}
      <Section id="community" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1">Community</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Forums &amp; Tech Communities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Active participation in developer communities and tech events</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {communities.map((cm, i) => (
              <Card key={i} className="hover:shadow-lg transition-all duration-300 overflow-hidden group">
                {cm.image && (
                  <div className="relative w-full aspect-video md:aspect-[21/9] bg-white border-b">
                    <Image src={cm.image} alt={cm.name} fill className="object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    {!cm.image && (
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"><Users className="h-7 w-7 text-primary" /></div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cm.name}</h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{cm.description}</p>
                        </div>
                        <Link href={cm.link} target="_blank" className="shrink-0">
                          <Button variant="outline" size="icon" className="group/btn"><ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" /></Button>
                        </Link>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {cm.tags.map((tg) => <Badge key={tg} variant="secondary" className="px-3 py-1">{tg}</Badge>)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* ====== CONTACT ====== */}
      <Section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1">Contact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Feel free to reach out for opportunities or collaborations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            {/* Left Column: Contact Info */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <Link href="mailto:thangak18@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">thangak18@gmail.com</Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">Ho Chi Minh City, Vietnam</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">University</h4>
                    <p className="text-sm text-muted-foreground">HCMUS</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Social Links */}
            <div className="flex flex-col justify-center h-full">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Connect With Me</h3>
                <p className="text-muted-foreground">Find me on these platforms</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "LinkedIn", href: "https://www.linkedin.com/in/th%E1%BA%AFng-nguy%E1%BB%85n-598741283/", icon: LinkedInIcon, color: "text-[#0077b5]" },
                  { name: "GitHub", href: "https://github.com/thangak18", icon: Github, color: "text-foreground" },
                  { name: "Facebook", href: "https://www.facebook.com/nguyen.thang.739214/", icon: FacebookIcon, color: "text-[#1877f2]" },
                  { name: "Instagram", href: "https://www.instagram.com/", icon: InstagramIcon, color: "text-[#E1306C]" },
                  { name: "Google for Developers", href: "https://developers.google.com/profile/u/109377312233026751269?hl=vi", icon: GoogleDevIcon, color: "" },
                ].map((sc) => (
                  <Link key={sc.name} href={sc.href} target="_blank">
                    <Card className="hover:shadow-md transition-all hover:-translate-y-1 h-full group">
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-3 h-full">
                        <sc.icon className={`h-8 w-8 ${sc.color} transition-transform group-hover:scale-110`} />
                        <span className="text-xs font-medium">{sc.name}</span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
