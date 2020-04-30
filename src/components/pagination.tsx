import React from 'react';

import { PageInfo } from '../interfaces/PageInfo';

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
    <>
      <button disabled={!hasPreviousPage} onClick={() => previous(startCursor)}>
        previous
      </button>
      <button disabled={!hasNextPage} onClick={() => next(endCursor)}>
        next
      </button>
    </>
  );
};
