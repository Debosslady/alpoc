import type { Metadata } from "next";
import { PageBanner } from "@/components/site/PageBanner";
import { About } from "@/components/site/About";
import { VisionMission } from "@/components/site/VisionMission";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Asset-Link Petroleum Optimization Company (RC 1393662), our vision, mission and the values that guide our oil and gas work across Nigeria and sub-Saharan Africa.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="Who we are and what drives us"
        intro="A CAC-registered Nigerian oil and gas company built on seasoned human capital, strategic alliances and technology-driven asset solutions."
      />
      <About />
      <VisionMission />
    </>
  );
}
