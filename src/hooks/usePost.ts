import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { postsApi } from 'store/api/posts.api';
import { authorsApi } from 'store/api/authors.api';
import { commentsApi } from 'store/api/comments.api';
import type { Post } from 'types/entity/post.types';
import type { User } from 'types/entity/user.types';
import type { UsePostReturn } from 'types/hooks/use.post.types';

export const usePost = (): UsePostReturn => {
  const { id } = useParams() || 0;
  const numId = Number(id);

  const { isFetching: isLoadingPost, data: post } = postsApi.useGetPostQuery(numId);

  const { isFetching: isLoadingAuthor, data: author } = authorsApi.useGetAuthorQuery(
    post?.userId ?? skipToken
  );

  const { isFetching: isLoadingComments, data: comments } = commentsApi.useGetCommentsQuery(
    post?.id ?? skipToken
  );

  return [
    numId,
    { post: post || ({} as Post), isLoadingPost },
    { author: author || ({} as User), isLoadingAuthor },
    { comments: comments || [], isLoadingComments },
  ];
};
