import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';

import { getReferals } from '../../users/users.api';

export const useGetReferals = (userId?: string, isFetch: boolean = true) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.REFERALS, userId],
    queryFn: async ({ signal }) => {
      if (!userId) {
        throw new Error('userId is invalid');
      }

      try {
        return await getReferals({
          params: { userId: userId },
          config: { signal: signal },
        });
      } catch (error) {
        console.error('error-useGetReferals', error);
      }
    },
    enabled: isFetch,
    select: (data) => data?.data,
    staleTime: 0,
    refetchOnMount: 'always',
    refetchOnWindowFocus: 'always',
  });

  return { ...query };
};
