import { useState } from 'react';

import { Button, Flex, Text } from '@chakra-ui/react';

import { useAuthMe } from '@/shared/api/hooks/auth';
import { useGetStakingUser } from '@/shared/api/hooks/staking/use-get-staking-user';
import { formatDate } from '@/shared/lib/utils/format-date';
import { AppTextGradient } from '@/shared/ui/app-text-gradient';

export const UserStaking = () => {
  const [isViewStake, setisviewStake] = useState(false);
  const { data: user } = useAuthMe();
  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
  const { data: allStaking } = useGetStakingUser(user?.id!, Boolean(user?.id));

  return (
    <>
      <Flex justifyContent={'center'} mb={5}>
        <Button variant={'iconDefault'} size={'fit'}>
          <AppTextGradient
            textAlign={'center'}
            fontWeight={400}
            fontSize={{ base: '28px', sm: '40px' }}
            lineHeight={'100%'}
            fontFamily={'Rhythmic'}
            onClick={() => setisviewStake((prev) => !prev)}
          >
            {isViewStake ? 'Мои стейкинги' : 'История транзакций'}
          </AppTextGradient>{' '}
        </Button>
      </Flex>
      <Flex direction={'column'} gap={4}>
        {isViewStake &&
          allStaking &&
          allStaking.length > 0 &&
          allStaking.map((stake) => (
            <Flex
              w={'full'}
              alignItems={'center'}
              justifyContent={'space-between'}
              gap={4}
              p={4}
              rounded={'xl'}
              bg={'background.primary'}
              color={'text.secondary'}
              fontSize={{ base: '16px', sm: '24px' }}
              fontFamily={'tektur'}
            >
              <Flex direction={'column'} gap={2}>
                <Text color={stake.amountReceived > 0 ? 'text.error' : 'unset'}>
                  {stake.amountReceived > 0 ? 'Анстейк' : 'Стейк'}
                </Text>
                <Text>{formatDate(stake.createdAt)}</Text>
              </Flex>
              <Flex direction={'column'} gap={2}>
                <Text
                  color={'text.white'}
                >{`${stake.amountReceived > 0 ? stake.amountReceived : stake.amount} Anon`}</Text>
                <Text fontSize={'16px'}>
                  {stake.isActive ? 'Успешно' : 'не успешно'}
                </Text>
              </Flex>
            </Flex>
          ))}
      </Flex>
    </>
  );
};
