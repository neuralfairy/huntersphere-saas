import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Integrations", href: "https://salescentri.com/solutions/psa-suite/integrations" },
        { label: "AI Agents", href: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/resources" },
        { label: "Case Studies", href: "https://salescentri.com/resources/case-studies" },
        { label: "Whitepapers", href: "https://salescentri.com/resources/whitepapers-ebooks" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Partnerships", href: "https://salescentri.com/contact/partnerships" },
        { label: "Support", href: "https://salescentri.com/contact/support-request/live-chat" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "GDPR", href: "/gdpr" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-red-cream rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold">Huntersphere</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming B2B email marketing with intelligent automation and AI-powered sequences.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Huntersphere Solutions. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Powered by{" "}
            <Link
              href="https://salescentri.com?utm_source=huntersphere.com&utm_medium=footer&utm_campaign=partner_network"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              Sales Intelligence Platform
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
