import { IncomePage } from '@/pages/income-page/income-page';

import { createFileRoute } from '@tanstack/react-router';

import { ROUTES } from '@/shared/consts/routes';

export const Route = createFileRoute(ROUTES.INCOME)({
  component: IncomePage,
});
