import defaultProps from './defaultProps';
import { defineMultiStyleConfig } from './parts';
import variants from './variants';

const radioConfig = defineMultiStyleConfig({
  defaultProps,
  variants,
});

export default radioConfig;
