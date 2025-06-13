import { Box, Flex, FormLabel, Input, type InputProps } from '@chakra-ui/react';

import { copyText } from '@/shared/lib/utils';

import { AppIcon } from '../app-icon';

type AppInputProps = InputProps & {
  label?: string;
  isCopy?: boolean;
  placeholder?: string;
  isBorder?: boolean;
  valueInit?: string;
  name?: string;
};

export const AppInput = ({
  label,
  isCopy,
  valueInit,
  name,
  ...props
}: AppInputProps) => {
  return (
    <Flex width={'full'} direction={'column'} gap={{ base: '12px' }}>
      {label && (
        <FormLabel m={0} color={'text.descriptions'}>
          {label}
        </FormLabel>
      )}

      <Box position={'relative'}>
        <Input
          {...props}
          whiteSpace={'nowrap'}
          overflow={'hidden'}
          textOverflow={'ellipsis'}
          pr={'45px'}
          name={name}
        />
        {isCopy && (
          <Box
            cursor={'pointer'}
            content='""'
            position={'absolute'}
            right={'17px'}
            top={'50%'}
            transform={'translateY(-50%)'}
            width={'20px'}
            height={'20px'}
            zIndex={5}
            onClick={() => copyText(valueInit || '')}
          >
            <AppIcon name="icon/copy" width={'100%'} height={'100%'} />
          </Box>
        )}
      </Box>
    </Flex>
  );
};
