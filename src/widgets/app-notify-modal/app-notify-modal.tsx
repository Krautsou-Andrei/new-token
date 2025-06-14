import { Button, Flex } from '@chakra-ui/react';
import { useTonConnectUI } from '@tonconnect/ui-react';

import { AppModal } from '@/shared/ui/app-modal';

type AppNotifyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AppNotifyModal = ({ isOpen, onClose }: AppNotifyModalProps) => {
  const [tonConnectUI] = useTonConnectUI();

  return (
    <AppModal
      isOpen={isOpen}
      onClose={onClose}
      title="отключить кошелек"
      styleTitle={{ fontSize: '24px' }}
    >
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        w={'full'}
        gap={4}
        mb={4}
      >
        <Button
          bg={'background.warning'}
          color={'text.white'}
          onClick={onClose}
        >
          нет
        </Button>
        <Button
          onClick={() => {
            onClose();
            tonConnectUI.disconnect();
          }}
        >
          да
        </Button>
      </Flex>
    </AppModal>
  );
};
