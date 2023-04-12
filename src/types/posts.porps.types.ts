import type { Post } from './post.types';
import type { User } from './user.types';
import type { SearchParams } from './search.params.types';

export interface PostFilterProps {
  authors: User[];
  userId: User['id'];
  onFilter: (params: SearchParams) => void;
}

export interface PostListProps {
  posts: Post[];
  authors: User[];
}

export interface PostItemProps {
  post: Post;
  author: User;
}
