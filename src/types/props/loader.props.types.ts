export interface WithLoaderProps {
  isLoading: boolean;
  variant: 'dark' | 'light';
  children: React.ReactNode;
}

export type LoaderProps = Pick<WithLoaderProps, 'variant'>;
