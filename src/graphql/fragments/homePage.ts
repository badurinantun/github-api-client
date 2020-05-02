import gql from 'graphql-tag';

export const HomePageFragments = {
  user: gql`
    fragment SearchUser on User {
      id
      login
    }
  `,
};
