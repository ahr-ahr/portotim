import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://ahr-ahr.github.io",
  base: "/portotim",
  outDir: "dist",
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
});
