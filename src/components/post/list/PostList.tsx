import React from 'react';
import PostItem from '../item/PostItem';
import type { PostListProps } from 'types/props/posts.porps.types';
import styles from './PostList.module.scss';

const PostList = (props: PostListProps) => {
  const { posts, authors } = props;
  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          author={authors.find((author) => author.id === post.userId)}
        />
      ))}
    </div>
  );
};

export default PostList;
