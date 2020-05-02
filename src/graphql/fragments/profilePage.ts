import gql from 'graphql-tag';

export const ProfilePageFragments = {
  user: gql`
    fragment UserProfile on User {
      id
      login
      name
      email
      avatarUrl
      url
    }
  `,
};
