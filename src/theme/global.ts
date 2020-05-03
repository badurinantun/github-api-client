import { Theme } from './theme';
import { css } from '@emotion/core';

export const globalStyles = (theme: Theme) => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    background-color: ${theme.colors.white};
    color: ${theme.colors.text};
    font-family: ${theme.typography.fontFamily};
    line-height: 1.5;
  }

  input,
  button {
    outline: none;
    border: none;
    font: inherit;
  }
`;
