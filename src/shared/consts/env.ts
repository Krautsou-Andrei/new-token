export const env = {
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
  secretKey: import.meta.env.VITE_SECTER_KEY,
  tonapiUrl: import.meta.env.VITE_TONAPI_URL,
  tokenMixpanel: import.meta.env.VITE_TOKEN_MIXPANEL,
  walletConnetProjctId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
  stakeMasterAddress: import.meta.env.VITE_APP_STAKE_MASTER,
  jettonMasterAddress: import.meta.env.VITE_APP_JETTON_MASTER,
};
