import React from 'react';
import styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcome__content}>Welcome to Picasso test assignment!</div>
    </div>
  );
};

export default Welcome;
