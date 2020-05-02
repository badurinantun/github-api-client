import React from 'react';
import { css } from '@emotion/core';

import { Theme } from '../theme/theme';

export const Button: React.FC<React.ComponentProps<'button'>> = (props) => (
  <button
    css={(theme: Theme) => css`
      padding: ${theme.spacing(3)};
      box-sizing: border-box;
      cursor: pointer;

      color: ${theme.colors.highlight};
      border: 1px solid ${theme.colors.border};
      background-color: ${theme.colors.white};
      border-radius: 3px;

      font-weight: 700;

      &:hover {
        background-color: ${theme.colors.primary};
      }
    `}
    {...props}
  />
);
