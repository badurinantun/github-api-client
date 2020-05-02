import gql from 'graphql-tag';

export const ProfilePageFragments = {
  repository: gql`
    fragment UserRepository on Repository {
      id
      name
      description
      url
      primaryLanguage {
        name
        color
      }
    }
  `,
};
