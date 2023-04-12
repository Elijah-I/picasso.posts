import React from 'react';
import type { PostFilterProps } from 'types/props/posts.porps.types';
import styles from './PostFilter.module.scss';

const PostFilter = (props: PostFilterProps) => {
  const { authors, userId, onFilter } = props;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilter({ userId: +event.currentTarget.value });
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filter__author}>
        <div className={styles.filter__label}>Filter by author :</div>
        <select onChange={handleChange} value={userId}>
          <option value={0}></option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PostFilter;
