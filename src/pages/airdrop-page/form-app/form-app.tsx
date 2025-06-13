import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Box, type BoxProps } from '@chakra-ui/react';
import { useTonWallet } from '@tonconnect/ui-react';

import { useGetListJettons } from '@/shared/api/hooks/jetton/use-get-list-jettons';
import { getJettonBalance } from '@/shared/lib/utils/get-jetton-balance';
import { AppSeparator } from '@/shared/ui/app-separator';

import { SlideApp } from './ui/slide-app';

import { SLIDES } from './const';

type FormAppProps = BoxProps;

export const FormApp = ({ ...props }: FormAppProps) => {
  const wallet = useTonWallet();

  const { data: listJttons } = useGetListJettons(
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    wallet?.account.address!,
    Boolean(wallet)
  );

  return (
    <Box {...props}>
      <AppSeparator />
      <Box mb={5}>
        <Swiper slidesPerView={3} spaceBetween={16} autoplay={{ delay: 3000 }}>
          {listJttons &&
            listJttons.balances.map((jetton) => (
              <SwiperSlide key={jetton.jetton.name}>
                <SlideApp
                  title={jetton.jetton.symbol}
                  balance={getJettonBalance({
                    jettonBalance: jetton,
                    isFull: true,
                  })}
                />
              </SwiperSlide>
            ))}
          {SLIDES.map((slideApp, index) => (
            <SwiperSlide key={index}>
              <SlideApp title={slideApp.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <AppSeparator />
    </Box>
  );
};
