import { useTranslation } from 'react-i18next';

import { LOCAL_TEXT } from '@/shared/consts/local-text';

import { ThreeBlocksApp } from '../three-blocks-app';
import { ITEMS } from './const';

export const MechanicsApp = () => {
  const { t } = useTranslation();
  return (
    <ThreeBlocksApp
      titleSlot={`${t(LOCAL_TEXT.INVESTOR_PAGE.MECHANICS_TITLE)}:`}
      items={ITEMS}
    />
  );
};
