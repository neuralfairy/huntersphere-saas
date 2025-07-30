import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle } from "lucide-react"

export function HeroSection() {
  const benefits = [
    "AI-powered email sequences",
    "Advanced automation workflows",
    "Seamless CRM integration",
    "Real-time analytics & insights",
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your <span className="text-gradient">B2B Email Marketing</span> with iEMA Automation
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stop losing leads to manual processes. Huntersphere's iEMA platform delivers intelligent email sequences
              that convert prospects into customers automatically.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                <Link href="https://salescentri.com/get-started/free-trial">
                  <span className="text-black">Start Free Trial</span>
                  <ArrowRight className="ml-2 w-5 h-5 text-black" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-red-200 text-red-600 hover:bg-red-50 px-8 py-4 text-lg bg-transparent"
              >
                <Link href="https://salescentri.com/solutions/use-case-navigator/demo">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-4">No credit card required • 14-day free trial • Setup in minutes</p>
          </div>

          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 gradient-red-cream rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="iEMA Dashboard Interface"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
