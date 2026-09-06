import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { strengths } from "./data";

export function WhyAlpoc() {
  return (
    <Section className="bg-primary">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeading
          eyebrow="Why ALPOC"
          title="A partner built on capability, technology and trust"
          intro="We combine deep field experience with intelligent asset solutions to deliver measurable value across every engagement."
          onDark
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {strengths.map((s) => (
            <li
              key={s}
              className="flex items-start gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-sky" />
              <span className="text-sm font-medium text-primary-foreground/90">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
