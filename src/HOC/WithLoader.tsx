import React from 'react';
import { Loader } from 'components/loader/Loader';
import type { WithLoaderProps } from 'types/props/loader.props.types';

const WithLoader = (props: WithLoaderProps) => {
  const { isLoading, children, variant } = props;
  return isLoading ? <Loader variant={variant} /> : <>{children}</>;
};

export default WithLoader;
