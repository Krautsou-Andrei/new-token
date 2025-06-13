import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { Text, type TextProps } from '@chakra-ui/react';

type AppHeadingProps = TextProps & HTMLAttributes<HTMLParagraphElement>;

export const AppHeading = forwardRef<HTMLParagraphElement, AppHeadingProps>(
  ({ children, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        wordBreak={'break-word'}
        textStyle={'text_lg_700'}
        textTransform={'uppercase'}
        fontFamily={'druk_wide_cyrbold'}
        align="center"
        {...props}
      >
        {children}
      </Text>
    );
  }
);
