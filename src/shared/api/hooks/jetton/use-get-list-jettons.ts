import { useQuery } from '@tanstack/react-query';

import { DEFAULT, QUERY_KEYS } from '@/shared/consts';
import { repeatRequest } from '@/shared/lib/utils/repeat-request';

import { getListJetton } from '../../tonapi';

export const useGetListJettons = (addressWallet: string, isFetch: boolean) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BALANCES, addressWallet],
    queryFn: async () => {
      try {
        const result = await repeatRequest(() => getListJetton(addressWallet));

        const filterResult = result.balances.filter(
          (balance) =>
            balance.balance !== '0' &&
            (balance.jetton.verification as string) !==
              DEFAULT.IS_NOT_VERIFICATION
        );
        result.balances = filterResult;

        return result;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        /* empty */
      }
    },
    enabled: isFetch,
  });
};
