import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://asset-linkpoc.com",
      lastModified: new Date("2026-08-31"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
