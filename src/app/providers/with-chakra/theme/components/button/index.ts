import { defineStyleConfig } from '@chakra-ui/react';

import baseStyle from './baseStyle';
import defaultProps from './defaultProps';
import sizes from './sizes';
import variants from './variants';

const buttonConfig = defineStyleConfig({
  sizes,
  baseStyle,
  variants,
  defaultProps,
});

export default buttonConfig;
