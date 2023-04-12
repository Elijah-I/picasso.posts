import React from 'react';
import { Link } from 'react-router-dom';
import type { PostItemProps } from 'types/props/posts.porps.types';
import styles from './PostItem.module.scss';

const PostItem = (props: PostItemProps) => {
  const { post, author } = props;
  const home = import.meta.env.BASE_URL;

  return (
    <Link to={`${home}/posts/${post.id}`} className={styles.post}>
      <div className={styles.post__header}>
        <div className={styles.post__id}>{post.id}.</div>
        <div className={styles.post__title}>{post.title}.</div>
        <div className={styles.post__author}>{author.name}</div>
      </div>
      <div className={styles.post__content}>{post.body}.</div>
    </Link>
  );
};

export default PostItem;
