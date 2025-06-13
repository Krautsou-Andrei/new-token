import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Box, Button, Flex, Progress, Text } from '@chakra-ui/react';

import { AppButtonBorderGradient } from '@/shared/ui/app-button-border-gradient';
import { AppSeparator } from '@/shared/ui/app-separator';
import { AppTextGradient } from '@/shared/ui/app-text-gradient';

import { SLIDES } from '../form-app/const';

export const Steiking = () => {
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
          >
            {SLIDES.map((token) => (
              <SwiperSlide key={token.title}>
                <Button
                  fontSize={{ base: '20px', sm: '32px' }}
                  variant={'iconDefault'}
                  size={'fit'}
                  fontFamily={
                    token.title === SLIDES[1].title ? 'Inter' : 'Rhythmic'
                  }
                  fontWeight={400}
                >
                  {token.title}
                </Button>
              </SwiperSlide>
            ))}{' '}
          </Swiper>
        </Box>
        <Box>
          <AppTextGradient
            fontFamily={'tektur'}
            fontSize={{ base: '28px', sm: '48px' }}
          >
            10000
          </AppTextGradient>
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
      <Progress
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
      />
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
