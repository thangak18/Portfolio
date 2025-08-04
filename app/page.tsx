import { Button } from "@/components/ui/button"
import { ArrowRight, Facebook, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="/AVT.png"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-primary/20"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Hi, I'm Thang
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fresher Web Developer | Passionate about building user-friendly apps
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            I create modern, responsive web applications using React, Next.js, and TypeScript. Always eager to learn new
            technologies and solve complex problems through clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/thangak18"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/th%E1%BA%AFng-nguy%E1%BB%85n-598741283/"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="mailto:thangak18@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.facebook.com/nguyen.thang.739214/"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/thang23.25/"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              {/* Replace with an Instagram SVG icon since 'Instagram' is not defined */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect
                  width="18"
                  height="18"
                  x="3"
                  y="3"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="17"
                  cy="7"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Skills Preview */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Technologies I Work With</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git"].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-background rounded-full border text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
