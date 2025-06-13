import { useTranslation } from 'react-i18next';

import { useInvitedFriends } from './hooks/use-invited-friends';

import { Flex } from '@chakra-ui/react';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppUserCard } from '@/shared/ui/app-user-card';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppText } from '@/shared/ui/typography/app-text';

export const InvitedFriendsApp = () => {
  const { state } = useInvitedFriends();
  const { t } = useTranslation();

  return (
    <Flex direction={'column'} gap={6}>
      <AppHeading>{t(LOCAL_TEXT.FRIENDS_PAGE.YOU_FRIENDS)}:</AppHeading>

      <Flex direction={'column'} gap={3}>
        {state.referals?.referals && state.referals.referals.length > 0 ? (
          state.referals.referals.map((friend, index) => (
            <AppUserCard
              key={`${friend.username}-${index}`}
              name={friend.username}
              date={friend.createdAt}
              points={friend.balance}
            />
          ))
        ) : (
          <AppText> {t(LOCAL_TEXT.EMPTY)}</AppText>
        )}
      </Flex>
    </Flex>
  );
};
