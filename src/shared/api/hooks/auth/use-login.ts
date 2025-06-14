import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';
import { setAuthToken } from '@/shared/lib/persistance';

import { login } from '../../auth/auth.api';

export const useLogin = (initDataString?: string) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.LOGIN],
    queryFn: async () => {
      if (initDataString) {
        const result = await login({
          params: { initData: { initData: initDataString } },
        });

        const newToken = result.data.token;
        setAuthToken(newToken);

        return result;
      }
      return Promise.reject('Invalid init data');
    },
    staleTime: 60 * 60 * 1000,
    select: (data) => data,
  });

  return { ...query };
};
