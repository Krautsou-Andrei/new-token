import { Box, type BoxProps, Button, Flex, Text } from '@chakra-ui/react';
import { Address, fromNano, toNano } from '@ton/core';
import { useTonWallet } from '@tonconnect/ui-react';

import { useGetAccount } from '@/shared/api/hooks/jetton/use-get-account';
import { useGetJettonBalances } from '@/shared/api/hooks/jetton/use-get-jetton-balances';
import { env } from '@/shared/consts';
import { useModalStore } from '@/shared/lib/persistance/modal.store';
import { getBalanceJettonAddress } from '@/shared/lib/utils/get-balance-jetton-address';

import { SLIDES } from '../../const';

type SlideAppProps = BoxProps & {
  title: string;
  balance?: string;
  address?: string;
};

export const SlideApp = ({
  title,
  balance,
  address,
  ...props
}: SlideAppProps) => {
  const { openSuccessModal } = useModalStore();
  const wallet = useTonWallet();

  const { data: account } = useGetAccount(
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    wallet?.account.address!,
    Boolean(wallet && title === SLIDES[0].title)
  );

  const JettonUSDTAddress = Address.parse(env.minterUSDT).toRawString();

  const { data: jettonBalance } = useGetJettonBalances(
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    wallet?.account.address!,
    Boolean(wallet?.account.address)
  );

  const jettonUSDTBalance = getBalanceJettonAddress(
    jettonBalance,
    JettonUSDTAddress
  );

  return (
    <Box
      pt={5}
      fontFamily={'beatstreetregular'}
      fontSize={{ base: '28px', sm: '32px' }}
      fontWeight={400}
      color={'text.secondary'}
      {...props}
    >
      <Flex direction={'column'} alignItems={'center'}>
        <Button
          variant={'iconDefault'}
          size={'fit'}
          fontFamily={title === SLIDES[1].title ? 'Inter' : 'Rhythmic'}
          onClick={() => openSuccessModal()}
          color={'inherit'}
        >
          <Text> {title} + </Text>
        </Button>

        <Text
          color={'text.white'}
          fontSize={{ base: '20px', sm: '24px' }}
          fontWeight={400}
          fontFamily={'tektur'}
        >
          {account && title === SLIDES[0].title
            ? Number(fromNano(account?.balance)).toFixed(2)
            : jettonUSDTBalance && title === SLIDES[2].title
              ? jettonUSDTBalance
              : 5000}
        </Text>
      </Flex>
    </Box>
  );
};
