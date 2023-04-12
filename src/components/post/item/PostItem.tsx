import React from 'react';
import type { PostItemProps } from 'types/posts.porps.types';
import styles from './PostItem.module.scss';

const PostItem = (props: PostItemProps) => {
  const { post } = props;
  return (
    <div className={styles.post}>
      <div className={styles.post__header}>
        <div className={styles.post__id}>{post.id}.</div>
        <div className={styles.post__title}>{post.title}.</div>
        <div className={styles.post__author}>Author #{post.userId}.</div>
      </div>
      <div className={styles.post__content}>{post.body}.</div>
    </div>
  );
};

export default PostItem;
