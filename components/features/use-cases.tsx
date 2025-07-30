import { Building2, ShoppingCart, Briefcase, Users } from "lucide-react"

export function UseCases() {
  const useCases = [
    {
      icon: Building2,
      title: "SaaS Companies",
      description: "Onboard new users and reduce churn with targeted email sequences",
      metrics: ["45% increase in trial-to-paid conversion", "30% reduction in churn rate"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Recover abandoned carts and increase customer lifetime value",
      metrics: ["25% cart recovery rate", "40% increase in repeat purchases"],
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Nurture leads through long sales cycles with educational content",
      metrics: ["60% faster deal closure", "35% higher deal values"],
    },
    {
      icon: Users,
      title: "Agencies",
      description: "Manage multiple client campaigns with white-label solutions",
      metrics: ["50% more efficient campaign management", "90% client retention"],
    },
  ]

  return (
    <section className="py-20 gradient-red-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Built for Every Industry</h2>
          <p className="text-xl text-gray-600">See how different industries use iEMA to drive growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 gradient-red-cream rounded-xl flex items-center justify-center mb-6">
                <useCase.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.title}</h3>
              <p className="text-gray-600 mb-6">{useCase.description}</p>
              <div className="space-y-2">
                {useCase.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center text-sm text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
