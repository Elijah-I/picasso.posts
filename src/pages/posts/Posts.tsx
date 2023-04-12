import React from 'react';
import { postsApi } from 'store/posts/posts.api';
import PostFilter from 'components/post/filter/PostFilter';
import PostList from 'components/post/list/PostList';
import WithLoader from './../../HOC/WithLoader';
import styles from './Posts.module.scss';

const Posts = () => {
  const { isLoading, data } = postsApi.useGetPostsQuery({});
  const { posts, authors } = data || { posts: [], authors: [] };

  return (
    <div className={styles.container}>
      <WithLoader isLoading={isLoading}>
        <PostFilter authors={authors} />
        <PostList posts={posts} />
      </WithLoader>
    </div>
  );
};

export default Posts;
