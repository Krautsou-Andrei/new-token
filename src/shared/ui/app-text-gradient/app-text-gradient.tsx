import { Text, type TextProps } from '@chakra-ui/react';

type AppTextGradientProps = TextProps;

export const AppTextGradient = ({
  children,
  ...props
}: AppTextGradientProps) => {
  return (
    <Text
      {...props}
      background="linear-gradient(90deg, #00FF99, #7B00FF)"
      backgroundClip="text"
      sx={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
      }}
    >
      {children}
    </Text>
  );
};
