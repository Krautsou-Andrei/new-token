import { LOCAL_TEXT } from '@/shared/consts/local-text';
import type { IconName } from '@/shared/ui/app-icon';

export const CARDS: { descriptions: string; iconName?: IconName }[] = [
  {
    iconName: 'icon/triple_profile',
    descriptions: LOCAL_TEXT.INVESTOR_PAGE.TOKEN_DEMAND.CARDS.ONE,
  },
  {
    iconName: 'icon/money2',
    descriptions: LOCAL_TEXT.INVESTOR_PAGE.TOKEN_DEMAND.CARDS.TWO,
  },
  {
    iconName: 'icon/eye-w-green',
    descriptions: LOCAL_TEXT.INVESTOR_PAGE.TOKEN_DEMAND.CARDS.THREE,
  },
];
