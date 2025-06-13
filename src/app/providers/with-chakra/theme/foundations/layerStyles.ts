export default {
  textEllipse: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    _after: {
      content: '""',
      display: 'block',
    },
  },
  scroll: {
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'background.page',
      marginLeft: '15px',
      marginRight: '15px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'background.dodgerBlue',
      borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'background.darkBlue',
    },
    '*': {
      scrollbarWidth: 'thin',
      scrollbarColor: `${'background.dodgerBlue'} ${'background.page'}`,
      scrollbarRadius: '5px',
    },
  },
  hoverAppSelect: {
    bg: 'constant.white',
    borderColor: 'button.primary.background',
    color: 'text.black',
  },
};
