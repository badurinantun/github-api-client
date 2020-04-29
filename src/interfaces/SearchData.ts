import { SearchResult } from './SearchResult';

export interface SearchData<T extends SearchResult<unknown>> {
  search: T;
}
