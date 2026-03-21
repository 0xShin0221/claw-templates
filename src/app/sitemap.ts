import { MetadataRoute } from "next";
import { templates } from "@/data/templates";

const BASE_URL = "https://claw-templates.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const templatePages = templates.map((t) => ({
    url: `${BASE_URL}/templates/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...templatePages,
  ];
}
