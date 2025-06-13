import { type HTMLAttributes, forwardRef } from 'react';

import { Text, type TextProps } from '@chakra-ui/react';

type AppSmallProps = TextProps & HTMLAttributes<HTMLParagraphElement>;

export const AppSmallText = forwardRef<HTMLParagraphElement, AppSmallProps>(
  ({ children, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        textStyle={'text_sm_500'}
        fontFamily={'montserrat'}
        {...props}
      >
        {children}
      </Text>
    );
  }
);
