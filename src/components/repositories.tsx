import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { css } from '@emotion/core';

import { usePagination } from '../hooks/usePagination';
import { SEARCH_REPOSITORIES } from '../graphql/queries/profilePage';
import { RepositoriesData } from '../interfaces/RepositoriesData';
import { Results } from './results';
import { Pagination } from './pagination';
import { SortDirection } from '../enums/SortDirection';
import { RepositoryOrder } from '../interfaces/RepositoryOrder';
import { RepositoryCard } from './repositoryCard';
import { Theme } from '../theme/theme';
import { Spinner } from './spinner';
import { Button } from './button';

interface RepositoriesProps {
  login: string;
}

export const Repositories: React.FC<RepositoriesProps> = ({ login }) => {
  const { pagination, next, previous } = usePagination(6);
  const [orderBy, setOrderBy] = React.useState<RepositoryOrder>(null);

  const { data, error, loading } = useQuery<RepositoriesData>(SEARCH_REPOSITORIES, {
    variables: {
      login,
      orderBy,
      ...pagination,
    },
  });

  const handleSort = () => {
    setOrderBy((orderBy: RepositoryOrder) => {
      let direction: SortDirection;

      if (!orderBy) {
        direction = SortDirection.ASC;
      } else {
        direction = orderBy.direction === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC;
      }

      return { field: 'NAME', direction };
    });
  };

  const sortLabel = orderBy?.direction === SortDirection.ASC ? 'descending' : 'ascending';

  return (
    <React.Fragment>
      {error && <pre>{JSON.stringify({ error }, null, 2)}</pre>}

      {loading && (
        <div
          css={css`
            grid-column: 1 / -1;
          `}
        >
          <div
            css={(theme: Theme) => css`
              display: flex;
              padding: ${theme.spacing(5)};
              justify-content: center;
            `}
          >
            <Spinner />
          </div>
        </div>
      )}

      {!loading && data && (
        <Results title="Repositories" totalCount={data.user.repositories.totalCount}>
          {data.user.repositories.nodes.map((repository) => (
            <div
              key={repository.id}
              css={(theme: Theme) =>
                css`
                  margin-bottom: ${theme.spacing(3)};
                `
              }
            >
              <RepositoryCard repostiory={repository} />
            </div>
          ))}

          <div
            css={css`
              display: flex;
            `}
          >
            <Button onClick={handleSort}>Sort {sortLabel}</Button>
            <div
              css={css`
                flex: 1;
              `}
            >
              <Pagination pageInfo={data.user.repositories.pageInfo} next={next} previous={previous} />
            </div>
          </div>
        </Results>
      )}
    </React.Fragment>
  );
};
