import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://impactdaos.xyz/",
  integrations: [tailwind(), image()]
});