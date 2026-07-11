import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// sitemap.xml nativo de Next 15. La landing es una única página (las secciones
// son anclas `#...`, que no se listan en sitemaps), por eso solo se declara la
// raíz. El bilingüe es un toggle de cliente sobre esta misma URL, así que no hay
// entradas `alternates.languages` (ver `.docs/SEO.md`).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
