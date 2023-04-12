import React from 'react';
import type { PostCommentsProps } from 'types/props/posts.porps.types';
import styles from './PostComments.module.scss';

const PostComments = (props: PostCommentsProps) => {
  const { comments } = props;

  if (!comments) return <div className={styles.no_comments}>No comments</div>;

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.comment}>
          <b>{comment.name}</b>
          <div>{comment.body}</div>
        </div>
      ))}
    </>
  );
};

export default PostComments;
