import { SITE } from "./src/consts";
import { defineConfig } from "astro/config";
import remarkDescription from "astro-remark-description";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  markdown: {
    remarkPlugins: [[remarkDescription, {}]],
  },
  prefetch: true,
  integrations: [sitemap(), tailwind(), react(), mdx()],
});
