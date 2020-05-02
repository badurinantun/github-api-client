import { SortDirection } from '../enums/SortDirection';

export interface RepositoryOrder {
  field: string;
  direction: SortDirection;
}
