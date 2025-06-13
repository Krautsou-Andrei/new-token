import { LOCAL_TEXT } from '@/shared/consts/local-text';

export const VALUES = {
  TOP: 'top',
  BOTTOM: 'bottom',
  CUSTOM: 'custom',
};
export const OPTIONS = [
  {
    value: VALUES.TOP,
    title: LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.TOP,
  },
  {
    value: VALUES.BOTTOM,
    title: LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.BOTTOM,
  },
  {
    value: VALUES.CUSTOM,
    title: LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.TITLE,
  },
];
