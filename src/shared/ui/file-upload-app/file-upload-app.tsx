import { useRef } from 'react';

import type { BoxProps } from '@chakra-ui/react';
import { Box, Button, Input } from '@chakra-ui/react';

import { AppSmallText } from '@/shared/ui/typography/app-small-text';

type FileUploadAppProps = BoxProps & {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FileUploadApp = ({
  handleFileChange,
  ...props
}: FileUploadAppProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <Box {...props}>
      <Input
        type="file"
        hidden
        ref={inputRef}
        accept="video/mp4, video/quicktime"
        onChange={handleFileChange}
      />

      <Button
        onClick={handleClick}
        variant="unstyled"
        width={'full'}
        border="1px dashed"
        _hover={{ opacity: 0.6 }}
        borderColor="text.descriptions"
        borderRadius={'12px'}
        textTransform={'lowercase'}
      >
        <AppSmallText>+ добавить с галереи</AppSmallText>
      </Button>
    </Box>
  );
};
