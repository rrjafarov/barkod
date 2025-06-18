import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Stores from '@/components/Stores'
import React from 'react'
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

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

  const categoryResponse = await getCategoryeData();
  const categoryData = categoryResponse?.categories || [];

  return (
    <div>
        <Header categoryData={categoryData} />
        <Stores />
        <Footer />
    </div>
  )
}

export default page