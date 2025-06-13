import type { ReactNode } from 'react';

export type NavLink = {
  title: string;
  href: string;
  disabled: boolean;
  icon: ReactNode;
};
