import type { HTMLAttributes, ReactNode } from 'react';

import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import { AppIcon } from '@/shared/ui/app-icon';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppText } from '@/shared/ui/typography/app-text';

type AppModalProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  onClose: () => void;
  title: string | ReactNode;

  descriptions: string | ReactNode;
  descriptionTextStyle?: string;
  isNotClose?: boolean;
};

export const AppModal = ({
  isOpen,
  onClose,
  title,
  descriptions,
  children,
  descriptionTextStyle,
  isNotClose,
  ...props
}: AppModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={isNotClose ? () => {} : onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        py={'50px'}
        mx={5}
        bg={'background.secondary'}
        color={'text.black'}
      >
        <ModalHeader pb={'0'}>
          <AppHeading mb={'12px'}>{title}</AppHeading>
        </ModalHeader>
        {!isNotClose && (
          <ModalCloseButton>
            <AppIcon name="app/x_circle" width={24} height={24} />
          </ModalCloseButton>
        )}

        <ModalBody pt={0}>
          <Box {...props}>
            <AppText
              mb={6}
              textStyle={
                descriptionTextStyle ? descriptionTextStyle : 'text_md_600'
              }
            >
              {descriptions}
            </AppText>
            {children}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
