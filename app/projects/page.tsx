import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Expense Tracker App",
      description:
        "A full-stack expense tracking application with user authentication, category management, and detailed analytics. Built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      githubUrl: "https://github.com/alexjohnson/expense-tracker",
      liveUrl: "https://expense-tracker-demo.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "Weather Dashboard", 
      description:
        "A responsive weather application that displays current conditions and 5-day forecasts. Features location search and beautiful weather animations.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=200&fit=crop&crop=center",
      technologies: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
      githubUrl: "https://github.com/alexjohnson/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management Tool",
      description:
        "A collaborative task management application with drag-and-drop functionality, team collaboration features, and real-time updates.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=200&fit=crop&crop=center",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com/alexjohnson/task-manager",
      liveUrl: "https://task-manager-demo.vercel.app",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "This very website! A responsive portfolio built with Next.js, featuring dark mode, smooth animations, and optimized performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/alexjohnson/portfolio",
      liveUrl: "https://alexjohnson.dev",
      featured: false,
    },
    {
      id: 5,
      title: "E-commerce Store",
      description:
        "A modern e-commerce platform with product catalog, shopping cart, payment integration, and admin dashboard for inventory management.",
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
        <h1 className="text-4xl font-bold mb-4 text-center">My Projects</h1>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a learning journey and showcases different
          aspects of my development skills.
        </p>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
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
                    <Badge variant="secondary">Featured</Badge>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button asChild size="sm" variant="outline">
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button asChild size="sm">
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
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
        <section>
          <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-md transition-all duration-300">
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
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
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
                    <Button asChild size="sm" variant="outline" className="flex-1">
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button asChild size="sm" className="flex-1">
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-3 w-3 mr-1" />
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
        <section className="text-center mt-16 p-8 bg-muted/50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. Let's connect and see how we can
            create something amazing together!
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </section>
      </div>
    </main>
  )
}
