import { useTranslation } from 'react-i18next';

import {
  Flex,
  type FlexProps,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

import { useGetAllVideo } from '@/shared/api/hooks/video';
import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppSmallText } from '@/shared/ui/typography/app-small-text';

import { CardVideoApp } from './card-video-app';
import { filterVideo } from './lib';

type PublishedVideosAppProps = FlexProps;

export const PublishedVideosApp = ({ ...props }: PublishedVideosAppProps) => {
  const { t } = useTranslation();

  const tabs = [
    {
      value: 'all',
      title: LOCAL_TEXT.INCOME_PAGE.PUBLISHED.ALL,
    },
    {
      value: 'active',
      title: LOCAL_TEXT.INCOME_PAGE.PUBLISHED.ACTIBE,
    },
    {
      value: 'done',
      title: LOCAL_TEXT.INCOME_PAGE.PUBLISHED.DONE,
    },
  ];

  const { data: allVideo } = useGetAllVideo();

  return (
    <Flex direction={'column'} gap={'24px'} {...props}>
      <AppHeading>{t(LOCAL_TEXT.INCOME_PAGE.PUBLICHED_VIDEO)}</AppHeading>
      <Tabs defaultValue={tabs[0].value} variant={'primary'}>
        <TabList>
          {tabs.map((item) => (
            <Tab key={item.value}>
              <Text textStyle={'text_xs_500'}>{t(item.title)}</Text>
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex direction={'column'} gap={'12px'}>
              {allVideo && allVideo?.length > 0 ? (
                allVideo?.map((video) => (
                  <CardVideoApp
                    key={video.id}
                    video={video}
                    hasBtn={video.views > DEFAULT.VIEWS_VIDEO}
                  />
                ))
              ) : (
                <AppSmallText textAlign={'center'}>
                  {t(LOCAL_TEXT.EMPTY)}
                </AppSmallText>
              )}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex direction={'column'} gap={'12px'}>
              {filterVideo(allVideo).length > 0 ? (
                filterVideo(allVideo).map((video) => (
                  <CardVideoApp
                    key={video.id}
                    video={video}
                    hasBtn={video.views > DEFAULT.VIEWS_VIDEO}
                  />
                ))
              ) : (
                <AppSmallText textAlign={'center'}>
                  {t(LOCAL_TEXT.EMPTY)}
                </AppSmallText>
              )}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex direction={'column'} gap={'12px'}>
              {filterVideo(allVideo, true).length > 0 ? (
                filterVideo(allVideo, true).map((video) => (
                  <CardVideoApp key={video.id} video={video} />
                ))
              ) : (
                <AppSmallText textAlign={'center'}>
                  {t(LOCAL_TEXT.EMPTY)}
                </AppSmallText>
              )}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
