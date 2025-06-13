import { useEffect } from 'react';

import { useLocation } from '@tanstack/react-router';

export * from './app-scroll-top';

export const AppScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
