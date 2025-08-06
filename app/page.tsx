"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Facebook, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/contexts"

export default function Home() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <Image
              src="/AVT.png"
              alt="Profile Picture" 
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-primary/20 animate-float"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-slide-up">
            {t('hero.title')}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up-delay-1">
            {t('hero.subtitle')}
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay-2">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up-delay-3">
            <Button asChild size="lg" className="group animate-pulse">
              <Link href="/projects">
                {t('hero.viewWork')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/contact">
                {t('hero.contactMe')}
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up-delay-4">
            <Link
              href="https://github.com/thangak18"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              target="_blank"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/th%E1%BA%AFng-nguy%E1%BB%85n-598741283/"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              target="_blank"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link 
              href="mailto:thangak18@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.facebook.com/nguyen.thang.739214/"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              target="_blank"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/thang23.25/"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              target="_blank"
            >
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
          <h2 className="text-2xl font-bold text-center mb-12 animate-slide-up">{t('skills.title')}</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git"].map((tech, index) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-background rounded-full border text-sm font-medium animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
