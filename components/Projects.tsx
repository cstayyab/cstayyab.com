"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon, BriefcaseIcon, CodeIcon, MonitorIcon, SmartphoneIcon, ArrowRightIcon } from "lucide-react"
import { useCallback } from "react"
import type React from "react"

const projects = [
  {
    title: "Envoy Pharmacy Portal",
    description: "A Specialty Pharmacy Therapy Management SaaS solution optimizing workflows, communication, and real-time analytics for better patient care.",
    image: "/1738308335549_envoy_patient_snapshot_blurred.webp",
    tags: ["Backbone.js", "Node.js", "PostgreSQL", "Docker", "RabbitMQ", "Python", "Power BI"],
    // github: "https://github.com/CSTayyab/e-commerce-platform",
    live: "https://envoymobile.com",
    liveLabel: 'Product Website',
    company: "Xcentric Services",
    type: "professional",
    platform: "web",
  },
  {
    title: "ThePrimeFit: Lifestyle",
    description: "ThePrimeFit: Lifestyle is a coaching app that helps users develop healthy habits with personalized workouts, gym and home training, and weight and calorie tracking.",
    image: "/primefit-lifestyle.webp",
    tags: ["React Native", "Firebase", "React Navigation", "Redux", "TypeScript"],
    company: "ThePrimeFit",
    type: "professional",
    platform: "mobile",
    playStore: "https://play.google.com/store/apps/details?id=com.primefit&hl=en",
    appStore: "https://apps.apple.com/ae/app/theprimefit-lifestyle/id6445899658",
  },
  {
    title: "WALC",
    description: "An unofficial WhatsApp Desktop client for linux desktop distros.",
    image: "https://socialify.git.ci/WAClient/WALC/image?description=1&font=Bitter&forks=1&logo=https%3A%2F%2Fgithub.com%2FWAClient%2FWALC%2Fraw%2Fmaster%2Fsrc%2Ficons%2Flogo360x360.png&pattern=Floating%20Cogs&stargazers=1&theme=Dark",
    tags: ["Electron.js", "JavaScript"],
    github: "https://github.com/CSTayyab/WALC",
    type: "open-source",
    platform: "desktop",
  },
  {
    title: "Apna.Link",
    description: "A URL Shortner with analytics tracking.",
    image: "/apna-link.webp",
    tags: ["Next.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    live: "https://apna.link",
    liveLabel: 'Product Website',
    type: "hobby",
    platform: "web",
  },
  {
    title: "TLDs Explorer",
    description: "A real-time tracking and notification service for newly recognized Top-Level Domains (TLDs) using IANA data.",
    image: "/tlds-explorer.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Whois Protocol"],
    live: "https://tlds-explorer.vercel.app",
    type: "hobby",
    platform: "web",
  },
]

export default function Projects() {
  const renderProjectBadge = useCallback((type: string, platform: string) => {
    const badges = []

    switch (type) {
      case "professional":
        badges.push(
          <Badge key="type" variant="default">
            <BriefcaseIcon className="w-3 h-3 mr-1" /> Professional
          </Badge>,
        )
        break
      case "open-source":
        badges.push(
          <Badge key="type" variant="secondary">
            <CodeIcon className="w-3 h-3 mr-1" /> Open Source
          </Badge>,
        )
        break
      case "hobby":
        badges.push(
          <Badge key="type" variant="outline">
            <CodeIcon className="w-3 h-3 mr-1" /> Hobby
          </Badge>,
        )
        break
    }

    switch (platform) {
      case "web":
        badges.push(
          <Badge key="platform" variant="default">
            <MonitorIcon className="w-3 h-3 mr-1" /> Web
          </Badge>,
        )
        break
      case "mobile":
        badges.push(
          <Badge key="platform" variant="default">
            <SmartphoneIcon className="w-3 h-3 mr-1" /> Mobile
          </Badge>,
        )
        break
      case "desktop":
        badges.push(
          <Badge key="platform" variant="default">
            <MonitorIcon className="w-3 h-3 mr-1" /> Desktop
          </Badge>,
        )
        break
    }

    return badges
  }, [])

  const handleCompanyClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, company: string) => {
    e.preventDefault()
    const element = document.getElementById(`experience-${company.toLowerCase().replace(/\s+/g, "-")}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader className="p-0 pb-6">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4 flex justify-between items-start px-6">
                <div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">{renderProjectBadge(project.type, project.platform)}</div>
                </div>
                {project.company && (
                  <a
                    href={`#experience-${project.company.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary cursor-pointer"
                    onClick={(e) => handleCompanyClick(e, project.company)}
                  >
                    @{project.company}
                  </a>
                )}
              </div>
              <CardDescription className="mt-2 px-6">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between flex-row-reverse">
              <div className="flex flex-row justify-end gap-1">
                {project.live &&
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" /> {project.liveLabel ?? 'Live Demo'}
                    </a>
                  </Button>
                }
                {project.playStore && <Button size="sm" asChild>
                  <a href={project.playStore} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                    </svg>
                    Play Store
                  </a>
                </Button>}
                {project.appStore &&
                  < Button size="sm" asChild>
                    <a href={project.appStore} target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4" fill="currentColor">
                        <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.42 1.236.096 2.508-.636 3.288-1.56z" />
                      </svg>
                      App Store
                    </a>
                  </Button>
                }
              </div>
              {project.github &&
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              }
            </CardFooter>
          </Card>
        ))}
        <Card className="flex flex-col justify-center items-center">
          <CardHeader>
            <CardTitle className="text-xl mb-2 text-center">View More on GitHub</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex items-center justify-center">
            <GithubIcon className="w-24 h-24 text-muted-foreground" />
          </CardContent>
          <CardFooter>
            <Button size="lg" asChild>
              <a href="https://github.com/CSTayyab" target="_blank" rel="noopener noreferrer">
                Visit GitHub Profile <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section >
  )
}
