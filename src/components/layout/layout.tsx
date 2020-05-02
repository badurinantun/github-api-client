import React from 'react';
import { css } from '@emotion/core';

import { Theme } from '../../theme/theme';

export const Layout: React.FC = ({ children }) => (
  <main
    css={(theme: Theme) => css`
      display: block;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: ${theme.spacing(4)}px;
      padding-right: ${theme.spacing(4)}px;

      @media (min-width: ${theme.breakpoints.md}) {
        padding: 0;
        max-width: ${theme.breakpoints.md};
      }

      @media (min-width: ${theme.breakpoints.lg}) {
        max-width: ${theme.breakpoints.lg};
      }
    `}
  >
    {children}
  </main>
);
