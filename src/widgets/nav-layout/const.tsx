import { LOCAL_TEXT } from '@/shared/consts/local-text';
import type { IconName } from '@/shared/ui/app-icon';

export const NAV_ITEMS = [
  {
    id: 1,
    iconName: 'nav/home' as IconName,
    title: LOCAL_TEXT.NAV_PANEL.HOME,
    href: '/app',
  },
  {
    id: 2,
    iconName: 'nav/task' as IconName,
    title: LOCAL_TEXT.NAV_PANEL.TASK,
    href: '/tasks',
  },
  {
    id: 3,
    iconName: 'nav/video' as IconName,
    title: LOCAL_TEXT.NAV_PANEL.INCOME,
    href: '/income',
  },
  {
    id: 4,
    iconName: 'nav/friends' as IconName,
    title: LOCAL_TEXT.NAV_PANEL.FRIENDS,
    href: '/friends',
  },
  {
    id: 5,
    iconName: 'nav/empty-wallet' as IconName,
    title: LOCAL_TEXT.NAV_PANEL.WALLET,
    href: '/wallet',
  },
];
