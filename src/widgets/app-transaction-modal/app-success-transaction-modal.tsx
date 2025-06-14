import { memo, useEffect, useState } from 'react';

import { Box, Flex, Input } from '@chakra-ui/react';

import { useCreatePayment } from '@/shared/api/hooks/payment/use-create-payment';
import { useBuyStore } from '@/shared/lib/persistance';
import { amountValidateNumber } from '@/shared/lib/utils/validate/amount-validate-number';
import { AppButtonBorderGradient } from '@/shared/ui/app-button-border-gradient';
import { AppModal } from '@/shared/ui/app-modal';

interface AppTransactionProps {
  isOpen: boolean;
  onClose: () => void;
  description?: string;
}

export const AppTransactionModal = memo(
  ({ isOpen, onClose }: AppTransactionProps) => {
    const { link } = useBuyStore();

    const [value, setValue] = useState('');
    const { mutate: cretePayment, isSuccess: isSuccessPayment } =
      useCreatePayment();

    useEffect(() => {
      if (isSuccessPayment) {
        window.open(link, '_blank');
      }
    }, [isSuccessPayment, link]);

    return (
      <AppModal isOpen={isOpen} onClose={onClose} title={'Пополнить'}>
        <Box
          mb={4}
          textAlign={'center'}
          color={'text.primary'}
          fontWeight={400}
        >
          <Input
            fontFamily={'tektur'}
            value={value}
            placeholder="Введите сумму"
            onKeyDown={(event) =>
              amountValidateNumber(event as unknown as KeyboardEvent)
            }
            onChange={(event) => setValue(event.target.value)}
          />
        </Box>
        <Flex w={'full'} justifyContent={'center'} mb={4}>
          <AppButtonBorderGradient
            px={'12px'}
            py={'10px'}
            fontSize={'32px'}
            onClick={() => {
              if (value) {
                cretePayment({ params: { tokenAmount: +value } });
              }
            }}
          >
            Пополнить
          </AppButtonBorderGradient>
        </Flex>
      </AppModal>
    );
  }
);
