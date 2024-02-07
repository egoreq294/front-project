import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr({ include: '**/*.svg' }), react()],
  resolve: {
    alias: [
      { find: '@app', replacement: '/src/app' },
      { find: '@entities', replacement: '/src/entities' },
      { find: '@features', replacement: '/src/features' },
      { find: '@shared', replacement: '/src/shared' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@widgets', replacement: '/src/widgets' },
    ],
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:5000/api'),
  },
});
