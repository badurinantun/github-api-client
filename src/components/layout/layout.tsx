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
      <header
        css={(theme: Theme) => css`
          padding: ${theme.spacing(5)} 0;
        `}
      >
        <h1
          css={(theme: Theme) => css`
            text-transform: uppercase;
            font-weight: bold;
            color: ${theme.colors.highlight};
            letter-spacing: ${theme.spacing(2)};
          `}
        >
          Git Happens
        </h1>
      </header>
      {children}
    </main>
  </React.Fragment>
);
