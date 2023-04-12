import React from 'react';
import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { postsApi } from 'store/api/posts.api';
import { authorsApi } from 'store/api/authors.api';
import { commentsApi } from 'store/api/comments.api';
import WithLoader from 'HOC/WithLoader';
import Error from 'pages/error/Error';
import PostAuthor from 'components/post/author/PostAuthor';
import styles from './Post.module.scss';
import PostPreview from 'components/post/preview/PostPreview';
import PostComments from 'components/post/comments/PostComments';

const Post = () => {
  const { id } = useParams();
  if (!id) return <Error message="Nothing found" />;

  const { isFetching: isLoadingPost, data: post } = postsApi.useGetPostQuery(+id);
  if (!isLoadingPost && !post) return <Error message="Post not found" />;

  const { isFetching: isLoadingAuthor, data: author } = authorsApi.useGetAuthorQuery(
    post?.userId ?? skipToken
  );

  const { isFetching: isLoadingComments, data: comments } = commentsApi.useGetCommentsQuery(
    post?.id ?? skipToken
  );

  return (
    <WithLoader isLoading={isLoadingPost} variant="dark">
      <div className={styles.post}>
        <div className={styles.post__author}>
          <WithLoader isLoading={isLoadingAuthor} variant="light">
            <PostAuthor author={author!} />
          </WithLoader>
        </div>

        <div className={styles.post__content}>
          <PostPreview post={post!} />
        </div>

        <div className={styles.post__comments}>
          <WithLoader isLoading={isLoadingComments} variant="light">
            <PostComments comments={comments} />
            add comment
          </WithLoader>
        </div>
      </div>
    </WithLoader>
  );
};

export default Post;
