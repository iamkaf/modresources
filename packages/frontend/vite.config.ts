import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

// https://vite.dev/config/
export default defineConfig({
  root: path.resolve(path.dirname(fileURLToPath(import.meta.url))),
  publicDir: 'public',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'public', 'index.html'),
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
});
