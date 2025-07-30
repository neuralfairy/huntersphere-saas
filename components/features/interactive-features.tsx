"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Users, BarChart, Bot } from "lucide-react"

export function InteractiveFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Mail,
      title: "Email Automation",
      description: "Create sophisticated drip campaigns and nurture sequences",
      details:
        "Build complex email workflows with drag-and-drop simplicity. Set triggers, conditions, and actions to create personalized customer journeys.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "Intelligent agents that optimize your campaigns automatically",
      details:
        "Our AI agents analyze performance data and automatically adjust send times, subject lines, and content to maximize engagement.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: Users,
      title: "Lead Scoring",
      description: "Automatically score and prioritize your best prospects",
      details:
        "Advanced algorithms analyze prospect behavior and engagement to identify your hottest leads and route them to sales.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Deep insights into campaign performance and ROI",
      details:
        "Comprehensive reporting with attribution tracking, revenue analytics, and predictive insights to optimize your marketing spend.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Interactive Feature Showcase</h2>
          <p className="text-xl text-gray-600">Hover over each feature to see how it works</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all ${
                  activeFeature === index ? "bg-red-50 border-2 border-red-200" : "bg-gray-50 hover:bg-gray-100"
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      activeFeature === index ? "gradient-red-cream" : "bg-gray-200"
                    }`}
                  >
                    <feature.icon className={`w-6 h-6 ${activeFeature === index ? "text-white" : "text-gray-600"}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-2">{feature.description}</p>
                    <p className="text-sm text-gray-500">{feature.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="sticky top-8">
              <img
                src={features[activeFeature].image || "/placeholder.svg"}
                alt={features[activeFeature].title}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white mr-4">
            <Link href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator">
              Explore Our AI Agents
            </Link>
          </Button>
          <Button variant="outline" asChild className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent">
            <Link href="https://salescentri.com/solutions/psa-suite/integrations">View CRM Integrations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
