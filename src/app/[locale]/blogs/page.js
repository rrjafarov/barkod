import CampaignPage from "@/components/CampaignPage";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";
import BlogPage from "@/components/BlogPage";

async function getBlogsPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: blog } = await axiosInstance.get(`/blog`, {
      // headers: { Lang: lang.value },
      headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI

      cache: "no-store",
    });
    return blog;
  } catch (error) {
    console.error("Failed to blog page data", error);
    throw error;
  }
}

async function getCategoryeData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: home } = await axiosInstance.get(`/layouts`, {
      // headers: { Lang: lang.value },
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

export async function generateMetadata() {
  const blogResponse = await getBlogsPageData();

  const seo = blogResponse.seo || {};
  const canonicalUrl = "https://barkodelectronics.az/blogs";
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

const page = async () => {
  const t = await getTranslations();

  const blogResponse = await getBlogsPageData();
  const blogResponseData = blogResponse?.data.blogs || [];


  const categoryResponse = await getCategoryeData();
  const categoryData = categoryResponse?.categories || [];
  const settingData = categoryResponse?.setting || [];

  return (
    <div>
      <Header settingData={settingData} t={t} categoryData={categoryData} />
      {/* <CampaignPage t={t} campaignPageDataSlider={campaignPageDataSlider} /> */}
      <BlogPage t={t} blogResponseData={blogResponseData} />
      <Footer settingData={settingData} t={t} />
    </div>
  );
};

export default page;
