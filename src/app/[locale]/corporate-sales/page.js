// app/[locale]/corporate-sales/page.jsx
import React from 'react'
import { cookies } from 'next/headers'
import axiosInstance from '@/lib/axios'

import Header from '@/components/Header/Header'
import CorporateSales from '@/components/CorporateSales'
import Footer from '@/components/Footer/Footer'

// API çağırışlarını async funksiyalar şəklində edin
async function getCategoryData() {
  const cookieStore = await cookies()
  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'az'
  const { data } = await axiosInstance.get('/layouts', {
    headers: { Lang: lang },
    cache: 'no-store',
  })
  return data
}

async function getAboutPageData() {
  const cookieStore = await cookies()
  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'az'
  const { data } = await axiosInstance.get('/support', {
    headers: { Lang: lang },
    cache: 'no-store',
  })
  return data
}

async function getTranslations() {
  const cookieStore = await cookies()
  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'az'
  const response = await axiosInstance.get('/translation-list', {
    headers: { Lang: lang },
  })
  return response.data.reduce((acc, item) => {
    acc[item.key] = item.value
    return acc
  }, {})
}

// SEO metadata (opsional)
export async function generateMetadata() {
  const about = await getAboutPageData()
  const seo = about.seo || {}
  const locale = (await cookies()).get('NEXT_LOCALE')?.value
  return {
    title: seo.meta_title || 'Barkod Electronics',
    description: seo.meta_description || '',
    openGraph: {
      title: seo.meta_title || 'Barkod Electronics',
      description: seo.meta_description || '',
      url: 'https://barkodelectronics.az/corporate-sales',
      site_name: 'barkodelectronics.az',
      type: 'website',
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.meta_title || 'Barkod Electronics',
      description: seo.meta_description || '',
      site: '@barkodelectronics',
    },
  }
}

// Default olaraq async komponenti ixrac edirik
export default async function CorporateSalesPage() {
  const t = await getTranslations()
  const aboutData = await getAboutPageData()
  // API-dən gələn support massivindən ilk element
  const supportItem = (aboutData.support && aboutData.support[0]) || {}

  const layoutData = await getCategoryData()
  const categoryData = layoutData.categories || []
  const settingData = layoutData.setting || []

  return (
    <>
      <Header settingData={settingData} t={t} categoryData={categoryData} />
      <CorporateSales
        settingData={settingData}
        t={t}
        aboutPageDataSlider={supportItem}
      />
      <Footer settingData={settingData} t={t} />
    </>
  )
}
