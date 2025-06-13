import { useTranslation } from 'react-i18next';

import { Flex, Text } from '@chakra-ui/react';

import { useProtected } from '@/features/auth/hook/use-protected';
import { useAwards } from '@/features/awards';

import { NavLayoutPanel } from '@/widgets/nav-layout/nav-layout-panel';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { numWords } from '@/shared/lib/utils/num-words';
import { AppLayoutBound } from '@/shared/ui/app-layout-bound';
import { AppPageHeading } from '@/shared/ui/typography/app-page-heading';

import { SpecialModalApp } from './ui/special-modal-app';
import { TaksNavApp } from './ui/task-nav-app';

import { AWARDS } from './const';
import { filterClaimed } from './lilb';

export const TasksPage = () => {
  useProtected();
  const { t } = useTranslation();

  const { mapAutoTasks } = useAwards();

  const countNotClimedTask = (() => {
    if (!mapAutoTasks || !mapAutoTasks.values) {
      return 0;
    }

    return AWARDS.length - filterClaimed(mapAutoTasks).length;
  })();

  return (
    <AppLayoutBound pb={'104px'}>
      <AppPageHeading>{t(LOCAL_TEXT.TASK_PAGE.TITLE)}</AppPageHeading>

      <Flex direction={'column'} pt={6} gap={{ base: 6 }}>
        <TaksNavApp />

        <SpecialModalApp />

        {countNotClimedTask > 0 && (
          <Text
            textAlign={'center'}
            textStyle={'text_xs_500'}
            color={'text.fourth'}
          >
            {`${t(LOCAL_TEXT.TASK_PAGE.REMAINS.VALUE)} ${countNotClimedTask} ${numWords(countNotClimedTask, [`${t(LOCAL_TEXT.TASK_PAGE.REMAINS.TASKS_VALUE.ONE)}`, `${t(LOCAL_TEXT.TASK_PAGE.REMAINS.TASKS_VALUE.TWO)}`, `${t(LOCAL_TEXT.TASK_PAGE.REMAINS.TASKS_VALUE.THREE)}`])}`}
          </Text>
        )}
      </Flex>

      <NavLayoutPanel />
    </AppLayoutBound>
  );
};
