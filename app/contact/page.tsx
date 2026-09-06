import type { Metadata } from "next";
import { PageBanner } from "@/components/site/PageBanner";
import { Contact } from "@/components/site/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Asset-Link Petroleum Optimization Company in Victoria Island, Lagos. Send an enquiry about production optimization, crude marketing, EPC or any of our services.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Let's talk about your petroleum assets"
        intro="Our team in Lagos responds to every enquiry within one business day."
      />
      <Contact />
    </>
  );
}
