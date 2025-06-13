import { useRef, useState } from 'react';

import { Flex } from '@chakra-ui/react';

import { FooterApp } from '@/widgets/footer-app';

import { AppLayoutBound } from '@/shared/ui/app-layout-bound';

import { IdeaApp, VideoApp } from './ui';
import { CanYouApp } from './ui/can-you-app';
import { ChangeAwardsApp } from './ui/change-awards-app';
import { ComfortUserApp } from './ui/comfort-user-app';
import { CommercialApp } from './ui/commercial-app';
import { FirstCommercialPlatformApp } from './ui/first-commercial-platform-app';
import { ImportantApp } from './ui/important-app';
import { MoreChanceApp } from './ui/more-chance-app';
import { OurGoalsApp } from './ui/our-goals-app';
import { YouWayApp } from './ui/you-way-app';

export const MainPage = () => {
  const refInvest = useRef<HTMLDivElement | null>(null);
  const [isViewAll, setIsViewAll] = useState(false);

  return (
    <AppLayoutBound
      position={'relative'}
      py="8"
      pt={{ base: 2, xl: 6 }}
      overflow={'hidden'}
      css={{ '--accent-color': '#b6fb0d' }}
    >
      <Flex direction={'column'} gap={23} ></Flex>
    </AppLayoutBound>
  );
};
