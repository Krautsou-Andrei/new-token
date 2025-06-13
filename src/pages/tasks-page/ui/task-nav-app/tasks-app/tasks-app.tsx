import { useTranslation } from 'react-i18next';

import { Box, Flex } from '@chakra-ui/react';

import type { Task } from '@/entities/awards';

import { useAwards } from '@/features/awards';

import { AWARDS_TASKS } from '@/shared/consts/awards-tasks';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppSpecialTask } from '@/shared/ui/app-special-task';
import { AppSpiner } from '@/shared/ui/app-spiner';
import { AppText } from '@/shared/ui/typography/app-text';

import { AppTaskCard } from '../../app-task-card';

type TaksAppProps = {
  tasks: Task[];
};

export const TaksApp = ({ tasks }: TaksAppProps) => {
  const { mapAutoTasks, isLoading } = useAwards();
  const { t } = useTranslation();

  return (
    <>
      {isLoading && <AppSpiner />}
      <Flex direction={'column'} gap={{ base: '16px' }}>
        {tasks && tasks.length > 0 ? (
          tasks.map((task) =>
            task.category === AWARDS_TASKS.BYBIT ? (
              <AppSpecialTask
                key={task.title}
                value={mapAutoTasks?.get(task.category)?.reward}
                task={task}
                isClaimed={Boolean(mapAutoTasks?.get(task.category)?.isClaimed)}
                isPending={mapAutoTasks?.get(task.category)?.isPending}
              />
            ) : (
              <AppTaskCard
                key={task.title}
                task={task}
                value={mapAutoTasks?.get(task.category)?.reward}
                isClaimed={Boolean(mapAutoTasks?.get(task.category)?.isClaimed)}
              />
            )
          )
        ) : (
          <Box>
            <AppText>{t(LOCAL_TEXT.EMPTY)}</AppText>
          </Box>
        )}
      </Flex>
    </>
  );
};
