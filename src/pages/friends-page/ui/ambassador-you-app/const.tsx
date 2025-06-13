import { LOCAL_TEXT } from '@/shared/consts/local-text';
import type { IconName } from '@/shared/ui/app-icon';

export const AMBASSADOR_CARDS = [
  {
    id: 1,
    descriptions: LOCAL_TEXT.FRIENDS_PAGE.AMBASADOR_CARD_ONE.VALUE,
    highlight: LOCAL_TEXT.FRIENDS_PAGE.AMBASADOR_CARD_ONE.HIGHLIGHT,
    iconName: 'icon/gift' as IconName,
  },
  {
    id: 2,
    descriptions: LOCAL_TEXT.FRIENDS_PAGE.AMBASADOR_CARD_TWO.VALUE,
    highlight: LOCAL_TEXT.FRIENDS_PAGE.AMBASADOR_CARD_TWO.HIGHLIGHT,
    iconName: 'icon/creditCard' as IconName,
  },
  {
    id: 3,
    descriptions: LOCAL_TEXT.FRIENDS_PAGE.AMBASADOR_CARD_THREE.VALUE,
    highlight: LOCAL_TEXT.FRIENDS_PAGE.AMBASADOR_CARD_THREE.HIGHLIGHT,
    iconName: 'icon/percent' as IconName,
  },
];
