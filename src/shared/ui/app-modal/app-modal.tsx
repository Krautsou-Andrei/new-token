import { memo } from 'react';

import {
  Modal,
  ModalBody,
  type ModalBodyProps,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  type TextProps,
} from '@chakra-ui/react';

import { AppTextGradient } from '@/shared/ui/app-text-gradient';

type AppModalProps = ModalBodyProps & {
  isOpen: boolean;
  onClose: () => void;
  description?: string;
  title?: string;
  styleTitle?: TextProps;
};

export const AppModal = memo(
  ({
    isOpen,
    onClose,
    title,
    children,
    styleTitle,
    ...props
  }: AppModalProps) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          mx={5}
          fontFamily={'Rhythmic'}
          fontWeight={400}
          borderWidth="1px"
          sx={{
            borderImage:
              'linear-gradient(90deg, #00FF99 0%, #1D2120 24.52%, #1D2120 75%, #00FF99 100%)',
            borderImageSlice: 1,
            backgroundColor: 'black',
          }}
        >
          <ModalHeader color={'text.accent'}>
            <AppTextGradient
              fontFamily={'Rhythmic'}
              fontSize={{ base: '32px', sm: '42px' }}
              px={5}
              {...styleTitle}
            >
              {title}
            </AppTextGradient>
          </ModalHeader>
          <ModalCloseButton color={'text.primary'} />
          <ModalBody {...props}>{children}</ModalBody>
        </ModalContent>
      </Modal>
    );
  }
);
