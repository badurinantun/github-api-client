import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Link from 'next/link';

import { useDebounce } from '../src/hooks/useDebounce';
import { UserSearchResult } from '../src/interfaces/UserSearchResult';
import { SearchData } from '../src/interfaces/SearchData';
import { Results } from '../src/components/results';
import { Pagination } from '../src/components/pagination';
import { usePagination } from '../src/hooks/usePagination';
import { SEARCH_USERS } from '../src/graphql/queries/homePage';

function HomePage() {
  const { pagination, next, previous } = usePagination(10);
  const [query, setQuery] = React.useState('');

  const [searchUsers, { data, error, loading }] = useLazyQuery<SearchData<UserSearchResult>>(SEARCH_USERS, {
    variables: {
      ...pagination,
    },
  });

  useDebounce(
    () => {
      searchUsers({
        variables: {
          query,
        },
      });
    },
    500,
    [query],
  );

  const handleSearch = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <pre>{JSON.stringify({ error }, null, 2)}</pre>}

      <input type="text" value={query} onChange={handleSearch} />
      {data?.search && (
        <Results totalCount={data.search.userCount}>
          {data.search.nodes.map(({ id, login }) => (
            <div key={id}>
              <div>
                <Link href="/profile/[login]" as={`/profile/${login}`}>
                  <a>{login}</a>
                </Link>
              </div>
            </div>
          ))}
          <Pagination pageInfo={data.search.pageInfo} next={next} previous={previous} />
        </Results>
      )}
    </div>
  );
}

export default HomePage;
