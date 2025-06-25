import api from "./api";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const arrayToQueryString = (arr) => {
  let queryString = "";
  arr.forEach((value, index) => {
    const paramName = `array_prod_id[]`;
    queryString += `${paramName}=${encodeURIComponent(value)}`;
    if (index !== arr.length - 1) {
      queryString += "&";
    }
  });
  return queryString;
};

const pageService = api.injectEndpoints({
  endpoints: (build) => ({
    getHomePage: build.query({
      query: () => ({
        url: "/homepage",
        method: "GET",
      }),
    }),
    getContactPage: build.query({
      query: () => ({
        url: "/contact",
        method: "GET",
      }),
    }),
    getAboutPage: build.query({
      query: () => ({
        url: "/about",
        method: "GET",
      }),
    }),
    getBlogsPage: build.query({
      query: () => ({
        url: `/blog`,
        method: "GET",
      }),
    }),
    getVideoPage: build.query({
      query: () => ({
        url: "/video",
        method: "GET",
      }),
    }),
    getSingleBlog: build.query({
      query: (slug) => ({
        url: `/blog/${slug}`,
        method: "GET",
      }),
    }),
    getSingleProduct: build.query({
      query: (slug) => {
        return {
          url: `/product/${slug}`,
          method: "GET",
        };
      },
    }),
    getBrandsPage: build.query({
      query: () => ({
        url: "/brands",
        method: "GET",
      }),
    }),
    getSupportPage: build.query({
      query: () => ({
        url: "/supports",
        method: "GET",
      }),
    }),
    getStoresPage: build.query({
      query: () => ({
        url: "/stores",
        method: "GET",
      }),
    }),
    getProductsPage: build.query({
      query: (queries) => {
        const product_ids = localStorage.getItem("product_ids")
          ? JSON.parse(localStorage.getItem("product_ids"))
          : [];

        let url = `/product-list?${queries}`;

        if (product_ids.length > 0 && queries.includes("isArrayProd=true")) {
          url = url + `&${arrayToQueryString(product_ids)}`;
        }
        url = url.replace("isArrayProd=true", "");

        return {
          url,
          method: "GET",
        };
      },
      keepUnusedDataFor: 0,
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        // exclude page from query
        const { page, ...rest } = queryArgs;
        return `${endpointName}`;
      },
      merge: (currentCache, newItems, otherArgs) => {
        currentCache.products.data.push(...newItems.products.data);
      },
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
    }),
    getCampaignsPage: build.query({
      query: () => ({
        url: "/campaigns",
        method: "GET",
      }),
    }),
    getSingleCampaignPage: build.query({
      query: (id) => ({
        url: `/campaign/${id}`,
        method: "GET",
      }),
    }),
    smartSearch: build.query({
      query: (params) => {
        const queries = new URLSearchParams(params);
        return {
          url: `/smart-search?${queries}`,
          method: "GET",
        };
      },
    }),
    pageLayout: build.query({
      query: () => ({
        url: "/layouts",
        method: "GET",
        headers: {
          Lang: "az",
        },
      }),
    }),
    contactSubmit: build.mutation({
      query: (body) => ({
        url: "/contact-post",
        method: "POST",
        data: body,
      }),
    }),
    getInstallmentCarts: build.query({
      query: () => ({
        url: "/taksit-cards",
        method: "GET",
      }),
    }),
    getSitemapXml: build.query({
      query: () => ({
        url: "/sitemap.xml",
        method: "GET",
      }),
    }),
    getInstallmentCards: build.query({
      query: () => ({
        url: "/taksit-cards/bircard",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetHomePageQuery,
  useGetContactPageQuery,
  usePageLayoutQuery,
  useGetAboutPageQuery,
  useGetBlogsPageQuery,
  useGetVideoPageQuery,
  useGetSupportPageQuery,
  useGetSingleBlogQuery,
  useGetSingleProductQuery,
  useGetBrandsPageQuery,
  useGetProductsPageQuery,
  useGetCampaignsPageQuery,
  useGetSingleCampaignPageQuery,
  useContactSubmitMutation,
  useSmartSearchQuery,
  useGetInstallmentCartsQuery,
  useGetSitemapXmlQuery,
  useGetInstallmentCardsQuery,
  useGetStoresPageQuery,
} = pageService;