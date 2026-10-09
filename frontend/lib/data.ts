
export const certificates = [
    { title: "The Complete Full-Stack Web Development Bootcamp", issuer: "Udemy", date: "2025", url: "#", image: "/C1.jpg" },
    { title: "Agentic Coding: Full-Stack Java Apps with Cursor and Copilot", issuer: "Udemy", date: "2026", url: "#", image: "/C2.jpg" },
    { title: "Gemini Certified Student", issuer: "Google", date: "2026", url: "#", image: "/C3.png" },
    { title: "Gemini Certified Faculty", issuer: "Google", date: "2026", url: "#", image: "/C4.png" },
    { title: "Build with AI Ho Chi Minh City", issuer: "Google Developer Groups HCMC", date: "2026", url: "#", image: "/C23.jpg.png" },
    { title: "Foundations of Project Management", issuer: "Google", date: "2025", url: "#", image: "/C6.png" },
]



export interface HonorItem {
  id: string
  title: string
  award: string
  issuer: string
  team?: string
  date: string
  highlight: string
  description: string
  tags: string[]
  image: string
  metrics?: string
  proofLabel?: string
}

export const honors: HonorItem[] = [
  {
    id: "datathon-2026",
    title: "VinUniversity Datathon 'The Gridbreaker' 2026",
    award: "Top 10 Finalist (Ranked 10th)",
    issuer: "VinUniversity & Vingroup",
    team: "GenCore Team",
    date: "2026",
    metrics: "Top 10 / 50 Grand Finalists (500+ teams nationwide)",
    highlight: "Outperformed 500+ teams and 2,000+ contestants across Vietnam",
    description:
      "Tackled large-scale electrical grid data modeling, anomaly detection, and predictive machine learning algorithms under intensive hackathon time constraints. Ranked 10th in the Grand Finale among the top 50 qualified teams nationwide.",
    tags: ["Big Data", "Machine Learning", "Grid Modeling", "Python", "Data Science"],
    image: "/C24.jpg",
    proofLabel: "View Datathon Certificate",
  },
  {
    id: "hsu-ai-driven-2026",
    title: "HSU AI-Driven Challenge 2026 (AI Security)",
    award: "3rd Runner Up / Top Finalist",
    issuer: "Hoa Sen University (HSU)",
    team: "Team Firewall404",
    date: "2026",
    metrics: "Top Finalist & Podium Award",
    highlight: "Sàng lọc rủi ro, làm chủ an ninh AI (AI Security & Guardrails)",
    description:
      "Awarded 3rd Runner Up at the HSU AI-Driven Challenge 2026 under the theme 'Mitigating Risks, Mastering AI Security'. Engineered Machine Learning & guardrail models to classify input prompt safety, detect data leakage risks, and defend against adversarial AI manipulation.",
    tags: ["AI Security", "Machine Learning", "Prompt Safety", "Adversarial Defense", "Python"],
    image: "/hsu-ai-driven.jpg",
    proofLabel: "View HSU Award Certificate",
  },
  {
    id: "studyjams-2026",
    title: "Study Jams / GenAI Express Demo Day 2026",
    award: "Second Runner-up (Á quân)",
    issuer: "Saigon University & GDG on Campus SGU",
    team: "Core Builder",
    date: "2026",
    metrics: "Podium Finish · Top 3 Teams",
    highlight: "Rapid GenAI Prototyping & Solution Architecture",
    description:
      "Engineered an applied AI prototype demonstrating practical generative AI workflows and modern cloud architecture, achieving 2nd Runner-up at the annual university AI demo day.",
    tags: ["Generative AI", "Agentic Systems", "Google Cloud", "FastAPI"],
    image: "/C8.jpg",
    proofLabel: "View Recognition Certificate",
  },
]

export const achievements = [
  { title: "Top 10 Datathon 2026", issuer: "GenCore Team (Member)", date: "2026", url: "#", image: "/C24.jpg" },
  { title: "3rd Runner Up - HSU AI-Driven Challenge 2026", issuer: "Hoa Sen University", date: "2026", url: "#", image: "/hsu-ai-driven.jpg" },
  { title: "Second Runner-up - Study Jams 2026", issuer: "Saigon University", date: "2026", url: "#", image: "/C8.jpg" },
]

export const communities = [
    {
        name: "Google Developer Group HCMC",
        description: "Active member of Google Developer Groups Ho Chi Minh City, participating in tech talks, workshops, and networking events focused on Google technologies and modern development practices.",
        tags: ["GDG", "Google Cloud", "Android", "Web Development", "Firebase"],
        link: "https://gdg.community.dev/gdg-ho-chi-minh-city/",
        image: "/C7.png"
    },
]

export const experiences = [
    {
        company: "Netcompany",
        logo: "/netcompany-logo.svg",
        location: "Remote",
        role: "IT Accelerator Intern",
        date: "Jul 2026 – Present",
        duration: "",
        descriptions: [
            "Participating in the development of the After Dark Management Application (ADMA), a back-office financial and operational hub for managing corporate social initiatives. Engaging in a full software development lifecycle within an Agile environment, taking part in architecture design, database modeling, and MVP implementation.",
            "Building scalable backend workflows for budget forecasting, event operations, expense tracking, and dynamic approval processes to streamline internal management."
        ],
        technologies: ["Agile", "Architecture Design", "Database Modeling", "Backend Workflows", "MVP"]
    }
]
