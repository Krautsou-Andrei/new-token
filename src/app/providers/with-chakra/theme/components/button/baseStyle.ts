export default {
  borderRadius: 'full',
  border: 0,
  borderColor: 'transparent',
  boxShadow: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  textTransform: 'uppercase',
  fontSize: 'clamp(1rem, 0.333rem + 3.33vw, 1.25rem)',
  _hover: {
    _disabled: {
      bg: 'initial',
    },
  },
  _focus: {
    outline: 0,
  },
};
