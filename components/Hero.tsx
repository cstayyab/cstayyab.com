"use client"

import { Button } from "@/components/ui/button"
import { ArrowDownIcon } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-2">Muhammad Tayyab Sheikh</h1>
      <h2 className="text-2xl text-muted-foreground mb-4">aka CSTayyab</h2>
      <h3 className="text-xl text-muted-foreground mb-6">Full Stack Web & Mobile App Developer</h3>
      <p className="max-w-2xl mb-8">
        Passionate about creating seamless experiences across web and mobile platforms. Specializing in React, React
        Native, Node.js, and cloud technologies.
      </p>
      <Button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
        View My Work <ArrowDownIcon className="ml-2 h-4 w-4" />
      </Button>
    </section>
  )
}

