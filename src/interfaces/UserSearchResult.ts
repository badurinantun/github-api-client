import { SearchResult } from './SearchResult';
import { User } from './User';

export interface UserSearchResult extends SearchResult<Pick<User, 'id' | 'login'>> {
  userCount: number;
}
