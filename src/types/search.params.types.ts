import { User } from './user.types';

export interface SearchParams {
  userId?: User['id'];
}

export type useCustomParamsReturn = [Required<SearchParams>, (params: SearchParams) => void];
