"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Instagram } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/contexts"

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual EmailJS or API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">{t('contact.title')}</h1>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{t('contact.sendMessage')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.name')} *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder={t('contact.placeholder.name')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.email')} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder={t('contact.placeholder.email')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t('contact.subject')} *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact.placeholder.subject')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.message')} *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact.placeholder.message')}
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? t('contact.sending') : t('contact.send')}
                </Button>

                {submitStatus === "success" && (
                  <p className="text-green-600 text-center">{t('contact.success')}</p>
                )}

                {submitStatus === "error" && (
                  <p className="text-red-600 text-center">
                    {t('contact.error')}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>{t('contact.contactInfo')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{t('contact.email')}</p>
                    <Link
                      href="mailto:thangak18@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      thangak18@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <Link href="tel:0396177323" className="text-muted-foreground hover:text-primary transition-colors">
                      +84 396 177 323
                    </Link>
                  </div>
                </div>  

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Ho Chi Minh city, Vietnam</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('contact.connectWithMe')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button asChild variant="outline" size="lg">
                    <Link href="https://github.com/thangak18" target="_blank">
                      <Github className="h-5 w-5 mr-2" />
                      GitHub
                    </Link>
                  </Button>

                  <Button asChild variant="outline" size="lg">
                    <Link href="https://linkedin.com/in/thangak18" target="_blank">
                      <Linkedin className="h-5 w-5 mr-2" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  {t('contact.followMe')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('contact.letsCollaborate')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{t('contact.alwaysInterested')}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {t('contact.frontendDev')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {t('contact.openSource')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {t('contact.learning')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {t('contact.mentorship')}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
