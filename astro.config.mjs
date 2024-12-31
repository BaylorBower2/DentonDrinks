import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  vite: {
    build: {
      rollupOptions: {
        external: ['@rollup/rollup-linux-x64-gnu']
      }
    }
  },
  adapter: netlify({
    edgeMiddleware: true,
    functionPerRoute: true
  })
});