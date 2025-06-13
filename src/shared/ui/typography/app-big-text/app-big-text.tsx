import { type HTMLAttributes, forwardRef } from 'react';

import { Text, type TextProps } from '@chakra-ui/react';

type AppBigTextProps = TextProps & HTMLAttributes<HTMLParagraphElement>;

export const AppBigText = forwardRef<HTMLParagraphElement, AppBigTextProps>(
  ({ children, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        textStyle={'text_xl_700'}
        fontFamily={'montserrat'}
        {...props}
      >
        {children}
      </Text>
    );
  }
);
