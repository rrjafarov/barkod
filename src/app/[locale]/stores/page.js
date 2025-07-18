import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Stores from "@/components/Stores";
import React from "react";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

async function getCategoryData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value;
  try {
    const { data: home } = await axiosInstance.get(`/layouts`, {
      headers: { Lang: lang },
      cache: "no-store",
    });
    return home;
  } catch (error) {
    console.error("Failed to fetch home page data", error);
    throw error;
  }
}

// async function getTranslations() {
//   try {
//     const response = await axiosInstance.get("/translation-list");
//     const data = response.data;
//     return data.reduce((acc, item) => {
//       acc[item.key] = item.value;
//       return acc;
//     }, {});
//   } catch (err) {
//     console.error("Failed to fetch translations", err);
//     throw err;
//   }
// }


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

async function getBranchesData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value;
  try {
    const { data: branchesResponse } = await axiosInstance.get(`/branches`, {
      headers: { Lang: lang },
      cache: "no-store",
    });
    return branchesResponse;
  } catch (error) {
    console.error("Failed to fetch branches data", error);
    throw error;
  }
}

export async function generateMetadata() {
  const branchesResponse = await getBranchesData();
  const seo = branchesResponse.seo || {};
  const canonicalUrl = "https://barkodelectronics.az/stores";
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

const Page = async () => {
  const t = await getTranslations();
  const categoryResp = await getCategoryData();
  const categoryData = categoryResp?.categories || [];
  const settingData = categoryResp?.setting || [];

  const branchesResponse = await getBranchesData();
  const branchesData = branchesResponse?.branches || [];

  return (
    <div>
      <Header settingData={settingData} t={t} categoryData={categoryData} />
      <Stores branchesData={branchesData} t={t} />
      <Footer settingData={settingData} t={t} />
    </div>
  );
};

export default Page;
