// import Footer from '@/components/Footer/Footer'
// import Header from '@/components/Header/Header'
// import Profile from '@/components/Profile'
// // import Stores from '@/components/Stores'
// import React from 'react'
// import { cookies } from "next/headers";
// import axiosInstance from "@/lib/axios";  

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
//       cache: "no-store",
//       headers,
//     });
//     return home;
//   } catch (error) {
//     console.error("Failed to home page data", error);
//     return { categories: [] };
//   }
// }

// const page = async () => {
//   const categoryResponse = await getCategoryeData();
//   const categoryData = categoryResponse?.categories || [];
//   return (
//     <div>
//         <Header categoryData={categoryData} />
//         <Profile />
//         <Footer />
//     </div>
//   )
// }

// export default page





import Profile from '@/components/Profile'
import React from 'react'

// Data artıq layout-da yüklənir
const page = async () => {
  return <Profile />
}

export default page