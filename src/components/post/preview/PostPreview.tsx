import React from 'react';
import type { PostPreviewProps } from 'types/props/posts.porps.types';
import styles from './PostPreview.module.scss';

const PostPreview = (props: PostPreviewProps) => {
  const { post } = props;
  return (
    <div className={styles.post}>
      <div className={styles.post__title}>{post.title}</div>
      <div className={styles.post__content}>{post.body}</div>
    </div>
  );
};

export default PostPreview;
