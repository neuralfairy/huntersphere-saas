import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingTiers } from "@/components/pricing/pricing-tiers"
import { PricingFAQ } from "@/components/pricing/pricing-faq"

export const metadata = {
  title: "Pricing - iEMA Email Marketing Automation | Huntersphere",
  description:
    "Choose the perfect plan for your business. Transparent pricing with no hidden fees. Start your free trial today.",
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingTiers />
      <PricingFAQ />
    </>
  )
}
