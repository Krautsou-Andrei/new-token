import { useTranslation } from 'react-i18next';

import { Box, Button } from '@chakra-ui/react';

import { useAwards } from '@/features/awards';

import { DEFAULT } from '@/shared/consts';
import { AWARDS_TASKS } from '@/shared/consts/awards-tasks';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { formatNumberWithSpaces } from '@/shared/lib/utils/format-numbers';
import { AppCardDescriptions } from '@/shared/ui/app-card-descriptions';
import { AppIcon } from '@/shared/ui/app-icon';

export const SubscribeChannelApp = () => {
  const { mapAutoTasks, handleMarkTaskAsCompleted, isLoading } =
    useAwards(true);
  const { t } = useTranslation();

  const currentTask = mapAutoTasks?.get(AWARDS_TASKS.OPEN_TG);

  return (
    <AppCardDescriptions
      cursor={'pointer'}
      descriptions={`+${formatNumberWithSpaces(currentTask?.reward || 0)} ${DEFAULT.TOKEN}`}
      cardTitle={t(LOCAL_TEXT.HOME_PAGE.SUBSCRIBE_CHANEL)}
      iconName="icon/note"
      gap={3}
      onClick={() => {
        if (!currentTask?.isClaimed)
          handleMarkTaskAsCompleted(AWARDS_TASKS.OPEN_TG, () => {});
      }}
    >
      {!isLoading && !currentTask?.isClaimed && (
        <Box alignSelf={'end'}>
          <Button
            variant="outlineSm"
            width={'fit-content'}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              handleMarkTaskAsCompleted(AWARDS_TASKS.OPEN_TG);
            }}
          >
            {t(LOCAL_TEXT.CLAIM)}
          </Button>
        </Box>
      )}
      {isLoading && !currentTask?.isClaimed && (
        <AppIcon name="icon/clock" width={32} height={32} />
      )}
      {currentTask?.isClaimed && !isLoading && (
        <AppIcon name="icon/tick-circle" width={32} height={32} />
      )}
    </AppCardDescriptions>
  );
};
