import NotFoundPage from '@/pages/not-found-page/not-found-page';

import * as React from 'react';

import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { AppScrollTop } from '@/shared/ui/app-scroll-top';

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <NotFoundPage />,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
      {import.meta.env.DEV && (
        <TanStackRouterDevtools position="bottom-right" />
      )}
      <AppScrollTop />
    </React.Fragment>
  );
}
