// import Footer from '@/components/Footer/Footer'
// import Header from '@/components/Header/Header'
// import Stores from '@/components/Stores'
// import React from 'react'
// import { cookies } from "next/headers";
// import axiosInstance from "@/lib/axios";

// async function getCategoryeData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
//   try {
//     const { data: home } = await axiosInstance.get(`/layouts`, {
//       // headers: { Lang: lang.value },
//       cache: "no-store",
//     });
//     return home;
//   } catch (error) {
//     console.error("Failed to home page data", error);
//     throw error;
//   }
// }
// async function getTranslations() {
//   try {
//     const response = await axiosInstance.get("/translation-list");
//     const data = response.data;

//     // Array-i obyektə çevir
//     const translationsObj = data.reduce((acc, item) => {
//       acc[item.key] = item.value;
//       return acc;
//     }, {});

//     return translationsObj;
//   } catch (err) {
//     console.log(err);
//   }
// }
// async function getBranchsData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
//   try {
//     const { data: branches } = await axiosInstance.get(`/branches`, {
//       // headers: { Lang: lang.value },
//       cache: "no-store",
//     });
//     return branches;
//   } catch (error) {
//     console.error("Failed to branches page data", error);
//     throw error;
//   }
// }









// export async function generateMetadata({ searchParams }) {
//   const seo = await getBranchsData();
//   const imageUrl = seo?.seo?.data.og_image;
//   const imageAlt = seo?.seo?.data.meta_title || " Barkod Elec";
//   const canonicalUrl = "https://barkodelectronics.az/stores";
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
//   return {
//     title: seo?.data.meta_title,
//     description: seo?.data.meta_description,
//     openGraph: {
//       title: seo?.data.meta_title || "Barkod Electronics",
//       description: seo?.data.meta_description,
//       url: canonicalUrl,
//       images: [
//         imageUrl
//           ? {
//               url: `https://admin.adentta.az/storage${imageUrl}`,
//               alt: imageAlt,
//               width: 1200,
//               height: 630,
//             }
//           : null,
//       ].filter(Boolean),
//       site_name: "barkodelectronics.az",
//       type: "website",
//       locale: lang?.value,
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: seo?.data.meta_title || "Barkod Electronics",
//       description: seo?.data.meta_description || "Barkod Electronics",
//       creator: "@barkodelectronics",
//       site: "@barkodelectronics",
//       images: imageUrl ? [imageUrl] : [],
//     },
//     alternates: {
//       canonical: canonicalUrl,
//     },
//   };
// }




// const page = async () => {
//   const t = await getTranslations();

//   const categoryResponse = await getCategoryeData();
//   const categoryData = categoryResponse?.categories || [];
  
//   const branchesResponse = await getBranchsData();
//   const branchesData = branchesResponse?.branches || [];
//   const branchesSeoData = branchesResponse?.seo || [];
//   console.log(branchesSeoData , "edededededede")


//   return (
//     <div>
//         <Header t={t} categoryData={categoryData} />
//         <Stores branchesData={branchesData} t={t} />
//         <Footer t={t} />
//     </div>
//   )
// }

// export default page



























import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Stores from '@/components/Stores'
import React from 'react'
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

async function getTranslations() {
  try {
    const response = await axiosInstance.get("/translation-list");
    const data = response.data;
    return data.reduce((acc, item) => {
      acc[item.key] = item.value;
      return acc;
    }, {});
  } catch (err) {
    console.error("Failed to fetch translations", err);
    throw err;
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

  const branchesResponse = await getBranchesData();
  const branchesData = branchesResponse?.branches || [];

  return (
    <div>
      <Header t={t} categoryData={categoryData} />
      <Stores branchesData={branchesData} t={t} />
      <Footer t={t} />
    </div>
  );
};

export default Page;
