import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// robots.txt nativo de Next 15 (App Router). Sitio público: se permite indexar
// todo. `host`/`sitemap` usan la URL canónica (ver `src/lib/site.ts`).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
