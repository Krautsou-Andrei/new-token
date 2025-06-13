import { useRef } from 'react';

import { useLocation } from '@tanstack/react-router';

import { LOCAL_STORAGE_CONSTANTS } from '@/shared/consts';

export const useGetTokenSearchParams = () => {
  const { search } = useLocation();
  const tokenRef = useRef<string | null>(null);

  if (tokenRef.current === null) {
    tokenRef.current = new URLSearchParams(search).get(
      LOCAL_STORAGE_CONSTANTS.TOKEN
    );
  }

  return tokenRef.current;
};
