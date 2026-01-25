import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

const entries = {
  config: 'src/js/config.js',
  desktop: 'src/js/desktop.js',
  mobile: 'src/js/mobile.js',
};

export default defineConfig(({ mode }) => {
  const entry = entries[mode] || entries.desktop;
  const name = mode || 'desktop';
  
  return {
    plugins: [
      svelte({
        emitCss: false
      })
    ],
    build: {
      outDir: 'plugin/js',
      emptyOutDir: false,
      lib: {
        entry: resolve(__dirname, entry),
        formats: ['iife'],
        name: 'KintonePlugin',
        fileName: () => `${name}.js`,
      },
    },
  };
});