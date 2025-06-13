import type { Dispatch, SetStateAction } from 'react';

import { useAppSelect } from './hooks';

import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  chakra,
} from '@chakra-ui/react';

import { AppIcon } from '@/shared/ui/app-icon';

import { OPTIONS_LANGUAGE } from './const';

type LanguageSwitc2hAppProps = {
  handleSelectOut?: Dispatch<SetStateAction<string>>;
};

export const LanguageSwitc2hApp = ({
  handleSelectOut,
}: LanguageSwitc2hAppProps) => {
  const { state, functions } = useAppSelect({
    handleSelectOut: handleSelectOut,
  });

  const isOpen = state.isOpen;

  const refButton = state.refButton;
  const refMenuList = state.refMenuList;
  const selectOption = state.selectOption;

  const handleOption = functions.handleOption;
  const onOpen = functions.onOpen;
  const onClose = functions.onClose;

  return (
    <>
      <Menu
        autoSelect={false}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        placement="bottom-end"
      >
        <Flex direction={'column'} gap={'12px'} color={'text.descriptions'}>
          <MenuButton
            ref={refButton}
            as={Button}
            justifyContent="space-between"
            bgColor={'background.primary'}
            px={4}
            py={'12.5px'}
            h={'fit-content'}
            w={'fit-content'}
            color={'text.white'}
            rounded={'8px'}
            _hover={{
              bg: 'background.secondary',
              outline: '0',
              color: 'text.black',
            }}
            _active={{
              color: 'text.black',
              bg: 'background.secondary',
              outline: '0',
            }}
          >
            <Flex align={'center'} justify="space-between" gap={5}>
              <chakra.span textStyle={'text_xs_500'}>
                {selectOption}
              </chakra.span>
              <Box
                transform={isOpen ? 'rotate(180deg)' : 'rotate(0)'}
                transition={'all 0.5s'}
              >
                <AppIcon name={'arrows/down'} />
              </Box>
            </Flex>
          </MenuButton>
        </Flex>
        <Portal>
          <MenuList
            ref={refMenuList}
            zIndex={10000}
            overflow={'hidden'}
            w={'fit-content'}
            p={0}
            minW={25}
            border={'none'}
            bgColor={'background.primary'}
            rounded={'8px'}
          >
            <Flex direction={'column'} border={'none'}>
              {OPTIONS_LANGUAGE.map((item) => (
                <MenuItem
                  py={2}
                  textStyle={'text_xs_500'}
                  bgColor={'background.primary'}
                  key={item.id}
                  textTransform={'uppercase'}
                  justifyContent={'center'}
                  _hover={{ opacity: '0.8', bgColor: 'text.descriptions' }}
                  onClick={() => handleOption(item.value)}
                >
                  {item.value}
                </MenuItem>
              ))}
            </Flex>
          </MenuList>
        </Portal>
      </Menu>
    </>
  );
};
