import React from 'react';
import { css } from '@emotion/core';

import { Theme } from '../../theme/theme';

export const Grid: React.FC = ({ children }) => (
  <div
    css={(theme: Theme) => css`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: ${theme.spacing(5)};
      padding: ${theme.spacing(5)};
      margin: 0 -${theme.spacing(5)};

      @media (min-width: ${theme.breakpoints.md}) {
        grid-template-columns: repeat(8, 1fr);
      }

      @media (min-width: ${theme.breakpoints.lg}) {
        grid-template-columns: repeat(12, 1fr);
      }
    `}
  >
    {children}
  </div>
);
