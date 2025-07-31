// app/campaigns/[id]/page.js
import CampaignDetailPage from "@/components/CampaignDetailPage";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

async function getCampaignBySlug(slug) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data } = await axiosInstance.get(`/campaign/${slug}`, {
      // headers: { Lang: lang.value },
      headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
      cache: "no-store",
    });
    return data;
  } catch (error) {
    console.error("Failed to get campaign by slug", error);
    throw error;
  }
}

async function getCategoryeData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: home } = await axiosInstance.get(`/layouts`, {
      // headers: { Lang: lang.value },
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

export async function generateMetadata({ params }) {
  const campaignSlug = params.id;

  try {
    const campaignResponse = await getCampaignBySlug(campaignSlug);
    const campaign = campaignResponse?.campaign;
    const seo = campaignResponse?.seo || {};

    if (!campaign) {
      return {
        title: "Kampaniya tapılmadı - Barkod Electronics",
        description: "Axtardığınız kampaniya tapılmadı.",
      };
    }

    const canonicalUrl = `https://barkodelectronics.az/campaigns/${campaignSlug}`;
    const locale = (await cookies()).get("NEXT_LOCALE")?.value;

    return {
      title: seo.meta_title || campaign.title || "Barkod Electronics",
      description: seo.meta_description || campaign.title || "",
      openGraph: {
        title: seo.meta_title || campaign.title || "Barkod Electronics",
        description: seo.meta_description || campaign.title || "",
        url: canonicalUrl,
        site_name: "barkodelectronics.az",
        type: "website",
        locale,
        images: campaign.img_url
          ? [
              {
                url: campaign.img_url,
                width: 1200,
                height: 630,
                alt: campaign.title,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: seo.meta_title || campaign.title || "Barkod Electronics",
        description: seo.meta_description || campaign.title || "",
        site: "@barkodelectronics",
        images: campaign.img_url ? [campaign.img_url] : [],
      },
      alternates: {
        canonical: canonicalUrl,
      },
    };
  } catch (error) {
    console.error("Metadata generation error:", error);
    return {
      title: "Barkod Electronics",
      description: "Kampaniya məlumatları yüklənərkən xəta baş verdi.",
    };
  }
}

const CampaignPage = async ({ params }) => {
  // 1) URL'den gelen param: "harda-olsan-gelerik-teki-sen-sesle-bizi-1"
  const campaignSlug = params.id;

  try {
    // 2) Slug ilə kampanyanı çək
    const campaignResponse = await getCampaignBySlug(campaignSlug);

    // 3) API cavabından məlumatları ayır
    const campaign = campaignResponse?.campaign;
    const seo = campaignResponse?.seo || [];
    const otherCampaigns = campaignResponse?.other_campaigns || [];

    if (!campaign) {
      return <div>Kampaniya tapılmadı.</div>;
    }

    // 4) Digər məlumatları çək
    const t = await getTranslations();
    const categoryResponse = await getCategoryeData();
    const categoryData = categoryResponse?.categories || [];
    const settingData = categoryResponse?.setting || [];

    return (
      <div>
        <Header settingData={settingData} t={t} categoryData={categoryData} />
        <CampaignDetailPage
          t={t}
          campaign={campaign}
          seo={seo}
          otherCampaigns={otherCampaigns}
        />
        <Footer settingData={settingData} t={t} />
      </div>
    );
  } catch (error) {
    console.error("Campaign page error:", error);
    return <div>Kampaniya yüklənərkən xəta baş verdi.</div>;
  }
};

export default CampaignPage;
