import { LOCAL_STORAGE_CONSTANTS } from '@/shared/consts';
import { removeLocalStorage } from '@/shared/lib/local-storage';

export const logOut = () => {
  removeLocalStorage(LOCAL_STORAGE_CONSTANTS.DAPP_SECRET_KEY);
  removeLocalStorage(LOCAL_STORAGE_CONSTANTS.PHANTOM_PUBLIC_KEY);
  removeLocalStorage(LOCAL_STORAGE_CONSTANTS.PUBLIC_KEY_MOBILE);
  removeLocalStorage(LOCAL_STORAGE_CONSTANTS.TOKEN_TELEGRAM);
  removeLocalStorage(LOCAL_STORAGE_CONSTANTS.TOKEN_SOLANA);
  removeLocalStorage(LOCAL_STORAGE_CONSTANTS.SESSION_PHANTOM);
};
