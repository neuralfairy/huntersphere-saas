import { Shield, Lock, Eye, Award } from "lucide-react"

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "SOC 2 Compliant",
      description: "Enterprise-grade security standards",
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Your data is protected at all times",
    },
    {
      icon: Eye,
      title: "GDPR Ready",
      description: "Full compliance with privacy regulations",
    },
    {
      icon: Award,
      title: "99.9% Uptime",
      description: "Reliable infrastructure you can trust",
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Enterprise-Grade Security</h2>
          <p className="text-xl text-gray-300">
            Your data and your customers' data are protected with industry-leading security measures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 gradient-red-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
