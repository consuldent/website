import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://consuldent.com.au/sitemap.xml",
    host: "https://consuldent.com.au",
  };
}
