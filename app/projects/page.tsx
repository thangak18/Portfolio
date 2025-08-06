"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/contexts"

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      title: t('projects.expenseTracker.title'),
      description: t('projects.expenseTracker.desc'),
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      githubUrl: "https://github.com/alexjohnson/expense-tracker",
      liveUrl: "https://expense-tracker-demo.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: t('projects.weather.title'),
      description: t('projects.weather.desc'),
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=200&fit=crop&crop=center",
      technologies: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
      githubUrl: "https://github.com/alexjohnson/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: t('projects.taskManager.title'),
      description: t('projects.taskManager.desc'),
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=200&fit=crop&crop=center",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com/alexjohnson/task-manager",
      liveUrl: "https://task-manager-demo.vercel.app",
      featured: false,
    },
    {
      id: 4,
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.desc'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/alexjohnson/portfolio",
      liveUrl: "https://alexjohnson.dev",
      featured: false,
    },
    {
      id: 5,
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.desc'),
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop&crop=center",
      technologies: ["Next.js", "Stripe", "Sanity CMS", "Tailwind CSS"],
      githubUrl: "https://github.com/alexjohnson/ecommerce-store",
      liveUrl: "https://store-demo.vercel.app",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center animate-slide-up">{t('projects.title')}</h1>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto animate-slide-up-delay-1">
          {t('projects.subtitle')}
        </p>

        {/* Featured Projects */}
        <section className="mb-16 animate-slide-up-delay-2">
          <h2 className="text-2xl font-bold mb-8">{t('projects.featured')}</h2>
          <div className="grid lg:grid-cols-2 gap-8">
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

                  <div className="flex gap-3">
                    <Button asChild size="sm" variant="outline" className="group">
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        Code
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button asChild size="sm" className="group">
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                          Live Demo
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
                    {project.liveUrl && (
                      <Button asChild size="sm" className="flex-1 group">
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-3 w-3 mr-1 group-hover:scale-110 transition-transform" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16 p-8 bg-muted/50 rounded-lg animate-slide-up-delay-4">
          <h2 className="text-2xl font-bold mb-4">{t('projects.collaborate')}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('projects.collaborateDesc')}
          </p>
          <Button asChild size="lg" className="animate-pulse-glow">
            <Link href="/contact">{t('projects.getInTouch')}</Link>
          </Button>
        </section>
      </div>
    </main>
  )
}
