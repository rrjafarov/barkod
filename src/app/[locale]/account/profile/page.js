
import Profile from "@/components/Profile";
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

// Data artıq layout-da yüklənir
const page = async () => {
  const t = await getTranslations();

  return <Profile t={t} />;
};

export default page;
