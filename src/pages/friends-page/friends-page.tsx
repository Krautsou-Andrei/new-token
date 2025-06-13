import { Flex } from '@chakra-ui/react';

import { useProtected } from '@/features/auth/hook/use-protected';

import { NavLayoutPanel } from '@/widgets/nav-layout/nav-layout-panel';

import { AppLayoutBound } from '@/shared/ui/app-layout-bound';

import { AmbassadorYouApp } from './ui/ambassador-you-app';
import { BonusAmbasadorApp } from './ui/bonus-heading-app';
import { InvitedFriendsApp } from './ui/invited-friends-app';
import { ReferralApp } from './ui/referral-app';

export const FriendsPage = () => {
  useProtected();

  return (
    <>
      <AppLayoutBound py={5} pb={'260px'}>
        <Flex direction={'column'} gap={8} position={'relative'}>
          <AmbassadorYouApp />
          <BonusAmbasadorApp />
          <InvitedFriendsApp />
          <ReferralApp />
        </Flex>

        <NavLayoutPanel />
      </AppLayoutBound>
    </>
  );
};
