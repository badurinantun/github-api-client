import gql from 'graphql-tag';

export const CommonFragments = {
  pageInfo: gql`
    fragment PageInfo on PageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
  `,
};
