import CampaignPage from "@/components/CampaignPage";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

async function getCampaignsPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: campaign } = await axiosInstance.get(`/campaigns`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return campaign;
  } catch (error) {
    console.error("Failed to campaign page data", error);
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

async function getTranslations() {
  try {
    const response = await axiosInstance.get("/translation-list");
    const data = response.data;

    // Array-i obyektə çevir
    const translationsObj = data.reduce((acc, item) => {
      acc[item.key] = item.value;
      return acc;
    }, {});

    return translationsObj;
  } catch (err) {
    console.log(err);
  }
}

export async function generateMetadata() {
  const campaignResponse = await getCampaignsPageData();
  const seo = campaignResponse.seo || {};
  const canonicalUrl = "https://barkodelectronics.az/campaign";
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

  const campaignResponse = await getCampaignsPageData();
  const campaignPageDataSlider = campaignResponse?.campaigns || [];
  const categoryResponse = await getCategoryeData();
  const categoryData = categoryResponse?.categories || [];

  return (
    <div>
      <Header t={t} categoryData={categoryData} />
      <CampaignPage t={t} campaignPageDataSlider={campaignPageDataSlider} />
      <Footer t={t} />
    </div>
  );
};

export default page;
