import type { HTMLAttributes, ReactNode } from 'react';

import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  type SystemStyleObject,
} from '@chakra-ui/react';

import { AppHeading } from '../typography/app-heading';
import { AppText } from '../typography/app-text';

type AppCircleModalProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  onClose: () => void;
  descriptions: string | ReactNode;
  heading: string | ReactNode;
  parentProps?: SystemStyleObject;
};

export const AppCircleModal = ({
  isOpen,
  onClose,
  heading,
  descriptions,
  children,
  parentProps,

  ...props
}: AppCircleModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        justifyContent={'center'}
        alignItems={'center'}
        p={'40px 0 0 0'}
        bg={'background.secondary'}
        color={'text.black'}
        rounded={'50%'}
        w={400}
        height={400}
        sx={parentProps}
      >
        <ModalHeader p={0}>
          <AppHeading mb={'18px'}> {heading}</AppHeading>
        </ModalHeader>
        <ModalBody
          p={0}
          px={6}
          display={'flex'}
          flex={'unset'}
          flexDirection={'column'}
          alignContent={'center'}
          justifyContent={'center'}
        >
          <Box {...props}>
            {descriptions && (
              <AppText mb={5} textStyle={'text_sm_500'}>
                {descriptions}
              </AppText>
            )}

            <Flex direction={'column'} gap={'16px'} alignItems={'center'}>
              {children}
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
