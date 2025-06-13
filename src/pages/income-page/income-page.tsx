import { useTranslation } from 'react-i18next';

import { Box, Button } from '@chakra-ui/react';

import { useProtected } from '@/features/auth/hook/use-protected';

import { ModalsApp } from '@/widgets/modals-app/modals-app';
import { NavLayoutPanel } from '@/widgets/nav-layout/nav-layout-panel';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { useModalsStore } from '@/shared/lib/modals/modals.store';
import { AppLayoutBound } from '@/shared/ui/app-layout-bound';
import { AppHeading } from '@/shared/ui/typography/app-heading';

// import { IncomeVideoApp } from './income-video-app';
import { LeaderBoardApp } from './leaderboard-app';
import { PublishedVideosApp } from './published-videos-app/published-videos-app';
import { VideoStreakApp } from './video-streak-app';

export const IncomePage = () => {
  const { setIsStepsDrawerOpen } = useModalsStore();
  useProtected();
  const { t } = useTranslation();

  return (
    <AppLayoutBound
      pb={35}
      pt={8}
      overflow={'hidden'}
      css={{ '--accent-color': '#b6fb0d' }}
    >
      <AppHeading marginBottom={9}>Доход</AppHeading>
      {/* <IncomeVideoApp /> */}
      <VideoStreakApp />
      <LeaderBoardApp />
      <PublishedVideosApp marginBottom={'64px'} />

      <Box
        position={'fixed'}
        bottom={21}
        w={'calc(100% - 40px)'}
        left={5}
        background={'background.page'}
        py={5}
      >
        <AppLayoutBound
          px={{
            base: '0',
          }}
        >
          <Button variant="primary" onClick={() => setIsStepsDrawerOpen(true)}>
            {t(LOCAL_TEXT.INCOME_PAGE.CREATE_NEW_VIDEO)}
          </Button>
        </AppLayoutBound>
      </Box>

      <ModalsApp />
      <NavLayoutPanel />
    </AppLayoutBound>
  );
};
