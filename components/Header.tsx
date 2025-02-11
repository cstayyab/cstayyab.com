"use client"

import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ThemeToggle"
import { useCallback } from "react"
import type React from "react" // Added import for React
import { Toaster } from "./ui/toaster"

export default function Header() {
  const handleHireMeClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Muhammad Tayyab Sheikh</h1>
        <div className="flex items-center space-x-4">
          <Button asChild>
            <a href="#contact" onClick={handleHireMeClick}>
              Hire Me
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
