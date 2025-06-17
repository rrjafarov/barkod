
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductsDetailPage from "@/components/ProductsDetailPage";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

export default async function Page({ params }) {
  const fullSlug = params.id;
  const slugOrId = fullSlug;

  const cookieStore = cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE");
  const lang = localeCookie?.value || "az";

  async function getProductDetail(slug) {
    try {
      const { data } = await axiosInstance.get(
        `/product/${slug}`,
        {
          headers: { Lang: lang },
          cache: "no-store",
        }
      );
      return data.product || data.data || data;
    } catch (err) {
      console.error("Failed to fetch product detail:", err);
      return null;
    }
  }

  const product = await getProductDetail(slugOrId);
  console.log("Product detail:", product);



  return (
    <>
      <Header  />
      <ProductsDetailPage product={product} />
      <Footer />
    </>
  );
}
