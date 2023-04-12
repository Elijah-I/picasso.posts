import { api } from 'store/root/api';
import type {
  AddCommentsRequest,
  AddCommentsResponse,
  GetCommentsRequest,
  GetCommentsResponse,
} from 'types/api/comments.api.types';

export const commentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<GetCommentsResponse, GetCommentsRequest>({
      query: (postId) => `/comments/?postId=${postId}`,
      providesTags: (response, error, postId) => [{ type: 'Comments', id: postId }],
    }),
    addComment: builder.mutation<AddCommentsResponse, AddCommentsRequest>({
      query: (comment) => ({
        url: '/comments',
        method: 'POST',
        body: comment,
      }),
      invalidatesTags: (response, error, comment) => [{ type: 'Comments', id: comment.postId }],
    }),
  }),
});
