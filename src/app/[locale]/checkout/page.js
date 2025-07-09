// import Checkout from '@/components/Checkout'
// import Footer from '@/components/Footer/Footer'
// import Header from '@/components/Header/Header'
// import React from 'react'
// import { cookies } from "next/headers";
// import axiosInstance from "@/lib/axios";

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

// const page =  async() => {
//   const t = await getTranslations();
//   const categoryResponse = await getCategoryeData();
//   const categoryData = categoryResponse?.categories || [];
//   return (
//     <div>
//         <Header t={t} categoryData={categoryData} />
//         <Checkout />
//         <Footer t={t} />
//     </div>
//   )
// }

// export default page


//! Bu en dogrun dur funsiyasiz












import Checkout from '@/components/Checkout'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

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

const page = async () => {
  const t = await getTranslations();
  const categoryResponse = await getCategoryeData();
  const categoryData = categoryResponse?.categories || [];
  return (
    <div>
      <Header t={t} categoryData={categoryData} />
      <Checkout />
      <Footer t={t} />
    </div>
  );
};

export default page;
