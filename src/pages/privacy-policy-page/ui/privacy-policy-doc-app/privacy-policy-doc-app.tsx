import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Flex, Heading, List, ListItem, Text } from '@chakra-ui/react';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppText } from '@/shared/ui/typography/app-text';

import { PRIVACY_POLICY_DOC_EN } from './const-en';
import { PRIVACY_POLICY_DOC_RU } from './const-ru';

export const PrivacyPolicyDocApp = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const POLICY = useMemo(
    () => (isEn ? PRIVACY_POLICY_DOC_EN : PRIVACY_POLICY_DOC_RU),
    [isEn]
  );

  return (
    <Box>
      <AppHeading mb={4} textAlign={'start'}>
        {t(LOCAL_TEXT.PRIVATE_POLICY.TITLE)}
      </AppHeading>

      <AppText mb={6} textAlign={'start'}>
        {t(LOCAL_TEXT.PRIVATE_POLICY.DESCRIPTIONS)}
      </AppText>

      {POLICY.points.map((item, index) => (
        <Flex key={`point-${index}`} gap={'20px'} direction={'column'}>
          <Heading as="h2" size="md" mb={3}>
            {item.heading}
          </Heading>

          {item.subPoints.map((subPoint, subIndex) => (
            <Box key={`subpoint-${index}-${subIndex}`} mb={4}>
              <Text mb={2}>{subPoint.text}</Text>

              {subPoint.list && subPoint.list.length > 0 && (
                <List spacing={2} styleType="disc" pl={5}>
                  {subPoint.list.map((listItem, listIndex) => (
                    <ListItem key={`list-${index}-${subIndex}-${listIndex}`}>
                      {listItem}
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          ))}
        </Flex>
      ))}
    </Box>
  );
};
