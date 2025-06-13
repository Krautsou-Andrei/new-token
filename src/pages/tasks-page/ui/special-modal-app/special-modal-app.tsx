import { type HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { useSpecialModal } from './hooks';

import { AspectRatio, Box, Button, Flex } from '@chakra-ui/react';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { splitString } from '@/shared/lib/utils';
import { AppIcon } from '@/shared/ui/app-icon';
import { AppInput } from '@/shared/ui/app-input';
import { AppModal } from '@/shared/ui/app-modal';
import { AppExtraSmallText } from '@/shared/ui/typography/app-extra-small-text';

type SpecialModalAppProps = HTMLAttributes<HTMLDivElement>;

export const SpecialModalApp = ({ ...props }: SpecialModalAppProps) => {
  const { state, functions } = useSpecialModal();
  const { t } = useTranslation();

  return (
    <AppModal
      isOpen={state.isOpenModalByBIt}
      onClose={functions.onClose}
      title={t(LOCAL_TEXT.TASK_PAGE.TASKS.BYBIT.TITLE)}
      descriptions={
        state.step === 0
          ? splitString(t(LOCAL_TEXT.TASK_PAGE.TASKS.BYBIT.STEPS.ONE))
          : state.isAccount
            ? splitString(t(LOCAL_TEXT.TASK_PAGE.TASKS.BYBIT.STEPS.IS_ACCOUNT))
            : splitString(
                t(LOCAL_TEXT.TASK_PAGE.TASKS.BYBIT.STEPS.NOT_IS_ACCOUNT)
              )
      }
      descriptionTextStyle={'text_sm_500'}
    >
      <Flex direction={'column'} gap={'16px'}>
        {(state.step === 1 || !state.userData) && (
          <>
            {state.isVideoStart && (
              <Box
                position={'relative'}
                height="full"
                width="full"
                padding="0"
                borderRadius="xl"
                overflow="hidden"
              >
                <iframe
                  src="https://player.mux.com/f02L6gSzzO1JPi9aRe3xXomCKotrqsVA9AIzwcGup00UU?metadata-video-title=bybit"
                  style={{
                    width: '100%',
                    border: 'none',
                    aspectRatio: '288/625',
                  }}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                ></iframe>
              </Box>
            )}
            <AspectRatio
              width="100%"
              maxWidth="100%"
              maxHeight="200px"
              ratio={{ base: 4 / 3 }}
              cursor={'pointer'}
              display={state.isVideoStart ? 'none' : 'flex'}
            >
              <Box
                onClick={() => functions.setIsVideoStart(true)}
                position={'relative'}
                height="full"
                width="full"
                padding="0"
                display="flex"
                border={{ base: 'none' }}
                bgColor={'background.primary'}
                borderRadius="xl"
                {...props}
              >
                <AppExtraSmallText
                  position={'absolute'}
                  top={4.5}
                  left={4.5}
                  color={'text.white'}
                >
                  {t(LOCAL_TEXT.TASK_PAGE.VIDEO_INSTRUCTIONS)}
                </AppExtraSmallText>
                <Flex
                  borderRadius={'full'}
                  w={16.5}
                  h={16.5}
                  pl={2}
                  alignItems={'center'}
                  justifyContent={'center'}
                  position="absolute"
                  left="50%"
                  top="50%"
                  transform="translate(-50%, -50%)"
                  bgColor={'background.secondary'}
                >
                  <AppIcon name="icon/play" width={40} height={40} />
                </Flex>
              </Box>
            </AspectRatio>
            <AppInput
              background={'constant.white'}
              _hover={'background.primary'}
              border={'1px solid'}
              borderColor={'background.primary'}
              color={'text.fourth'}
              _placeholder={{ color: 'text.fourth' }}
              placeholder="UID"
              value={state.uuidValue}
              onChange={(e) => functions.setUuidValue(e.target.value)}
            />
            <Button
              onClick={functions.onSubmit}
              variant={'secondary'}
              size={'sm'}
            >
              {t(LOCAL_TEXT.BUTTON_DONE)}
            </Button>
          </>
        )}
        {state.step === 0 && (
          <Flex direction={'column'} gap={4}>
            <Button
              onClick={functions.onByBitClick}
              variant={'secondary'}
              size={'sm'}
            >
              {t(LOCAL_TEXT.BUTTON_REGISTER)}
            </Button>
            <Button
              variant={'outlineInvert'}
              size={'sm'}
              onClick={functions.onAccountByBit}
            >
              {t(LOCAL_TEXT.BUTTON_IS_ACCOUNT)}
            </Button>
          </Flex>
        )}
      </Flex>
    </AppModal>
  );
};
