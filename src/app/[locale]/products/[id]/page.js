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
      const { data } = await axiosInstance.get(`/product/${slug}`, {
        headers: { Lang: lang },
        cache: "no-store",
      });
      return data.product || data.data || data;
    } catch (err) {
      console.error("Failed to fetch product detail:", err);
      return null;
    }
  }

  async function getCategoryeData() {
    const cookieStore = await cookies();
    const lang = cookieStore.get("NEXT_LOCALE");
    try {
      const { data: home } = await axiosInstance.get(`/layouts`, {
        // headers: { Lang: lang.value },
        cache: "no-store",
      });
      return home;
    } catch (error) {
      console.error("Failed to home page data", error);
      throw error;
    }
  }

  async function getTranslations(lang) {
    try {
      const { data } = await axiosInstance.get("/translation-list", {
        headers: { Lang: lang },
        cache: "no-store",
      });
      return data.reduce((acc, item) => {
        acc[item.key] = item.value;
        return acc;
      }, {});
    } catch (err) {
      console.error("Failed to fetch translations:", err);
      return {};
    }
  }
  
  const t = await getTranslations(lang);

  const categoryResponse = await getCategoryeData();
  const categoryData = categoryResponse?.categories || [];

  const product = await getProductDetail(slugOrId);
  // console.log("Product detail:", product);

  return (
    <>
      <Header t={t} categoryData={categoryData} />
      <ProductsDetailPage product={product} />
      <Footer t={t} />
    </>
  );
}
