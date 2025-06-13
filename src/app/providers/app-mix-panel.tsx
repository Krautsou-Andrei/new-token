import mixpanel from 'mixpanel-browser';

import {
  type FC,
  type PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
} from 'react';

import { useLocation } from '@tanstack/react-router';

import type { MixPanelActionsType } from '@/features/mix-panel';

import { useAuthMe } from '@/shared/api/hooks/auth';
import { env } from '@/shared/consts';
import { MIXPANEL_EVENT } from '@/shared/consts/mixpanel-event';

const MixpanelContext = createContext<MixPanelActionsType | null>(null);

export const MixPanelProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data: userDataResponse } = useAuthMe();
  const tokenMixpanel = env.tokenMixpanel;

  const telegramId = userDataResponse?.telegramId;
  const location = useLocation();

  useEffect(() => {
    if (telegramId) {
      mixpanel.init(`${tokenMixpanel}`, {});
      mixpanel.identify(telegramId);
    }
  }, [userDataResponse, tokenMixpanel, telegramId]);

  const trackEvent = useCallback(
    (eventName: string, properties = {}) => {
      if (telegramId && mixpanel.get_distinct_id()) {
        mixpanel.track(eventName, {
          ...properties,
          telegramId,
        });
      }
    },
    [telegramId]
  );

  useEffect(() => {
    trackEvent(MIXPANEL_EVENT.PAGE_VIEWED, { path: location.pathname });
  }, [location.pathname, trackEvent]);

  const actions = useMemo(() => {
    return {
      trackEvent,
    };
  }, [trackEvent]);

  return (
    <MixpanelContext.Provider value={actions}>
      {children}
    </MixpanelContext.Provider>
  );
};
