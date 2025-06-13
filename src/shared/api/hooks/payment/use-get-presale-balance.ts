import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';

import { getPresaleTokenSum } from '../../payment/payment.api';

export const useGetPresaleTokenSumData = (
  userId: string,
  isFetch: boolean = true
) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.PRESALE_TOKEN_SUM],
    queryFn: async ({ signal }) => {
      try {
        return await getPresaleTokenSum({
          userId,
          signal,
        });
      } catch (error) {
        console.error('error-useGetPresaleTokenSumData', error);
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
