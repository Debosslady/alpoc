import { createFileRoute } from '@tanstack/react-router'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Section, SectionHeading } from '@/components/site/Section'
import { ContactForm } from '@/components/site/ContactForm'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Unlock the Potential of Your Petroleum Assets"
            intro="Partner with ALPOC for innovative, cost-effective and technology-driven oil & gas solutions."
          />
          {/* address / phone / email list – keep the same JSX */}
        </div>
        <ContactForm />
      </div>
    </Section>
  )
}