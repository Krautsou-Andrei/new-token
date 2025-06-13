import { useTranslation } from 'react-i18next';

import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

import { useAwards } from '@/features/awards';

import { filterClaimed, sortClimed } from '../../lilb';
import { TASK_NAV_APP } from './const';
import { TaksApp } from './tasks-app';

export const TaksNavApp = () => {
  const { mapAutoTasks } = useAwards();
  const { t } = useTranslation();

  return (
    <Tabs defaultValue={TASK_NAV_APP[0].value} variant={'primary'}>
      <TabList>
        {TASK_NAV_APP.map((item, index) => (
          <Tab key={index}>
            <Text textStyle={'text_xs_500'}>{t(item.title)}</Text>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel>
          <Flex direction={'column'} gap={3}>
            <TaksApp tasks={sortClimed(mapAutoTasks)} />
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex direction={'column'} gap={3}>
            <TaksApp tasks={filterClaimed(mapAutoTasks)} />
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex direction={'column'} gap={3}>
            <TaksApp tasks={filterClaimed(mapAutoTasks, true)} />
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
