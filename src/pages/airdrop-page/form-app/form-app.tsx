import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { useState } from 'react';

import { Box, type BoxProps } from '@chakra-ui/react';

// import { useTonWallet } from '@tonconnect/ui-react';

// import { useGetListJettons } from '@/shared/api/hooks/jetton/use-get-list-jettons';
// import { getJettonBalance } from '@/shared/lib/utils/get-jetton-balance';
import { AppSeparator } from '@/shared/ui/app-separator';

import { SlideApp } from './ui/slide-app';

import { SLIDES } from './const';

type FormAppProps = BoxProps;

export const FormApp = ({ ...props }: FormAppProps) => {
  // const wallet = useTonWallet();
  const [activeIndex, setActiveIndex] = useState(0);

  // const { data: listJttons } = useGetListJettons(
  //   // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
  //   wallet?.account.address!,
  //   Boolean(wallet)
  // );

  return (
    <Box {...props}>
      <AppSeparator />
      <Box mb={5}>
        <Swiper
          slidesPerView={3}
          spaceBetween={16}
          autoplay={{ delay: 3000 }}
          onSlideChange={(slider) => {
            setActiveIndex(slider.activeIndex);
          }}
        >
          {/* {listJttons &&
            listJttons.balances.map((jetton, index) => (
              <SwiperSlide key={jetton.jetton.name}>
                <SlideApp
                  pt={activeIndex + 2 === index + 1 ? 5 : 8}
                  title={jetton.jetton.symbol}
                  balance={getJettonBalance({
                    jettonBalance: jetton,
                    isFull: true,
                  })}
                />
              </SwiperSlide>
            ))} */}
          {SLIDES.map((slideApp, index) => (
            <SwiperSlide key={index}>
              <SlideApp
                title={slideApp.title}
                pt={activeIndex + 2 === index + 1 ? 5 : 8}
                color={
                  activeIndex + 2 === index + 1
                    ? 'text.white'
                    : 'text.secondary'
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <AppSeparator />
    </Box>
  );
};
