import type { Post } from '../entity/post.types';
import type { User } from '../entity/user.types';

export interface GetPostsRequest {
  userId?: User['id'];
}
export type GetPostsResponse = Post[];

export type GetPostRequest = Post['id'];
export type GetPostResponse = Post;
