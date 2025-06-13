import type { ReactNode } from 'react';

import { ButtonAirdropApp, ButtonInvestorApp } from '@/widgets/buttons';

import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';

export const WAY: {
  id: number;
  description: string;
  button: ReactNode;
  value?: string;
}[] = [
  {
    id: 1,
    description: LOCAL_TEXT.CREATOR_PAGE.YOU_WAY.CARDS.ONE,
    button: <ButtonAirdropApp />,
    value: DEFAULT.TOKEN_PRE_SALE,
  },
  {
    id: 2,
    description: LOCAL_TEXT.CREATOR_PAGE.YOU_WAY.CARDS.TWO,
    button: <ButtonInvestorApp />,
  },
];
