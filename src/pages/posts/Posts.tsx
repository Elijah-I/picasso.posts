import React from 'react';
import styles from './Posts.module.scss';
import PostFilter from 'components/post/filter/PostFilter';
import PostList from 'components/post/list/PostList';

const Posts = () => {
  return (
    <div className={styles.container}>
      <PostFilter />
      <PostList />
    </div>
  );
};

export default Posts;
