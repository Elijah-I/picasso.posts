import { api } from 'store/api/api';
import type { GetUsersResponse, GetUsersRequest } from 'types/api/authors.api.types';

export const authorsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAuthors: builder.query<GetUsersResponse, GetUsersRequest>({
      query: () => '/users',
      providesTags: ['Authors'],
    }),
  }),
});
