import { createApi } from "@reduxjs/toolkit/query/react";
import axiosInstance from "@/lib/axios";
import Cookies from "js-cookie";

const lang = Cookies.get("NEXT_LOCALE") || "az";

const axiosBaseQuery =
  () =>
  async ({ url, method, data, params }) => {
    try {
      const token = localStorage.getItem("token");
      const result = await axiosInstance({
        url: url,
        method,
        data,
        params,
        headers: {
          Authorization: `Bearer ${token}`,
          Lang: lang,
        },
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

const api = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "baharstore.az",
  endpoints: () => ({}),
  tagTypes: ["Wishlist", "Cart"],
});

export default api;