import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Box, type BoxProps } from '@chakra-ui/react';

import { AppSeparator } from '@/shared/ui/app-separator';

import { SlideApp } from './ui/slide-app';

import { SLIDES } from './const';

type FormAppProps = BoxProps;

export const FormApp = ({ ...props }: FormAppProps) => {
  return (
    <Box {...props}>
      <AppSeparator />
      <Box mb={5}>
        <Swiper slidesPerView={3} spaceBetween={16} autoplay={{ delay: 3000 }}>
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
