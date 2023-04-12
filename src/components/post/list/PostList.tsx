import React from 'react';
import PostItem from '../item/PostItem';
import type { PostListProps } from 'types/posts.porps.types';
import styles from './PostList.module.scss';

const PostList = (props: PostListProps) => {
  const { posts } = props;
  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
