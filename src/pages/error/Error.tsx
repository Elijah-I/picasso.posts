import React from 'react';
import type { ErrorProps } from 'types/props/error.props.types';
import styles from './Error.module.scss';

const Error = (props: ErrorProps) => {
  const { message } = props;

  return (
    <div className={styles.error}>
      <div className={styles.error__content}>{message}</div>
    </div>
  );
};

export default Error;
