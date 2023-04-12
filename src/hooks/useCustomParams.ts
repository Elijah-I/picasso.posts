import { useSearchParams } from 'react-router-dom';
import type { SearchParams, useCustomParamsReturn } from 'types/search.params.types';

export const useCustomParams = (): useCustomParamsReturn => {
  const [searchParams, setSearchParams] = useSearchParams();

  const userId = +(searchParams.get('userId') || 0);

  const setCustomParams = (params: SearchParams) => {
    Object.entries(params).forEach(([param, value]) => {
      if (value) {
        if (searchParams.has(param)) searchParams.set(param, value);
        else searchParams.append(param, value);
      } else {
        searchParams.delete(param);
      }
    });

    setSearchParams(searchParams);
  };

  return [{ userId }, setCustomParams];
};
