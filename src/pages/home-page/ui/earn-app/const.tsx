import { ROUTES } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import type { IconName } from '@/shared/ui/app-icon';

export const EARNING_CARDS = [
  {
    id: 1,
    iconName: 'icon/triple_profile' as IconName,
    description: LOCAL_TEXT.HOME_PAGE.INVITE_FRIENDS,
    link: ROUTES.FRIENDS,
  },
  {
    id: 2,
    iconName: 'icon/cup' as IconName,
    description: LOCAL_TEXT.HOME_PAGE.GET_AWARDS,
    link: ROUTES.TASKS,
  },
  {
    id: 3,
    iconName: 'icon/video-square-green' as IconName,
    description: LOCAL_TEXT.HOME_PAGE.VIEW_REELS,
    link: ROUTES.INCOME,
  },
];
