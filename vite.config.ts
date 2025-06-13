import { resolve } from 'path';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';

import svg from '@neodx/svg/vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default () => {
  return defineConfig({
    plugins: [
      tsconfigPaths(),
      react(),
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
      host: '127.0.0.1',
      port: 5173,
      cors: {
        origin: ['https://mysubdomain.domain.io', 'http://localhost:5173'],
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
      },
      allowedHosts: ['mysubdomain.domain.io'],
      watch: {
        usePolling: true,
      },
    },
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    },
  });
};
