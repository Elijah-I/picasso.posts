import React from 'react';
import type { PostFilterProps } from 'types/posts.porps.types';
import styles from './PostFilter.module.scss';

const PostFilter = (props: PostFilterProps) => {
  const { authors } = props;

  return (
    <div className={styles.filter}>
      <div className={styles.filter__author}>
        <div className={styles.filter__label}>Filter by author :</div>
        <select>
          <option value=""></option>
          {authors.map((author) => (
            <option key={author} value={author}>
              Author #{author}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PostFilter;
