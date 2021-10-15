import { resolve } from 'path';
import { defineConfig } from 'vite';
import Types from 'vite-plugin-dts';

export default defineConfig({
   plugins: [Types()],

   build: {
      lib: {
         name: 'StripeOAuth',
         fileName: 'lib',
         entry: resolve(__dirname, 'src/index.ts')
      }
   }
});
