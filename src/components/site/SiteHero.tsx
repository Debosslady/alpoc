import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-primary">
      <img src="/hero-platform.jpg" alt="Offshore oil and gas production platform at dusk" width={1600} height={1104} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-36 lg:px-8 lg:pb-36 lg:pt-48">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-sky backdrop-blur">Asset-Link Petroleum Optimization Company (RC 1393662)</span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">Optimizing Petroleum Assets. <span className="text-brand-sky">Maximizing Value.</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">Integrated oil &amp; gas solutions powered by technology, expertise and strategic partnerships for sustainable asset development and maximum recovery.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" size="xl"><Link href="/services">Explore Our Services <ArrowRight /></Link></Button>
            <Button asChild variant="onDark" size="xl"><Link href="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </div>
      <div className="h-1.5 w-full bg-gradient-to-r from-brand-red via-brand-blue to-brand-green" />
    </section>
  );
}
