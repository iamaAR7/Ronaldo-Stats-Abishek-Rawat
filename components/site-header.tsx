"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Trophy, Star } from "lucide-react"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Trophy className="h-6 w-6" />
            <span className="font-bold">AR7</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className={`transition-colors hover:text-foreground/80 ${
              pathname === "/" ? "text-foreground" : "text-foreground/60"
            }`}
          >
            Home
          </Link>
          <Link
            href="/legacy"
            className={`transition-colors hover:text-foreground/80 ${
              pathname === "/legacy" ? "text-foreground" : "text-foreground/60"
            }`}
          >
            <span className="flex items-center">
              Legacy <Star className="h-3 w-3 ml-1" />
            </span>
          </Link>
          <Link
            href="/major-leagues"
            className={`transition-colors hover:text-foreground/80 ${
              pathname === "/major-leagues" ? "text-foreground" : "text-foreground/60"
            }`}
          >
            Major Leagues
          </Link>
          <Link
            href="/ucl"
            className={`transition-colors hover:text-foreground/80 ${
              pathname === "/ucl" ? "text-foreground" : "text-foreground/60"
            }`}
          >
            UCL
          </Link>
          <Link
            href="/euro"
            className={`transition-colors hover:text-foreground/80 ${
              pathname === "/euro" ? "text-foreground" : "text-foreground/60"
            }`}
          >
            Europe
          </Link>
          <Link
            href="/world-cup"
            className={`transition-colors hover:text-foreground/80 ${
              pathname === "/world-cup" ? "text-foreground" : "text-foreground/60"
            }`}
          >
            World Cup
          </Link>
          
        </nav>
      </div>
    </header>
  )
}

