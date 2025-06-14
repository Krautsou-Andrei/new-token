import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';

import { getAllStakingUser } from '../../staking/staking-api';

export const useGetStakingUser = (tgId: string, isFetch: boolean = true) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.STAKING_USER, tgId],
    queryFn: async ({ signal }) => {
      try {
        return await getAllStakingUser({
          params: { tgId: tgId },
          config: { signal: signal },
        });
      } catch (error) {
        console.error('error-useGetStakingUser', error);
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
