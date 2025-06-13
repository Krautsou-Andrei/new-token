import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import type { IconName } from '@/shared/ui/app-icon';

export const CARDS: {
  descriptions: string;
  iconName?: IconName;
  value?: string;
}[] = [
  {
    iconName: 'icon/note',
    descriptions: LOCAL_TEXT.INVESTOR_PAGE.WHAT_GIVES_TOKEN.CARDS.ONE,
    value: DEFAULT.TOKEN_PRE_SALE,
  },
  {
    iconName: 'icon/user-vs-pc',
    descriptions: LOCAL_TEXT.INVESTOR_PAGE.WHAT_GIVES_TOKEN.CARDS.TWO,
    value: DEFAULT.TOKEN_PRE_SALE,
  },
  {
    iconName: 'icon/status-up',
    descriptions: LOCAL_TEXT.INVESTOR_PAGE.WHAT_GIVES_TOKEN.CARDS.THREE,
  },
];
