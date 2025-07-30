export function AboutHero() {
  return (
    <section className="pt-24 pb-20 gradient-red-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transforming B2B Marketing <span className="text-gradient">One Email at a Time</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded in 2020, Huntersphere Solutions was born from a simple observation: B2B companies were losing
            millions in revenue due to inefficient email marketing processes. We set out to change that with intelligent
            automation that actually works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">10,000+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">$50M+</div>
            <div className="text-gray-600">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}
