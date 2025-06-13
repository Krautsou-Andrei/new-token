// components/radio/variants.ts
import textStyles from '../../foundations/textStyles';
import { definePartsStyle } from './parts';

export const primary = definePartsStyle({
  control: {
    width: '20px',
    height: '20px',
    borderColor: 'white',
    borderWidth: '2px',
    bg: 'transparent',
    position: 'relative',
    _checked: {
      bg: 'none',
      borderColor: 'white',
      _before: {
        content: '""',
        display: 'block',
        width: '10px',
        height: '10px',
        borderRadius: 'full',
        bg: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
  },
  label: {
    color: 'text.third',
    ...textStyles.text_xs_500,
  },
});

const variants = {
  primary,
};

export default variants;
