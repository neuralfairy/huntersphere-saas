"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative animate-scale-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Not Ready Yet?</h3>
          <p className="text-gray-600 mb-4">See how iEMA can transform your email marketing with a guided demo</p>
          <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white">
            <Link href="https://salescentri.com/get-started/calendly">Try a Guided Demo</Link>
          </Button>
          <button onClick={() => setIsVisible(false)} className="mt-2 text-sm text-gray-500 hover:text-gray-700">
            No thanks, I'll continue browsing
          </button>
        </div>
      </div>
    </div>
  )
}
