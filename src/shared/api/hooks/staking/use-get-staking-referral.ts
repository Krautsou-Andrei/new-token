import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';

import { getReferralStaking } from '../../staking/staking-api';

export const useStakingReferral = (tgId: string, isFetch: boolean = true) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.STAKING_REFERRAL, tgId],
    queryFn: async ({ signal }) => {
      try {
        return await getReferralStaking({
          params: { tgId: tgId },
          config: { signal: signal },
        });
      } catch (error) {
        console.error('error-useStakingReferral', error);
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
