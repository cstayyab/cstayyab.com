"use client"

import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ThemeToggle"
import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)

  const handleHireMeClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      if (pathname !== "/") {
        setIsNavigating(true)
        router.push("/")
      } else {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
      }
    },
    [pathname, router],
  )

  useEffect(() => {
    if (isNavigating && pathname === "/") {
      setIsNavigating(false)
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
  }, [isNavigating, pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Muhammad Tayyab Sheikh
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className={cn("hover:text-primary transition-colors", pathname === "/" && "text-primary")}>
            Home
          </Link>
          <Link
            href="/blogs"
            className={cn("hover:text-primary transition-colors", pathname === "/blogs" && "text-primary")}
          >
            Blogs
          </Link>
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