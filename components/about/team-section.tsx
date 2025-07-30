import { Linkedin, Twitter } from "lucide-react"

export function TeamSection() {
  const leadership = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former VP of Marketing at TechCorp with 15+ years in B2B marketing automation. Led teams that generated over $100M in pipeline.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer with expertise in AI and machine learning. Built scalable systems serving millions of users.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Product",
      bio: "Product leader with 12+ years at SaaS companies. Expert in user experience and product-market fit.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600">Experienced leaders passionate about transforming B2B marketing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {leadership.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-red-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
