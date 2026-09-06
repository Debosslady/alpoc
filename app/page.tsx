import type { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { WhyAlpoc } from "@/components/site/WhyAlpoc";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyAlpoc />
    </>
  );
}
