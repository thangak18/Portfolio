"use client"

import Link from "next/link"
import { ArrowUpRight, Eye, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { useVisitor } from "@/lib/contexts"

const footerLinks = [
  ["Experience", "/#experience"],
  ["Skills", "/#skills"],
  ["Projects", "/#projects"],
  ["Credentials", "/#certificates"],
  ["Community", "/#community"],
  ["Contact", "/#contact"],
]

export default function Footer() {
  const { visitorCount } = useVisitor()

  return (
    <footer className="site-footer">
      <div className="portfolio-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="site-logo"></div>
            <p>Software engineer focused on reliable backend systems, cloud delivery, and thoughtful digital products.</p>
            <span><MapPin /> Ho Chi Minh City, Vietnam</span>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <nav>
              {footerLinks.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
            </nav>
          </div>

          <div className="footer-column footer-connect">
            <h3>Connect</h3>
            <Link href="https://github.com/thangak18" target="_blank"><Github /> GitHub <ArrowUpRight /></Link>
            <Link href="https://www.linkedin.com/in/th%E1%BA%AFng-nguy%E1%BB%85n-598741283/" target="_blank"><Linkedin /> LinkedIn <ArrowUpRight /></Link>
            <Link href="mailto:thangak18@gmail.com"><Mail /> Email <ArrowUpRight /></Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Nguyen Tan Thang. Built with precision.</p>
          <div><span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span></div>
          <span className="footer-views"><Eye /> {visitorCount.toLocaleString()} profile views</span>
        </div>
      </div>
    </footer>
  )
}
