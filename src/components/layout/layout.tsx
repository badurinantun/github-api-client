import React from 'react';
import { css } from '@emotion/core';

import { Theme } from '../../theme/theme';

export const Layout: React.FC = ({ children }) => (
  <React.Fragment>
    <main
      css={(theme: Theme) => css`
        display: block;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding-right: ${theme.spacing(4)};
        padding-left: ${theme.spacing(4)};

        @media (min-width: ${theme.breakpoints.md}) {
          max-width: ${theme.breakpoints.md};
        }

        @media (min-width: ${theme.breakpoints.lg}) {
          max-width: ${theme.breakpoints.lg};
        }
      `}
    >
      {children}
    </main>
  </React.Fragment>
);
