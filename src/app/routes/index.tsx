import { MainPage } from '@/pages/main-page';

import { createFileRoute } from '@tanstack/react-router';

import { ROUTES } from '@/shared/consts/routes';

export const Route = createFileRoute(ROUTES.MAIN)({
  component: MainPage,
});
