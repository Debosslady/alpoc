import { CheckCircle2, Compass, ShieldCheck, Target } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const values = [
  "Promote a Rewarding Client Partnership",
  "Keep a Challenged and Incentivized Workforce",
  "Deploy HSSE Driven Business Strategy",
  "Sustain Strong Financial Performance",
  "Aid Our Clients Achieve Admirable Return on their Investment",
];

export function VisionMission() {
  return (
    <Section className="bg-secondary/50">
      <SectionHeading
        eyebrow="Our Direction"
        title="Vision, Mission & Values"
        intro="The principles that guide every asset we optimize and every partnership we build."
        align="center"
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <article className="rounded-2xl border-t-4 border-brand-blue bg-card p-8 shadow-card transition-shadow hover:shadow-lift">
          <Compass className="size-9 text-brand-blue" />
          <h3 className="mt-5 text-xl font-bold text-primary">Our Vision</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            To be the leader in providing the most cost-effective solutions for optimum asset
            development and crude oil marketing using world class technologies to support oil &amp;
            gas investments in sub-Saharan Africa.
          </p>
        </article>
        <article className="rounded-2xl border-t-4 border-brand-red bg-card p-8 shadow-card transition-shadow hover:shadow-lift">
          <Target className="size-9 text-brand-red" />
          <h3 className="mt-5 text-xl font-bold text-primary">Our Mission</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            To provide integrated services and solutions for cheap hydrocarbon development and
            maximum recovery through innovative Technology as key to unlocking asset potentials.
          </p>
        </article>
        <article className="rounded-2xl border-t-4 border-brand-green bg-card p-8 shadow-card transition-shadow hover:shadow-lift">
          <ShieldCheck className="size-9 text-brand-green" />
          <h3 className="mt-5 text-xl font-bold text-primary">Our Values</h3>
          <ul className="mt-3 flex flex-col gap-2.5">
            {values.map((v) => (
              <li key={v} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
