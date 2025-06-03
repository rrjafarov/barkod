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
      // headers: { Lang: lang.value },
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
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return home;
  } catch (error) {
    console.error("Failed to home page data", error);
    throw error;
  }
}

const HomePage = async () => {
  const homeResponse = await getHomePageData();
  const categoryResponse = await getCategoryeData();
  const categoryData = categoryResponse?.categories || [];
  const homePageDataSlider = homeResponse?.slider || [];
  const homePageDataNewProducts = homeResponse?.new_products || [];
  const homePageDataDiscountedProducts =
    homeResponse?.discounted_products || [];
  const homePageDataBestSellingProducts = homeResponse?.best_seller || [];
  const homePageDataBrands = homeResponse?.brands || [];
  const homePageDataVideo = homeResponse?.video || [];

  return (
    <div>
      <Header categoryData={categoryData} />
      <HeroSlider homePageDataSlider={homePageDataSlider} />
      <HomePageStaticInfo />
      <HomePageProductsCard
        homePageDataNewProducts={homePageDataNewProducts}
        homePageDataDiscountedProducts={homePageDataDiscountedProducts}
        homePageDataBestSellingProducts={homePageDataBestSellingProducts}
      />
      {/* <HomePageCountProduct /> */}
      <HomePageSecondaryProducts
        homePageDataBestSellingProducts={homePageDataBestSellingProducts}
      />
      <ProductsReview homePageDataVideo={homePageDataVideo} />
      <HomePageBrands homePageDataBrands={homePageDataBrands} />
      <Footer />
    </div>
  );
};

export default HomePage;
