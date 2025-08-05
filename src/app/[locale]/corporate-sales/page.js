// import AboutPage from '@/components/AboutPage'
// import Footer from '@/components/Footer/Footer'
// import Header from '@/components/Header/Header'
// import React from 'react'
// import { cookies } from "next/headers";
// import axiosInstance from "@/lib/axios";
// import CorporateSales from '@/components/CorporateSales';

// async function getCategoryeData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
//   try {
//     const { data: home } = await axiosInstance.get(`/layouts`, {
//       headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
//       cache: "no-store",
//     });
//     return home;
//   } catch (error) {
//     console.error("Failed to home page data", error);
//     throw error;
//   }
// }

// async function getAboutPageData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
//   try {
//     const { data: about } = await axiosInstance.get(`/support`, {
//       headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
//       cache: "no-store",
//     });
//     return about;
//   } catch (error) {
//     console.error("Failed to about page data", error);
//     throw error;
//   }
// }

// async function getTranslations() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
  
//   try {
//     const response = await axiosInstance.get("/translation-list", {
//       headers: { Lang: lang?.value || "az" }, // ← YENİ ƏLAVƏ EDİLDİ
//     });
//     const data = response.data;

//     // Array-i obyektə çevir
//     const translationsObj = data.reduce((acc, item) => {
//       acc[item.key] = item.value;
//       return acc;
//     }, {});

//     return translationsObj;
//   } catch (err) {
//     console.log(err);
//     return {}; // ← Boş obyekt qaytarırıq
//   }
// }

// export async function generateMetadata() {
//   const aboutResponse = await getAboutPageData();
//   const seo = aboutResponse.seo || {};
//   const canonicalUrl = "https://barkodelectronics.az/about";
//   const locale = (await cookies()).get("NEXT_LOCALE")?.value;
//   return {
//     title: seo.meta_title || "Barkod Electronics",
//     description: seo.meta_description || "",
//     openGraph: {
//       title: seo.meta_title || "Barkod Electronics",
//       description: seo.meta_description || "",
//       url: canonicalUrl,
//       site_name: "barkodelectronics.az",
//       type: "website",
//       locale,
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: seo.meta_title || "Barkod Electronics",
//       description: seo.meta_description || "",
//       site: "@barkodelectronics",
//     },
//     alternates: {
//       canonical: canonicalUrl,
//     },
//   };
// }



// const page = async () => {
//   const t = await getTranslations();

//   const aboutResponse = await getAboutPageData();
//   const aboutPageDataSlider = aboutResponse?.data || [];

//   const categoryResponse = await getCategoryeData();
//   const categoryData = categoryResponse?.categories || [];
//   const settingData = categoryResponse?.setting || [];

//   return (
//     <div>
//       <Header settingData={settingData} t={t} categoryData={categoryData} />
//       <CorporateSales settingData={settingData} t={t} aboutPageDataSlider={aboutPageDataSlider} />
//       <Footer settingData={settingData} t={t} />
//     </div>
//   )
// }

// export default page

















// app/[locale]/corporate-sales/page.jsx
import React from 'react'
import { cookies } from 'next/headers'
import axiosInstance from '@/lib/axios'

import Header from '@/components/Header/Header'
import CorporateSales from '@/components/CorporateSales'
import Footer from '@/components/Footer/Footer'

// API çağırışlarını async funksiyalar şəklində edin
async function getCategoryData() {
  const cookieStore = await cookies()
  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'az'
  const { data } = await axiosInstance.get('/layouts', {
    headers: { Lang: lang },
    cache: 'no-store',
  })
  return data
}

async function getAboutPageData() {
  const cookieStore = await cookies()
  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'az'
  const { data } = await axiosInstance.get('/support', {
    headers: { Lang: lang },
    cache: 'no-store',
  })
  return data
}

async function getTranslations() {
  const cookieStore = await cookies()
  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'az'
  const response = await axiosInstance.get('/translation-list', {
    headers: { Lang: lang },
  })
  return response.data.reduce((acc, item) => {
    acc[item.key] = item.value
    return acc
  }, {})
}

// SEO metadata (opsional)
export async function generateMetadata() {
  const about = await getAboutPageData()
  const seo = about.seo || {}
  const locale = (await cookies()).get('NEXT_LOCALE')?.value
  return {
    title: seo.meta_title || 'Barkod Electronics',
    description: seo.meta_description || '',
    openGraph: {
      title: seo.meta_title || 'Barkod Electronics',
      description: seo.meta_description || '',
      url: 'https://barkodelectronics.az/corporate-sales',
      site_name: 'barkodelectronics.az',
      type: 'website',
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.meta_title || 'Barkod Electronics',
      description: seo.meta_description || '',
      site: '@barkodelectronics',
    },
  }
}

// Default olaraq async komponenti ixrac edirik
export default async function CorporateSalesPage() {
  const t = await getTranslations()
  const aboutData = await getAboutPageData()
  // API-dən gələn support massivindən ilk element
  const supportItem = (aboutData.support && aboutData.support[0]) || {}

  const layoutData = await getCategoryData()
  const categoryData = layoutData.categories || []
  const settingData = layoutData.setting || []

  return (
    <>
      <Header settingData={settingData} t={t} categoryData={categoryData} />
      <CorporateSales
        settingData={settingData}
        t={t}
        aboutPageDataSlider={supportItem}
      />
      <Footer settingData={settingData} t={t} />
    </>
  )
}
