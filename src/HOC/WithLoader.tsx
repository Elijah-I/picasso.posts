import React from 'react';
import { Loader } from 'components/loader/Loader';
import type { LoaderProps } from 'types/props/loader.props.types';

const WithLoader = (props: LoaderProps) => {
  const { isLoading, children } = props;
  return isLoading ? <Loader /> : <>{children}</>;
};

export default WithLoader;
