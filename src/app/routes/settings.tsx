import { SettingsPage } from '@/pages/settings-page';

import { createFileRoute } from '@tanstack/react-router';

import { ROUTES } from '@/shared/consts';

export const Route = createFileRoute(ROUTES.SETTINGS)({
  component: SettingsPage,
});
