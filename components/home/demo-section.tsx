import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Users, TrendingUp, Zap } from "lucide-react"

export function DemoSection() {
  const stats = [
    { icon: Users, value: "10,000+", label: "Active Users" },
    { icon: TrendingUp, value: "340%", label: "Average ROI" },
    { icon: Zap, value: "85%", label: "Time Saved" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">See iEMA in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how leading B2B companies use our platform to automate their email marketing and drive consistent
            revenue growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Interactive Demo Thumbnail"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button size="lg" asChild className="bg-white text-black hover:bg-gray-100">
                  <Link href="https://salescentri.com/solutions/use-case-navigator/demo">
                    <Play className="mr-2 w-6 h-6" />
                    Watch 1-Minute Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-red-cream rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
