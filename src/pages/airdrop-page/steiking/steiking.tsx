import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Flex,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react';
import { Address } from '@ton/core';
import { useTonWallet } from '@tonconnect/ui-react';

import { useGetJettonBalances } from '@/shared/api/hooks/jetton/use-get-jetton-balances';
import { env } from '@/shared/consts';
import { getBalanceJettonAddress } from '@/shared/lib/utils/get-balance-jetton-address';
import useDebounce from '@/shared/lib/utils/hooks/use-debounce';
import { amountValidateNumber } from '@/shared/lib/utils/validate/amount-validate-number';
import { AppButtonBorderGradient } from '@/shared/ui/app-button-border-gradient';
import { AppSeparator } from '@/shared/ui/app-separator';
import { AppTextGradient } from '@/shared/ui/app-text-gradient';

import { SLIDES } from '../form-app/const';

export const Steiking = () => {
  const wallet = useTonWallet();
  // const WebApp = useWebApp();
  // const telegramId = WebApp?.initDataUnsafe?.user?.id;

  const JettonMasterAddress = Address.parse(
    env.jettonMasterAddress
  ).toRawString();

  const { data: jettonBalance } = useGetJettonBalances(
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    wallet?.account.address!,
    Boolean(wallet?.account.address)
  );

  const jettonMasterBalance = getBalanceJettonAddress(
    jettonBalance,
    JettonMasterAddress
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeToken, setActiveToken] = useState(SLIDES[0].title);

  const [valueStaking, setValueStaking] = useState('');
  const debouncedValue = useDebounce(valueStaking, 300);

  useEffect(() => {
    if (jettonMasterBalance) {
      setValueStaking(jettonMasterBalance);
    }
  }, [jettonMasterBalance]);

  return (
    <Box>
      <Flex justifyContent={'center'} w={'full'}>
        <AppTextGradient
          fontSize={{ base: '48px', sm: '64px' }}
          fontFamily={'dist_inkingregular'}
          lineHeight={'100%'}
          textAlign={'center'}
        >
          Стейкинг
        </AppTextGradient>
      </Flex>
      <Flex
        w={'full'}
        justifyContent={'space-between'}
        gap={4}
        alignItems={'center'}
      >
        <Box w={'55%'}>
          <Swiper
            style={{ padding: '0 5px' }}
            slidesPerView={3}
            spaceBetween={12}
            autoplay={{ delay: 3000 }}
            onSlideChange={(slider) => {
              setActiveIndex(slider.activeIndex);
            }}
          >
            {SLIDES.map((token, index) => (
              <SwiperSlide
                key={token.title}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Button
                  px={activeToken === token.title ? 4 : 0}
                  mt={activeIndex + 2 === index + 1 ? 0 : 2}
                  fontSize={{ base: '20px', sm: '32px' }}
                  variant={'iconDefault'}
                  size={'fit'}
                  fontFamily={
                    token.title === SLIDES[1].title ? 'Inter' : 'Rhythmic'
                  }
                  border={activeToken === token.title ? '1px dashed' : ''}
                  borderColor={'background.secondary'}
                  color={activeToken === token.title ? 'text.secondary' : ''}
                  fontWeight={400}
                  onClick={() => setActiveToken(token.title)}
                >
                  {token.title}
                </Button>
              </SwiperSlide>
            ))}{' '}
          </Swiper>
        </Box>
        <Box>
          <Input
            fontSize={{ base: '28px', sm: '48px' }}
            background="linear-gradient(90deg, #00FF99, #7B00FF)"
            backgroundClip="text"
            sx={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              color: 'transparent',
              _focus: {
                background: 'linear-gradient(90deg, #00FF99, #7B00FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                outline: 'none',
                border: '2px solid #00FF99',
              },
              _hover: {
                background: 'linear-gradient(90deg, #00FF99, #7B00FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                outline: 'none',
              },
            }}
            fontFamily={'tektur'}
            value={valueStaking}
            min={1000}
            max={jettonMasterBalance}
            onKeyDown={(event) =>
              amountValidateNumber(event as unknown as KeyboardEvent)
            }
            onChange={(event) => setValueStaking(event.target.value)}
          />
        </Box>
      </Flex>
      <Flex
        color={'text.secondary'}
        gap={4}
        alignItems={'center'}
        justifyContent={'space-between'}
        fontFamily={'tektur'}
        fontSize={{ base: '18px', sm: '24px' }}
      >
        <Box>MIN</Box>
        <Box>MAX</Box>
      </Flex>
      <Box>
        <Slider
          aria-label="slider-ex-2"
          colorScheme="pink"
          value={Number(debouncedValue)}
          min={1000}
          max={Number(jettonMasterBalance)}
          step={10}
          onChange={(val) => setValueStaking(String(val))}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>{' '}
      </Box>
      {/* <Progress
        mb={{ base: 2, sm: 4 }}
        h={2}
        rounded={'48px'}
        bg="#2B314E"
        sx={{
          '& [role="progressbar"] ': {
            backgroundColor: '#00FF99',
            borderRadius: '48px',
          },
        }}
        value={20}
      /> */}
      <Flex justifyContent={'space-between'} gap={4} mb={{ base: 10, sm: 15 }}>
        <AppTextGradient
          lineHeight={'100%'}
          fontFamily={'Rhythmic'}
          fontSize={{ base: '24px', sm: '32px' }}
        >
          Доход за 7 дней
        </AppTextGradient>
        <Flex
          direction={'column'}
          justifyContent={'end'}
          fontFamily={'tektur'}
          lineHeight={'100%'}
          gap={{ base: 2, sm: 4 }}
        >
          <Text textAlign={'end'} fontSize={{ base: '32px', sm: '64px' }}>
            20000.00
          </Text>

          <Text textAlign={'end'} color={'text.secondary'}>
            anon tokens
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent={'center'} w={'full'} mb={{ base: 15, sm: 20 }}>
        <AppButtonBorderGradient>Стейкинг</AppButtonBorderGradient>
      </Flex>
      <AppSeparator mb={5} />
      <Flex justifyContent={'center'}>
        <AppTextGradient
          textAlign={'center'}
          fontWeight={400}
          fontSize={{ base: '28px', sm: '40px' }}
          lineHeight={'100%'}
          fontFamily={'Rhythmic'}
        >
          История транзакций
        </AppTextGradient>
      </Flex>
    </Box>
  );
};
