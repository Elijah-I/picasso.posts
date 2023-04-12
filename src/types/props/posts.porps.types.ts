import type { User } from 'types/entity/user.types';
import type { Post } from 'types/entity/post.types';
import type { Comment } from 'types/entity/comment.types';
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

export interface PostPreviewProps {
  post: Post;
}

export interface PostAuthorProps {
  author: User;
}

export interface PostCommentsProps {
  comments: Comment[] | undefined;
}
