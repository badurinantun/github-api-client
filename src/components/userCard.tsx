import React from 'react';
import { css } from '@emotion/core';

import { Theme } from '../theme/theme';
import { User } from '../interfaces/User';

interface UserCardProps {
  user: User;
  textMatches?: Array<{
    property: string;
    highlights: Array<{
      text: string;
    }>;
  }>;
}

export const UserCard: React.FC<UserCardProps> = ({ user, textMatches }) => {
  const highlightProperty = (name: string, text: string) => {
    if (!textMatches) {
      return text;
    }

    const match = textMatches.find(({ property }) => property === name);

    if (match) {
      // Solution from https://stackoverflow.com/questions/29652862/highlight-text-using-reactjs
      const highlight = match.highlights[0];
      const regex = new RegExp(`(${highlight.text})`, 'gi');
      const parts = text.split(regex);

      return (
        <span>
          {parts
            .filter((part) => part)
            .map((part, i) => (regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>))}
        </span>
      );
    }

    return text;
  };

  return (
    <div
      css={(theme: Theme) => css`
        padding: ${theme.spacing(4)} ${theme.spacing(2)};
        border-bottom: 1px solid ${theme.colors.border};
      `}
    >
      <h3>{highlightProperty('name', user.name)}</h3>

      <p>
        <a href={user.url} target="_blank" rel="noopener noreferrer">
          @{highlightProperty('login', user.login)}
        </a>
      </p>

      {user.bio && <p>{highlightProperty('profile_bio', user.bio)}</p>}

      {user.location && <p>{highlightProperty('location', user.location)}</p>}

      {user.email && (
        <p>
          <a href={`mailto:${user.email}`}>{highlightProperty('email', user.email)}</a>
        </p>
      )}
    </div>
  );
};
