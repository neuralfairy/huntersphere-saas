import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Handshake, ArrowRight } from "lucide-react"

export function PartnershipCTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <Handshake className="w-16 h-16 text-red-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join our partner network and help businesses transform their email marketing. We offer competitive
            commissions, dedicated support, and co-marketing opportunities.
          </p>
          <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="https://salescentri.com/contact/partnerships">
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
