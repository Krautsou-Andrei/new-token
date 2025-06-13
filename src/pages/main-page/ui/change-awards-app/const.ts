import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import type { IconName } from '@/shared/ui/app-icon';

export const CHANGE_TOKEN: {
  id: number;
  iconName: IconName;
  description: string;
  value?: string;
}[] = [
  {
    id: 1,
    iconName: 'icon/check_list' as IconName,
    description: LOCAL_TEXT.CREATOR_PAGE.CHANGE_AWARDS.CARDS.ONE,
  },
  {
    id: 2,
    iconName: 'icon/xp' as IconName,
    description: LOCAL_TEXT.CREATOR_PAGE.CHANGE_AWARDS.CARDS.TWO,
    value: DEFAULT.TOKEN,
  },
  {
    id: 3,
    iconName: 'icon/get_token' as IconName,
    description: LOCAL_TEXT.CREATOR_PAGE.CHANGE_AWARDS.CARDS.THREE,
    value: DEFAULT.TOKEN_PRE_SALE,
  },
  {
    id: 4,
    iconName: 'icon/change_h2e' as IconName,
    description: LOCAL_TEXT.CREATOR_PAGE.CHANGE_AWARDS.CARDS.FOUR,
    value: DEFAULT.TOKEN_PRE_SALE,
  },
];
