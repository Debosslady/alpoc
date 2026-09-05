import { createFileRoute } from '@tanstack/react-router'
import { Section, SectionHeading } from '@/components/site/Section'
import { services } from '@/components/site/data'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What We Do"
        title="Core Portfolio of Services"
        intro="An integrated capability set spanning the full petroleum asset lifecycle — from subsurface evaluation to crude marketing."
        align="center"
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title: t, description: d, icon: Icon }) => (
          <article
            key={t}
            className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lift"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-primary-foreground">
              <Icon className="size-6" />
            </span>
            <h3 className="mt-5 text-base font-bold leading-snug text-primary">{t}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}