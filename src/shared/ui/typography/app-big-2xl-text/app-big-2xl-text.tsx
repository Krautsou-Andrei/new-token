import { type HTMLAttributes, forwardRef } from 'react';

import { Text, type TextProps } from '@chakra-ui/react';

type AppBig2XlTextProps = TextProps & HTMLAttributes<HTMLParagraphElement>;

export const AppBig2XlText = forwardRef<
  HTMLParagraphElement,
  AppBig2XlTextProps
>(({ children, ...props }, ref) => {
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
});
