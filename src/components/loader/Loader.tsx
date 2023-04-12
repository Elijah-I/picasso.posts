import React from 'react';
import type { LoaderProps } from 'types/props/loader.props.types';
import styles from './Loader.module.scss';

export const Loader = (props: LoaderProps) => {
  const { variant } = props;

  return (
    <div className={`${styles.ellipsis} ${styles[variant]}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
