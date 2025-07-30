import Link from "next/link"
import { Button } from "@/components/ui/button"

export function IntegrationsSection() {
  const integrations = [
    { name: "Salesforce", logo: "/placeholder.svg?height=60&width=120" },
    { name: "HubSpot", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Pipedrive", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Zapier", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Slack", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-xl text-gray-300">Connect with your existing tools and workflows</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-12">
          {integrations.map((integration, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={integration.logo || "/placeholder.svg"}
                alt={integration.name}
                className="h-12 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="https://salescentri.com/solutions/psa-suite/integrations">View All Integrations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
