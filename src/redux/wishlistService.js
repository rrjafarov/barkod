import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const wishlistService = createApi({
  reducerPath: "wishlistService",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      const guestUUID = Cookies.get("guest_uuid");
      if (guestUUID) {
        headers.set("Guest-UUID", guestUUID);
      }

      const token = Cookies.get("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      const preferredLanguage = Cookies.get("NEXT_LOCALE") || "az";
      headers.set("Lang", preferredLanguage);

      return headers;
    },
  }),
  tagTypes: ["Fav"],
  endpoints: (builder) => ({
    getFav: builder.query({
      query: () => ({
        url: "/wishlist",
        method: "GET",
      }),
      providesTags: ["Fav"],
    }),
    addToFav: builder.mutation({
      query: (productId) => ({
        url: `/add-to-wishlist/${productId}`,
        method: "POST",
        body: { productId },
      }),
      invalidatesTags: ["Fav"],
    }),
    removeFromFav: builder.mutation({
      query: (productId) => ({
        url: `/delete-from-wishlist/${productId}`,
        method: "POST",
        body: { productId },
      }),
      invalidatesTags: ["Fav"],
    }),
  }),
});

export const { useGetFavQuery, useAddToFavMutation, useRemoveFromFavMutation } =
  wishlistService;
