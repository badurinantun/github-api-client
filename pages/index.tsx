import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { css } from '@emotion/core';
import Link from 'next/link';

import { useDebounce } from '../src/hooks/useDebounce';
import { UserSearchResult } from '../src/interfaces/UserSearchResult';
import { SearchData } from '../src/interfaces/SearchData';
import { Results } from '../src/components/results';
import { Pagination } from '../src/components/pagination';
import { usePagination } from '../src/hooks/usePagination';
import { SEARCH_USERS } from '../src/graphql/queries/homePage';
import { Grid } from '../src/components/layout/grid';
import { Theme } from '../src/theme/theme';
import { Input } from '../src/components/input';
import { Spinner } from '../src/components/spinner';
import { UserCard } from '../src/components/userCard';
import { useSearchQuery } from '../src/hooks/useSearchQuery';

function HomePage() {
  const { pagination, next, previous, reset: resetPagination } = usePagination(5);
  const [query, setQuery] = useSearchQuery();

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
    resetPagination();
  };

  return (
    <Grid>
      <div
        css={(theme: Theme) => css`
          grid-column: 1 / -1;
          margin-bottom: ${theme.spacing(4)};
        `}
      >
        <label htmlFor="search">Search users:</label>
        <Input name="search" type="text" value={query} onChange={handleSearch} />
      </div>

      <div
        css={css`
          grid-column: 1 / -1;
        `}
      >
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

        {!loading && data?.search && (
          <Results title="users" totalCount={data.search.userCount}>
            {data.search.edges.map(({ node: user, textMatches }) => (
              <Link key={user.id} href="/profile/[profile]" as={`/profile/${user.login}`}>
                <div
                  css={(theme: Theme) => css`
                    cursor: pointer;
                    margin-bottom: ${theme.spacing(4)};

                    &:hover {
                      background-color: ${theme.colors.primary};
                    }
                  `}
                >
                  <UserCard user={user} textMatches={textMatches} />
                </div>
              </Link>
            ))}
            <Pagination pageInfo={data.search.pageInfo} next={next} previous={previous} />
          </Results>
        )}
      </div>
    </Grid>
  );
}

export default HomePage;
