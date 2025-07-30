import { AboutHero } from "@/components/about/about-hero"
import { TeamSection } from "@/components/about/team-section"
import { CompanyValues } from "@/components/about/company-values"
import { PartnershipCTA } from "@/components/about/partnership-cta"

export const metadata = {
  title: "About Us - Huntersphere Solutions | iEMA Platform",
  description:
    "Learn about our mission to transform B2B email marketing with intelligent automation. Meet our team and discover our values.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <TeamSection />
      <CompanyValues />
      <PartnershipCTA />
    </>
  )
}
