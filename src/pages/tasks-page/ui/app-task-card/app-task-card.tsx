import { type HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { useApptaskCard } from './hooks/use-app-task-card';

import { Button, Flex, Text } from '@chakra-ui/react';

import type { Task } from '@/entities/awards';

import { DEFAULT } from '@/shared/consts';
import { AWARDS_TASKS } from '@/shared/consts/awards-tasks';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { formatNumberWithSpaces } from '@/shared/lib/utils/format-numbers';
import { AppIcon } from '@/shared/ui/app-icon';

type AppTaskCardProps = HTMLAttributes<HTMLDivElement> & {
  task: Task;
  isClaimed: boolean;
  value?: number;
};

export const AppTaskCard = ({ value, task, isClaimed }: AppTaskCardProps) => {
  const { t } = useTranslation();
  const { state, functions } = useApptaskCard();

  return (
    <>
      <Flex
        background={isClaimed ? 'transparent' : 'background.third'}
        border={isClaimed ? '1px solid' : ''}
        borderColor={'text.fourth'}
        justifyContent={'space-between'}
        gap={{ base: '15px' }}
        alignItems={'center'}
        py={'23.5px'}
        px={4}
        rounded={'xxl'}
        onClick={() => {
          if (isClaimed && task.webUrl) window.open(task.webUrl, '_blank');
        }}
      >
        <Flex direction={'column'} gap={{ base: '4px' }}>
          <Text
            color={isClaimed ? 'text.fourth' : 'white'}
            textStyle={'text_sm_500'}
          >
            {t(task.title)}
          </Text>
          {value && (
            <Text
              textStyle={'text_xs_500'}
              color={isClaimed ? 'text.fourth' : 'text.secondary'}
            >
              {formatNumberWithSpaces(value)} {DEFAULT.TOKEN}
            </Text>
          )}
        </Flex>
        {!isClaimed &&
          state.mapAutoTasks &&
          !state.isLoading &&
          (state.isClick || task.category === AWARDS_TASKS.CHECKIN ? (
            <Button
              variant="outlineSm"
              width={'fit-content'}
              onClick={() => {
                functions.handleGetAward(task);
              }}
            >
              {t(LOCAL_TEXT.BUTTON_GET)}
            </Button>
          ) : (
            <Button
              variant="primarySm"
              width={'fit-content'}
              onClick={() => {
                functions.handleStartTask(task);
              }}
            >
              {t(LOCAL_TEXT.BUTTON_START)}
            </Button>
          ))}

        {isClaimed && !state.isLoading && (
          <AppIcon name="icon/tick-circle" width={32} height={32} />
        )}
      </Flex>
    </>
  );
};
