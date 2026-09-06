import { Mail, MapPin, Phone } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Unlock the Potential of Your Petroleum Assets"
            intro="Partner with ALPOC for innovative, cost-effective and technology-driven oil & gas solutions."
          />
          <ul className="mt-10 flex flex-col gap-5">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brand-red" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-primary">Address</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  6th Floor, Landmark Towers, 5B Water Corporation Road, P.O. Box 76055, Victoria
                  Island, Lagos, Nigeria
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-brand-red" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-primary">Phone</p>
                <a
                  href="tel:+23414532661"
                  className="mt-1 block text-sm text-muted-foreground hover:text-brand-blue"
                >
                  +234-1-4532661
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-brand-red" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-primary">Email</p>
                <a
                  href="mailto:info@asset-linkpoc.com"
                  className="mt-1 block truncate text-sm text-muted-foreground hover:text-brand-blue"
                >
                  info@asset-linkpoc.com
                </a>
              </div>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
