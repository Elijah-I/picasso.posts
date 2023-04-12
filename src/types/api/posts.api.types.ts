import type { Post } from '../post.types';
import type { User } from '../entity/user.types';

export interface GetPostsRequest {
  userId?: User['id'];
}

export type GetPostsResponse = Post[];
