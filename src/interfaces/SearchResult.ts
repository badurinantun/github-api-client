import { PageInfo } from './PageInfo';

export interface SearchResult<T> {
  pageInfo: PageInfo;
  nodes: Array<T>;
  edges?: Array<{
    cursor: string;
    node: T;
    textMatches: Array<{
      property: string;
      highlights: Array<{
        text: string;
      }>;
    }>;
  }>;
}
