// import CampaignDetailPage from "@/components/CampaignDetailPage";
// import Footer from "@/components/Footer/Footer";
// import Header from "@/components/Header/Header";
// import React from "react";
// import { cookies } from "next/headers";
// import axiosInstance from "@/lib/axios";

// async function getCampaignsPageData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
//   try {
//     const { data: campaign } = await axiosInstance.get(`/campaigns`, {
//       // headers: { Lang: lang.value },
//       cache: "no-store",
//     });
//     return campaign;
//   } catch (error) {
//     console.error("Failed to campaign page data", error);
//     throw error;
//   }
// }

// const page = async () => {
//   const campaignResponse = await getCampaignsPageData();
//   const campaignPageDataSlider = campaignResponse?.campaigns || [];
//   return (
//     <div>
//       <Header />
//       <CampaignDetailPage />
//       <Footer />
//     </div>
//   );
// };

// export default page;












// app/campaigns/[id]/page.js
import CampaignDetailPage from "@/components/CampaignDetailPage";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

async function getCampaignsPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: campaign } = await axiosInstance.get(`/campaigns`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return campaign;
  } catch (error) {
    console.error("Failed to campaign page data", error);
    throw error;
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

const CampaignPage = async ({ params }) => {
  // 1) URL’den gelen param: "some-title-123" veya direkt "123"
  const rawId = params.id;
  // 2) En sondaki parçayı alıyoruz
  const campaignId = rawId.includes("-")
    ? rawId.split("-").pop()
    : rawId;

  // 3) Tüm kampanyaları çek
  const campaignResponse = await getCampaignsPageData();
  const campaigns = campaignResponse?.campaigns || [];
  const t = await getTranslations();
  const categoryResponse = await getCategoryeData();
  const categoryData = categoryResponse?.categories || [];

  // 4) Ayıklanan ID ile eşleşeni bul
  const campaign = campaigns.find(
    (c) => c.id.toString() === campaignId
  );

  if (!campaign) {
    return <div>Kampaniya tapılmadı.</div>;
  }

  return (
    <div>
      <Header t={t} categoryData={categoryData} />
      {/* Doğru kampanya objesini prop olarak veriyoruz */}
      <CampaignDetailPage campaign={campaign} />
      <Footer t={t} />
    </div>
  );
};

export default CampaignPage;
