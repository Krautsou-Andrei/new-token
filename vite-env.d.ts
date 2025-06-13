/// <reference types="vite/client" />

export interface ImportMetaEnv {
  VITE_BACKEND_URL: string;
  VITE_GOOGLE_CLIENT_ID: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
