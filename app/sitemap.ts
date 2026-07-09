import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://vartasecurity.com.ua";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/company",
    "/contacts",
    "/services",
    "/services/video",
    "/services/access",
    "/services/scs",
    "/services/infosec",
    "/services/fire",
    "/services/physical",
    "/services/automation",
    "/services/ai-protection",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
