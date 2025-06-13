import axios from 'axios';
import { type SetStateAction, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

// import { useMixpanelContext } from '@/features/mix-panel';

import { useAuthMe } from '@/shared/api/hooks/auth';
import { useGetRefData } from '@/shared/api/hooks/users/use-get-ref-data';
import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { useFileStore } from '@/shared/lib/persistance';
import { copyText } from '@/shared/lib/utils';
import { showErrorMessage } from '@/shared/lib/utils/notify';

import { useDownloadFile } from './use-down-load';

const VIDEO_OVERLAY_API_URL = 'https://s1.video.egor-jan.tech';
// const VIDEO_OVERLAY_API_URL = 'http://127.0.0.1:8000';
const YOUTUBE_SHORTS_REGEX = /^(https?:\/\/)?(www\.)?youtube\.com\/shorts\/.+$/;
const INSTAGRAM_REELS_REGEX =
  /^(https?:\/\/)?(www\.)?instagram\.com\/reels?\/.+$/;
const TIKTOK_REGEX = /^(https?:\/\/)?(www\.)?tiktok\.com\/.+$/;

interface OverlayParameters {
  bottom_offset_percent: string;
}

export const useIncomePage = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);

  const [isSubmitedVideo, setIsSubmitedVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [isIncorrectVideoUrl, setIsIncorrectVideoUrl] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [progress, setProgess] = useState(0);
  const [statusVideo, setStatusVideo] = useState('');
  const [overlayParameters, setOverlayParameters] = useState<OverlayParameters>(
    {
      bottom_offset_percent: DEFAULT.VIDEO_OVERLAY_BOTTOM, // Значение по умолчанию
    }
  );

  const updateOverlayParameters = (params: OverlayParameters) => {
    setOverlayParameters(params);
  };

  const [overlyedVideoUrl, setOverlyedVideoUrl] = useState('');
  const [activeTab, setActiveTab] = useState('local');
  // const { trackEvent } = useMixpanelContext();

  const [loading, setLoading] = useState(false);

  const { data: user } = useAuthMe();
  const { state: stateDownloadVideo, functions: functionsDownloadVideo } =
    useDownloadFile();
  const { setLoadLife } = useFileStore();

  const { data: refData } = useGetRefData(user?.id, Boolean(user?.id));

  const handleUpdateVideoUrl = (
    value: string,
    setUrl: (value: string) => void,
    setIsIncorrectVideoUrl: (value: boolean) => void
  ) => {
    setIsIncorrectVideoUrl(isValidVideoUrl(value));
    setUrl(value);
  };
  const isValidVideoUrl = (url: string) => {
    return (
      YOUTUBE_SHORTS_REGEX.test(url) ||
      INSTAGRAM_REELS_REGEX.test(url) ||
      TIKTOK_REGEX.test(url)
    );
  };

  const handleButtonReset = () => {
    setCurrentStep(0);
    setIsSubmitedVideo(false);
    setVideoUrl('');
    setIsIncorrectVideoUrl(false);
    setFile(null);
    setFileName(null);
    setSelectedLanguage('EN');
    setOverlyedVideoUrl('');
  };

  const handleUploadVideoUrl = async () => {
    if (!videoUrl) {
      return;
    }
    setProgess(33);
    setStatusVideo(
      t(LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.VIDEO_DOWNLOAD_SERVER)
    );
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('url', videoUrl);

      const response = await axios.post(
        VIDEO_OVERLAY_API_URL + '/upload-video-url/',
        formData
      );
      const data = response.data;

      setFileName(data?.file_name); // Сохраняем file_id
      await handleOverlayVideo(data?.file_name);
    } catch (error) {
      showErrorMessage(
        t(LOCAL_TEXT.NOTIFICATIONS.TRY_UPLOADING_ANOTHER_VIDEO, {
          value: '@Hype_Factorybot',
        })
      );
      handleButtonReset();

      console.error('error-handleUploadVideoUrl', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleLanguage = useCallback(
    async (overlyedVideoUrl: string) => {
      setProgess(100);
      setStatusVideo('');

      try {
        if (user && overlyedVideoUrl) {
          // await downloadOverlayedFile(overlyedVideoUrl);
        }
      } catch (error) {
        console.error('error-handleLanguage', error);
      }

      // trackEvent(MIXPANEL_EVENT.VIDEO_DOWNLOADED);
      setLoading(false);
    },
    [user]
  );
  const handleOverlayVideo = useCallback(
    async (fileName: string | null) => {
      if (!fileName) {
        return;
      }
      setProgess(66);
      setStatusVideo(t(LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.VIDEO_PROCESS));
      setLoading(true);

      try {
        const data = {
          file_name: fileName,
          language: 'EN',
          overlay_type: 'ffmpeg',
          ad_type: 'meme',

          bottom_offset_percent: Number(
            overlayParameters.bottom_offset_percent
          ),
        };

        const response = await axios.post(
          `${VIDEO_OVERLAY_API_URL}/overlay-video/`,
          data,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            timeout: 10000000,
          }
        );

        const url = `${VIDEO_OVERLAY_API_URL}/download-video/${response.data.file_name}`;

        setOverlyedVideoUrl(url);
        setLoadLife({ fileName: fileName, link: url });
        handleLanguage(url);
        // trackEvent(MIXPANEL_EVENT.VIDEO_UPLOADED);
        setIsSubmitedVideo(true);
      } catch (error) {
        showErrorMessage(
          t(LOCAL_TEXT.NOTIFICATIONS.TRY_UPLOADING_ANOTHER_VIDEO, {
            value: '@Hype_Factorybot',
          })
        );
        showErrorMessage(t(LOCAL_TEXT.NOTIFICATIONS.VIDEO_TO_LONG));
        handleButtonReset();
        console.error('error-handleOverlayVideo', error);
      } finally {
        setLoading(false);
      }
    },
    [handleLanguage, overlayParameters, setLoadLife, t]
  );

  const handleUploadVideoFile = useCallback(async () => {
    if (!file) {
      return;
    }
    setProgess(33);
    setStatusVideo(
      t(LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.VIDEO_DOWNLOAD_SERVER)
    );
    setLoading(true);

    try {
      const newFile = new File([file], `hf_post_${Date.now()}.mp4`, {
        type: file.type,
        lastModified: file.lastModified,
      });
      const formData = new FormData();

      formData.append('file', newFile);

      const response = await axios.post(
        VIDEO_OVERLAY_API_URL + '/upload-video/',
        formData,
        {
          timeout: 10000000,
        }
      );
      const data = response.data;

      setFileName(data.file_name); // Сохраняем file_id
      await handleOverlayVideo(data.file_name);
      setIsSubmitedVideo(true); // Делаем видео отправленным
    } catch (error) {
      showErrorMessage(
        t(LOCAL_TEXT.NOTIFICATIONS.TRY_UPLOADING_ANOTHER_VIDEO, {
          value: '@Hype_Factorybot',
        })
      );
      handleButtonReset();
      console.error('error-handleUploadVideoFile', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [file, handleOverlayVideo, t]);

  const handleCopyText = (text: string) => {
    copyText(text);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const handleDialogClose = () => {
    setModalVisible(false);
  };

  const handleDialogOpen = () => {
    setModalVisible(true);
  };

  const handleTabChange = (value: SetStateAction<string>) => {
    setActiveTab(value);
  };
  return {
    state: {
      activeTab,
      currentStep,
      file,
      fileName,
      isLoadingVideo: stateDownloadVideo.isLoadingVideo,
      isModalVisible,
      isSubmitedVideo,
      loading,
      overlyedVideoUrl,
      refData,
      videoUrl,
      progress,
      selectedLanguage,
      isIncorrectVideoUrl,
      statusVideo,
    },
    functions: {
      downloadFile: functionsDownloadVideo.downloadFile,
      handleButtonReset,
      handleCopyText,
      handleDialogClose,
      handleDialogOpen,
      handleFileChange,
      handleTabChange,
      handleUploadVideoUrl,
      handleUploadVideoFile,
      setCurrentStep,
      setSelectedLanguage,
      setVideoUrl,
      setIsIncorrectVideoUrl,
      handleUpdateVideoUrl,
      updateOverlayParameters,
    },
  };
};
