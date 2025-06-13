import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';

import { getTransactionByType } from '../../transactions/transactions.api';

export const useGetTransactionSumData = (
  userId: string,
  isFetch: boolean = true
) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.TRANSACTION_SUM],
    queryFn: async ({ signal }) => {
      try {
        return await getTransactionByType({
          userId,
          signal,
        });
      } catch (error) {
        console.error('error-useGetTransactionSumData', error);
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
