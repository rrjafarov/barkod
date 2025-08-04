import Checkout from "@/components/Checkout";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";



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

async function getDeliveryRegions() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: home } = await axiosInstance.get(`/delivery-regions`, {
      headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI

      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return home;
  } catch (error) {
    console.error("Failed to home page data", error);
    throw error;
  }
}

async function getCategoryeData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: home } = await axiosInstance.get(`/layouts`, {
      headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI

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

  const settingData = categoryResponse?.setting || [];

  const deliveryRegionResponse = await getDeliveryRegions();
  const deliveryData = deliveryRegionResponse?.data || [];
  console.log(deliveryData);

  return (
    <div>
      <Header settingData={settingData} t={t} categoryData={categoryData} />
      <Checkout t={t} deliveryData={deliveryData} />
      <Footer settingData={settingData} t={t} />
    </div>
  );
};

export default page;
