import { PageInfo } from './PageInfo';

export interface SearchResult<T> {
  search: {
    pageInfo: PageInfo;
    nodes: Array<T>;
  };
}
