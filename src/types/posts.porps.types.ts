import type { Post } from './post.types';
import type { User } from './user.types';

export interface PostFilterProps {
  authors: User['id'][];
}

export interface PostListProps {
  posts: Post[];
}

export interface PostItemProps {
  post: Post;
}
