import { type HTMLAttributes, forwardRef } from 'react';

import { Text, type TextProps } from '@chakra-ui/react';

type AppTextProps = TextProps & HTMLAttributes<HTMLParagraphElement>;

export const AppText = forwardRef<HTMLParagraphElement, AppTextProps>(
  ({ children, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        wordBreak={'break-word'}
        textStyle={'text_md_500'}
        fontFamily={'montserrat'}
        align="center"
        {...props}
      >
        {children}
      </Text>
    );
  }
);
