import { AirdropPage } from '@/pages/airdrop-page';

import { createFileRoute } from '@tanstack/react-router';

import { ROUTES } from '@/shared/consts';

export const Route = createFileRoute(ROUTES.AIRDROP)({
  component: AirdropPage,
});
