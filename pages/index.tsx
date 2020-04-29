import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import { useSearchDebounce } from '../src/hooks/useSearchDebounce';
import { SEARCH_USERS } from '../src/graphql/queries/search';
import { UserSearchResult } from '../src/interfaces/UserSearchResult';
import { SearchData } from '../src/interfaces/SearchData';

function HomePage() {
  const [query, setQuery] = React.useState('');
  const [searchUsers, { data, error, loading }] = useLazyQuery<SearchData<UserSearchResult>>(SEARCH_USERS);

  useSearchDebounce(
    () => {
      searchUsers({
        variables: {
          query,
        },
      });
    },
    500,
    query,
  );

  const handleSearch = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleSearch} />
      <pre>{JSON.stringify({ loading, error, data }, null, 2)}</pre>
    </div>
  );
}

export default HomePage;
