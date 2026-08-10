"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Calendar,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  ServerCog,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { achievements, certificates, communities, experiences } from "@/lib/data"


const projects = [
  {
    id: "threatlens",
    title: "ThreatLens",
    category: "Data" as const,
    eyebrow: "Security intelligence platform",
    description:
      "A threat intelligence and vulnerability management platform that turns security signals into clear, actionable risk insights.",
    highlights: ["Real-time threat detection", "Vulnerability assessment and reporting", "Security risk analytics"],
    technologies: ["Python", "React", "Node.js", "MongoDB", "Docker"],
    image: "/C8.jpg",
    githubUrl: "https://github.com/thtcsec/ThreatLens",
    liveUrl: "",
    isPrivate: false,
  },
  {
    id: "eduvault",
    title: "EduVault",
    category: "Software" as const,
    eyebrow: "Cloud learning platform",
    description:
      "A scalable online learning platform connecting a Spring Boot API with a modern Next.js experience and a cloud-ready deployment workflow.",
    highlights: ["Spring Boot and Next.js integration", "Containerized development environment", "Deployed on AWS"],
    technologies: ["Spring Boot", "Next.js", "PostgreSQL", "Docker", "AWS"],
    image: "/B1.png",
    githubUrl: "",
    liveUrl: "https://eduvault-frontend-159888619461.asia-southeast1.run.app/",
    isPrivate: true,
  },
  {
    id: "auction",
    title: "Online Auction System",
    category: "Software" as const,
    eyebrow: "Real-time commerce experience",
    description:
      "A full-stack auction platform with real-time bidding, user and administrator workspaces, product management, and bidding history.",
    highlights: ["Real-time bidding flow", "User and admin dashboards", "Payment-ready architecture"],
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "/A3.png",
    githubUrl: "https://github.com/hungtmh/online-auction-system",
    liveUrl: "",
    isPrivate: false,
  },
]

const skillGroups = [
  {
    number: "01",
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "HTML / CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" }
    ],
  },
  {
    number: "02",
    title: "Frameworks",
    icon: Layers3,
    skills: [
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
    ],
  },
  {
    number: "03",
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
      { name: "CI / CD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" }
    ],
  },
  {
    number: "04",
    title: "Data & Workflow",
    icon: ServerCog,
    skills: [
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Git / GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "REST APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
      { name: "AI Tools", logo: "" }
    ],
  },
]

const focusAreas = [
  { icon: ServerCog, title: "Backend systems", text: "Reliable APIs, clear domain logic, and maintainable service architecture." },
  { icon: Cloud, title: "Cloud delivery", text: "Containerized applications and practical deployment workflows." },
  { icon: Layers3, title: "Full-stack products", text: "Cohesive experiences from data model to responsive interface." },
]

function RevealSection({
  id,
  className = "",
  children,
}: {
  id: string
  className?: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id={id} className={`portfolio-section reveal-section ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </section>
  )
}

function SectionHeading({ label, title, copy }: { number?: string; label: string; title: string; copy: string }) {
  return (
    <div className="section-heading">
      <div className="section-kicker">
        <Sparkles className="kicker-icon" />
        <span>{label}</span>
      </div>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  )
}

export default function Home() {

  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const shellRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 650)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const shell = shellRef.current
    if (!shell) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const coarsePointer = window.matchMedia("(pointer: coarse)")
    let animationFrame = 0

    const updateScrollMotion = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1)
        shell.style.setProperty("--hero-progress", progress.toFixed(3))
      })
    }

    const updatePointerMotion = (event: PointerEvent) => {
      if (reducedMotion.matches || coarsePointer.matches) return

      shell.style.setProperty("--pointer-x", `${event.clientX}px`)
      shell.style.setProperty("--pointer-y", `${event.clientY}px`)

      const target = event.target as HTMLElement | null
      const card = target?.closest<HTMLElement>("[data-glow-card]")
      if (!card) return

      const rect = card.getBoundingClientRect()
      card.style.setProperty("--card-x", `${event.clientX - rect.left}px`)
      card.style.setProperty("--card-y", `${event.clientY - rect.top}px`)
    }

    updateScrollMotion()
    window.addEventListener("scroll", updateScrollMotion, { passive: true })
    window.addEventListener("pointermove", updatePointerMotion, { passive: true })

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("scroll", updateScrollMotion)
      window.removeEventListener("pointermove", updatePointerMotion)
    }
  }, [])

  const movePortrait = (event: React.PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    event.currentTarget.style.setProperty("--portrait-tilt-x", `${(-y * 3.2).toFixed(2)}deg`)
    event.currentTarget.style.setProperty("--portrait-tilt-y", `${(x * 3.2).toFixed(2)}deg`)
  }

  const resetPortrait = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--portrait-tilt-x", "0deg")
    event.currentTarget.style.setProperty("--portrait-tilt-y", "0deg")
  }


  return (
    <main ref={shellRef} className="portfolio-shell">
      <section id="home" className="hero-section">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div style={{ width: '100%' }}>
          <div className="portfolio-container hero-layout">
          <div className="hero-copy">


            <div>
              <p className="hero-overline">Software Engineering · HCMUS</p>
              <h1>
                Hi, I&apos;m <span>Nguyen Tan Thang.</span>
              </h1>
            </div>

            <div className="hero-role">
              <Code2 aria-hidden="true" />
              <span>Software Engineer</span>
            </div>

            <p className="hero-description">
              I build reliable backend systems and modern digital products, with a focus on scalable APIs, cloud technologies,
              and thoughtful full-stack experiences.
            </p>

            <div className="hero-actions">
              <Link href="#projects" className="portfolio-button portfolio-button-primary">
                View projects <ArrowRight />
              </Link>
              <Link href="/immersive" className="portfolio-button portfolio-button-secondary">
                <Sparkles /> Zen Space
              </Link>
            </div>

            <div className="hero-socials" aria-label="Social links">
              <Link href="https://github.com/thangak18" target="_blank" aria-label="GitHub"><Github /></Link>
              <Link href="https://www.linkedin.com/in/th%E1%BA%AFng-nguy%E1%BB%85n-598741283/" target="_blank" aria-label="LinkedIn"><Linkedin /></Link>
              <Link href="mailto:thangak18@gmail.com" aria-label="Email"><Mail /></Link>
              <span className="hero-location"><MapPin /> Ho Chi Minh City, Vietnam</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Nguyen Tan Thang profile" onPointerMove={movePortrait} onPointerLeave={resetPortrait}>
            <div className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
            <div className="portrait-orbit portrait-orbit-two" aria-hidden="true" />
            <div className="portrait-frame">
              <div className="portrait-meta portrait-meta-top">
                <span>HCMUS</span>
                <span>EST. 2027</span>
              </div>
              <Image src="/Personal.jpg" alt="Nguyen Tan Thang" fill priority sizes="(max-width: 768px) 86vw, 430px" />
              <div className="portrait-fade" aria-hidden="true" />
            </div>

            <div className="profile-terminal">
              <div className="terminal-bar">
                <div><span /><span /><span /></div>
                <span>profile.json</span>
                <span className="terminal-status"><i /> online</span>
              </div>
              <div className="terminal-code">
                <p><b>"name"</b>: <span>"Nguyen Tan Thang"</span>,</p>
                <p><b>"role"</b>: <span>"Software Engineer"</span>,</p>
                <p><b>"focus"</b>: [<span>"Backend"</span>, <span>"Cloud"</span>],</p>
                <p><b>"available"</b>: <em>true</em></p>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-container" style={{ marginTop: '64px', marginBottom: '64px' }}>
          <div className="focus-list">
            {focusAreas.map((focus) => (
              <div className="focus-item" key={focus.title}>
                <div><focus.icon /></div>
                <span><strong>{focus.title}</strong><small>{focus.text}</small></span>
              </div>
            ))}
          </div>
        </div>
        </div>

        <Link href="#experience" className="scroll-cue">
          <span>Scroll to explore</span>
          <ArrowDown />
        </Link>
      </section>

      <div className="profile-strip">
        <div className="portfolio-container profile-strip-grid">
          {[
            [GraduationCap, "Current", "Software Engineering student"],
            [BookOpen, "University", "HCMUS"],
            [ServerCog, "Focus", "Backend & cloud systems"],
            [BriefcaseBusiness, "Graduation", "Expected 2027"],
          ].map(([Icon, label, value]) => {
            const IconComponent = Icon as typeof GraduationCap
            return (
              <div className="profile-strip-item" key={label as string}>
                <IconComponent />
                <div><span>{label as string}</span><strong>{value as string}</strong></div>
              </div>
            )
          })}
        </div>
      </div>


      <RevealSection id="journey" className="section-surface">
        <div className="portfolio-container">
          <SectionHeading
            number="02"
            label="Journey"
            title="A foundation built one deliberate step at a time."
            copy="My academic path is where software fundamentals, real projects, and a growing interest in cloud systems come together."
          />

          <div className="journey-panel" data-glow-card>
            <div className="journey-progress"><span /></div>
            <div className="journey-steps">
              <div className="journey-step is-complete">
                <span><Check /></span>
                <small>Foundation</small>
                <strong>Programming & data structures</strong>
                <p>Core engineering thinking and problem solving.</p>
              </div>
              <div className="journey-step is-complete">
                <span><Check /></span>
                <small>Applied systems</small>
                <strong>Backend & full-stack projects</strong>
                <p>From API design to usable product experiences.</p>
              </div>
              <div className="journey-step is-current">
                <span>07</span>
                <small>Now</small>
                <strong>Semester 7 of 12</strong>
                <p>Deepening cloud, deployment, and system design skills.</p>
              </div>
              <div className="journey-step">
                <span><GraduationCap /></span>
                <small>Next milestone</small>
                <strong>Graduate in 2027</strong>
                <p>Ready to contribute to ambitious engineering teams.</p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="experience">
        <div className="portfolio-container">
          <SectionHeading
            label="Experience"
            title="Work Experience"
            copy="Professional roles and technical contract projects"
          />

          <div className="experience-layout">
            <div className="experience-tabs" role="tablist">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  type="button"
                  role="tab"
                  aria-selected={activeExperienceIndex === index}
                  className={`experience-tab ${activeExperienceIndex === index ? "is-active" : ""}`}
                  onClick={() => setActiveExperienceIndex(index)}
                >
                  <div className="experience-logo">
                    <Image src={exp.logo} alt={exp.company} fill sizes="32px" />
                  </div>
                  <span>{exp.company}</span>
                </button>
              ))}
            </div>

            <div className="experience-card" data-glow-card>
              {experiences.length > 0 && (
                <div className="experience-card-inner">
                  <div className="experience-card-header">
                    <h3>{experiences[activeExperienceIndex].company}</h3>
                    <span className="experience-date-badge">
                      <Calendar className="experience-date-icon" />
                      {experiences[activeExperienceIndex].date}
                    </span>
                  </div>
                  <div className="experience-location">
                    <MapPin /> {experiences[activeExperienceIndex].location}
                  </div>

                  <hr className="experience-divider" />

                  <div className="experience-role-header">
                    <h4>{experiences[activeExperienceIndex].role}</h4>
                    {experiences[activeExperienceIndex].duration && <span>{experiences[activeExperienceIndex].duration}</span>}
                  </div>

                  <ul className="experience-bullets">
                    {experiences[activeExperienceIndex].descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>

                  <div className="experience-tags">
                    {experiences[activeExperienceIndex].technologies.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="skills">
        <div className="portfolio-container">
          <SectionHeading
            number="03"
            label="Capabilities"
            title="The tools I use to move from idea to reliable system."
            copy="A practical toolkit shaped by building, shipping, debugging, and learning across the stack."
          />

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-panel" key={group.title} data-glow-card>
                <div className="skill-panel-head">
                  <span>{group.number}</span>
                  <group.icon />
                </div>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill.name}>
                      {skill.logo && <img src={skill.logo} alt={skill.name} width={16} height={16} className="skill-logo" loading="lazy" />}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="projects" className="section-surface">
        <div className="portfolio-container">
          <SectionHeading
            number="04"
            label="Selected work"
            title="Projects shaped by real technical decisions."
            copy="A focused selection of systems where backend architecture, product thinking, and dependable delivery matter."
          />

          <div className="projects-list">
            {projects.map((project, index) => (
              <article className="project-feature" key={project.id} data-glow-card>
                <div className="project-media">
                  <Image src={project.image} alt={`${project.title} interface`} fill sizes="(max-width: 900px) 100vw, 650px" />
                  <div className="project-media-overlay" />
                  <span className="project-index">0{projects.findIndex((item) => item.id === project.id) + 1}</span>
                </div>
                <div className="project-copy">
                  <div className="project-category"><span>{project.category}</span><span>{project.eyebrow}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.highlights.map((highlight) => <li key={highlight}><Check /> {highlight}</li>)}
                  </ul>
                  <div className="project-tech">
                    {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  <div className="project-actions">
                    {project.githubUrl ? (
                      <Link href={project.githubUrl} target="_blank"><Github /> Source code <ExternalLink /></Link>
                    ) : (
                      <span className="private-project"><LockKeyhole /> Private repository</span>
                    )}
                    {project.liveUrl && <Link href={project.liveUrl} target="_blank">Live experience <ArrowRight /></Link>}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="section-cta">
            <Link href="/projects" className="portfolio-button portfolio-button-secondary">
              Explore all projects <ChevronRight />
            </Link>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="certificates">
        <div className="portfolio-container">
          <SectionHeading
            number="05"
            label="Credentials"
            title="Evidence of continuous learning and meaningful progress."
            copy="Certificates build the foundation. Achievements show what happens when that learning is put into practice."
          />

          <div className="credentials-layout">
            <div>
              <div className="subsection-heading"><BookOpen /><h3>Certifications</h3><span>{certificates.length.toString().padStart(2, "0")}</span></div>
              <div className="certificate-grid">
                {certificates.slice(0, 3).map((certificate) => (
                  <Dialog key={certificate.title}>
                    <DialogTrigger asChild>
                      <button className="certificate-card" type="button">
                        <span className="certificate-image"><Image src={certificate.image} alt={certificate.title} fill sizes="(max-width: 768px) 100vw, 320px" /></span>
                        <span className="certificate-copy"><small>{certificate.issuer} · {certificate.date}</small><strong>{certificate.title}</strong><em>View credential <ExternalLink /></em></span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="credential-dialog">
                      <DialogTitle className="sr-only">{certificate.title}</DialogTitle>
                      <div className="credential-preview"><Image src={certificate.image} alt={certificate.title} fill sizes="90vw" /></div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
              <Link href="/certificates" className="inline-text-link">View all certifications <ArrowRight /></Link>
            </div>

            <div>
              <div className="subsection-heading achievement-heading"><Trophy /><h3>Achievements</h3><span>{achievements.length.toString().padStart(2, "0")}</span></div>
              <div className="achievement-list">
                {achievements.map((achievement, index) => (
                  <Dialog key={achievement.title}>
                    <DialogTrigger asChild>
                      <button className="achievement-card" type="button">
                        <span className="achievement-number">0{index + 1}</span>
                        <span className="achievement-icon"><Award /></span>
                        <span className="achievement-copy"><small>{achievement.issuer}</small><strong>{achievement.title}</strong><em>{achievement.date}</em></span>
                        <ArrowRight className="achievement-arrow" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="credential-dialog">
                      <DialogTitle className="sr-only">{achievement.title}</DialogTitle>
                      <div className="credential-preview"><Image src={achievement.image} alt={achievement.title} fill sizes="90vw" /></div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="community" className="section-surface">
        <div className="portfolio-container">
          <SectionHeading
            number="06"
            label="Community"
            title="Learning grows faster when it is shared."
            copy="I stay close to the developer community through events, technical discussions, and hands-on learning."
          />

          {communities.map((community) => (
            <article className="community-feature" key={community.name} data-glow-card>
              <div className="community-image"><Image src={community.image} alt={community.name} fill sizes="(max-width: 900px) 100vw, 560px" /></div>
              <div className="community-copy">
                <div className="community-label"><Users /> Active community</div>
                <h3>{community.name}</h3>
                <p>{community.description}</p>
                <div>{community.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <Link href={community.link} target="_blank">Visit community <ExternalLink /></Link>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection id="contact" className="contact-section">
        <div className="portfolio-container">
          <div className="contact-panel" data-glow-card>
            <div className="contact-glow" aria-hidden="true" />
            <div className="contact-kicker"><Sparkles /> Available for new conversations</div>
            <h2>Let&apos;s build something useful together.</h2>
            <p>
              I&apos;m open to internship opportunities, software engineering collaborations, open-source work, and thoughtful
              conversations about technology.
            </p>
            <div className="contact-actions">
              <Link href="mailto:thangak18@gmail.com" className="portfolio-button portfolio-button-primary">Start a conversation <Mail /></Link>
              <Link href="https://github.com/thangak18" target="_blank" className="portfolio-button portfolio-button-secondary">Explore GitHub <Github /></Link>
            </div>
            <div className="contact-meta">
              <span><Mail /> thangak18@gmail.com</span>
              <span><MapPin /> Ho Chi Minh City, Vietnam</span>
              <span><GraduationCap /> HCMUS</span>
            </div>
          </div>
        </div>
      </RevealSection>

      <button
        type="button"
        className={`back-to-top ${showBackToTop ? "is-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp />
      </button>
    </main>
  )
}
