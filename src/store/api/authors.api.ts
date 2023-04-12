import { api } from 'store/root/api';
import type {
  GetUsersResponse,
  GetUsersRequest,
  GetUserResponse,
  GetUserRequest,
} from 'types/api/authors.api.types';

export const authorsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAuthors: builder.query<GetUsersResponse, GetUsersRequest>({
      query: () => '/users',
      providesTags: ['Authors'],
    }),
    getAuthor: builder.query<GetUserResponse, GetUserRequest>({
      query: (id) => `/users/${id}`,
      providesTags: (response, error, id) => [{ type: 'Authors', id }],
    }),
  }),
});
