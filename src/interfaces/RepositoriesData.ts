import { SearchResult } from './SearchResult';
import { Repository } from './Repository';

export interface RepositoriesData {
  user: {
    repositories: Repositiories;
  };
}

interface Repositiories extends SearchResult<Repository> {
  totalCount: number;
}
