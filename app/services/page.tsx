import { Section, SectionHeading } from "@/components/site/Section";
import { services } from "@/components/site/data";

export default function ServicesPage() {
  return <Section><SectionHeading eyebrow="What We Do" title="Core Portfolio of Services" intro="An integrated capability set spanning the full petroleum asset lifecycle — from subsurface evaluation to crude marketing." align="center" /><div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{services.map(({ title, description, icon: Icon }) => <article key={title} className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lift"><span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-primary-foreground"><Icon className="size-6" /></span><h2 className="mt-5 text-base font-bold leading-snug text-primary">{title}</h2><p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{description}</p></article>)}</div></Section>;
}

export const metadata = { title: "Services" };
