import gql from 'graphql-tag';

import { SearchFragments } from '../fragments/search';

export const SEARCH_USERS = gql`
  query searchUsers($query: String!) {
    search(query: $query, first: 10, type: USER) {
      userCount
      pageInfo {
        ...SearchPageInfo
      }
      nodes {
        ...SearchUser
      }
    }
  }

  ${SearchFragments.pageInfo}
  ${SearchFragments.user}
`;
