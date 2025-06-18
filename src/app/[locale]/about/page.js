import AboutPage from '@/components/AboutPage'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
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

async function getAboutPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: about } = await axiosInstance.get(`/about`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return about;
  } catch (error) {
    console.error("Failed to about page data", error);
    throw error;
  }
}

const page = async () => {
  const aboutResponse = await getAboutPageData();
  const aboutPageDataSlider = aboutResponse?.data || [];

  const categoryResponse = await getCategoryeData();
  const categoryData = categoryResponse?.categories || [];
  
  return (
    <div>
        <Header categoryData={categoryData} />
        <AboutPage aboutPageDataSlider={aboutPageDataSlider} />
        <Footer />
    </div>
  )
}

export default page