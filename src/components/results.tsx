import React from 'react';
import { Theme } from '../theme/theme';
import { css } from '@emotion/core';

interface ResultsProps {
  title: string;
  totalCount: number;
}

export const Results: React.FC<ResultsProps> = ({ title, totalCount, children }) => {
  return (
    <div>
      <div
        css={(theme: Theme) => css`
          margin-bottom: ${theme.spacing(3)};
          color: ${theme.colors.secondary};
        `}
      >
        <h3
          css={css`
            font-weight: normal;
          `}
        >
          {totalCount} {title}
        </h3>
      </div>
      <div>{children}</div>
    </div>
  );
};
