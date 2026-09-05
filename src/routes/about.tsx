import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2, Compass, ShieldCheck, Target } from 'lucide-react'
import { Section, SectionHeading } from '@/components/site/Section'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <About />
      <VisionMission />
    </>
  )
}

function About() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="About Us"
            title="About Asset-Link Petroleum Optimization Company"
          />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            ALPOC is an oil and gas company duly registered in Nigeria with the Corporate Affairs
            Commission (CAC) under <strong className="text-foreground">RC-1393662</strong>. ALPOC
            maintains strategic alliances with companies across Nigeria and globally.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our primary strength lies in our human capital—seasoned professionals experienced in
            Production Optimization, Project Financing, Crude Marketing, Asset Management, Field
            Development Planning, Engineering, Procurement, Oil Field Services, Logistics, Manpower,
            and Smart Technology deployment for hydrocarbon recovery.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { k: 'RC 1393662', v: 'CAC Registered' },
              { k: '11+', v: 'Service Lines' },
              { k: 'Sub-Saharan', v: 'Africa Coverage' },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-border bg-secondary/60 p-4">
                <dt className="text-lg font-bold text-primary">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-2xl bg-brand-red/10 lg:block" />
          <img
            src="/about-team.jpg"
            alt="ALPOC engineers reviewing production data in a control room"
            width={1200}
            height={1008}
            loading="lazy"
            className="relative w-full rounded-2xl object-cover shadow-lift"
          />
        </div>
      </div>
    </Section>
  )
}

function VisionMission() {
  return (
    <Section className="bg-secondary/50">
      <SectionHeading
        eyebrow="Our Direction"
        title="Vision, Mission & Values"
        intro="The principles that guide every asset we optimize and every partnership we build."
        align="center"
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {/* Vision / Mission / Values cards – keep the exact same JSX you already have */}
        <article className="rounded-2xl border-t-4 border-brand-blue bg-card p-8 shadow-card transition-shadow hover:shadow-lift">
          <Compass className="size-9 text-brand-blue" />
          <h3 className="mt-5 text-xl font-bold text-primary">Our Vision</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            To be the leader in providing the most cost-effective solutions for optimum asset
            development and crude oil marketing using world class technologies to support oil &amp;
            gas investments in sub-Saharan Africa.
          </p>
        </article>
        {/* ... rest of the three cards exactly as before */}
      </div>
    </Section>
  )
}