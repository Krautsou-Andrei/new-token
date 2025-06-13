import { SuccessPage } from '@/pages/success-page';

import { createFileRoute } from '@tanstack/react-router';

import { ROUTES } from '@/shared/consts/routes';

export const Route = createFileRoute(ROUTES.SUCCESS)({
  component: SuccessPage,
});
