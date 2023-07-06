import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkUnwrapImages from "remark-unwrap-images";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  experimental: {
    assets: true,
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkUnwrapImages],
    }),
    sitemap(),
  ],
});
