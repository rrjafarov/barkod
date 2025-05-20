

import { getRequestConfig } from "next-intl/server";
import axiosInstance from "@/api/axios";
import { routing } from "./routing";
import { cookies } from "next/headers";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = requestLocale;

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value || locale;

  try {
    const response = await axiosInstance.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/translation-list`,
      {
        headers: {
          Lang: language,
        },
      }
    );

    const messages = response.data || {};

    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error("Failed to load translations:", error);
    return {
      locale,
      messages: {},
    };
  }
});