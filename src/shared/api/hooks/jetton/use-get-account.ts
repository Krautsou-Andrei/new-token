import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';
import { repeatRequest } from '@/shared/lib/utils/repeat-request';

import { getAccount } from '../../tonapi';

export const useGetAccount = (addressRaw: string, isFetch: boolean) => {
  return useQuery({
    queryKey: [QUERY_KEYS.ALL_USERS, addressRaw],
    queryFn: async () => {
      try {
        const result = await repeatRequest(() => getAccount(addressRaw));

        return result;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        /* empty */
      }
    },
    enabled: isFetch,
  });
};
