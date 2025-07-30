import { ResourcesHero } from "@/components/resources/resources-hero"
import { BlogSection } from "@/components/resources/blog-section"
import { WhitepapersSection } from "@/components/resources/whitepapers-section"
import { CaseStudiesSection } from "@/components/resources/case-studies-section"
import { StrategyGuideCTA } from "@/components/resources/strategy-guide-cta"

export const metadata = {
  title: "Resources - Email Marketing Insights | Huntersphere",
  description: "Discover expert insights, case studies, and resources to master B2B email marketing automation.",
}

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <BlogSection />
      <WhitepapersSection />
      <CaseStudiesSection />
      <StrategyGuideCTA />
    </>
  )
}
