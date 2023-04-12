import { api } from 'store/root/api';
import type { GetCommentsRequest, GetCommentsResponse } from 'types/api/comments.api.types';

export const commentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<GetCommentsResponse, GetCommentsRequest>({
      query: (postId) => `/comments/?postId=${postId}`,
      providesTags: (response, error, postId) => [{ type: 'Comments', postId }],
    }),
  }),
});
