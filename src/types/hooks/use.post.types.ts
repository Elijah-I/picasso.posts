import type { Comment } from 'types/entity/comment.types';
import type { Post } from 'types/entity/post.types';
import type { User } from 'types/entity/user.types';

export type UsePostReturn = [
  number,
  { post: Post; isLoadingPost: boolean },
  { author: User; isLoadingAuthor: boolean },
  { comments: Comment[]; isLoadingComments: boolean }
];
