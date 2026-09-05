import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section, SectionHeading } from '@/components/site/Section'
import { strengths } from '@/components/site/data'
import { CheckCircle2 } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <WhyAlpoc />
    </>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary">
      <img
        src="/hero-platform.jpg"
        alt="Offshore oil and gas production platform at dusk"
        width={1600}
        height={1104}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-36 lg:px-8 lg:pb-36 lg:pt-48">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-sky backdrop-blur">
            Asset-Link Petroleum Optimization Company (RC 1393662)
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Optimizing Petroleum Assets.{' '}
            <span className="text-brand-sky">Maximizing Value.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Integrated oil &amp; gas solutions powered by technology, expertise and strategic
            partnerships for sustainable asset development and maximum recovery.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" size="xl">
              <Link to="/services">
                Explore Our Services <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="h-1.5 w-full bg-gradient-to-r from-brand-red via-brand-blue to-brand-green" />
    </section>
  )
}

function WhyAlpoc() {
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
  )
} 




// import { createFileRoute } from '@tanstack/react-router'
// import {
//   ArrowRight,
//   CheckCircle2,
//   Compass,
//   Mail,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Target,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Section, SectionHeading } from "@/components/site/Section";
// import { SiteHeader } from "@/components/site/SiteHeader";
// import { ContactForm } from "@/components/site/ContactForm";
// import { navLinks, services, strengths } from "@/components/site/data";

// export default function Index() {
//   return (
//     <div className="min-h-screen scroll-smooth bg-background font-sans antialiased">
//       <SiteHeader />
//       <main>
//         <Hero />
//         <About />
//         <VisionMission />
//         <Services />
//         <WhyAlpoc />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// function Hero() {
//   return (
//     <section id="home" className="relative isolate overflow-hidden bg-primary">
//       <img
//         src="/hero-platform.jpg"
//         alt="Offshore oil and gas production platform at dusk"
//         width={1600}
//         height={1104}
//         className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
//       />
//       <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
//       <div className="mx-auto max-w-7xl px-5 pb-24 pt-36 lg:px-8 lg:pb-36 lg:pt-48">
//         <div className="max-w-3xl">
//           <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-sky backdrop-blur">
//             Asset-Link Petroleum Optimization Company (RC 1393662)
//           </span>
//           <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
//             Optimizing Petroleum Assets.{" "}
//             <span className="text-brand-sky">Maximizing Value.</span>
//           </h1>
//           <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
//             Integrated oil &amp; gas solutions powered by technology, expertise and strategic
//             partnerships for sustainable asset development and maximum recovery.
//           </p>
//           <div className="mt-9 flex flex-col gap-3 sm:flex-row">
//             <Button asChild variant="accent" size="xl">
//               <a href="#services">
//                 Explore Our Services <ArrowRight />
//               </a>
//             </Button>
//             <Button asChild variant="onDark" size="xl">
//               <a href="#contact">Contact Us</a>
//             </Button>
//           </div>
//         </div>
//       </div>
//       <div className="h-1.5 w-full bg-gradient-to-r from-brand-red via-brand-blue to-brand-green" />
//     </section>
//   );
// }

// function About() {
//   return (
//     <Section id="about">
//       <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
//         <div>
//           <SectionHeading
//             eyebrow="About Us"
//             title="About Asset-Link Petroleum Optimization Company"
//           />
//           <p className="mt-6 text-base leading-relaxed text-muted-foreground">
//             ALPOC is an oil and gas company duly registered in Nigeria with the Corporate Affairs
//             Commission (CAC) under <strong className="text-foreground">RC-1393662</strong>. ALPOC
//             maintains strategic alliances with companies across Nigeria and globally.
//           </p>
//           <p className="mt-4 text-base leading-relaxed text-muted-foreground">
//             Our primary strength lies in our human capital—seasoned professionals experienced in
//             Production Optimization, Project Financing, Crude Marketing, Asset Management, Field
//             Development Planning, Engineering, Procurement, Oil Field Services, Logistics, Manpower,
//             and Smart Technology deployment for hydrocarbon recovery.
//           </p>
//           <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
//             {[
//               { k: "RC 1393662", v: "CAC Registered" },
//               { k: "11+", v: "Service Lines" },
//               { k: "Sub-Saharan", v: "Africa Coverage" },
//             ].map((s) => (
//               <div key={s.k} className="rounded-xl border border-border bg-secondary/60 p-4">
//                 <dt className="text-lg font-bold text-primary">{s.k}</dt>
//                 <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
//                   {s.v}
//                 </dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//         <div className="relative">
//           <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-2xl bg-brand-red/10 lg:block" />
//           <img
//             src="/about-team.jpg"
//             alt="ALPOC engineers reviewing production data in a control room"
//             width={1200}
//             height={1008}
//             loading="lazy"
//             className="relative w-full rounded-2xl object-cover shadow-lift"
//           />
//         </div>
//       </div>
//     </Section>
//   );
// }

// function VisionMission() {
//   return (
//     <Section id="vision" className="bg-secondary/50">
//       <SectionHeading
//         eyebrow="Our Direction"
//         title="Vision, Mission & Values"
//         intro="The principles that guide every asset we optimize and every partnership we build."
//         align="center"
//       />
//       <div className="mt-14 grid gap-6 lg:grid-cols-3">
//         <article className="rounded-2xl border-t-4 border-brand-blue bg-card p-8 shadow-card transition-shadow hover:shadow-lift">
//           <Compass className="size-9 text-brand-blue" />
//           <h3 className="mt-5 text-xl font-bold text-primary">Our Vision</h3>
//           <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
//             To be the leader in providing the most cost-effective solutions for optimum asset
//             development and crude oil marketing using world class technologies to support oil &amp;
//             gas investments in sub-Saharan Africa.
//           </p>
//         </article>
//         <article className="rounded-2xl border-t-4 border-brand-red bg-card p-8 shadow-card transition-shadow hover:shadow-lift">
//           <Target className="size-9 text-brand-red" />
//           <h3 className="mt-5 text-xl font-bold text-primary">Our Mission</h3>
//           <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
//             To provide integrated services and solutions for cheap hydrocarbon development and
//             maximum recovery through innovative Technology as key to unlocking asset potentials.
//           </p>
//         </article>
//         <article className="rounded-2xl border-t-4 border-brand-green bg-card p-8 shadow-card transition-shadow hover:shadow-lift">
//           <ShieldCheck className="size-9 text-brand-green" />
//           <h3 className="mt-5 text-xl font-bold text-primary">Our Values</h3>
//           <ul className="mt-3 space-y-2.5">
//             {[
//               "Promote a Rewarding Client Partnership",
//               "Keep a Challenged and Incentivized Workforce",
//               "Deploy HSSE Driven Business Strategy",
//               "Sustain Strong Financial Performance",
//               "Aid Our Clients Achieve Admirable Return on their Investment",
//             ].map((v) => (
//               <li key={v} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
//                 <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green" />
//                 <span>{v}</span>
//               </li>
//             ))}
//           </ul>
//         </article>
//       </div>
//     </Section>
//   );
// }

// function Services() {
//   return (
//     <Section id="services">
//       <SectionHeading
//         eyebrow="What We Do"
//         title="Core Portfolio of Services"
//         intro="An integrated capability set spanning the full petroleum asset lifecycle — from subsurface evaluation to crude marketing."
//         align="center"
//       />
//       <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {services.map(({ title: t, description: d, icon: Icon }) => (
//           <article
//             key={t}
//             className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lift"
//           >
//             <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-primary-foreground">
//               <Icon className="size-6" />
//             </span>
//             <h3 className="mt-5 text-base font-bold leading-snug text-primary">{t}</h3>
//             <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
//           </article>
//         ))}
//       </div>
//     </Section>
//   );
// }

// function WhyAlpoc() {
//   return (
//     <Section className="bg-primary">
//       <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
//         <SectionHeading
//           eyebrow="Why ALPOC"
//           title="A partner built on capability, technology and trust"
//           intro="We combine deep field experience with intelligent asset solutions to deliver measurable value across every engagement."
//           onDark
//         />
//         <ul className="grid gap-4 sm:grid-cols-2">
//           {strengths.map((s) => (
//             <li
//               key={s}
//               className="flex items-start gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4"
//             >
//               <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-sky" />
//               <span className="text-sm font-medium text-primary-foreground/90">{s}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Section>
//   );
// }

// function Contact() {
//   return (
//     <Section id="contact">
//       <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
//         <div>
//           <SectionHeading
//             eyebrow="Get in Touch"
//             title="Unlock the Potential of Your Petroleum Assets"
//             intro="Partner with ALPOC for innovative, cost-effective and technology-driven oil & gas solutions."
//           />
//           <ul className="mt-10 space-y-5">
//             <li className="flex gap-4">
//               <MapPin className="mt-0.5 size-5 shrink-0 text-brand-red" />
//               <div className="min-w-0">
//                 <p className="text-sm font-semibold text-primary">Address</p>
//                 <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
//                   6th Floor, Landmark Towers, 5B Water Corporation Road, P.O. Box 76055, Victoria
//                   Island, Lagos, Nigeria
//                 </p>
//               </div>
//             </li>
//             <li className="flex gap-4">
//               <Phone className="mt-0.5 size-5 shrink-0 text-brand-red" />
//               <div className="min-w-0">
//                 <p className="text-sm font-semibold text-primary">Phone</p>
//                 <a
//                   href="tel:+23414532661"
//                   className="mt-1 block text-sm text-muted-foreground hover:text-brand-blue"
//                 >
//                   +234-1-4532661
//                 </a>
//               </div>
//             </li>
//             <li className="flex gap-4">
//               <Mail className="mt-0.5 size-5 shrink-0 text-brand-red" />
//               <div className="min-w-0">
//                 <p className="text-sm font-semibold text-primary">Email</p>
//                 <a
//                   href="mailto:info@asset-linkpoc.com"
//                   className="mt-1 block truncate text-sm text-muted-foreground hover:text-brand-blue"
//                 >
//                   info@asset-linkpoc.com
//                 </a>
//               </div>
//             </li>
//           </ul>
//         </div>
//         <ContactForm />
//       </div>
//     </Section>
//   );
// }

// function Footer() {
//   return (
//     <footer className="border-t-4 border-brand-red bg-primary">
//       <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
//         <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)_minmax(0,1fr)]">
//           <div>
//             <div className="flex items-center gap-3">
//               <img
//                 src="/alpoc-logo.png"
//                 alt="ALPOC company logo"
//                 width={48}
//                 height={48}
//                 loading="lazy"
//                 className="h-12 w-12 rounded-md bg-primary-foreground/95 object-contain p-0.5"
//               />
//               <span className="text-lg font-bold text-primary-foreground">ALPOC</span>
//             </div>
//             <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
//               Asset-Link Petroleum Optimization Company delivers integrated petroleum optimization,
//               asset development and crude marketing solutions across Nigeria and sub-Saharan Africa.
//             </p>
//           </div>
//           <nav aria-label="Footer">
//             <h3 className="text-sm font-semibold text-primary-foreground">Navigate</h3>
//             <ul className="mt-4 space-y-2.5">
//               {navLinks.map((l) => (
//                 <li key={l.href}>
//                   <a
//                     href={l.href}
//                     className="text-sm text-primary-foreground/70 transition-colors hover:text-brand-sky"
//                   >
//                     {l.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//           <div>
//             <h3 className="text-sm font-semibold text-primary-foreground">Contact</h3>
//             <address className="mt-4 space-y-2.5 text-sm not-italic leading-relaxed text-primary-foreground/70">
//               <p>6th Floor, Landmark Towers, 5B Water Corporation Road, Victoria Island, Lagos</p>
//               <p>
//                 <a href="tel:+23414532661" className="hover:text-brand-sky">
//                   +234-1-4532661
//                 </a>
//               </p>
//               <p>
//                 <a href="mailto:info@asset-linkpoc.com" className="hover:text-brand-sky">
//                   info@asset-linkpoc.com
//                 </a>
//               </p>
//             </address>
//           </div>
//         </div>
//         <p className="mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60">
//           © 2026 Asset-Link Petroleum Optimization Company. RC 1393662. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }
