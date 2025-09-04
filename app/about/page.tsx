"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Heart, Flutter } from "lucide-react"
import { useLanguage } from "@/lib/contexts"

export default function About() {
  const { t } = useLanguage()

  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "TypeScript", level: 70 },
    { name: "Node.js", level: 65 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Git", level: 80 },
    { name: "Python", level: 80},
    { name: "C++", level: 90},
    { name: "SQL server", level: 85},
    { name: "MongoDB", level: 70},
    { name: "Docker", level: 65},
    { name: "Angular", level: 20},
    { name: "Flutter", level: 20},
  ]

  const interests = [
    { icon: Code, title: t('about.interests.cleanCode'), description: t('about.interests.cleanCodeDesc') },
    { icon: Palette, title: t('about.interests.uiux'), description: t('about.interests.uiuxDesc') },
    { icon: Zap, title: t('about.interests.performance'), description: t('about.interests.performanceDesc') },
    { icon: Heart, title: t('about.interests.opensource'), description: t('about.interests.opensourceDesc') },
    { icon: Flutter, title: t('about.interests.flutter'), description: t('about.interests.flutterDesc') },
  ]

  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">{t('about.title')}</h1>

        {/* Introduction */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-lg leading-relaxed mb-6">
                {t('about.intro')}
              </p>
              <p className="text-lg leading-relaxed mb-6">
                {t('about.journey')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('about.personal')}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">{t('about.skills')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interests */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">{t('about.interests')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {interests.map((interest) => (
                <div key={interest.title} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <interest.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{interest.title}</h3>
                    <p className="text-muted-foreground">{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fun Facts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{t('about.funFacts')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">{t('about.coffee')}</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">{t('about.languages')}</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">{t('about.passion')}</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Badge variant="secondary">{t('about.badges.coffee')}</Badge>
              <Badge variant="secondary">{t('about.badges.hiking')}</Badge>
              <Badge variant="secondary">{t('about.badges.opensource')}</Badge>
              <Badge variant="secondary">{t('about.badges.learner')}</Badge>
              <Badge variant="secondary">{t('about.badges.solver')}</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
