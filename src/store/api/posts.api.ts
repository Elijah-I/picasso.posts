import { api } from 'store/root/api';
import type {
  GetPostsResponse,
  GetPostsRequest,
  GetPostResponse,
  GetPostRequest,
} from 'types/api/posts.api.types';

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
    getPost: builder.query<GetPostResponse, GetPostRequest>({
      query: (id) => `/posts/${id}`,
      providesTags: (response, error, id) => [{ type: 'Posts', id }],
    }),
  }),
});
