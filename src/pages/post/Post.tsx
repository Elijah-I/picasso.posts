import React from 'react';
import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { postsApi } from 'store/api/posts.api';
import { authorsApi } from 'store/api/authors.api';
import { commentsApi } from 'store/api/comments.api';
import { usePopup } from 'hooks/usePopup';
import WithLoader from 'HOC/WithLoader';
import Error from 'pages/error/Error';
import PostAuthor from 'components/post/author/PostAuthor';
import PostPreview from 'components/post/preview/PostPreview';
import PostComments from 'components/post/comments/PostComments';
import AddPostComment from 'components/post/comments/add/AddPostComment';
import Popup from 'components/popup/Popup';
import styles from './Post.module.scss';

const Post = () => {
  const [popup] = usePopup();
  const { id } = useParams();

  const { isFetching: isLoadingPost, data: post } = postsApi.useGetPostQuery(+(id || 0));
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
          </WithLoader>
        </div>

        {!isLoadingComments && (
          <div className={styles.post__add_comment}>
            <AddPostComment postId={+id} />
          </div>
        )}

        <Popup show={popup} message="Comment created" />
      </div>
    </WithLoader>
  );
};

export default Post;
