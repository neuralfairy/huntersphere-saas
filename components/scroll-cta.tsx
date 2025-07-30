"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ScrollCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const threshold = window.innerHeight * 0.5
      setIsVisible(scrolled > threshold)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-scale-in">
      <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
        <Link href="https://salescentri.com/pricing">Get Pricing</Link>
      </Button>
    </div>
  )
}
