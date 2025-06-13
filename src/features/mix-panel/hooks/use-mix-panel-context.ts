import { createContext, useContext } from 'react';

import type { MixPanelActionsType } from '../model';

const MixpanelContext = createContext<MixPanelActionsType | null>(null);

export const useMixpanelContext = () => {
  const context = useContext(MixpanelContext);
  if (!context) {
    throw new Error('useMixpanel must be used within a MixpanelProvider');
  }
  return context;
};
