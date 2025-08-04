import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HomePageStaticInfo from "@/components/HomePageStaticInfo";
import HeroSlider from "@/components/Slider/HeroSlider";
import HomePageBrands from "@/components/Slider/HomePageBrands";
import HomePageCountProduct from "@/components/Slider/HomePageCountProduct";
import HomePageProductsCard from "@/components/Slider/HomePageProductsCard";
import HomePageSecondaryProducts from "@/components/Slider/HomePageSecondaryProducts";
import ProductsReview from "@/components/Slider/ProductsReview";
import React from "react";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

async function getHomePageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: home } = await axiosInstance.get(`/homepage`, {
      headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
      cache: "no-store",
    });
    return home;
  } catch (error) {
    console.error("Failed to home page data", error);
    throw error;
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

async function getBrandsData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: brand } = await axiosInstance.get(`/brands`, {
      headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
      cache: "no-store",
    });
    return brand;
  } catch (error) {
    console.error("Failed to home page data", error);
    throw error;
  }
}

async function getTranslations() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const response = await axiosInstance.get("/translation-list", {
      headers: { Lang: lang?.value || "az" }, // ← YENİ ƏLAVƏ EDİLDİ
    });
    const data = response.data;

    // Array-i obyektə çevir
    const translationsObj = data.reduce((acc, item) => {
      acc[item.key] = item.value;
      return acc;
    }, {});

    return translationsObj;
  } catch (err) {
    console.log(err);
    return {}; // ← Boş obyekt qaytarırıq
  }
}

export async function generateMetadata() {
  const homePageResponse = await getHomePageData();
  const seo = homePageResponse.seo || {};
  const canonicalUrl = "https://barkodelectronics.az";
  const locale = (await cookies()).get("NEXT_LOCALE")?.value;

  return {
    title: seo.meta_title || "Barkod Electronics",
    description: seo.meta_description || "",
    openGraph: {
      title: seo.meta_title || "Barkod Electronics",
      description: seo.meta_description || "",
      url: canonicalUrl,
      site_name: "barkodelectronics.az",
      type: "website",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.meta_title || "Barkod Electronics",
      description: seo.meta_description || "",
      site: "@barkodelectronics",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}


const HomePage = async () => {
  const t = await getTranslations();
  const homeResponse = await getHomePageData();
  const categoryResponse = await getCategoryeData();
  const categoryData = categoryResponse?.categories || [];
  const settingData = categoryResponse?.setting || [];

  const brandsResponse = await getBrandsData();
  const brandData = brandsResponse?.brands || [];

  const homePageDataSlider = homeResponse?.slider || [];
  const homePageTop100 = homeResponse?.categories || [];
  const homePageDataNewProducts = homeResponse?.new_products || [];
  const homePageDataDiscountedProducts =
    homeResponse?.discounted_products || [];
  const homePageDataBestSellingProducts = homeResponse?.best_seller || [];
  const homePageDataBrands = homeResponse?.brands || [];
  const homePageDataVideo = homeResponse?.video || [];
  const campaignProducts = homeResponse?.campaign_products || [];

  return (
    <div>
      <Header settingData={settingData} t={t} categoryData={categoryData} />
      <HeroSlider homePageDataSlider={homePageDataSlider} />
      <HomePageStaticInfo t={t} />
      <HomePageProductsCard
        t={t}
        homePageDataNewProducts={homePageDataNewProducts}
        homePageDataDiscountedProducts={homePageDataDiscountedProducts}
        homePageDataBestSellingProducts={homePageDataBestSellingProducts}
      />
      <HomePageCountProduct t={t} campaignProducts ={campaignProducts} />
      <HomePageSecondaryProducts
        t={t}
        homePageTop100={homePageTop100}
        homePageDataBestSellingProducts={homePageDataBestSellingProducts}
      />
      <ProductsReview settingData={settingData} t={t} homePageDataVideo={homePageDataVideo} />
      <HomePageBrands
        t={t}
        brandData={brandData}
        homePageDataBrands={homePageDataBrands}
      />
      <Footer settingData={settingData} t={t} />
    </div>
  );
};

export default HomePage;