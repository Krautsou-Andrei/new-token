export const COLOR = {
  BLACK: '#040404',
  BG_LIGHT_GRAY: '#787878',
  LIGHT_GRAY: '#c7c7c7',
  COD_GRAY: '#1B1B1B',
  DARK_GRAY: '#787878',
  ELECTRIC_VIOLET: '#7B00FF',
  LIME: '#07FFB1',
  MINE_SHAFT: '#262626',
  SILVER: '#C7C7C7',
  SPRIN_GREEN: '#00FF99',
  WHITE: '#ffffff',
  ORANGE: '#F7C600',
  RED: '#ff0033',
};

export default {
  colors: {
    text: {
      secondary: COLOR.LIME,
      descriptions: COLOR.SILVER,
      third: COLOR.LIGHT_GRAY,
      fourth: COLOR.DARK_GRAY,
      black: COLOR.BLACK,
      white: COLOR.WHITE,
      gray: COLOR.COD_GRAY,
      error: COLOR.RED,
    },
    background: {
      page: COLOR.BLACK,
      white: COLOR.WHITE,
      primary: COLOR.MINE_SHAFT,
      secondary: COLOR.LIME,
      third: COLOR.COD_GRAY,
      fourth: COLOR.BG_LIGHT_GRAY,
      orange: COLOR.ORANGE,
      warning: COLOR.RED,
    },
    border: {
      primary: COLOR.LIME,
      third: COLOR.COD_GRAY,
    },
    button: {
      border: {
        primary: COLOR.LIME,
        secondary: COLOR.BLACK,
      },
      primary: {
        background: COLOR.LIME,
        foreground: COLOR.COD_GRAY,
        text: COLOR.BLACK,
      },
      secondary: {
        background: { default: 'transparent', _dark: '#10161f' },
        foreground: '#5B7083',
        backgroundHover: {
          default: '#E5E7EA',
          _dark: 'RGBA(255, 255, 255, 0.06)',
        },
      },
    },
    separator: {
      primary: '#5B7083',
    },
    field: {
      foreground: '#0F1419',
      placeholder: 'rgba(91, 112, 131, 0.4)',
      background: { default: '#F1F3F5', _dark: '#2e3847' },
      border: 'rgba(91, 112, 131, 0.4)',
      backgroundPrimary: { default: '#F2F2F2', _dark: '#2d3748' },
      backgroundGray: { default: '#F2F2F2', _dark: '#10161f' },
      activeBorder: 'rgba(29, 161, 242, 0.7)',
      errorBorder: '#F53C36',
    },
    constant: {
      black: '#000000',
      white: '#FFFFFF',
      red: '#e1473d',
      greyDark: '#C4C4C4',
    },
  },
};
