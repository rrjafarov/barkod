// import Footer from "@/components/Footer/Footer";
// import Header from "@/components/Header/Header";
// import Login from "@/components/Login";
// import React from "react";
// import { cookies } from 'next/headers';
// import axiosInstance from '@/lib/axios';

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

// const page = async () => {

//   const categoryResponse = await getCategoryeData();
//   const categoryData = categoryResponse?.categories || [];

//   return (
//     <div>
//       <Header categoryData={categoryData} />
//       <Login />
//       <Footer />
//     </div>
//   );
// };

// export default page;

// app/[locale]/auth/login/page.js

import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Login from "@/components/Login"; // unchanged import
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios"; // or "@/src/lib/axios" if that’s what you use

// async function getCategoryeData() {
//   const cookieStore = await cookies();
//   const langCookie = cookieStore.get("NEXT_LOCALE");
//   const lang = langCookie?.value;
//   try {
//     const headers = {};
//     if (lang) {
//       headers["Lang"] = lang;
//     }
//     const { data: home } = await axiosInstance.get(`/layouts`, {
//       // headers,
//       headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
//       cache: "no-store",
//     });
//     return home;
//   } catch (error) {
//     console.error("Failed to home page data", error);
//     return { categories: [] };
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

const page = async ({ params }) => {
  const categoryResponse = await getCategoryeData();
  const categoryData = categoryResponse?.categories || [];
  const settingData = categoryResponse?.setting || [];

  const t = await getTranslations();

  return (
    <div>
      <Header settingData={settingData} t={t} categoryData={categoryData} />
      <Login t={t} />
      <Footer settingData={settingData} t={t} />
    </div>
  );
};

export default page;
