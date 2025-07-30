"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqCategories = [
    {
      title: "General",
      faqs: [
        {
          question: "What is iEMA and how does it work?",
          answer:
            "iEMA (intelligent Email Marketing Automation) is our AI-powered platform that automates your email marketing campaigns. It uses machine learning to optimize send times, personalize content, and improve engagement rates automatically.",
        },
        {
          question: "How is iEMA different from other email marketing tools?",
          answer:
            "iEMA combines advanced AI capabilities with intuitive automation workflows. Unlike traditional tools, our platform learns from your data to continuously optimize performance without manual intervention.",
        },
        {
          question: "What types of businesses can benefit from iEMA?",
          answer:
            "iEMA is designed for B2B companies of all sizes, from startups to enterprises. It's particularly effective for SaaS companies, professional services, agencies, and e-commerce businesses.",
        },
      ],
    },
    {
      title: "Features & Functionality",
      faqs: [
        {
          question: "What automation workflows are available?",
          answer:
            "iEMA includes pre-built workflows for welcome sequences, lead nurturing, abandoned cart recovery, re-engagement campaigns, and more. You can also create custom workflows using our drag-and-drop builder.",
        },
        {
          question: "Does iEMA integrate with my existing CRM?",
          answer:
            "Yes, iEMA integrates with popular CRMs including Salesforce, HubSpot, Pipedrive, and many others. We also offer API access for custom integrations.",
        },
        {
          question: "Can I A/B test my email campaigns?",
          answer:
            "iEMA includes advanced A/B testing capabilities for subject lines, content, send times, and more. Our AI automatically optimizes based on test results.",
        },
      ],
    },
    {
      title: "Pricing & Plans",
      faqs: [
        {
          question: "Is there a free trial available?",
          answer:
            "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start.",
        },
        {
          question: "Can I change my plan at any time?",
          answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.",
        },
        {
          question: "What happens if I exceed my contact limit?",
          answer:
            "We'll notify you when you're approaching your limit. You can upgrade your plan or we'll temporarily pause new contact imports until you upgrade.",
        },
      ],
    },
    {
      title: "Support & Training",
      faqs: [
        {
          question: "What kind of support do you provide?",
          answer:
            "We offer email support for all plans, priority support for Professional plans, and dedicated account management for Enterprise customers. We also provide live chat and phone support.",
        },
        {
          question: "Do you provide training and onboarding?",
          answer:
            "Yes, all customers receive access to our comprehensive knowledge base, video tutorials, and webinar training sessions. Enterprise customers get personalized onboarding.",
        },
        {
          question: "Can you help migrate from my current email platform?",
          answer:
            "Our team provides free migration assistance to help you import your contacts, templates, and campaign data from other platforms.",
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
            <div className="space-y-4">
              {category.faqs.map((faq, faqIndex) => {
                const globalIndex = categoryIndex * 100 + faqIndex
                return (
                  <div key={faqIndex} className="bg-gray-50 rounded-lg">
                    <button
                      onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors rounded-lg"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {openIndex === globalIndex ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {openIndex === globalIndex && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        <div className="text-center mt-16 p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="https://salescentri.com/solutions/psa-suite/features"
              className="inline-flex items-center justify-center px-6 py-3 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
            >
              Explore PSA Features
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
