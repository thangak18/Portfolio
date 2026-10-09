import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Award, Trophy, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { certificates, honors } from "@/lib/data"

export default function CertificatesPage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <div className="mb-12">
        <Button asChild variant="ghost" className="mb-8 group">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </Button>
        <div className="text-center">
          <Badge variant="outline" className="mb-4 px-4 py-1">Verified Credentials</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Credentials & Honors</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Competitive outcomes from national hackathons and verified professional course certifications.
          </p>
        </div>
      </div>

      {/* ── Section 1: Hackathons & Competition Honors ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/60">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
            <Trophy className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Hackathons & Key Competition Honors</h2>
            <p className="text-sm text-muted-foreground">High-stakes competitive engineering and national hackathon outcomes</p>
          </div>
          <span className="ml-auto text-xs font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 font-semibold">
            {honors.length} Verified Honors
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {honors.map((honor) => (
            <Card key={honor.id} className="group overflow-hidden flex flex-col border-border/80 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/60 backdrop-blur-sm">
              <div className="relative w-full aspect-[16/9] bg-muted/20 border-b overflow-hidden">
                <Image
                  src={honor.image}
                  alt={honor.title}
                  fill
                  className="object-cover p-2 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-black shadow-lg">
                  <Trophy className="h-3.5 w-3.5" />
                  <span>{honor.award}</span>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col flex-1 text-left">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span className="font-semibold text-primary">{honor.issuer}</span>
                  <span className="font-mono">{honor.date}</span>
                </div>

                <h3 className="font-bold text-xl leading-snug mb-3 group-hover:text-primary transition-colors">
                  {honor.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-medium text-amber-500 mb-3 px-3 py-1.5 rounded-md bg-amber-500/10 w-fit">
                  <Sparkles className="h-3.5 w-3.5 shrink-0" />
                  <span>{honor.highlight}</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {honor.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {honor.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button type="button" className="text-xs font-medium flex items-center gap-1.5 text-primary hover:underline cursor-pointer">
                        <Award className="h-3.5 w-3.5" /> {honor.proofLabel || "Inspect Proof"} <ExternalLink className="h-3 w-3" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none">
                      <DialogTitle className="sr-only">{honor.title}</DialogTitle>
                      <div className="relative w-full h-[80vh]">
                        <Image src={honor.image} alt={honor.title} fill className="object-contain" />
                      </div>
                    </DialogContent>
                  </Dialog>
                  {honor.team && <span className="text-xs text-muted-foreground font-mono">{honor.team}</span>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Section 2: Professional Certifications ── */}
      <section className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/60">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Professional Certifications</h2>
            <p className="text-sm text-muted-foreground">Foundations in software engineering, cloud, and generative AI</p>
          </div>
          <span className="ml-auto text-xs font-mono px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
            {certificates.length} Certifications
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-muted/20 border-b">
                {cert.image ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative w-full h-full cursor-pointer hover:opacity-90 transition-opacity">
                        <Image src={cert.image} alt={cert.title} fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none">
                      <DialogTitle className="sr-only">{cert.title}</DialogTitle>
                      <div className="relative w-full h-[80vh]">
                        <Image src={cert.image} alt={cert.title} fill className="object-contain" />
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                )}
              </div>
              <CardContent className="p-5 flex flex-col flex-1 text-left">
                <p className="text-sm font-semibold text-primary mb-1">{cert.issuer}</p>
                <h3 className="font-bold text-base leading-tight mb-4 group-hover:text-primary/80 transition-colors">{cert.title}</h3>

                <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50 w-full">
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                  {cert.url && cert.url !== "#" && (
                    <Link href={cert.url} target="_blank" className="text-xs flex items-center gap-1 text-primary hover:underline group/link">
                      Verify <ExternalLink className="h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
