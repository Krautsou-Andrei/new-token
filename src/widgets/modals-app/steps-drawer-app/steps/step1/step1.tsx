import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Button, Flex, Text } from '@chakra-ui/react';

import { useIncomePage } from '@/features/income';

import { useAuthMe } from '@/shared/api/hooks/auth';
import { useGetRefData } from '@/shared/api/hooks/users/use-get-ref-data';
import { useCreateVideo } from '@/shared/api/hooks/video';
import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { useModalsStore } from '@/shared/lib/modals/modals.store';
import { useFileStore } from '@/shared/lib/persistance';
import { useModalStore } from '@/shared/lib/persistance/modal.store';
import { HighlightText } from '@/shared/lib/utils';
import { AppLayoutBound } from '@/shared/ui/app-layout-bound';
import { AppShare } from '@/shared/ui/app-share/app-share';
import { AppSpiner } from '@/shared/ui/app-spiner';
import { AppText } from '@/shared/ui/typography/app-text';

import { BlockApp } from './block-app';

type Step1Props = {
  nextStep: () => void;
};

export const Step1 = ({ nextStep }: Step1Props) => {
  const { t } = useTranslation();

  const { data: user } = useAuthMe();
  const { data: refData } = useGetRefData(user?.id, Boolean(user?.id));
  const { loadLife } = useFileStore();

  const { mutateAsync: createVideo } = useCreateVideo();
  const [isIncorrectVideoUrl, setIsIncorrectVideoUrl] = useState(false);
  const [linkYouTube, setLinkYouTube] = useState('');
  const { state, functions } = useIncomePage();

  const { setSucceessModal, closeSuccessModal, openSuccessModal } =
    useModalStore();
  const { setIsStepsDrawerOpen } = useModalsStore();

  const handleSuccessVideo = () => {
    const modal = {
      heading: t(LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.MODAL_SUCCESS.TITLE, {
        value: DEFAULT.TOKEN,
      }),
      buttonText: t(
        LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.MODAL_SUCCESS.BUTTON
      ),
      buttonFunction: () => {
        closeSuccessModal();
        setIsStepsDrawerOpen(true);
      },
      backText: t(LOCAL_TEXT.BUTTON_BACK),
      descriptions: t(
        LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.MODAL_SUCCESS.DESCRIPTIONS,
        { value: DEFAULT.TOKEN }
      ),
      backFunction: closeSuccessModal,
    };
    setSucceessModal(modal);
    openSuccessModal();
  };

  return (
    <AppLayoutBound pb={9}>
      <>
        {state.isLoadingVideo && (
          <>
            <AppSpiner />
            <Flex
              align={'center'}
              justifyContent={'center'}
              position={'fixed'}
              w={'full'}
              h={'full'}
              top={10}
              left={0}
              zIndex={10}
            >
              <AppText color={'white'}>
                {t(LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.VIDEO_DOWNLOAD)}
              </AppText>
            </Flex>
          </>
        )}
        <Text textStyle={'text_md_600'} marginBottom={9}>
          {t(LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_THREE.TITLE)}
        </Text>
        <BlockApp
          marginBottom={9}
          title={t(
            LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_THREE.BLOCK_REF.TITLE
          )}
          description={
            <>
              {HighlightText({
                text: t(
                  LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_THREE.BLOCK_REF
                    .DESCRIPTIONS.VALUE
                ),
                highlight:
                  LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_THREE.BLOCK_REF
                    .DESCRIPTIONS.HIGHLIGHT,
              })}
            </>
          }
          textToCopy={refData?.refLink}
        />
        <BlockApp
          marginBottom={6}
          title={t(
            LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_THREE.BLOCK_VIDEO.TITLE
          )}
          description={t(
            LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_THREE.BLOCK_VIDEO
              .DESCRIPTIONS
          )}
          textToCopy={t(
            LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_THREE.BLOCK_VIDEO
              .TEXT_TO_COPY
          )}
          isTextArea
        />
      </>
      <AppShare
        heading={t(
          LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_THREE.BLOCK_SHARED.TITLE
        )}
        variant="border"
        marginBottom={14}
        shareLink={loadLife?.link}
        handleButton={() => {
          if (loadLife) {
            functions.downloadFile(loadLife.fileName, loadLife.link);
          }
        }}
      />

      <Box marginBottom={6}>
        <Text textStyle={'text_md_600'} marginBottom={9}>
          {t(LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_FOUR.TITLE)}
        </Text>
        <BlockApp
          value={linkYouTube}
          onChangeInput={(v) =>
            functions.handleUpdateVideoUrl(
              v,
              setLinkYouTube,
              setIsIncorrectVideoUrl
            )
          }
          isIncorrectVideoUrl={isIncorrectVideoUrl}
          description={t(
            LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_FOUR.BLOCK_LINK
              .DESCRIPTIONS
          )}
          placeholder={t(
            LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_FOUR.BLOCK_LINK
              .PLACHOLDER
          )}
          isInput
        />
      </Box>
      <Button
        variant="primary"
        size={'sm'}
        disabled={!linkYouTube || !isIncorrectVideoUrl}
        onClick={async () => {
          try {
            if (linkYouTube) {
              await createVideo({ params: { url: linkYouTube } });
              handleSuccessVideo();
              nextStep();
            }
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {t(LOCAL_TEXT.BUTTON_END)}
      </Button>
    </AppLayoutBound>
  );
};
