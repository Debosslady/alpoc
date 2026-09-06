import type { Metadata, Viewport } from "next";
import "../src/styles.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const siteUrl = "https://asset-linkpoc.com";
const title = "ALPOC | Petroleum Asset Optimization in Nigeria";
const description =
  "Asset-Link Petroleum Optimization Company (RC 1393662) delivers integrated oil and gas solutions across Nigeria and sub-Saharan Africa, including production optimization, asset development, crude marketing, EPC, financing, logistics and manpower.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | ALPOC" },
  description,
  applicationName: "ALPOC",
  authors: [{ name: "Asset-Link Petroleum Optimization Company" }],
  creator: "Asset-Link Petroleum Optimization Company",
  publisher: "Asset-Link Petroleum Optimization Company",
  alternates: { canonical: "/" },
  keywords: [
    "petroleum asset optimization",
    "oil and gas Nigeria",
    "crude marketing",
    "EPC Nigeria",
    "production optimization",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "ALPOC",
    title,
    description,
    images: [
      {
        url: "/hero-platform.jpg",
        width: 1600,
        height: 1104,
        alt: "Offshore oil and gas production platform at dusk",
      },
    ],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/hero-platform.jpg"] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#17345f" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Asset-Link Petroleum Optimization Company",
  alternateName: "ALPOC",
  url: siteUrl,
  logo: `${siteUrl}/alpoc-logo.png`,
  description,
  telephone: "+234-1-4532661",
  email: "info@asset-linkpoc.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6th Floor, Landmark Towers, 5B Water Corporation Road",
    addressLocality: "Victoria Island, Lagos",
    addressCountry: "NG",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG" className="bg-background">
      <body>
        <div className="min-h-screen scroll-smooth bg-background font-sans antialiased">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
