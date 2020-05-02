import { colors } from './colors';

export const theme = {
  colors: {
    primary: colors.anzac,
    secondary: colors.outerSpace,
  },
  typography: {
    fontFamily: ['Helvetica Neu', 'sans-serif'].join(','),
  },
  breakpoints: {
    xs: '0',
    sm: '320px',
    md: '672px',
    lg: '1056px',
  },
  spacing(space: number) {
    return 2 ** space;
  },
};

export type Theme = typeof theme;
