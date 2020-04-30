import React from 'react';

enum PaginationActionType {
  PREVIOUS,
  NEXT,
}

interface PaginationState {
  first: number;
  last: number;
  before: string;
  after: string;
}

interface PaginationAction {
  type: PaginationActionType;
  payload: {
    cursor: string;
  };
}

function generatePaginationReducer(pageSize: number): React.Reducer<PaginationState, PaginationAction> {
  return function (_: PaginationState, action: PaginationAction) {
    switch (action.type) {
      case PaginationActionType.PREVIOUS: {
        return { first: null, last: pageSize, before: action.payload.cursor, after: null };
      }
      case PaginationActionType.NEXT: {
        return { first: pageSize, last: null, before: null, after: action.payload.cursor };
      }
      default: {
        throw new Error(`Unhandled type: ${action.type}`);
      }
    }
  };
}

export function usePagination(pageSize: number) {
  const paginationReducer = generatePaginationReducer(pageSize);
  const [pagination, dispatch] = React.useReducer(paginationReducer, {
    first: pageSize,
    last: null,
    after: null,
    before: null,
  });

  const next = React.useCallback((cursor: string) => {
    dispatch({ type: PaginationActionType.NEXT, payload: { cursor } });
  }, []);
  const previous = React.useCallback((cursor: string) => {
    dispatch({ type: PaginationActionType.PREVIOUS, payload: { cursor } });
  }, []);

  return { pagination, next, previous };
}
