import gql from 'graphql-tag';
import { ProfileFragments } from '../fragments/profile';

export const GET_PROFILE = gql`
  query getProfile($login: String!) {
    user(login: $login) {
      ...UserProfile
    }
  }

  ${ProfileFragments.user}
`;
