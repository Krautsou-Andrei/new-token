import { AxiosError } from 'axios';

import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';
import { clearAuthDataInStore } from '@/shared/lib/persistance';

import { authMe } from '../../auth/me';

export const useAuthMe = () => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.ME],
    queryFn: async () => {
      try {
        return await authMe();
      } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 401) {
          clearAuthDataInStore();
        }
        throw error;
      }
    },
    select: (data) => (data ? data.data : null),
    retry: false,
    refetchOnWindowFocus: true,
  });

  return { ...query };
};
