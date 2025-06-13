import type { HTMLAttributes } from 'react';

import { Box } from '@chakra-ui/react';
import MuxPlayer from '@mux/mux-player-react';

import { AppIcon } from '../app-icon';

type AppModalProps = HTMLAttributes<HTMLDivElement> & {
  playbackId: string;
  videoId: string;
  onClose?: () => void;
};

export default function AppMuxPlayer({
  playbackId,
  videoId,
  onClose,
  ...props
}: AppModalProps) {
  return (
    <Box
      {...props}
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      zIndex={9999}
      bg="black"
    >
      <Box
        position="absolute"
        top="20px"
        right="20px"
        zIndex={10000}
        onClick={onClose}
        cursor={'pointer'}
      >
        <AppIcon name={'icon/close'} width={30} height={30} />
      </Box>

      <MuxPlayer
        playbackId={playbackId}
        autoPlay
        metadata={{
          video_id: videoId,
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </Box>
  );
}
