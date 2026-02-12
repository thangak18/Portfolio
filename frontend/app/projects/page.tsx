"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Lock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/contexts"

export default function Projects() {
  const { t } = useLanguage()

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
      highlights: ["Real-time messaging with Java Sockets", "Secure authentication & file transfer", "Desktop client for macOS"],
      technologies: ["Java", "JavaFX", "Socket", "PostgreSQL", "Threads"],
      githubUrl: "https://github.com/thangak18/Instant-Messaging-System-Project", liveUrl: "/InstantMessagingApp_macOS.zip", isPrivate: false,
      image: "/A2.png"
    },
    {
      id: 3, title: "Online Auction System", category: "🛒 E-commerce", featured: true,
      description: "A feature-rich online auction platform that allows users to bid on items in real-time. Includes user authentication, product management, and bidding history tracking.",
      highlights: ["Real-time bidding system", "User & Admin dashboards", "Secure payment integration"],
      technologies: ["Java", "Spring Boot", "MySQL", "HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/hungtmh/online-auction-system", liveUrl: "", isPrivate: false,
      image: "/A3.png"
    },
    {
      id: 4, title: "GoMall E-commerce", category: "🛍️ E-commerce", featured: true,
      description: "A modern e-commerce platform built with Next.js and Sanity CMS. Features a responsive design, product management, and seamless checkout experience.",
      highlights: ["Modern UI/UX with Next.js", "Content management with Sanity", "Responsive design"],
      technologies: ["Node.js", "React", "JavaScript", "HTML5", "MongoDB"],
      githubUrl: "https://github.com/Alterix53/SE_GoMall", liveUrl: "", isPrivate: false,
      image: "/A4.png"
    },
    {
      id: 5,
      title: "Virtual Background",
      category: "🤖 Computer Vision",
      featured: true,
      description: "A computer vision application that performs real-time background subtraction and replacement using MediaPipe. High-performance image processing for seamless virtual environment integration.",
      highlights: ["Real-time background removal", "Optimized with MediaPipe", "Dynamic background replacement"],
      technologies: ["Python", "OpenCV", "NumPy", "MediaPipe"],
      githubUrl: "https://github.com/thangak18/Virtual-Background",
      liveUrl: "",
      isPrivate: true,
      image: "/A5.png"
    },
    {
      id: 6, title: "Pascal Learning Platform", category: "📚 Education", featured: true,
      description: "An interactive platform for learning Pascal programming. Features code compilation, syntax highlighting, and educational resources.",
      highlights: ["Interactive Code Editor", "Real-time Compilation", "Comprehensive Tutorials"],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/thangak18/Pascal", liveUrl: "https://pascal-ashen-kappa.vercel.app", isPrivate: false,
      image: "/A6.png"
    },
    {
      id: 7, title: "Personal Portfolio", category: "🎨 Web Design", featured: true,
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, internationalization, and smooth animations.",
      highlights: ["Responsive Design", "Dark Mode Support", "Internationalization (i18n)"],
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      githubUrl: "https://github.com/thangak18/Portfolio", liveUrl: "https://portfolio-thangak18.vercel.app", isPrivate: false,
      image: "/A7.png"
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Button asChild variant="ghost" className="group p-0 hover:bg-transparent">
            <Link href="/#projects" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </Button>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-center animate-slide-up">{t('projects.title')}</h1>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto animate-slide-up-delay-1">
          {t('projects.subtitle')}
        </p>

        {/* Featured Projects */}
        <section className="mb-16 animate-slide-up-delay-2">
          <h2 className="text-2xl font-bold mb-8">{t('projects.featured')}</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <Badge variant="secondary" className="animate-pulse-glow">Featured</Badge>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs animate-slide-up"
                        style={{ animationDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {/* @ts-ignore */}
                    {project.isPrivate ? (
                      <Button variant="outline" size="sm" className="flex-1 cursor-not-allowed opacity-80" disabled>
                        <Lock className="h-3.5 w-3.5 mr-1.5" /> Private Project
                      </Button>
                    ) : (
                      <Button asChild size="sm" variant="outline" className="flex-1 group">
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button asChild size="sm" className="flex-1 group">
                        <Link href={project.liveUrl} target="_blank" download={project.liveUrl.endsWith(".zip")}>
                          <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                          {project.liveUrl.endsWith(".zip") ? "Download" : "Demo"}
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>


        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section className="animate-slide-up-delay-3">
            <h2 className="text-2xl font-bold mb-8">{t('projects.other')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group hover:shadow-md transition-all duration-300 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs animate-slide-up"
                          style={{ animationDelay: `${techIndex * 30}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button asChild size="sm" variant="outline" className="flex-1 group">
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="h-3 w-3 mr-1 group-hover:scale-110 transition-transform" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  )
}
