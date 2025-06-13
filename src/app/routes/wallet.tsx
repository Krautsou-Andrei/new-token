import { WalletPage } from '@/pages/wallet-page';

import { createFileRoute } from '@tanstack/react-router';

import { ROUTES } from '@/shared/consts';

export const Route = createFileRoute(ROUTES.WALLET)({
  component: WalletPage,
});
