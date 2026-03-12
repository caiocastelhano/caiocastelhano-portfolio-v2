import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://caiocastelhano.com.br/sitemap.xml",
    host: "https://caiocastelhano.com.br",
  };
}