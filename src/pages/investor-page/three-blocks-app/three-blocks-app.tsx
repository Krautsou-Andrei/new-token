import type React from 'react';
import { useRef } from 'react';

import { type BoxProps, Flex, Grid } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { slideFromBottom, slideFromLeftRight } from '@/shared/consts';
import type { IconName } from '@/shared/ui/app-icon/types';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppText } from '@/shared/ui/typography/app-text';

import { LEFT_GRID_SIZES, RIGHT_GRID_SIZES } from './const';
import { GridBlockApp } from './grid-block-app';

type ThreeBlocksAppProps = {
  titleSlot?: React.ReactNode;
  desc?: React.ReactNode;
  items: { iconName: IconName; desc: string }[];
  variant?: 'left' | 'right';
} & BoxProps;
export const ThreeBlocksApp = ({
  titleSlot,
  desc,
  items,
  variant = 'right',
  ...props
}: ThreeBlocksAppProps) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      slideFromBottom({ ref: titleRef });
      slideFromBottom({ ref: descRef });
      slideFromLeftRight({ ref: itemRefs });
    },
    { scope: containerRef }
  );

  return (
    <Flex ref={containerRef} {...props} direction={'column'}>
      {titleSlot && (
        <AppHeading ref={titleRef} fontSize={'30px'} marginBottom={'16px'}>
          {titleSlot}
        </AppHeading>
      )}
      {desc && (
        <AppText ref={descRef} marginBottom={'24px'}>
          {desc}
        </AppText>
      )}
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows={`repeat(${Math.ceil(items.length / 2)}, 1fr)`}
        gap={4}
        alignItems="stretch"
      >
        {items.length === 3 && (
          <>
            {variant === 'right' ? (
              <>
                {RIGHT_GRID_SIZES.map((item, index) => (
                  <GridBlockApp
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    key={index}
                    colSpan={item[0]}
                    rowSpan={item[1]}
                    {...items[index]}
                  />
                ))}
              </>
            ) : (
              <>
                {LEFT_GRID_SIZES.map((item, index) => (
                  <GridBlockApp
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    key={index}
                    colSpan={item[0]}
                    rowSpan={item[1]}
                    {...items[index]}
                  />
                ))}
              </>
            )}
          </>
        )}

        {items.length === 4 &&
          items.map((item, index) => (
            <GridBlockApp
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              key={index}
              colSpan={1}
              rowSpan={1}
              {...item}
            />
          ))}

        {items.length !== 3 &&
          items.length !== 4 &&
          items.map((item, index) => (
            <GridBlockApp
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              key={index}
              colSpan={1}
              rowSpan={1}
              {...item}
            />
          ))}
      </Grid>
    </Flex>
  );
};
