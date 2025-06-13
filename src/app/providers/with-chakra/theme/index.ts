import {
  type ThemeConfig,
  theme as defaultTheme,
  extendTheme,
} from '@chakra-ui/react';

import breakpoints from './breakpoints/breakpoints';
import components from './components';
import foundations from './foundations';
import styles from './global-styles';
import typography from './typography';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    ...typography,
    ...foundations,
    styles,
    components,
  },
  {
    config: config,
    direction: defaultTheme.direction,
    transition: defaultTheme.transition,
    breakpoints,
    zIndices: defaultTheme.zIndices,
    sizes: {},
    fontSizes: {},
    fontWeights: {},
    letterSpacings: {},
    lineHeights: {},
  }
);

export default theme;
