import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { LOCAL_STORAGE_CONSTANTS } from '@/shared/consts/local-storage-constants';

export interface AuthState {
  token: string | null;
  publicKeyPhantom: string | null;
  publicKeyMobile: string | null;
  secretKeySession: string | null;
  session: string | null;
  isAuthModalOpen: boolean;
  setToken: (token: string | null) => void;
  setPublicKeyMobile: (key: string | null) => void;
  setPublicKeyPhantom: (key: string | null) => void;
  setSecretKeySession: (key: string | null) => void;
  setSession: (session: string | null) => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, _get) => ({
      token: null,
      publicKeyPhantom: null,
      publicKeyMobile: null,
      secretKeySession: null,
      currentUser: null,
      session: null,
      isAuthModalOpen: false,
      setToken: (token) => set({ token }),
      openAuthModal: () => set({ isAuthModalOpen: true }),
      closeAuthModal: () => set({ isAuthModalOpen: false }),
      setPublicKeyMobile: (key: string | null) => set({ publicKeyMobile: key }),
      setPublicKeyPhantom: (key: string | null) =>
        set({ publicKeyPhantom: key }),
      setSession: (session: string | null) => set({ session: session }),
      setSecretKeySession: (key: string | null) =>
        set({ secretKeySession: key }),
      logout: () => {
        set({
          token: null,
          publicKeyMobile: null,
          secretKeySession: null,
          publicKeyPhantom: null,
        });
      },
    }),
    {
      name: 'hypefactory-auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        [LOCAL_STORAGE_CONSTANTS.TOKEN]: state.token,
        [LOCAL_STORAGE_CONSTANTS.PHANTOM_PUBLIC_KEY]: state.publicKeyPhantom,
        [LOCAL_STORAGE_CONSTANTS.PUBLIC_KEY_MOBILE]: state.publicKeyMobile,
        [LOCAL_STORAGE_CONSTANTS.SESSION_PHANTOM]: state.session,
        [LOCAL_STORAGE_CONSTANTS.DAPP_SECRET_KEY]: state.secretKeySession,
      }),
    }
  )
);

export const getAuthToken = () => useAuthStore.getState().token;
export const getPublicKeyMobile = () => useAuthStore.getState().publicKeyMobile;
export const getPublicKeyPhantom = () =>
  useAuthStore.getState().publicKeyPhantom;
export const getSecretKeySession = () =>
  useAuthStore.getState().secretKeySession;
export const getSession = () => useAuthStore.getState().session;

export const setAuthToken = (token: string | null) =>
  useAuthStore.getState().setToken(token);
export const setPublicKeyMobile = (key: string | null) =>
  useAuthStore.getState().setPublicKeyMobile(key);
export const setPublicKeyPhantom = (key: string | null) =>
  useAuthStore.getState().setPublicKeyPhantom(key);
export const setSecretKeySession = (key: string | null) =>
  useAuthStore.getState().setSecretKeySession(key);
export const setSession = (session: string | null) =>
  useAuthStore.getState().setSession(session);
export const clearAuthDataInStore = () => useAuthStore.getState().logout();
