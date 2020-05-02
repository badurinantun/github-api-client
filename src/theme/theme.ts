import { colors } from './colors';

export const theme = {
  colors: {
    primary: colors.aquaHaze,
    secondary: colors.shark,
    highlight: colors.scienceBlue,
    white: colors.white,
    border: colors.iron,
    text: colors.shuttleGray,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
    ].join(','),
  },
  breakpoints: {
    xs: '0',
    sm: '320px',
    md: '672px',
    lg: '1056px',
  },
  spacing(space: number) {
    return `${2 ** space}px`;
  },
};

export type Theme = typeof theme;
