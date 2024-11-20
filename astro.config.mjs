import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  root: "./src",
  integrations: [tailwind(), svelte(), icon({
    include: {
      mdi: ['*'],
      carbon: ['*'],
      ion: ['*'],
      tabler: ['*']
    }
  })],
});
