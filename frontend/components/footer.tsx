"use client"

import Link from "next/link"
import Image from "next/image"
import { Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage, useVisitor } from "@/lib/contexts"

export default function Footer() {
  const { t } = useLanguage()
  const { visitorCount } = useVisitor()

  const quickLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "Contact", href: "/#contact" },
  ]

  const builtWith = ["React", "TypeScript", "TailwindCSS", "Next.js", "shadcn/ui"]

  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-12">
          {/* University Info */}
          <div className="md:col-span-2 flex items-start gap-4">
            <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden border bg-white">
              <Image src="/logo.jpeg" alt="HCMUS Logo" fill className="object-cover" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-lg leading-tight">University of Science - VNUHCM</h3>
              <p className="text-sm text-muted-foreground">Faculty of Information Technology</p>
              <p className="text-sm text-muted-foreground">Major: Software Engineering</p>
              <p className="text-sm text-muted-foreground">Expected: 2027</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Built With */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {builtWith.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs font-normal bg-secondary/50 hover:bg-secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nguyen Tan Thang. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium">
              <Eye className="h-3 w-3" />
              <span>Profile Views {visitorCount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
