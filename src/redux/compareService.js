// // features/compare/compareService.js
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import Cookies from "js-cookie";

// export const compareService = createApi({
//   reducerPath: "compareService",
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
//     prepareHeaders: (headers) => {
//       const guestUUID = Cookies.get("guest_uuid");
//       if (guestUUID) {
//         headers.set("Guest-UUID", guestUUID);
//       }

//       const token = Cookies.get("token");
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }

//       const preferredLanguage = Cookies.get("NEXT_LOCALE") || "az";
//       headers.set("Lang", preferredLanguage);

//       return headers;
//     },
//   }),
//   tagTypes: ["Compare"],
//   endpoints: (builder) => ({
//     // Müqayisə siyahısını gətir
//     getCompareList: builder.query({
//       query: () => ({
//         url: "/compare",
//         method: "GET",
//       }),
//       providesTags: ["Compare"],
//     }),

//     // Məhsulu müqayisə siyahısına əlavə et
//     addToCompare: builder.mutation({
//       query: (productId) => ({
//         url: `/compare/add/${productId}`,
//         method: "POST",
//         body: { productId },
//       }),
//       invalidatesTags: ["Compare"],
//     }),

//     // Məhsulu müqayisə siyahısından sil
//     removeFromCompare: builder.mutation({
//       query: (productId) => ({
//         url: `/compare/remove/${productId}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Compare"],
//     }),

//     // Müqayisə siyahısını təmizlə
//     clearCompare: builder.mutation({
//       query: () => ({
//         url: "/compare/clear",
//         method: "POST",
//       }),
//       invalidatesTags: ["Compare"],
//     }),
//   }),
// });

// export const {
//   useGetCompareListQuery,
//   useAddToCompareMutation,
//   useRemoveFromCompareMutation,
//   useClearCompareMutation,
// } = compareService;


















// // compareService.js
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import Cookies from "js-cookie";

// export const compareService = createApi({
//   reducerPath: "compareService",
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
//     prepareHeaders: (headers) => {
//       const guestUUID = Cookies.get("guest_uuid");
//       if (guestUUID) {
//         headers.set("Guest-UUID", guestUUID);
//       }

//       const token = Cookies.get("token");
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }

//       const preferredLanguage = Cookies.get("NEXT_LOCALE") || "az";
//       headers.set("Lang", preferredLanguage);

//       return headers;
//     },
//   }),
//   tagTypes: ["Compare"],
//   endpoints: (builder) => ({
//     getCompareList: builder.query({
//       query: () => ({
//         url: "/compare",
//         method: "GET",
//       }),
//       providesTags: ["Compare"],
//     }),

//     addToCompare: builder.mutation({
//       query: (productId) => ({
//         url: `/compare/add/${productId}`,  // ✅ yalnız productId path-param kimi
//         method: "POST",
//       }),
//       invalidatesTags: ["Compare"],
//     }),

//     removeFromCompare: builder.mutation({
//       query: (productId) => ({
//         url: `/compare/remove/${productId}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Compare"],
//     }),

//     clearCompare: builder.mutation({
//       query: () => ({
//         url: "/compare/clear",
//         method: "POST",
//       }),
//       invalidatesTags: ["Compare"],
//     }),
//   }),
// });

// export const {
//   useGetCompareListQuery,
//   useAddToCompareMutation,
//   useRemoveFromCompareMutation,
//   useClearCompareMutation,
// } = compareService;

//! yuxaridaki menim askimdi





import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const compareService = createApi({
  reducerPath: "compareService",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("token");
      if (token) {
        // İstifadəçi varsa, yalnız token əlavə et
        headers.set("Authorization", `Bearer ${token}`);
      } else {
        // İstifadəçi yoxdursa, guest-uuid əlavə et
        const guestUUID = Cookies.get("guest_uuid");
        if (guestUUID) {
          headers.set("Guest-UUID", guestUUID);
        }
      }

      const preferredLanguage = Cookies.get("NEXT_LOCALE") || "az";
      headers.set("Lang", preferredLanguage);

      return headers;
    },
  }),
  tagTypes: ["Compare"],
  endpoints: (builder) => ({
    getCompareList: builder.query({
      query: () => ({
        url: "/compare",
        method: "GET",
      }),
      providesTags: (result) => [
        { type: "Compare", id: "LIST" },
        ...(result?.compare || []).map((item) => ({ type: "Compare", id: item.id })),
      ],
    }),

    addToCompare: builder.mutation({
      query: (productId) => ({
        url: `/compare/add/${productId}`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Compare", id: "LIST" }],
      // Optimistic update üçün
      async onQueryStarted(productId, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // Mutation uğurlu olduqda cache-i yenilə
          dispatch(
            compareService.util.invalidateTags([{ type: "Compare", id: "LIST" }])
          );
        } catch (error) {
          console.error("Add to compare failed:", error);
        }
      },
    }),

    removeFromCompare: builder.mutation({
      query: (productId) => ({
        url: `/compare/remove/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Compare", id: "LIST" }],
      async onQueryStarted(productId, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            compareService.util.invalidateTags([{ type: "Compare", id: "LIST" }])
          );
        } catch (error) {
          console.error("Remove from compare failed:", error);
        }
      },
    }),

    clearCompare: builder.mutation({
      query: () => ({
        url: "/compare/clear",
        method: "POST",
      }),
      invalidatesTags: [{ type: "Compare", id: "LIST" }],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            compareService.util.invalidateTags([{ type: "Compare", id: "LIST" }])
          );
        } catch (error) {
          console.error("Clear compare failed:", error);
        }
      },
    }),
  }),
});

export const {
  useGetCompareListQuery,
  useAddToCompareMutation,
  useRemoveFromCompareMutation,
  useClearCompareMutation,
} = compareService;













// ! post isleyir get islemir

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import Cookies from "js-cookie";

// export const compareService = createApi({
//   reducerPath: "compareService",
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
//     prepareHeaders: (headers) => {
//       const token = Cookies.get("token");
//       if (token) {
//         // İstifadəçi varsa, yalnız token əlavə et
//         headers.set("Authorization", `Bearer ${token}`);
//         // guest-uuid əlavə etmə
//       } else {
//         // İstifadəçi yoxdursa, guest-uuid əlavə et
//         const guestUUID = Cookies.get("guest_uuid");
//         if (guestUUID) {
//           headers.set("Guest-UUID", guestUUID);
//         }
//       }

//       const preferredLanguage = Cookies.get("NEXT_LOCALE") || "az";
//       headers.set("Lang", preferredLanguage);

//       return headers;
//     },
//   }),
//   tagTypes: ["Compare"],
//   endpoints: (builder) => ({
//     getCompareList: builder.query({
//       query: () => ({
//         url: "/compare",
//         method: "GET",
//       }),
//       providesTags: ["Compare"],
//     }),

//     addToCompare: builder.mutation({
//       query: (productId) => ({
//         url: `/compare/add/${productId}`,
//         method: "POST",
//       }),
//       invalidatesTags: ["Compare"],
//     }),

//     removeFromCompare: builder.mutation({
//       query: (productId) => ({
//         url: `/compare/remove/${productId}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Compare"],
//     }),

//     clearCompare: builder.mutation({
//       query: () => ({
//         url: "/compare/clear",
//         method: "POST",
//       }),
//       invalidatesTags: ["Compare"],
//     }),
//   }),
// });

// export const {
//   useGetCompareListQuery,
//   useAddToCompareMutation,
//   useRemoveFromCompareMutation,
//   useClearCompareMutation,
// } = compareService;

// ! post isleyir get islemir







