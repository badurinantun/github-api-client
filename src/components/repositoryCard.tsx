import React from 'react';
import { css } from '@emotion/core';

import { Theme } from '../theme/theme';
import { Repository } from '../interfaces/Repository';

interface RepositoryCardProps {
  repostiory: Repository;
}

export const RepositoryCard: React.FC<RepositoryCardProps> = ({ repostiory }) => (
  <div
    css={(theme: Theme) => css`
      padding: ${theme.spacing(4)};
      border: 1px solid ${theme.colors.border};
      border-radius: 3px;
    `}
  >
    <a href={repostiory.url} target="_blank" rel="noopener noreferrer">
      {repostiory.name}
    </a>

    <p
      css={(theme: Theme) => css`
        margin: ${theme.spacing(3)} 0;
      `}
    >
      {repostiory.description}
    </p>

    {repostiory.primaryLanguage && (
      <p>
        <span
          css={(theme: Theme) => css`
            display: inline-block;
            margin-right: ${theme.spacing(3)};
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: ${repostiory.primaryLanguage.color};
          `}
        />
        {repostiory.primaryLanguage.name}
      </p>
    )}
  </div>
);
