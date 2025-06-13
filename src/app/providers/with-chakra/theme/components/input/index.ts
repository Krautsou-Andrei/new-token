import defaultProps from './defaultProps';
import { defineMultiStyleConfig } from './parts';
import variants from './variants';

const inputConfig = defineMultiStyleConfig({
  defaultProps,
  variants,
});

export default inputConfig;
