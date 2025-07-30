import { HeroSection } from "@/components/home/hero-section"
import { DemoSection } from "@/components/home/demo-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { LogosSection } from "@/components/home/logos-section"
import { SecuritySection } from "@/components/home/security-section"
import { ROICalculator } from "@/components/home/roi-calculator"
import { ScrollCTA } from "@/components/scroll-cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DemoSection />
      <LogosSection />
      <TestimonialsSection />
      <SecuritySection />
      <ROICalculator />
      <ScrollCTA />
    </>
  )
}
