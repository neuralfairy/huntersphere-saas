"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export function PricingTiers() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      monthlyPrice: 99,
      yearlyPrice: 79,
      features: [
        "Up to 5,000 contacts",
        "Basic email automation",
        "Email templates",
        "Basic analytics",
        "Email support",
        "CRM integration",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
    },
    {
      name: "Professional",
      description: "For growing businesses that need advanced features",
      monthlyPrice: 299,
      yearlyPrice: 239,
      features: [
        "Up to 25,000 contacts",
        "Advanced automation workflows",
        "A/B testing",
        "Advanced analytics & reporting",
        "Priority support",
        "Multiple CRM integrations",
        "Lead scoring",
        "Custom fields & tags",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 799,
      yearlyPrice: 639,
      features: [
        "Unlimited contacts",
        "Custom automation workflows",
        "Advanced AI features",
        "Custom reporting & dashboards",
        "Dedicated account manager",
        "White-label options",
        "API access",
        "Custom integrations",
        "SSO & advanced security",
      ],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/pricing/enterprise-custom",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                !isYearly ? "bg-white text-gray-900 shadow-sm" : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                isYearly ? "bg-white text-gray-900 shadow-sm" : "text-gray-600"
              }`}
            >
              Yearly
              <span className="ml-1 text-xs text-green-600 font-semibold">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200"
                  : "bg-white border border-gray-200"
              } shadow-lg hover:shadow-xl transition-shadow`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                {isYearly && (
                  <p className="text-sm text-green-600 font-medium">
                    Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  plan.popular ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                <Link href={plan.ctaLink}>
                  <span className="text-black">{plan.cta}</span>
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom solution for your enterprise?</p>
          <Button variant="outline" asChild className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent">
            <Link href="https://salescentri.com/pricing/enterprise-custom">
              <span className="text-black">Need a Custom Plan?</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
