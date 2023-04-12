import React from 'react';
import { postsApi } from 'store/api/posts.api';
import { authorsApi } from 'store/api/authors.api';
import PostFilter from 'components/post/filter/PostFilter';
import PostList from 'components/post/list/PostList';
import WithLoader from 'HOC/WithLoader';
import { useCustomParams } from 'hooks/useCustomParams';
import type { SearchParams } from 'types/search.params.types';
import styles from './Posts.module.scss';

const Posts = () => {
  const [{ userId }, setCustomParams] = useCustomParams();
  const { isLoading: isLoadingAuthors, data: authors } = authorsApi.useGetAuthorsQuery();
  const { isLoading: isLoadingPosts, data: posts } = postsApi.useGetPostsQuery({ userId });

  const handleFilter = (params: SearchParams) => {
    setCustomParams(params);
  };

  return (
    <div className={styles.container}>
      <WithLoader isLoading={isLoadingPosts || isLoadingAuthors}>
        <PostFilter userId={userId} authors={authors || []} onFilter={handleFilter} />
        <PostList posts={posts || []} authors={authors || []} />
      </WithLoader>
    </div>
  );
};

export default Posts;
