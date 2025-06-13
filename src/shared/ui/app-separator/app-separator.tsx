import { Box, type BoxProps } from '@chakra-ui/react';

type AppSeparatorProps = BoxProps;

export const AppSeparator = ({ ...props }: AppSeparatorProps) => {
  return (
    <Box
      h={0.5}
      w={'full'}
      background="linear-gradient(90deg,  #000000,#00FF99,#000000)"
      {...props}
    ></Box>
  );
};
