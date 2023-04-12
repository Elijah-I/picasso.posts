import type { Post } from 'types/entity/post.types';
import type { Comment } from 'types/entity/comment.types';

export type GetCommentsRequest = Post['id'];
export type GetCommentsResponse = Comment[];
