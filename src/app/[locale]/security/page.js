

import AboutPage from '@/components/AboutPage'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";
import SecurePage from '@/components/Footer/SecurePage';

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
    throw error;
  }
}
async function getSupportData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: home } = await axiosInstance.get(`/support`, {
      headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
      cache: "no-store",
    });
    return home;
  } catch (error) {
    throw error;
  }
}

async function getAboutPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: about } = await axiosInstance.get(`/about`, {
      headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
      cache: "no-store",
    });
    return about;
  } catch (error) {
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
  const aboutResponse = await getAboutPageData();
  const seo = aboutResponse.seo || {};
  const canonicalUrl = "https://barkodelectronics.az/about";
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

  const aboutResponse = await getAboutPageData();
  const aboutPageDataSlider = aboutResponse?.data || [];

  const categoryResponse = await getCategoryeData();
  const categoryData = categoryResponse?.categories || [];
  const settingData = categoryResponse?.setting || [];

  const supportResponse = await getSupportData();
  const supportData = supportResponse?.support || [];

  return (
    <div>
      <Header supportData={supportData} settingData={settingData} t={t} categoryData={categoryData} />
      <SecurePage supportData={supportData} t={t} />
      <Footer supportData={supportData} settingData={settingData} t={t} />
    </div>
  )
}

export default page