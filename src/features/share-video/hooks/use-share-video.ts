import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LOCAL_TEXT } from '@/shared/consts/local-text';

interface VideoShareProps {
  videoUrl: string;
  title?: string;
  description?: string;
}

export const useShareVideo = () => {
  const { t } = useTranslation();

  const [shareSupported, setShareSupported] = useState(true);
  const [shareError, setShareError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!navigator.share) {
      setShareSupported(false);
    }
  }, []);

  const handleShare = async ({
    title = t(
      LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_THREE.BLOCK_VIDEO.TITLE_SHARED
    ),
    description = t(
      LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_THREE.BLOCK_VIDEO.TEXT_TO_COPY
    ),
    videoUrl,
  }: VideoShareProps) => {
    setShareError(null);

    if (!navigator.share) {
      setShareSupported(false);
      return;
    }

    try {
      setIsLoading(true);
      const fileUrl = videoUrl;

      const response = await fetch(fileUrl);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch video: ${response.status} ${response.statusText}`
        );
      }

      const blob = await response.blob();
      const fileName = videoUrl.split('/').pop() || 'video.mp4';
      const file = new File([blob], fileName, { type: 'video/mp4' });

      const shareData = {
        title: title,
        text: description,
        files: [file],
      };

      if (!navigator.canShare || !navigator.canShare(shareData)) {
        throw new Error(
          'Ваш браузер не поддерживает передачу файлов через Web Share API'
        );
      }

      await navigator.share(shareData);
    } catch (error) {
      if (error instanceof Error && error.message !== 'AbortError') {
        setShareError(error.message);
      }
      console.error('Error sharing content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    state: { isLoading, shareError, shareSupported },
    functions: { handleShare },
  };
};
