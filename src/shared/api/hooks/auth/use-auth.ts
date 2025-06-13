import { useState } from 'react';

import { LOCAL_STORAGE_CONSTANTS } from '@/shared/consts/local-storage-constants';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '@/shared/lib/local-storage';

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(
    getLocalStorage(LOCAL_STORAGE_CONSTANTS.TOKEN)
  );

  const saveToken = (newToken: string) => {
    setLocalStorage(LOCAL_STORAGE_CONSTANTS.TOKEN, newToken);
    setToken(newToken);
  };

  const clearToken = () => {
    removeLocalStorage(LOCAL_STORAGE_CONSTANTS.TOKEN);
    setToken(null);
  };

  return { token, saveToken, clearToken };
};
