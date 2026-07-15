import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://mayank-portfolio.example',
  output: 'static',
  integrations: [mdx()],
});
