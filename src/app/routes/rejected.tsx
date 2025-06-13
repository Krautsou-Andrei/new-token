import { RejectedPage } from '@/pages/rejected-page';

import { createFileRoute } from '@tanstack/react-router';

import { ROUTES } from '@/shared/consts/routes';

export const Route = createFileRoute(ROUTES.REJECTED)({
  component: RejectedPage,
});
