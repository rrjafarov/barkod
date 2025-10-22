// app/campaigns/[id]/page.js
import BlogDetailPage from "@/components/BlogDetailPage";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

async function getCampaignBySlug(slug) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data } = await axiosInstance.get(`/blog/${slug}`, {
      // headers: { Lang: lang.value },
      headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
      cache: "no-store",
    });
    return data;
  } catch (error) {
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
    return {};
  }
}

async function getSupportData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: home } = await axiosInstance.get(`/support`, {
      headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
      cache: "no-store",
    });
    return home;
  } catch (error) {
    throw error;
  }
}

export async function generateMetadata({ params }) {
  const campaignSlug = params.id;

  try {
    const campaignResponse = await getCampaignBySlug(campaignSlug);
    const campaign = campaignResponse?.blog_detail;
    const seo = campaignResponse?.seo || {};

    if (!campaign) {
      return {
        title: "Blog tapılmadı - Barkod Electronics",
        description: "Axtardığınız blog tapılmadı.",
      };
    }

    const canonicalUrl = `https://barkodelectronics.az/blogs/${campaignSlug}`;
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
    const campaign = campaignResponse?.blog_detail;
    const seo = campaignResponse?.seo || [];
    const otherCampaigns = campaignResponse?.other_campaigns || [];

    const supportResponse = await getSupportData();
    const supportData = supportResponse?.support || [];

    if (!campaign) {
      return <div>Campaign tapılmadı.</div>;
    }

    // 4) Digər məlumatları çək
    const t = await getTranslations();
    const categoryResponse = await getCategoryeData();
    const categoryData = categoryResponse?.categories || [];
    const settingData = categoryResponse?.setting || [];

    return (
      <div>
        <Header supportData={supportData} settingData={settingData} t={t} categoryData={categoryData} />
        <BlogDetailPage
          t={t}
          campaign={campaign}
          seo={seo}
          otherCampaigns={otherCampaigns}
        />

        <Footer supportData={supportData} settingData={settingData} t={t} />
      </div>
    );
  } catch (error) {
    return <div>Kampaniya yüklənərkən xəta baş verdi.</div>;
  }
};

export default CampaignPage;
