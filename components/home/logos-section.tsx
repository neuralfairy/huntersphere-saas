export function LogosSection() {
  const logos = [
    { name: "TechFlow", src: "/placeholder.svg?height=40&width=120" },
    { name: "GrowthLab", src: "/placeholder.svg?height=40&width=120" },
    { name: "ScaleUp", src: "/placeholder.svg?height=40&width=120" },
    { name: "InnovateCorp", src: "/placeholder.svg?height=40&width=120" },
    { name: "DataDriven", src: "/placeholder.svg?height=40&width=120" },
    { name: "CloudFirst", src: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium">Trusted by 10,000+ B2B companies worldwide</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                className="h-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
