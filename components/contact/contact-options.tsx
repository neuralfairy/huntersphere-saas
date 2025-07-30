import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, FileText, Phone, Mail } from "lucide-react"

export function ContactOptions() {
  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      cta: "Start Live Chat",
      link: "https://salescentri.com/contact/support-request/live-chat",
    },
    {
      icon: FileText,
      title: "Submit a Ticket",
      description: "Create a support ticket for detailed assistance",
      cta: "Submit Ticket",
      link: "https://salescentri.com/contact/support-request/submit-ticket",
    },
    {
      icon: Phone,
      title: "Schedule a Call",
      description: "Book a personalized demo or consultation",
      cta: "Book Demo",
      link: "https://salescentri.com/get-started/book-demo",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      cta: "Email Us",
      link: "mailto:support@huntersphere.com",
    },
  ]

  return (
    <section className="py-20 gradient-red-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
          <p className="text-xl text-gray-600">Choose the option that works best for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 gradient-red-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <option.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <Button asChild variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent">
                <Link href={option.link}>{option.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
