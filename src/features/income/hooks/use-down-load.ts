// import axios from 'axios';
import { useState } from 'react';

import { removeFileExtension } from '@/shared/lib/utils/remove-file-extension';

export const useDownloadFile = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const WebApp = window.Telegram.WebApp;

  const [isLoadingVideo, setIsLoadingVideo] = useState(false);

  // const refDownloadLink = useRef<HTMLAnchorElement | null>(null);

  const downloadFile = async (fileName: string, overlyedVideoUrl: string) => {
    setIsLoadingVideo(true);
    try {
      try {
        if (overlyedVideoUrl) {
          console.log('overlyedVideoUrl');
          await WebApp.downloadFile({
            url: overlyedVideoUrl,
            file_name: `hf_post_${Date.now()}.mp4`,
          });
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        const downloadUrl = overlyedVideoUrl; // Используйте URL напрямую
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `${removeFileExtension(fileName)}_overlayed.mp4`;
        document.body.appendChild(link); // Добавьте ссылку в DOM
        link.click();
        document.body.removeChild(link);
        // console.log('error', error);
        // const response1 = await axios.get(overlyedVideoUrl, {
        //   responseType: 'blob', // Важное изменение: ожидаем получение файла как Blob
        // });

        // const downloadUrl = URL.createObjectURL(response1.data);
        // const link = document.createElement('a');
        // link.href = downloadUrl;
        // link.download = `${removeFileExtension(fileName)}_overlayed.mp4`; // Задаём имя для скачиваемого файла
        // refDownloadLink.current = link;
        // refDownloadLink.current.click(); // Имитируем клик по ссылке для начала скачивания
        // // Имитируем клик по ссылке для начала скачивания}
      }
    } catch (error) {
      console.error('error-downloadFile', error);
    } finally {
      setIsLoadingVideo(false);
    }
  };

  return { state: { isLoadingVideo }, functions: { downloadFile } };
};
