import { useEffect } from 'react';

import { useLocation, useNavigate } from '@tanstack/react-router';

import { LOCAL_STORAGE_CONSTANTS } from '@/shared/consts';

import { useGetTokenSearchParams } from './use-get-token-search-params';

export const useTelegramBotAuth = (startAuthCheck: (token: string) => void) => {
  const location = useLocation();
  const navigate = useNavigate();

  const token = useGetTokenSearchParams();

  useEffect(() => {
    if (token) {
      startAuthCheck(token);

      const searchParams = new URLSearchParams(location.search);
      searchParams.delete(LOCAL_STORAGE_CONSTANTS.TOKEN);

      navigate({
        to: location.pathname,
        search: searchParams.toString(),
      });
    }
  }, [token, location.search, navigate, location.pathname, startAuthCheck]);
};
