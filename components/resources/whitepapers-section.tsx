import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

export function WhitepapersSection() {
  const whitepapers = [
    {
      title: "The Complete Guide to B2B Email Automation",
      description: "A comprehensive 50-page guide covering everything from strategy to implementation.",
      pages: "50 pages",
      image: "/placeholder.svg?height=300&width=200",
    },
    {
      title: "ROI Optimization for Email Marketing",
      description: "Data-driven strategies to maximize your email marketing return on investment.",
      pages: "35 pages",
      image: "/placeholder.svg?height=300&width=200",
    },
    {
      title: "AI-Powered Email Personalization",
      description: "How to leverage artificial intelligence for hyper-personalized email campaigns.",
      pages: "28 pages",
      image: "/placeholder.svg?height=300&width=200",
    },
  ]

  return (
    <section className="py-20 gradient-red-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Whitepapers & eBooks</h2>
          <p className="text-xl text-gray-600">In-depth resources to master email marketing automation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {whitepapers.map((paper, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <img
                src={paper.image || "/placeholder.svg"}
                alt={paper.title}
                className="w-32 h-40 mx-auto mb-4 rounded-lg shadow-md"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{paper.title}</h3>
              <p className="text-gray-600 mb-4">{paper.description}</p>
              <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                <FileText className="w-4 h-4 mr-1" />
                {paper.pages}
              </div>
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="https://salescentri.com/resources/whitepapers-ebooks">
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent">
            <Link href="https://salescentri.com/resources/whitepapers-ebooks">View All Resources</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
