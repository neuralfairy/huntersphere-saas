import { Zap, Brain, Target, BarChart3 } from "lucide-react"

export function FeaturesHero() {
  const keyFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Sequences",
      description: "Intelligent email flows that adapt to prospect behavior",
    },
    {
      icon: Zap,
      title: "Advanced Automation",
      description: "Set it and forget it workflows that run 24/7",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Segment and personalize at scale",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track performance and optimize continuously",
    },
  ]

  return (
    <section className="pt-24 pb-20 gradient-red-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for <span className="text-gradient">Modern B2B Marketing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, automate, and optimize email campaigns that convert prospects into customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 gradient-red-cream rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
