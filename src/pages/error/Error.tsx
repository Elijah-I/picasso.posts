import React from 'react';
import styles from './Error.module.scss';

const Error = () => {
  return (
    <div className={styles.error}>
      <div className={styles.error__content}>Page not found</div>
    </div>
  );
};

export default Error;
