import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { usePagination } from '../hooks/usePagination';
import { SEARCH_REPOSITORIES } from '../graphql/queries/profilePage';
import { RepositoriesData } from '../interfaces/RepositoriesData';
import { Results } from './results';
import { Pagination } from './pagination';
import { SortDirection } from '../enums/SortDirection';
import { RepositoryOrder } from '../interfaces/RepositoryOrder';

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

  return (
    <React.Fragment>
      {loading && <p>Loading...</p>}
      {error && <pre>{JSON.stringify({ error }, null, 2)}</pre>}

      {data && (
        <Results totalCount={data.user.repositories.totalCount}>
          {data.user.repositories.nodes.map(({ id, name, description, url }) => (
            <div key={id}>
              <h3>{name}</h3>
              <p>{description}</p>
              <a href={url} target="_blank" rel="noopener noreferrer">
                link
              </a>
            </div>
          ))}
          <button onClick={handleSort}>sort</button>

          <Pagination pageInfo={data.user.repositories.pageInfo} next={next} previous={previous} />
        </Results>
      )}
    </React.Fragment>
  );
};
