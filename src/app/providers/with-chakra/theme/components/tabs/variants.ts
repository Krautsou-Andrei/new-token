const primary = {
  tablist: {
    bg: 'background.third',
    padding: '2px',
    display: 'flex',
    borderRadius: '7px',
    marginBottom: '12px',
    gap: '3px',
  },
  tab: {
    flex: '1',
    borderRadius: '7px',
    bg: 'background.third',
    padding: '8px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    _selected: {
      bg: 'background.secondary',
      color: 'text.black',
    },
    _hover: {
      opacity: 0.9,
    },
  },
  tabpanel: {
    p: '0',
  },
};
export default {
  primary,
};
