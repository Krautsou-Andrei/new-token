import { memo } from 'react';

import { Box, Input } from '@chakra-ui/react';

import { AppModal } from '@/shared/ui/app-modal';

interface AppTransactionProps {
  isOpen: boolean;
  onClose: () => void;
  description?: string;
}

export const AppTransactionModal = memo(
  ({ isOpen, onClose }: AppTransactionProps) => {
    return (
      <AppModal isOpen={isOpen} onClose={onClose} title={'Пополнить'}>
        <Box
          mb={2}
          textAlign={'center'}
          color={'text.primary'}
          fontWeight={400}
        >
          <Input fontFamily={'tektur'} />
        </Box>
      </AppModal>
    );
  }
);
