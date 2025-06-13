import { useMixpanelContext } from '@/features/mix-panel';

import { useAuthMe } from '@/shared/api/hooks/auth';
import { useGetRefData } from '@/shared/api/hooks/users/use-get-ref-data';
import { MIXPANEL_EVENT } from '@/shared/consts/mixpanel-event';
import { copyText } from '@/shared/lib/utils';

export const useFriendPage = () => {
  const { data: user } = useAuthMe();

  const { data: refData, isLoading: refIsLoading } = useGetRefData(
    user?.id,
    Boolean(user?.id)
  );

  const { trackEvent } = useMixpanelContext();

  const handleCopyText = (text: string) => {
    copyText(text);
  };

  const handleInviteClick = () => {
    handleCopyText(refData?.refLink || '');
    trackEvent(MIXPANEL_EVENT.INVITE_FRIEND_COPY_LINK);
  };

  return { state: { refData, refIsLoading }, functions: { handleInviteClick } };
};
