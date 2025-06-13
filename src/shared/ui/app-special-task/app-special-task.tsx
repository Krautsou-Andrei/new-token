import type { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Flex, Text } from '@chakra-ui/react';

import type { Task } from '@/entities/awards';

import { PatternBlockApp } from '@/widgets/pattern-block-app/pattern-block-app';

import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { formatNumberWithSpaces } from '@/shared/lib/utils/format-numbers';

import { AppIcon } from '../app-icon';
import { AppHeading } from '../typography/app-heading';

type AppSpecialTaskProps = HTMLAttributes<HTMLDivElement> & {
  task: Task;
  value?: number;
  isClaimed: boolean;
  isPending?: boolean;
};

export const AppSpecialTask = ({
  value,
  task,
  isClaimed,
  isPending,
}: AppSpecialTaskProps) => {
  const { t } = useTranslation();

  return (
    <PatternBlockApp>
      <AppHeading color={'text.secondary'} fontSize={'24px'} align={'start'}>
        {t(task.title)}
      </AppHeading>
      <Text textStyle={'text_sm_500'}>{t(task.description)}</Text>

      <Flex alignItems={'center'} justifyContent={'space-between'}>
        {value && (
          <Text textStyle={'text_md_600'} color={'text.secondary'}>
            {formatNumberWithSpaces(value)} {DEFAULT.TOKEN}
          </Text>
        )}

        {!isClaimed && !isPending && (
          <Button variant="primarySm" width={'fit-content'}>
            {t(LOCAL_TEXT.BUTTON_START)}
          </Button>
        )}

        {isClaimed && (
          <AppIcon name="icon/tick-circle" width={32} height={32} />
        )}
        {isPending && <AppIcon name="icon/clock" width={32} height={32} />}
      </Flex>
    </PatternBlockApp>
  );
};
