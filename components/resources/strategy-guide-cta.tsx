import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Download } from "lucide-react"

export function StrategyGuideCTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <BookOpen className="w-16 h-16 text-red-400 mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Download Our Complete Strategy Guide</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get our comprehensive 75-page guide covering everything from lead generation to conversion optimization.
              Packed with actionable strategies, templates, and real-world examples.
            </p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                Email automation workflows and templates
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                Lead scoring and segmentation strategies
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                Performance optimization techniques
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                ROI measurement and analytics
              </li>
            </ul>
            <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="https://salescentri.com/platforms/lead-management/lead-generation">
                <Download className="w-5 h-5 mr-2" />
                Download Our Strategy Guide
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 gradient-red-cream rounded-2xl blur-3xl opacity-20"></div>
            <img
              src="/placeholder.svg?height=500&width=400"
              alt="Email Marketing Strategy Guide"
              className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
