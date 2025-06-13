import { defineStyle } from '@chakra-ui/react';
import type { SystemStyleInterpolation } from '@chakra-ui/styled-system';

import textStyles from '../../foundations/textStyles';

function variant(
  backgroundColor: string,
  color: string
): SystemStyleInterpolation {
  return defineStyle({
    ...textStyles.button_lg_700,
    backgroundColor,
    w: 'full',
    borderRadius: 'full',
    fontFamily: 'Montserrat',
    color,
    _hover: {
      opacity: 0.88,
      _disabled: {
        backgroundColor,
        opacity: 0.48,
      },
    },
    _active: {
      opacity: 1,
    },
    _disabled: {
      opacity: 0.48,
    },
    _loading: {
      _hover: {
        bg: backgroundColor,
      },
    },
  });
}

const primary = {
  ...variant('button.primary.background', 'button.primary.foreground'),
  textTransform: 'uppercase',
};

const primarySm = {
  ...variant('button.primary.background', 'button.primary.foreground'),
  border: '1px solid',
  textTransform: 'undercase',
  padding: '12px 20px',
  ...textStyles.text_sm_500,
};

const secondary = {
  ...variant('button.secondary.background', 'button.secondary.foreground'),
  color: 'text.white',
  backgroundColor: 'button.primary.foreground',
  _hover: {
    opacity: 0.8,
  },
};
const third = {
  ...variant('button.primary.background', 'button.primary.foreground'),
  color: 'text.black',
};
const fourth = {
  ...variant('button.secondary.background', 'button.secondary.foreground'),
  color: 'text.descriptions',
  ...textStyles.text_xs_500,
  backgroundColor: 'background.primary',
  borderRadius: '8px',
  _hover: {
    opacity: 0.8,
  },
};

const secondarySm = {
  ...variant('button.secondary.background', 'button.secondary.foreground'),
  color: 'text.white',
  backgroundColor: 'button.primary.foreground',
  ...textStyles.text_xs_500,
  _hover: {
    opacity: 0.88,
    _disabled: {
      backgroundColor: 'button.primary.foreground',
      opacity: 0.48,
    },
  },
};

const outline = {
  ...variant('button.primary.background', 'button.primary.foreground'),
  border: '2px solid',
  borderColor: 'button.border.primary',
  bg: 'transparent',
  color: 'text.white',
  _active: {
    opacity: 1,
    bg: 'constant.white',
  },
};

const outlineSm = {
  ...variant('button.primary.background', 'button.primary.foreground'),
  border: '1px solid',
  borderColor: 'button.border.primary',
  bg: 'transparent',
  color: 'text.white',
  textTransform: 'undercase',
  padding: '12px 20px',
  ...textStyles.text_sm_500,
  _active: {
    opacity: 1,
  },
};

const outlineInvert = {
  ...variant('button.primary.background', 'button.primary.foreground'),
  border: '2px solid ',
  borderColor: 'button.border.foreground',
  bg: 'transparent',
  color: 'text.black',
  _active: {
    opacity: 1,
    bg: 'constant.black',
  },
};

const iconDefault = {
  border: 'none',
  bg: 'transparent',
  color: 'constant.white',
};

const iconSetting = {
  h: 'fit-content',
  border: 'none',
  bg: 'transparent',
  color: 'constant.greyDark',
  _hover: {
    color: 'constant.white_alpha',
  },
};

const select = {
  ...variant('button.secondary.background', 'button.secondary.foreground'),
  color: 'text.black',
  _hover: {
    backgroundColor: 'button.secondary.backgroundHover',
    opacity: 1,
    _disabled: {
      backgroundColor: 'button.secondary.background',
      opacity: 0.48,
    },
  },
  _active: {
    bg: 'background.contentLight',
    color: 'text.black',
    border: '1px solid',
    borderColor: 'border.dodgerBlue',
    borderRadius: '5px 5px 0 0',
    borderBottomColor: 'transparent',
  },
};

export default {
  iconDefault,
  iconSetting,
  primary,
  primarySm,
  secondary,
  secondarySm,
  third,
  fourth,
  select,
  outlineSm,
  outline,
  outlineInvert,
};
