import React from 'react';
import { css, keyframes } from '@emotion/core';

import { Theme } from '../theme/theme';

const pulse = keyframes`
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
      background-color: ${theme.colors.highlight};
      animation: ${pulse} 2s 0s infinite linear normal;
    `}
  />
);
