import type { Metadata } from "next";
import { PageBanner } from "@/components/site/PageBanner";
import { Services } from "@/components/site/Services";
import { WhyAlpoc } from "@/components/site/WhyAlpoc";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ALPOC's integrated oil and gas services: crude marketing, asset development, production optimization, well intervention, drilling, EPC, financing, logistics and manpower.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="Integrated solutions across the petroleum asset lifecycle"
        intro="From subsurface evaluation and drilling through production optimization, EPC and crude marketing, ALPOC delivers the full capability set under one roof."
      />
      <Services />
      <WhyAlpoc />
    </>
  );
}
