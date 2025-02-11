import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code2Icon,
  ServerIcon,
  SmartphoneIcon,
  CloudIcon,
  CodepenIcon as ReactIcon,
  TypeIcon as TypeScriptIcon,
  DatabaseIcon,
  GitBranchIcon,
} from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Code2Icon className="h-8 w-8 mb-2" />,
    items: [
      { name: "React", icon: <ReactIcon className="h-5 w-5 mr-2" /> },
      { name: "Next.js", icon: <Code2Icon className="h-5 w-5 mr-2" /> },
      { name: "TypeScript", icon: <TypeScriptIcon className="h-5 w-5 mr-2" /> },
      { name: "Tailwind CSS", icon: <Code2Icon className="h-5 w-5 mr-2" /> },
    ],
  },
  {
    category: "Backend",
    icon: <ServerIcon className="h-8 w-8 mb-2" />,
    items: [
      { name: "Node.js", icon: <ServerIcon className="h-5 w-5 mr-2" /> },
      { name: "Express", icon: <ServerIcon className="h-5 w-5 mr-2" /> },
      { name: "PostgreSQL", icon: <DatabaseIcon className="h-5 w-5 mr-2" /> },
      { name: "MongoDB", icon: <DatabaseIcon className="h-5 w-5 mr-2" /> },
    ],
  },
  {
    category: "Mobile",
    icon: <SmartphoneIcon className="h-8 w-8 mb-2" />,
    items: [
      { name: "React Native", icon: <ReactIcon className="h-5 w-5 mr-2" /> },
      { name: "Expo", icon: <SmartphoneIcon className="h-5 w-5 mr-2" /> },
      { name: "iOS", icon: <SmartphoneIcon className="h-5 w-5 mr-2" /> },
      { name: "Android", icon: <SmartphoneIcon className="h-5 w-5 mr-2" /> },
    ],
  },
  {
    category: "DevOps",
    icon: <CloudIcon className="h-8 w-8 mb-2" />,
    items: [
      { name: "Docker", icon: <CloudIcon className="h-5 w-5 mr-2" /> },
      { name: "AWS", icon: <CloudIcon className="h-5 w-5 mr-2" /> },
      { name: "DigitalOcean", icon: <CloudIcon className="h-5 w-5 mr-2" /> },
      { name: "Git", icon: <GitBranchIcon className="h-5 w-5 mr-2" /> },
    ],
  },
]

export default function Skills() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <Card key={skill.category}>
            <CardHeader>
              <div className="flex flex-col items-center">
                {skill.icon}
                <CardTitle>{skill.category}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item.name} className="flex items-center">
                    {item.icon}
                    {item.name}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

