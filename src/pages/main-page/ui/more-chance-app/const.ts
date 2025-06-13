import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import type { IconName } from '@/shared/ui/app-icon';

export const STEPS_PROGRESS_BAR_ITEMS1 = [
  {
    iconName: 'icon/user-square' as IconName,
  },
  {
    iconName: 'icon/check-square' as IconName,
  },
  {
    iconName: 'icon/video-square' as IconName,
  },
  {
    iconName: 'icon/top-square' as IconName,
  },
  {
    iconName: 'icon/profile_add' as IconName,
  },
];

export const STEPS_CARDS_ITEMS2: {
  highlightIconName: IconName;
  title: string;
  description: string;
  highlight: string;
  value?: string;
}[] = [
  {
    highlightIconName: 'icon/note_black' as IconName,
    title: LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.CARDS.ONE.TITLE,
    description: LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.CARDS.ONE.DESCRIPTIONS,
    highlight: LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.CARDS.ONE.HIGHLIGHT,
    value: DEFAULT.TOKEN,
  },
  {
    highlightIconName: 'icon/user_black' as IconName,
    title: LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.CARDS.TWO.TITLE,
    description: LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.CARDS.TWO.DESCRIPTIONS,
    highlight: LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.CARDS.TWO.HIGHLIGHT,
    value: DEFAULT.TOKEN,
  },
  {
    highlightIconName: 'icon/note_black' as IconName,
    title: LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.CARDS.THREE.TITLE,
    description: LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.CARDS.THREE.DESCRIPTIONS,
    highlight: LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.CARDS.THREE.HIGHLIGHT,
    value: DEFAULT.TOKEN,
  },
  {
    highlightIconName: 'icon/user_black' as IconName,
    title: LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.CARDS.FOUR.TITLE,
    description: LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.CARDS.FOUR.DESCRIPTIONS,
    highlight: LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.CARDS.FOUR.HIGHLIGHT,
    value: DEFAULT.TOKEN_PRE_SALE,
  },
  {
    highlightIconName: 'icon/user_black' as IconName,
    title: LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.CARDS.FIVE.TITLE,
    description: LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.CARDS.FIVE.DESCRIPTIONS,
    highlight: LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.CARDS.FIVE.HIGHLIGHT,
  },
];

export const STEPS_PROGRESS_BAR_ITEMS2 = [
  {
    iconName: 'icon/clipboard_tick' as IconName,
  },
  {
    iconName: 'icon/video' as IconName,
  },
  {
    iconName: 'icon/profile_add' as IconName,
  },
  {
    iconName: 'icon/coins' as IconName,
  },
  {
    iconName: 'icon/coins' as IconName,
  },
];
