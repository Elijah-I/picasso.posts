import type { Post } from './post.types';

export interface Comment {
  postId: Post['id'];
  id: number;
  name: string;
  email: string;
  body: string;
}
