import { defineConfig } from 'astro/config';
import astroIcon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
    integrations: [
    astroIcon()
  ],
  site: 'https://carloshazelcg.github.io',
  base: '/CAE',
});
