import React from 'react';
import { css } from '@emotion/core';

import { Theme } from '../theme/theme';
import { User } from '../interfaces/User';

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <div
    css={(theme: Theme) => css`
      padding: ${theme.spacing(4)} ${theme.spacing(2)};
      border-bottom: 1px solid ${theme.colors.border};
    `}
  >
    <h3>{user.name}</h3>

    <p>
      <a href={user.url} target="_blank" rel="noopener noreferrer">
        @{user.login}
      </a>
    </p>

    {user.location && (
      <p
        css={(theme: Theme) =>
          css`
            margin-right: ${theme.spacing(4)};
          `
        }
      >
        {user.location}
      </p>
    )}
    {user.email && (
      <p>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
    )}
  </div>
);
