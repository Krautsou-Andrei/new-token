import { HomePage } from '@/pages/home-page';

import { createFileRoute } from '@tanstack/react-router';

import { ROUTES } from '@/shared/consts';

export const Route = createFileRoute(ROUTES.AIRDROP)({
  component: HomePage,
});
