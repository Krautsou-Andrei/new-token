import { RouterProvider, createRouter } from '@tanstack/react-router';

import { routeTree } from '../routeTree.gen';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadDelay: 100,
});

export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
