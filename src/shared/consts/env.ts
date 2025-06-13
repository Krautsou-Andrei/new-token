export const env = {
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
  secretKey: import.meta.env.VITE_SECTER_KEY,
  tokenMixpanel: import.meta.env.VITE_TOKEN_MIXPANEL,
  walletConnetProjctId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
};
