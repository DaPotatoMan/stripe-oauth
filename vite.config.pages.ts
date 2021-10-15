import { resolve } from 'path';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
   base: '/stripe-oauth/',

   resolve: {
      alias: {
         '~': resolve(__dirname, 'src')
      }
   },

   plugins: [WindiCSS()],

   build: {
      outDir: resolve(__dirname, 'dist-render')
   }
});
