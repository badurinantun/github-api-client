import React from 'react';
import { css } from '@emotion/core';

import { Theme } from '../theme/theme';

export const Input: React.FC<React.HTMLProps<HTMLInputElement>> = (props) => (
  <input
    css={(theme: Theme) => css`
      width: 100%;
      padding: ${theme.spacing(3)};
      color: ${theme.colors.text};
      border: 1px solid ${theme.colors.border};
      border-radius: 3px;

      &:focus {
        border-color: ${theme.colors.highlight};
        box-shadow: 0px 0px 4px 1px ${theme.colors.highlight};
        color: ${theme.colors.highlight};
      }
    `}
    {...props}
  />
);
