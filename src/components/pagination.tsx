import React from 'react';
import { css } from '@emotion/core';

import { PageInfo } from '../interfaces/PageInfo';
import { Button } from './button';

interface PaginationProps {
  pageInfo: PageInfo;

  next: (cursor: string) => void;
  previous: (cursor: string) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  pageInfo: { endCursor, startCursor, hasNextPage, hasPreviousPage },
  next,
  previous,
}) => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      {hasPreviousPage && <Button onClick={() => previous(startCursor)}>Previous</Button>}
      {hasNextPage && (
        <Button
          css={css`
            margin-left: auto;
          `}
          onClick={() => next(endCursor)}
        >
          Next
        </Button>
      )}
    </div>
  );
};
