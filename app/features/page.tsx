import { FeaturesHero } from "@/components/features/features-hero"
import { InteractiveFeatures } from "@/components/features/interactive-features"
import { UseCases } from "@/components/features/use-cases"
import { IntegrationsSection } from "@/components/features/integrations-section"

export const metadata = {
  title: "Features - iEMA Email Marketing Automation | Huntersphere",
  description:
    "Discover powerful email automation features, AI-powered sequences, and seamless integrations that drive B2B marketing success.",
}

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <InteractiveFeatures />
      <UseCases />
      <IntegrationsSection />
    </>
  )
}
