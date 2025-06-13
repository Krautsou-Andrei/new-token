import { resolve } from 'path';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';

import svg from '@neodx/svg/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      target: 'react',
      routesDirectory: resolve(__dirname, './src/app/routes'),
      generatedRouteTree: resolve(__dirname, './src/app/routeTree.gen.ts'),
    }),
    tsconfigPaths(),
    react(),
    basicSsl(),
    nodePolyfills({ include: ['buffer'] }),
    svg({
      group: true,
      root: 'src/shared/ui/app-icon/assets',
      output: 'public/sprite',
      metadata: 'src/shared/ui/app-icon/sprite.h.ts',
      resetColors: {
        exclude: [/^app/, /^icon/],
        replaceUnknown: 'currentColor',
      },
    }),
  ],
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
      'Cross-Origin-Embedder-Policy': 'unsafe-none',
    },
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
});
