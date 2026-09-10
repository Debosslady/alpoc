"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    eyebrow: "Asset-Link Petroleum Optimization Company",
    headline: (
      <>
        Integrated Petroleum{" "}
        <span className="text-brand-sky">Solutions</span>
      </>
    ),
    description:
      "Unlocking the full potential of oil & gas assets through innovative technology, technical expertise, and cost-effective solutions.",
    primaryCta: { label: "Explore Our Services", href: "/services" },
    secondaryCta: { label: "Talk to Our Team", href: "/contact" },
  },
  {
    id: 2,
    eyebrow: "Petroleum Asset Optimization",
    headline: (
      <>
        Optimize Assets.{" "}
        <span className="text-brand-sky">Maximize Recovery.</span>
      </>
    ),
    description:
      "From reservoir management and production optimization to well intervention and field development, we deliver solutions designed to improve performance and unlock greater asset value.",
    primaryCta: { label: "Discover Our Expertise", href: "/services" },
    secondaryCta: { label: "Request a Service", href: "/contact" },
  },
  {
    id: 3,
    eyebrow: "Engineering • Production • Logistics • Financing",
    headline: (
      <>
        One Partner.{" "}
        <span className="text-brand-sky">Integrated Oil & Gas Solutions.</span>
      </>
    ),
    description:
      "Connecting technical expertise, strategic partnerships, engineering, crude marketing, project financing, logistics, and smart technology to deliver solutions across the petroleum value chain.",
    primaryCta: { label: "View Our Services", href: "/services" },
    secondaryCta: { label: "Partner With ALPOC", href: "/contact" },
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance every 7 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slide = slides[current]! as (typeof slides)[number];

  return (
    <section
      className="relative isolate overflow-hidden bg-primary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background image + gradient (shared across slides) */}
      <img
        src="/hero-platform.jpg"
        alt="Offshore oil and gas production platform at dusk"
        width={1600}
        height={1104}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/50 to-primary/30" />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-36 lg:px-8 lg:pb-36 lg:pt-48">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-sky backdrop-blur transition-opacity duration-500">
            {slide.eyebrow}
          </span>

          {/* Headline */}
          <h1
            key={`headline-${slide.id}`}
            className="mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl animate-in fade-in duration-500"
          >
            {slide.headline}
          </h1>

          {/* Description */}
          <p
            key={`desc-${slide.id}`}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg animate-in fade-in duration-500"
          >
            {slide.description}
          </p>

          {/* CTAs */}
          <div
            key={`ctas-${slide.id}`}
            className="mt-9 flex flex-col gap-3 sm:flex-row animate-in fade-in duration-500"
          >
            <Button asChild variant="accent" size="xl">
              <Link href={slide.primaryCta.href}>
                {slide.primaryCta.label} <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <Link href={slide.secondaryCta.href}>
                {slide.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4 lg:bottom-14">
        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-brand-sky"
                  : "w-2.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Bottom brand bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-brand-red via-brand-blue to-brand-green" />
    </section>
  );
}
 