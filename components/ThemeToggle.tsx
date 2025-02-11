"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { SunIcon, MoonIcon } from "lucide-react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    setTheme(savedTheme || "light")
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
    </Button>
  )
}

