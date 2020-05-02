import { SearchResult } from './SearchResult';
import { User } from './User';

export interface UserSearchResult extends SearchResult<User> {
  userCount: number;
}
