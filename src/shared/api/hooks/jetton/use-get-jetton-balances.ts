import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';
import { repeatRequest } from '@/shared/lib/utils/repeat-request';

import { getJettonBalances } from '../../tonapi';

export const useGetJettonBalances = (
  addressWallet: string,
  isFetch: boolean = true
) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BALANCES, addressWallet],
    queryFn: async () => {
      console.log('addressWallet', addressWallet);
      try {
        const result = await repeatRequest(() =>
          getJettonBalances(addressWallet)
        );
        console.log('result', result);
        if (result) {
          return result.balances;
        }

        return undefined;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        /* empty */
      }
    },
    enabled: isFetch,
  });
};
