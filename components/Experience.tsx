import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLinkIcon } from "lucide-react"

const experiences = [
  {
    title: "Mobile Application Developer",
    company: "ThePrimeFit",
    period: "Nov 2023 - Present",
    description: "Lead developer of ThePrimeFit: Lifestyle mobile app, the company's flagship product.",
  },
  {
    title: "Software Engineer",
    company: "Xcentric Services",
    period: "Jan 2021 - Nov 2023",
    description: "Developed and maintained a specialty pharmacy therapy management SaaS solution, handling front-end, back-end, and mobile app development using Python, Node.js, React/React Native, and PostgreSQL.",
  },
  {
    title: "Full Stack Web Developer",
    company: "Virtoxed Technologies",
    period: "Jun 2020 - Dec 2020",
    description: "Developed full-stack web solutions using Python, PHP, and MySQL, including web scraping, API integrations, WordPress plugin development, and on-page SEO optimization.",
  },
]

export default function Experience() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <Card key={exp.title} id={`experience-${exp.company.toLowerCase().replace(/\s+/g, "-")}`}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
        <div className="flex flex-col">
          <a href="https://linkedin.com/in/cstayyab" target="_blank" className="text-center self-center flex flex-row">View All <ExternalLinkIcon className="ml-1 h-4 w-4" /></a>
        </div>
      </div>
    </section>
  )
}

