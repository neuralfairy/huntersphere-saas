"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 bg-red-600 text-white py-2 px-4 z-50 animate-slide-down">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-sm font-medium">{"🚀 Transform your email marketing with iEMA automation"}</span>
        <Button size="sm" variant="secondary" asChild className="bg-white text-black hover:bg-gray-100">
          <Link href="https://salescentri.com/get-started/book-demo">Book Demo</Link>
        </Button>
      </div>
    </div>
  )
}
