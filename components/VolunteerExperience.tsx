import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GithubIcon, ExternalLinkIcon } from "lucide-react"

const volunteerExperiences = [
  {
    project: "React",
    role: "Contributor",
    contributions: [
      "Implemented performance improvements in the reconciliation algorithm",
      "Fixed several bugs related to the new concurrent mode",
      "Improved documentation for hooks and context API",
    ],
    githubUrl: "https://github.com/facebook/react",
    projectUrl: "https://reactjs.org",
  },
  {
    project: "TypeScript",
    role: "Documentation Maintainer",
    contributions: [
      "Rewrote and expanded the documentation for advanced types",
      "Created interactive examples for the TypeScript playground",
      "Reviewed and merged documentation pull requests",
    ],
    githubUrl: "https://github.com/microsoft/TypeScript",
    projectUrl: "https://www.typescriptlang.org",
  },
  {
    project: "VS Code",
    role: "Extension Developer",
    contributions: [
      "Developed a popular extension for improved JavaScript debugging",
      "Contributed to the core debugger functionality",
      "Participated in code reviews and community discussions",
    ],
    githubUrl: "https://github.com/microsoft/vscode",
    projectUrl: "https://code.visualstudio.com",
  },
]

export default function VolunteerExperience() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Volunteer Open Source Experience</h2>
      <div className="space-y-6">
        {volunteerExperiences.map((exp) => (
          <Card key={exp.project}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{exp.project}</CardTitle>
                  <p className="text-sm text-muted-foreground">{exp.role}</p>
                </div>
                <div className="flex space-x-2">
                  <a
                    href={exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={exp.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <ExternalLinkIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {exp.contributions.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

