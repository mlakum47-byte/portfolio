import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://mlakum47-byte.github.io',
  base: '/portfolio',
  output: 'static',
  integrations: [mdx()],
});
