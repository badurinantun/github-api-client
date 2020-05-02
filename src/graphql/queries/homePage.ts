import gql from 'graphql-tag';

import { CommonFragments } from '../fragments/common';

export const SEARCH_USERS = gql`
  query searchUsers($query: String!, $first: Int, $last: Int, $before: String, $after: String) {
    search(query: $query, first: $first, last: $last, type: USER, before: $before, after: $after) {
      userCount
      pageInfo {
        ...PageInfo
      }
      nodes {
        ...User
      }
    }
  }

  ${CommonFragments.pageInfo}
  ${CommonFragments.user}
`;
