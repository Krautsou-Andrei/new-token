import defaultProps from './defaultProps';
import { defineMultiStyleConfig } from './parts';
import variants from './variants';

const tabConfig = defineMultiStyleConfig({
  defaultProps,
  variants,
});

export default tabConfig;
