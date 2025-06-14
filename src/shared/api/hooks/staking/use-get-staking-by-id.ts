import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';

import { getStakingById } from '../../staking/staking-api';

export const useStakingById = (id: string, isFetch: boolean = true) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.STAKING_BY_ID, id],
    queryFn: async ({ signal }) => {
      try {
        return await getStakingById({
          params: { id: id },
          config: { signal: signal },
        });
      } catch (error) {
        console.error('error-useStakingById', error);
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
