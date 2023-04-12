import React from 'react';
import styles from './PostFilter.module.scss';

const PostFilter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.filter__author}>
        <select></select>
      </div>
    </div>
  );
};

export default PostFilter;
