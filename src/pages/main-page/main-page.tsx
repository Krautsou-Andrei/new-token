import { useEffect, useState } from 'react';

import { Box, Button, Flex, Radio, RadioGroup } from '@chakra-ui/react';
import { useNavigate } from '@tanstack/react-router';

import { useAuthMe } from '@/shared/api/hooks/auth';
import { useGetRefData } from '@/shared/api/hooks/users/use-get-ref-data';
import { ROUTES } from '@/shared/consts';
import { AppButtonBorderGradient } from '@/shared/ui/app-button-border-gradient';
import { AppIcon } from '@/shared/ui/app-icon';
import { AppLayoutBound } from '@/shared/ui/app-layout-bound';

import { friends } from './const';
import styles from './main.module.css';

export const MainPage = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const { data: user } = useAuthMe();
  const { data: referrals } = useGetRefData(
    user?.telegramId,
    Boolean(user?.id)
  );

  useEffect(() => {
    if (referrals) {
      setValue(referrals.count);
    }
  }, [referrals]);

  return (
    <AppLayoutBound
      position={'relative'}
      overflow={'hidden'}
      css={{ '--accent-color': '#b6fb0d' }}
    >
      <Flex
        direction={'column'}
        bgImage="url('images/image-anon.png')"
        bgSize="cover"
        bgPosition="center"
        height="100dvh"
        pb={10}
      >
        <Box flex={1} pt={'110px'}>
          <Flex
            alignItems={'center'}
            justifyContent={'space-between'}
            w={'full'}
          >
            <Flex
              gap={2}
              fontSize={{ base: '20px', sm: '24px' }}
              lineHeight={'100%'}
              fontWeight={400}
              fontFamily={'Inter'}
              color={'#7708FC'}
            >
              @avseev
            </Flex>
            <Button
              variant={'iconDefault'}
              size={'fit'}
              fontSize={{ base: '20px', sm: '24px' }}
              lineHeight={'100%'}
              fontWeight={400}
              fontFamily={'Inter'}
              color={'#07FFB1'}
            >
              <Flex alignItems={'center'} gap={2}>
                <AppIcon name="icon/setting" /> Аккаунт
              </Flex>
            </Button>
          </Flex>
        </Box>
        <AppButtonBorderGradient
          wrapperProps={{
            style: {
              marginBottom: '20px',
            },
          }}
          onClick={() => {
            navigate({ to: ROUTES.AIRDROP });
          }}
        >
          Стейкинг
        </AppButtonBorderGradient>{' '}
        <Flex w={'full'} direction={'column'} alignItems={'center'}>
          <Flex
            w={'full'}
            gap={2}
            fontSize={'32px'}
            justifyContent={'space-between'}
            fontFamily={'beatstreetregular'}
            color={'#2B314E'}
          >
            <Box>0</Box>
            <Box>maining off</Box>
            <Box>100</Box>
          </Flex>
          <Box w={'full'}>
            <Box
              textAlign={'center'}
              fontSize={{ base: '24px', sm: '28px' }}
              fontWeight={400}
              fontFamily={'Rhythmic'}
              background="linear-gradient(90deg,  #00FF99,#7B00FF)"
              backgroundClip="text"
              textFillColor="transparent"
              sx={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {`друзья ${value}/${friends.length}`}
            </Box>
            <Flex gap={2.5} className={styles.container} mb={'64px'}>
              {friends.map((_friend, index) => (
                <Button
                  variant={'iconDefault'}
                  size={'fit'}
                  key={index}
                  value={String(index + 1)}
                  w="full"
                  h={'8px'}
                  maxH={'8px'}
                  rounded="48px"
                  sx={{
                    background: `${index + 1 <= value ? 'linear-gradient(90deg,  #00FF99,#7B00FF)' : '#2B314E'}`,
                    color: 'white',
                    border: 'none',
                    display: 'block',
                    width: '100%',
                    _checked: {
                      background: 'linear-gradient(90deg, #7B00FF, #00FF99)',
                      color: 'white',
                    },
                    _focus: {
                      boxShadow: 'none',
                    },
                  }}
                />
              ))}{' '}
            </Flex>
          </Box>
          <Button
            rounded={0}
            p={3}
            variant={'iconDefault'}
            size={'fit'}
            fontSize={{ base: '36px', sm: '52px' }}
            lineHeight={'100%'}
            fontWeight={400}
            fontFamily={'Rhythmic'}
            background="linear-gradient(90deg,  #00FF99,#7B00FF)"
            backgroundClip="text"
            textFillColor="transparent"
            sx={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Получи VPN навсегда
          </Button>
        </Flex>
      </Flex>
    </AppLayoutBound>
  );
};
