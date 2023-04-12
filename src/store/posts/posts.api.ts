import { api } from 'store/api/api';
import type { GetPostsResponse, GetPostsRequest, ApiPostsResponse } from 'types/posts.api.types';

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<GetPostsResponse, GetPostsRequest>({
      query: (params) => ({
        url: '/posts',
        params,
      }),
      transformResponse: (response: ApiPostsResponse) => {
        return {
          posts: response || [],
          authors: [...new Set((response || []).map((post) => post.userId))],
        };
      },
      providesTags: ['Posts'],
    }),
  }),
});
