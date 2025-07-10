// features/compare/compareService.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const compareService = createApi({
  reducerPath: "compareService",
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
  tagTypes: ["Compare"],
  endpoints: (builder) => ({
    // Müqayisə siyahısını gətir
    getCompareList: builder.query({
      query: () => ({
        url: "/compare",
        method: "GET",
      }),
      providesTags: ["Compare"],
    }),

    // Məhsulu müqayisə siyahısına əlavə et
    addToCompare: builder.mutation({
      query: (productId) => ({
        url: `/compare/add/${productId}`,
        method: "POST",
        body: { productId },
      }),
      invalidatesTags: ["Compare"],
    }),

    // Məhsulu müqayisə siyahısından sil
    removeFromCompare: builder.mutation({
      query: (productId) => ({
        url: `/compare/remove/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Compare"],
    }),

    // Müqayisə siyahısını təmizlə
    clearCompare: builder.mutation({
      query: () => ({
        url: "/compare/clear",
        method: "POST",
      }),
      invalidatesTags: ["Compare"],
    }),
  }),
});

export const {
  useGetCompareListQuery,
  useAddToCompareMutation,
  useRemoveFromCompareMutation,
  useClearCompareMutation,
} = compareService;
