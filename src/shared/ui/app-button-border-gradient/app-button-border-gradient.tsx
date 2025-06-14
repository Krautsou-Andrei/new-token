import type { HTMLAttributes } from 'react';

import { Button, type ButtonProps } from '@chakra-ui/react';

import { AppTextGradient } from '../app-text-gradient';

type AppButtonBorderGradientProps = ButtonProps & {
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
};

export const AppButtonBorderGradient = ({
  children,
  wrapperProps = {},
  ...props
}: AppButtonBorderGradientProps) => {
  const { style: styleProps, ...restWrapperProps } = wrapperProps;

  return (
    <div
      style={{
        display: 'inline-block',
        borderRadius: '81px',
        padding: '0px',
        border: '2px dashed',
        borderColor: 'black',
        background:
          'linear-gradient(90deg, #00FF99 0%, #1D2120 24.52%, #1D2120 75%, #00FF99 100%)',
        overflow: 'hidden',
        ...styleProps,
      }}
      {...restWrapperProps}
    >
      <Button
        px={'62px'}
        py={{ base: '42px', sm: '62px' }}
        fontFamily={'Rhythmic'}
        fontWeight={400}
        lineHeight={'100%'}
        textTransform={'uppercase'}
        fontSize={{ base: '56px', sm: '86px' }}
        borderRadius="81px"
        backgroundColor="black"
        color="white"
        _focus={{
          outline: 'none',
        }}
        cursor="pointer"
        {...props}
      >
        <AppTextGradient px={'8px'}>{children}</AppTextGradient>
      </Button>
    </div>
  );
};
