import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';

import { getRefData } from '../../users/users.api';

export const useGetRefData = (userId?: string, isFetch: boolean = true) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.REF, userId],
    queryFn: async ({ signal }) => {
      if (!userId) {
        throw new Error('userId is invalid');
      }

      try {
        return await getRefData({
          params: { telegramId: userId },
          config: { signal: signal },
        });
      } catch (error) {
        console.error('error-useGetRefData', error);
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
