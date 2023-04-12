import type { User } from 'types/entity/user.types';
import type { Post } from 'types/entity/post.types';
import type { SearchParams } from '../hooks/use.search.params.types';

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
