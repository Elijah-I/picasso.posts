import type { Post } from './post.types';
import type { User } from './user.types';

export interface GetPostsRequest {
  userId?: User['id'];
}

export interface GetPostsResponse {
  posts: Post[];
  authors: User['id'][];
}

export type ApiPostsResponse = Post[];
