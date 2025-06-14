import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';
import { repeatRequest } from '@/shared/lib/utils/repeat-request';

import { getJettonWalletAddress } from '../../tonapi';

interface useGetJettonWalletAddressParams {
  jettonMinterAddress: string;
  walletAddress: string;
  isFetch: boolean;
}

export const useGetJettonWalletAddress = ({
  jettonMinterAddress,
  walletAddress,
  isFetch,
}: useGetJettonWalletAddressParams) => {
  return useQuery({
    queryKey: [
      QUERY_KEYS.JETTON_WALLET_ADDRESS,
      jettonMinterAddress,
      walletAddress,
    ],
    queryFn: async () => {
      try {
        const result = await repeatRequest(() =>
          getJettonWalletAddress(jettonMinterAddress, walletAddress)
        );

        return result;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        /* empty */
      }
    },
    enabled: isFetch,
  });
};
