import gql from 'graphql-tag';
import { ProfilePageFragments } from '../fragments/profilePage';
import { CommonFragments } from '../fragments/common';

export const GET_PROFILE = gql`
  query getProfile($login: String!) {
    user(login: $login) {
      ...UserProfile
    }
  }

  ${ProfilePageFragments.user}
`;

export const SEARCH_REPOSITORIES = gql`
  query searchRepositories(
    $login: String!
    $orderBy: RepositoryOrder
    $first: Int
    $last: Int
    $before: String
    $after: String
  ) {
    user(login: $login) {
      id
      repositories(
        orderBy: $orderBy
        privacy: PUBLIC
        ownerAffiliations: [OWNER]
        first: $first
        last: $last
        before: $before
        after: $after
      ) {
        totalCount
        pageInfo {
          ...PageInfo
        }
        nodes {
          ...UserRepository
        }
      }
    }
  }

  ${CommonFragments.pageInfo}
  ${ProfilePageFragments.repository}
`;
