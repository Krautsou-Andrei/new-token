import { FriendsPage } from '@/pages/friends-page';

import { createFileRoute } from '@tanstack/react-router';

import { ROUTES } from '@/shared/consts';

export const Route = createFileRoute(ROUTES.FRIENDS)({
  component: FriendsPage,
});
