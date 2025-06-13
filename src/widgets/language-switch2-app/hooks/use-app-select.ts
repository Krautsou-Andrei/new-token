import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useDisclosure } from '@chakra-ui/react';

type useAppSelectProps = {
  handleSelectOut?: Dispatch<SetStateAction<string>>;
};

export const useAppSelect = ({ handleSelectOut }: useAppSelectProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectOption, setSelectOption] = useState('RU');

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
    if (handleSelectOut) {
      handleSelectOut(item);
    }
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
    },
  };
};
