// import React from "react";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
// import ProductsDetailPage from "@/components/ProductsDetailPage";
// import { cookies } from "next/headers";
// import axiosInstance from "@/lib/axios";


// export default async function Page({ params }) {
//   const fullSlug = params.id;
//   const slugOrId = fullSlug;

//   const cookieStore = await cookies();
//   const localeCookie = cookieStore.get("NEXT_LOCALE");
//   const lang = localeCookie?.value || "az";

//   async function getProductDetail(slug) {
//     try {
//       const { data } = await axiosInstance.get(`/product/${slug}`, {
//         headers: { Lang: lang },
//         cache: "no-store",
//       });
//       return data.product || data.data || data;
//     } catch (err) {
//       console.error("Failed to fetch product detail:", err);
//       return null;
//     }
//   }

//   async function getCategoryeData() {
//     const cookieStore = await cookies();
//     const lang = cookieStore.get("NEXT_LOCALE");
//     try {
//       const { data: home } = await axiosInstance.get(`/layouts`, {
//         headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
//         cache: "no-store",
//       });
//       return home;
//     } catch (error) {
//       console.error("Failed to home page data", error);
//       throw error;
//     }
//   }

//   async function getTranslations() {
//     const cookieStore = await cookies();
//     const lang = cookieStore.get("NEXT_LOCALE");
    
//     try {
//       const { data } = await axiosInstance.get("/translation-list", {
//         headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
//         cache: "no-store",
//       });
//       return data.reduce((acc, item) => {
//         acc[item.key] = item.value;
//         return acc;
//       }, {});
//     } catch (err) {
//       console.error("Failed to fetch translations:", err);
//       return {};
//     }
//   }
  
//   const t = await getTranslations();

//   const categoryResponse = await getCategoryeData();
//   const categoryData = categoryResponse?.categories || [];
//   const settingData = categoryResponse?.setting || {};

//   const product = await getProductDetail(slugOrId);
//   console.log(product ," seo generateMetaData")


//   return (
//     <>
//       <Header settingData={settingData} t={t} categoryData={categoryData} />
//       <ProductsDetailPage t={t} product={product} />
//       <Footer settingData={settingData} t={t} />
//     </>
//   );
// }










import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductsDetailPage from "@/components/ProductsDetailPage";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

export async function generateMetadata({ params }) {
  const fullSlug = params.id;
  const slugOrId = fullSlug;

  const cookieStore = await cookies();
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

  const product = await getProductDetail(slugOrId);
  const seo = product?.seo || {};
  const productDetail = product?.product_detail || {};
  
  const canonicalUrl = `https://barkodelectronics.az/product/${slugOrId}`;
  const locale = lang;

  return {
    title: seo.meta_title || productDetail.name || "Barkod Electronics",
    description: seo.meta_description || productDetail.description || "",
    openGraph: {
      title: seo.meta_title || productDetail.name || "Barkod Electronics",
      description: seo.meta_description || productDetail.description || "",
      url: canonicalUrl,
      site_name: "barkodelectronics.az",
      type: "website",
      locale,
      images: productDetail.images?.length > 0 ? [
        {
          url: productDetail.images[0].img_url,
          width: 800,
          height: 600,
          alt: productDetail.name || seo.title,
        }
      ] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.meta_title || productDetail.name || "Barkod Electronics",
      description: seo.meta_description || productDetail.description || "",
      site: "@barkodelectronics",
      images: productDetail.images?.length > 0 ? [productDetail.images[0].img_url] : undefined,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function Page({ params }) {
  const fullSlug = params.id;
  const slugOrId = fullSlug;

  const cookieStore = await cookies();
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
        headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
        cache: "no-store",
      });
      return home;
    } catch (error) {
      console.error("Failed to home page data", error);
      throw error;
    }
  }

  async function getTranslations() {
    const cookieStore = await cookies();
    const lang = cookieStore.get("NEXT_LOCALE");
    
    try {
      const { data } = await axiosInstance.get("/translation-list", {
        headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
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
  
  const t = await getTranslations();

  const categoryResponse = await getCategoryeData();
  const categoryData = categoryResponse?.categories || [];
  const settingData = categoryResponse?.setting || {};

  const product = await getProductDetail(slugOrId);
  console.log(product ," seo generateMetaData")

  return (
    <>
      <Header settingData={settingData} t={t} categoryData={categoryData} />
      <ProductsDetailPage t={t} product={product} />
      <Footer settingData={settingData} t={t} />
    </>
  );
}
