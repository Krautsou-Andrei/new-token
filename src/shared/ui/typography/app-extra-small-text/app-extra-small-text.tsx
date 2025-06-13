import { type HTMLAttributes, forwardRef } from 'react';

import { Text, type TextProps } from '@chakra-ui/react';

type AppExtraSmallTextProps = TextProps & HTMLAttributes<HTMLParagraphElement>;

export const AppExtraSmallText = forwardRef<
  HTMLParagraphElement,
  AppExtraSmallTextProps
>(({ children, ...props }, ref) => {
  return (
    <Text
      ref={ref}
      textStyle={'text_xs_500'}
      fontFamily={'montserrat'}
      {...props}
    >
      {children}
    </Text>
  );
});
