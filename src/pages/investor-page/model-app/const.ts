import { LOCAL_TEXT } from '@/shared/consts/local-text';
import type { IconName } from '@/shared/ui/app-icon';

export const STEPS_CARDS_ITEMS = [
  {
    iconName: 'icon/card-coin' as IconName,
    highlightIconName: 'icon/card-coin-black' as IconName,
    cardTitle: LOCAL_TEXT.INVESTOR_PAGE.MODEL_STEPS.ONE.CARD_TITLE,
    descriptions: LOCAL_TEXT.INVESTOR_PAGE.MODEL_STEPS.ONE.DESCRIPTIONS,
    highlight: '',
  },
  {
    iconName: 'icon/lock' as IconName,
    highlightIconName: 'icon/lock-black' as IconName,
    cardTitle: LOCAL_TEXT.INVESTOR_PAGE.MODEL_STEPS.TWO.CARD_TITLE,
    descriptions: LOCAL_TEXT.INVESTOR_PAGE.MODEL_STEPS.TWO.DESCRIPTIONS,
    highlight: '',
  },
  {
    iconName: 'icon/graph' as IconName,
    highlightIconName: 'icon/graph-black' as IconName,
    cardTitle: LOCAL_TEXT.INVESTOR_PAGE.MODEL_STEPS.THREE.CARD_TITLE,
    descriptions: LOCAL_TEXT.INVESTOR_PAGE.MODEL_STEPS.THREE.DESCRIPTIONS,
    highlight: '',
  },
  {
    iconName: 'icon/status-up2' as IconName,
    highlightIconName: 'icon/status-up-black' as IconName,
    cardTitle: LOCAL_TEXT.INVESTOR_PAGE.MODEL_STEPS.FOUR.CARD_TITLE,
    descriptions: LOCAL_TEXT.INVESTOR_PAGE.MODEL_STEPS.FOUR.DESCRIPTIONS,
    highlight: '',
  },
];
