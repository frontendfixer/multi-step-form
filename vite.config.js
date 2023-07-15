/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), ViteImageOptimizer(), svgr()],
  server: {
    port: 5555,
    strictPort: true,
    open: true,
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  build: {
    minify: 'terser',
    cssCodeSplit: true,
    cssMinify: true,
    sourcemap: true,
  },
  preview: {
    port: 8080,
  },
});
