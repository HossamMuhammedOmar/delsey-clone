import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';

export default defineConfig({
  plugins: [tailwindcss, autoprefixer],
  resolve: {
    alias: {
      '/@assets/': path.resolve(__dirname, 'assets'),
    },
  },
});
