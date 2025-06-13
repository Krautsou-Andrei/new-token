import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useDisclosure } from '@chakra-ui/react';

import { LOCAL_STORAGE_CONSTANTS } from '@/shared/consts';
import { setLocalStorage } from '@/shared/lib/local-storage';

export const useAppSelect = () => {
  const { t, i18n } = useTranslation();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectOption, setSelectOption] = useState(i18n.language);

  const refButton = useRef<HTMLElement | null>(null);
  const refMenuList = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menuListElement = refMenuList.current;
      const buttonElement = refButton.current;

      if (
        menuListElement &&
        buttonElement &&
        !menuListElement.contains(event.target as Node) &&
        !buttonElement.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleOption = (item: string) => {
    setSelectOption(item);
    i18n.changeLanguage(item);
    setLocalStorage(LOCAL_STORAGE_CONSTANTS.LANG, item);
  };

  return {
    state: {
      isOpen,
      refButton,
      refMenuList,
      selectOption,
    },
    functions: {
      handleOption,
      onClose,
      onOpen,
      t,
    },
  };
};
