import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Heart } from "lucide-react"

export default function About() {
  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "TypeScript", level: 70 },
    { name: "Node.js", level: 65 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Git/GitHub", level: 80 },
  ]

  const interests = [
    { icon: Code, title: "Clean Code", description: "Writing maintainable and readable code" },
    { icon: Palette, title: "UI/UX Design", description: "Creating beautiful user experiences" },
    { icon: Zap, title: "Performance", description: "Optimizing for speed and efficiency" },
    { icon: Heart, title: "Open Source", description: "Contributing to the developer community" },
  ]

  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

        {/* Introduction */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-lg leading-relaxed mb-6">
                Hello! I'm Thang, a passionate fresher web developer based in Ho Chi Minh City, VietNam. I discovered my love for
                programming during college and have been dedicated to creating amazing web experiences ever since.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                My journey started with HTML and CSS, and I quickly fell in love with JavaScript and React. I enjoy the
                problem-solving aspect of development and the satisfaction of bringing ideas to life through code.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new coffee shops, hiking local trails, or contributing to
                open-source projects. I'm always eager to learn new technologies and collaborate with other developers.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Technical Skills</CardTitle>
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
            <CardTitle className="text-2xl">What I'm Passionate About</CardTitle>
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
            <CardTitle className="text-2xl">Fun Facts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Cups of coffee per week</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Programming languages</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Passion for learning</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Badge variant="secondary">Coffee Enthusiast</Badge>
              <Badge variant="secondary">Hiking Lover</Badge>
              <Badge variant="secondary">Open Source Contributor</Badge>
              <Badge variant="secondary">Continuous Learner</Badge>
              <Badge variant="secondary">Problem Solver</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
