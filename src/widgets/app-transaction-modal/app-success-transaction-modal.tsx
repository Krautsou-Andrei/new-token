import { memo } from 'react';

import {
  Box,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import { AppTextGradient } from '@/shared/ui/app-text-gradient';

interface AppTransactionProps {
  isOpen: boolean;
  onClose: () => void;
  description?: string;
}

export const AppTransactionModal = memo(
  ({ isOpen, onClose }: AppTransactionProps) => {
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
            >
              Пополнить
            </AppTextGradient>
          </ModalHeader>
          <ModalCloseButton color={'text.primary'} />
          <ModalBody>
            <Box
              mb={2}
              textAlign={'center'}
              color={'text.primary'}
              fontWeight={400}
            >
              <Input fontFamily={'tektur'} />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
);
