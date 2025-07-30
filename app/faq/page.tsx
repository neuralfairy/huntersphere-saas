import { FAQHero } from "@/components/faq/faq-hero"
import { FAQSection } from "@/components/faq/faq-section"

export const metadata = {
  title: "FAQ - Frequently Asked Questions | Huntersphere",
  description:
    "Find answers to common questions about iEMA email marketing automation platform, pricing, features, and support.",
}

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQSection />
    </>
  )
}
