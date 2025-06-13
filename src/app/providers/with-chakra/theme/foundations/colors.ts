const colors = {
  text: {
    grey100: '#C7C7C7',
    grey80: '#787878',
    green100: '#B6FB0D',
    black100: '#040404',
    black80: '#1B1B1B',
    black60: '#262626',
  },
} as const;

export type Colors = typeof colors;
export default colors;
