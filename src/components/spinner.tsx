import React from 'react';
import { css, keyframes } from '@emotion/core';

import { Theme } from '../theme/theme';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner: React.FC = () => (
  <div
    css={(theme: Theme) => css`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 4px solid ${theme.colors.primary};
      border-top-color: ${theme.colors.highlight};
      border-bottom-color: ${theme.colors.highlight};

      animation: ${spin} 1s 0s infinite linear normal;
    `}
  />
);
