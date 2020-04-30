import gql from 'graphql-tag';

export const ProfileFragments = {
  user: gql`
    fragment UserProfile on User {
      id
      login
      name
      email
      avatarUrl
    }
  `,
};
