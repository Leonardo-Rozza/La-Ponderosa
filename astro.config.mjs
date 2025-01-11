import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://Leonardo-Rozza.github.io",
  base: "La-Ponderosa",
  integrations: [react()],
});