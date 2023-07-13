import { api } from "@/redux/api/apISlice";

const productApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: () => '/products',
          }),
          singleProduct: builder.query({
            query: (id) => `/product/${id}`,
          }),
          getComment: builder.query({
            query: (id) => `/comment/${id}`,
            providesTags: ['comments'],
          }),
          postComment: builder.mutation({
            query: ({ id, data }) => ({
              url: `/comment/${id}`,
              method: `POST`,
              body: data,
            }),
            invalidatesTags: ['comments'],
          }),
})
})
export const {
    useGetProductsQuery,
    useSingleProductQuery,
    usePostCommentMutation,
    useGetCommentQuery,
  } = productApi;
  