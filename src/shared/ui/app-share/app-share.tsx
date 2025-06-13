import { Box, type BoxProps, Button, Flex, Link } from '@chakra-ui/react';

import { useShareVideo } from '@/features/share-video';

import { AppIcon } from '../app-icon';
import { AppSpiner } from '../app-spiner';
import { AppExtraSmallText } from '../typography/app-extra-small-text';
import { AppHeading } from '../typography/app-heading';
import { AppText } from '../typography/app-text';
import { NETWORKS, WHITE_NETWORKS } from './const';

type AppShareProps = BoxProps & {
  heading?: string;
  shareLink?: string;
  variant?: 'default' | 'border';
  handleButton?: () => void;
};

export const AppShare = ({
  heading,
  shareLink,
  variant = 'default',
  handleButton,
  ...props
}: AppShareProps) => {
  const { state, functions } = useShareVideo();

  return (
    <Flex
      direction={'column'}
      gap={'16px'}
      p={5}
      background={
        variant === 'default' ? 'background.third' : 'background.black'
      }
      rounded={'16px'}
      border={variant === 'border' ? '1px solid' : 'none'}
      borderColor={variant === 'border' ? 'border.primary' : 'transparent'}
      {...props}
    >
      {heading && <AppHeading>{heading}</AppHeading>}
      {variant === 'default' && (
        <Flex gap={'16px'} justifyContent={'center'}>
          {NETWORKS.map((net) => (
            <Link href={net.href}>
              <Flex
                width={'64px'}
                height={'64px'}
                background={'background.secondary'}
                rounded={'50%'}
                justifyContent={'center'}
                alignItems={'center'}
                key={net.id}
              >
                <AppIcon name={net.iconName} />
              </Flex>
            </Link>
          ))}
        </Flex>
      )}
      <Flex
        direction={variant === 'border' ? 'column-reverse' : 'column'}
        gap="16px"
      >
        {shareLink && (
          <Button
            onClick={() =>
              functions.handleShare({
                videoUrl: shareLink,
              })
            }
          >
            ПОДЕЛИТЬСЯ
          </Button>
        )}

        <AppExtraSmallText textColor={'text.descriptions'} textAlign={'center'}>
          Если у вас не срабатывают кнопки поделиться - скачайте видео и
          выложите его вручную
        </AppExtraSmallText>
      </Flex>

      <Box>
        <Button
          variant={'outlineSm'}
          border={'1px solid'}
          borderColor={'border.primary'}
          fontSize={'18px'}
          textStyle={'button_lg_700'}
          onClick={() => {
            if (handleButton) {
              handleButton();
            }
          }}
        >
          <Flex alignItems={'center'} gap={'6px'}>
            СКАЧАТЬ
            <Box mt={'-2px'}>
              <AppIcon name="icon/download" height={24} width={24} />
            </Box>
          </Flex>
        </Button>
      </Box>
      {variant === 'border' && (
        <Flex gap={'30px'} justifyContent={'center'}>
          {WHITE_NETWORKS.map((net) => (
            <Link key={net.id}>
              <Flex
                width={'20px'}
                height={'20px'}
                justifyContent={'center'}
                alignItems={'center'}
                key={net.id}
              >
                <AppIcon name={net.iconName} />
              </Flex>
            </Link>
          ))}
        </Flex>
      )}
      {state.isLoading && (
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
              Видео скачивается... немного подождите
            </AppText>
          </Flex>
        </>
      )}
    </Flex>
  );
};
