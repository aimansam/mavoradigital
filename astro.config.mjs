import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mavoralabs.com",
  devToolbar: { enabled: false },
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => !page.includes("/quotation") && !page.includes("/privacy"),
    }),
  ],
});