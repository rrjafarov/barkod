import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const userService = createApi({
  reducerPath: "userService",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const guestUUID = Cookies.get("guest_uuid");
      if (guestUUID) {
        headers.set("Guest-UUID", guestUUID);
      }

      const token = Cookies.get("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      // Get the preferred language from Redux state
      const preferredLanguage = Cookies.get("NEXT_LOCALE") || "az";
      headers.set("Lang", preferredLanguage);

      return headers;
    },
  }),
  tagTypes: ["User", "UserAddress"],
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => ({ url: "/user-info", method: "GET" }),
      providesTags: ["User"],
    }),
    updateUserInfo: builder.mutation({
      query: (data) => ({
        url: "/user-info-update",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: "/user-password-update",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    getOrderList: builder.query({
      query: () => ({ url: "/user-orders", method: "GET" }),
    }),
    getAddressList: builder.query({
      query: () => ({ url: "/user-adress", method: "GET" }),
      providesTags: ["UserAddress"],
    }),
    addAddress: builder.mutation({
      query: (data) => ({
        url: "/user-add-address",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["UserAddress"],
    }),
    updateAddress: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user-update-address/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["UserAddress"],
    }),
    selectPrimaryAddress: builder.mutation({
      query: (id) => ({
        url: `/user-select-main-address/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["UserAddress"],
    }),
    deleteAddressList: builder.mutation({
      query: (id) => ({
        url: `/user-delete-address/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["UserAddress"],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
  useUpdatePasswordMutation,
  useGetOrderListQuery,
  useGetAddressListQuery,
  useAddAddressMutation,
  useUpdateAddressMutation,
  useSelectPrimaryAddressMutation,
  useDeleteAddressListMutation,
} = userService;