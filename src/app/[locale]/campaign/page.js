import CampaignPage from '@/components/CampaignPage'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
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


const page =  async () => {
  const campaignResponse = await getCampaignsPageData();
  const campaignPageDataSlider = campaignResponse?.campaigns || [];
  return (
    <div>
        <Header />
        <CampaignPage campaignPageDataSlider={campaignPageDataSlider} />
        <Footer />
    </div>
  )
}

export default page