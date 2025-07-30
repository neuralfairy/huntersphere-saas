import { Heart, Users, Zap, Shield } from "lucide-react"

export function CompanyValues() {
  const values = [
    {
      icon: Heart,
      title: "Customer Obsession",
      description: "Every decision we make starts with our customers. Their success is our success.",
    },
    {
      icon: Users,
      title: "Transparency",
      description: "We believe in open communication, honest feedback, and building trust through transparency.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive real results.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description:
        "Our customers depend on us. We take that responsibility seriously with enterprise-grade reliability.",
    },
  ]

  return (
    <section className="py-20 gradient-red-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 gradient-red-cream rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
