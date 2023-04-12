import type { User } from './user.types';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: User['id'];
}
