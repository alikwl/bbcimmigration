import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://bbcimmigration.com',
  base: process.env.BASE_PATH || '/',
  output: 'static',
});

