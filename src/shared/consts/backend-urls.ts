export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const BACKEND_API = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
  },
} as const;
