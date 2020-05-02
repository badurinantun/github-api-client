import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { usePagination } from '../hooks/usePagination';
import { SEARCH_REPOSITORIES } from '../graphql/queries/profilePage';
import { RepositoriesData } from '../interfaces/RepositoriesData';
import { Results } from './results';
import { Pagination } from './pagination';

interface RepositoriesProps {
  login: string;
}

export const Repositories: React.FC<RepositoriesProps> = ({ login }) => {
  const { pagination, next, previous } = usePagination(6);
  const [direction] = React.useState(null);

  const { data, error, loading } = useQuery<RepositoriesData>(SEARCH_REPOSITORIES, {
    variables: {
      login,
      direction,
      ...pagination,
    },
  });

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
          <Pagination pageInfo={data.user.repositories.pageInfo} next={next} previous={previous} />
        </Results>
      )}
    </React.Fragment>
  );
};
