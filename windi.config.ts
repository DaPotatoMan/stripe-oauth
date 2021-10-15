import { defineConfig } from 'windicss/helpers';

export default defineConfig({
   extract: {
      include: ['src/**/*.{ts}'],
      exclude: ['node_modules', '.git']
   }
});
