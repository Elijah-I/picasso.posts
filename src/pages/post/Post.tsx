import React from 'react';
import { usePopup } from 'hooks/usePopup';
import { usePost } from 'hooks/usePost';
import WithLoader from 'HOC/WithLoader';
import PostAuthor from 'components/post/author/PostAuthor';
import PostPreview from 'components/post/preview/PostPreview';
import PostComments from 'components/post/comments/PostComments';
import AddPostComment from 'components/post/comments/add/AddPostComment';
import Popup from 'components/popup/Popup';
import styles from './Post.module.scss';

const Post = () => {
  const [popup] = usePopup();
  const [
    id,
    { post, isLoadingPost },
    { author, isLoadingAuthor },
    { comments, isLoadingComments },
  ] = usePost();

  return (
    <WithLoader isLoading={isLoadingPost} variant="dark">
      <div className={styles.post}>
        <div className={styles.post__author}>
          <WithLoader isLoading={isLoadingAuthor} variant="light">
            <PostAuthor author={author} />
          </WithLoader>
        </div>

        <div className={styles.post__content}>
          <PostPreview post={post} />
        </div>

        <div className={styles.post__comments}>
          <WithLoader isLoading={isLoadingComments} variant="light">
            <PostComments comments={comments} />
          </WithLoader>
        </div>

        {!isLoadingComments && (
          <div className={styles.post__add_comment}>
            <AddPostComment postId={id} />
          </div>
        )}

        <Popup show={popup} message="Comment created" />
      </div>
    </WithLoader>
  );
};

export default Post;
