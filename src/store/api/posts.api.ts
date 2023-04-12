import { api } from 'store/api/api';
import type { GetPostsResponse, GetPostsRequest } from 'types/api/posts.api.types';

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<GetPostsResponse, GetPostsRequest>({
      query: (request) => {
        const params = { ...request };
        if (params.userId === 0) delete params.userId;
        return {
          url: '/posts',
          params,
        };
      },
      providesTags: (response, error, request) => [{ type: 'Posts', id: request.userId }],
    }),
  }),
});
