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

import { useAuthMe } from '@/shared/api/hooks/auth';
import { useGetJettonBalances } from '@/shared/api/hooks/jetton/use-get-jetton-balances';
import { useCreateStaking } from '@/shared/api/hooks/staking/use-create-staking';
import { useStaking } from '@/shared/api/hooks/staking/use-staking';
import { DEFAULT, env } from '@/shared/consts';
import { getBalanceJettonAddress } from '@/shared/lib/utils/get-balance-jetton-address';
import useDebounce from '@/shared/lib/utils/hooks/use-debounce';
import { amountValidateNumber } from '@/shared/lib/utils/validate/amount-validate-number';
import { AppButtonBorderGradient } from '@/shared/ui/app-button-border-gradient';
import { AppSeparator } from '@/shared/ui/app-separator';
import { AppSpiner } from '@/shared/ui/app-spiner';
import { AppTextGradient } from '@/shared/ui/app-text-gradient';

import { SLIDES } from '../form-app/const';

export const Steiking = () => {
  const wallet = useTonWallet();

  const { data: user } = useAuthMe();
  const { mutateAsync: createStaking, isPending: isPendingStaking } =
    useCreateStaking();
  const { functions: functionsStaking } = useStaking();

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
  const [activeToken, setActiveToken] = useState<{
    title: string;
    currency?: string;
    address?: string;
  }>(SLIDES[0]);

  const [valueStaking, setValueStaking] = useState('');
  const [valueStakingSlider, setValueStakingSlider] = useState('');
  const debouncedValue = useDebounce(valueStaking, 300);

  useEffect(() => {
    if (jettonMasterBalance) {
      setValueStaking(jettonMasterBalance);
      setValueStakingSlider(jettonMasterBalance);
    }
  }, [jettonMasterBalance]);

  useEffect(() => {
    setValueStakingSlider(debouncedValue);
  }, [debouncedValue]);

  const handdleSubmitStaking = async (value: number) => {
    if (user) {
      try {
        const result = await createStaking({
          params: { tgId: user?.id, amount: value },
        });

        functionsStaking.sendStaking(
          result.data.id,
          value,
          activeToken.address
        );
      } catch (error) {
        /* empty */
      }
    }
  };

  return (
    <Box>
      {isPendingStaking && <AppSpiner />}
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
                  px={activeToken.title === token.title ? 4 : 0}
                  mt={activeIndex + 2 === index + 1 ? 0 : 2}
                  fontSize={{ base: '20px', sm: '32px' }}
                  variant={'iconDefault'}
                  size={'fit'}
                  fontFamily={
                    token.title === SLIDES[1].title ? 'Inter' : 'Rhythmic'
                  }
                  border={activeToken.title === token.title ? '1px dashed' : ''}
                  borderColor={'background.secondary'}
                  color={
                    activeToken.title === token.title ? 'text.secondary' : ''
                  }
                  fontWeight={400}
                  onClick={() => setActiveToken(token)}
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
              textAlign: 'right',
              direction: 'rtl',
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
            min={DEFAULT.MIN_STAKE_TOKEN}
            max={jettonMasterBalance}
            onKeyDown={(event) =>
              amountValidateNumber(event as unknown as KeyboardEvent)
            }
            onChange={(event) => {
              event.preventDefault();
              const newValue = Number(event.target.value);
              if (newValue <= Number(jettonMasterBalance)) {
                setValueStaking(String(newValue));
              }
            }}
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
      <Box mb={2}>
        <Slider
          aria-label="slider-ex-2"
          colorScheme="pink"
          value={Number(valueStakingSlider)}
          min={DEFAULT.MIN_STAKE_TOKEN}
          max={Number(jettonMasterBalance)}
          step={100}
          focusThumbOnChange={false}
          sx={{
            '& [class*="chakra-slider__filled"]': {
              backgroundColor: '#00FF99',
              borderRadius: '48px',
            },
          }}
          onChange={(val) => {
            setValueStakingSlider(String(val));
            setValueStaking(String(val));
          }}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>{' '}
      </Box>
      <Flex
        justifyContent={'space-between'}
        gap={4}
        mb={{ base: 10, sm: 15 }}
        alignItems={'start'}
      >
        <AppTextGradient
          lineHeight={'100%'}
          fontFamily={'Rhythmic'}
          fontSize={{ base: '24px', sm: '32px' }}
        >
          Доход за 7 дней
        </AppTextGradient>
        <Flex direction={'column'} justifyContent={'end'} fontFamily={'tektur'}>
          <Text
            textAlign={'end'}
            fontSize={{ base: '28px', sm: '48px' }}
            lineHeight={'100%'}
          >
            {Number(valueStaking) * 2}
          </Text>

          <Text textAlign={'end'} color={'text.secondary'}>
            anon tokens
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent={'center'} w={'full'} mb={{ base: 15, sm: 20 }}>
        <AppButtonBorderGradient
          onClick={() => handdleSubmitStaking(Number(valueStaking))}
        >
          Стейкинг
        </AppButtonBorderGradient>
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
