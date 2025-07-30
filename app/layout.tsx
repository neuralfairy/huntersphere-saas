import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StickyHeader } from "@/components/sticky-header"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Huntersphere Solutions - iEMA Email Marketing Automation Platform",
  description:
    "Transform your B2B email marketing with Huntersphere's iEMA platform. Advanced automation, AI-powered sequences, and seamless CRM integration.",
  keywords: "email marketing automation, B2B marketing, drip campaigns, marketing sequences, CRM integration",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StickyHeader />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ExitIntentPopup />
      </body>
    </html>
  )
}
