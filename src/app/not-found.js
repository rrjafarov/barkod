import React from "react";
import "./[locale]/globals.scss";
import NotFound from "@/components/NotFound";
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


const notfound = async () => {
  const t = await getTranslations();

  return (
    <html>
      <body>
        <NotFound t={t} />
      </body>
    </html>
  );
};

export default notfound;
