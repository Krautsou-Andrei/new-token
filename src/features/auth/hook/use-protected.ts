import React from 'react';

import { useNavigate } from '@tanstack/react-router';

import { ROUTES } from '@/shared/consts';
import { useAuthStore } from '@/shared/lib/persistance';

import { useGetTokenSearchParams } from './use-get-token-search-params';

export const useProtected = () => {
  const { token } = useAuthStore();
  const tempToken = useGetTokenSearchParams();

  const navigate = useNavigate();
  const { openAuthModal } = useAuthStore();

  React.useEffect(() => {
    if (!token && !tempToken) {
      navigate({ to: ROUTES.APP });
      openAuthModal();
    }
  }, [navigate, openAuthModal, token, tempToken]);
};
