import { t } from 'i18next';

import { LOCAL_TEXT } from '@/shared/consts/local-text';

import { showSuccessMessage } from './notify';

export const copyText = (text: string) => {
  const textToCopy = text;

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        showSuccessMessage(t(LOCAL_TEXT.NOTIFICATIONS.COPIED));
      })
      .catch(() => {
        console.error(
          'Ошибка копирования в буфер обмена, используется метод запасного копирования.'
        );
        copyFallback(textToCopy);
      });
  } else {
    copyFallback(textToCopy);
  }
};

const copyFallback = (text: string) => {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, text.length);

  try {
    document.execCommand('copy');
    showSuccessMessage(t(LOCAL_TEXT.NOTIFICATIONS.COPIED));
  } catch (error) {
    console.error('Ошибка запасного копирования.', error);
  }

  document.body.removeChild(tempInput);
};
