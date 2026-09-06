import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://asset-linkpoc.com";
const lastModified = new Date("2026-09-06");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];
}
