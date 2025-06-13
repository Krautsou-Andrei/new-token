import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Flex, GridItem } from '@chakra-ui/react';

import { AppIcon, type IconName } from '@/shared/ui/app-icon';
import { AppSmallText } from '@/shared/ui/typography/app-small-text';

type GridBlockAppProps = {
  colSpan: number;
  rowSpan: number;
  iconName: IconName;
  desc: string;
};
export const GridBlockApp = forwardRef<HTMLDivElement, GridBlockAppProps>(
  ({ colSpan, rowSpan, iconName, desc }, ref) => {
    const { t } = useTranslation();

    return (
      <GridItem
        ref={ref}
        colSpan={colSpan}
        rowSpan={rowSpan}
        bgColor={'background.primary'}
        p={4}
        borderRadius={'xxl'}
      >
        <Flex
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          textAlign={'center'}
          height={'100%'}
          gap={3}
        >
          <AppIcon name={iconName} width={'28px'} height={'28px'} />
          <AppSmallText>{t(desc)}</AppSmallText>
        </Flex>
      </GridItem>
    );
  }
);
