import gql from 'graphql-tag';

export const CommonFragments = {
  user: gql`
    fragment User on User {
      id
      login
      name
      email
      avatarUrl
      url
      location
      bio
    }
  `,
  pageInfo: gql`
    fragment PageInfo on PageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
  `,
};
