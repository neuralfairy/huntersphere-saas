import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactOptions } from "@/components/contact/contact-options"

export const metadata = {
  title: "Contact Us - Huntersphere Solutions | Get Support",
  description: "Get in touch with our team. We're here to help with questions, support, and partnership opportunities.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactOptions />
    </>
  )
}
