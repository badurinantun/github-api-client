import { PageInfo } from './PageInfo';

export interface SearchResult<T> {
  pageInfo: PageInfo;
  nodes: Array<T>;
}
