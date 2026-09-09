import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

// Required for output: "export" — see next.config.ts.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
