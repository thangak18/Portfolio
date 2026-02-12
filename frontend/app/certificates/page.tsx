
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { certificates } from "@/lib/data"

export default function CertificatesPage() {
    return (
        <div className="container mx-auto px-4 py-20 min-h-screen">
            <div className="mb-12">
                <Button asChild variant="ghost" className="mb-8 group">
                    <Link href="/#certificates" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </Button>
                <div className="text-center">
                    <Badge variant="outline" className="mb-4 px-4 py-1">Credentials</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">My Certifications</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A complete list of my professional certifications.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                            <h3 className="font-bold text-lg leading-tight mb-4 group-hover:text-primary/80 transition-colors">{cert.title}</h3>

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
        </div>
    )
}
