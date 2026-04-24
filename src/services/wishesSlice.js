import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const wishesSlice = createApi({
  reducerPath: "wishesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://script.google.com/macros/s",
  }),
  tagTypes: ["Wish"],
  endpoints: (builder) => ({
    getWishes: builder.query({
      query: () =>
        "AKfycbwMeWoVNb2pDQO7S8z_UiS3b8S1YhNWjH1Ug3DWZH8hgr6p-X5neaNNWwAkxCTtWpun/exec",
      providesTags: ["Wish"],
    }),
    // getWishById: builder.query({
    //   query: (id) => `/wishes/${id}`,
    //   providesTags: (result, error, id) => [{ type: "Wish", id }],
    // }),
    addWish: builder.mutation({
      query: (newWish) => ({
        url: "AKfycbwMeWoVNb2pDQO7S8z_UiS3b8S1YhNWjH1Ug3DWZH8hgr6p-X5neaNNWwAkxCTtWpun/exec",
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(newWish),
      }),
      invalidatesTags: ["Wish"],
    }),
    // updateWish: builder.mutation({
    //   query: ({ id, post }) => ({
    //     url: `/wishes/${id}`,
    //     method: "PUT",
    //     body: post,
    //   }),
    //   invalidatesTags: (result, error, { id }) => [{ type: "Wish", id }],
    // }),
    // deleteWish: builder.mutation({
    //   query: (id) => ({
    //     url: `/wishes/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: (result, error, id) => [{ type: "Wish", id }],
    // }),
  }),
});

export const {
  useGetWishesQuery,
  // useGetWishByIdQuery,
  useAddWishMutation,
  // useUpdateWishMutation,
  // useDeleteWishMutation,
} = wishesSlice;
