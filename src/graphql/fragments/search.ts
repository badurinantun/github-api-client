import gql from 'graphql-tag';

export const SearchFragments = {
  user: gql`
    fragment SearchUser on User {
      id
      login
    }
  `,
  pageInfo: gql`
    fragment SearchPageInfo on PageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
  `,
};
