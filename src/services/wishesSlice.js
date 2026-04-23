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
        "AKfycbwinRt4xI5IlyMyZ4XMk25ZEwt3BUsOdfKR082JXC4lfFAKq-HRah42opSwPNtTE-8p0Q/exec",
      providesTags: ["Wish"],
    }),
    // getWishById: builder.query({
    //   query: (id) => `/wishes/${id}`,
    //   providesTags: (result, error, id) => [{ type: "Wish", id }],
    // }),
    addWish: builder.mutation({
      query: (newWish) => ({
        url: "/AKfycbwinRt4xI5IlyMyZ4XMk25ZEwt3BUsOdfKR082JXC4lfFAKq-HRah42opSwPNtTE-8p0Q/exec",
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
