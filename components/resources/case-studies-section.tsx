import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      company: "TechFlow Solutions",
      industry: "SaaS",
      challenge: "Low email engagement and poor lead nurturing",
      results: [
        { metric: "Open Rate", improvement: "+340%" },
        { metric: "Lead Quality", improvement: "+250%" },
        { metric: "Revenue", improvement: "+180%" },
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      company: "GrowthLab Inc",
      industry: "Marketing Agency",
      challenge: "Manual processes limiting client scalability",
      results: [
        { metric: "Efficiency", improvement: "+400%" },
        { metric: "Client Capacity", improvement: "+300%" },
        { metric: "Profit Margin", improvement: "+150%" },
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      company: "ScaleUp Ventures",
      industry: "E-commerce",
      challenge: "High customer acquisition costs",
      results: [
        { metric: "CAC Reduction", improvement: "-60%" },
        { metric: "LTV Increase", improvement: "+220%" },
        { metric: "Conversion Rate", improvement: "+185%" },
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">See how companies like yours achieved remarkable results</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={study.image || "/placeholder.svg"} alt={study.company} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{study.company}</h3>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{study.challenge}</p>
                <div className="space-y-3 mb-6">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex justify-between items-center">
                      <span className="text-gray-700">{result.metric}</span>
                      <span className="font-bold text-green-600">{result.improvement}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  <Link href="https://salescentri.com/resources/case-studies">Read Full Case Study</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="https://salescentri.com/resources/case-studies">View All Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
