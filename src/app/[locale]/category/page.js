// import CategoryPage from '@/components/CategoryPage'
// import Footer from '@/components/Footer/Footer'
// import Header from '@/components/Header/Header'
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//         <Header />
//         <CategoryPage />
//         <Footer />
//     </div>
//   )
// }

// export default page





// !en son aasadasda


// src/app/[locale]/category/page.js veya src/app/category/page.js

// import React from 'react';
// import Header from '@/components/Header/Header';
// import Footer from '@/components/Footer/Footer';
// import CategoryPage from '@/components/CategoryPage';
// import axiosInstance from '@/lib/axios';
// import { cookies } from 'next/headers';

// // Özyinelemeli arama: verilen kategori ağacında slug eşleşirse o node'u döner.
// function findCategoryBySlug(categoriesList, targetSlug) {
//   if (!Array.isArray(categoriesList) || !targetSlug) return null;
//   for (const cat of categoriesList) {
//     if (cat.slug === targetSlug) {
//       return cat;
//     }
//     if (Array.isArray(cat.sub_categories) && cat.sub_categories.length > 0) {
//       const found = findCategoryBySlug(cat.sub_categories, targetSlug);
//       if (found) return found;
//     }
//   }
//   return null;
// }

// const page = async ({ searchParams }) => {
//   const slug = searchParams?.cat_slug || '';
//   let subCategories = [];

//   if (slug) {
//     const cookieStore = cookies();
//     const localeCookie = cookieStore.get('NEXT_LOCALE')?.value;
//     const lang = localeCookie || 'az';

//     try {
//       const res = await axiosInstance.get('/layouts', {
//         headers: { Lang: lang },
//       });
//       // res.data yapısı: { categories: [ ... ] }
//       const rootCats = Array.isArray(res.data?.categories) ? res.data.categories : [];
//       const matched = findCategoryBySlug(rootCats, slug);
//       subCategories = Array.isArray(matched?.sub_categories) ? matched.sub_categories : [];
//     } catch (err) {
//       subCategories = [];
//     }
//   }

//   return (
//     <div>
//       <Header />
//       <CategoryPage subCategories={subCategories} />
//       <Footer />
//     </div>
//   );
// };

// export default page;





// testid
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryPage from "@/components/CategoryPage";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

function findCategoryBySlug(categoriesList, targetSlug) {
  if (!Array.isArray(categoriesList) || !targetSlug) return null;
  for (const cat of categoriesList) {
    if (cat.slug === targetSlug) return cat;
    if (Array.isArray(cat.sub_categories) && cat.sub_categories.length > 0) {
      const found = findCategoryBySlug(cat.sub_categories, targetSlug);
      if (found) return found;
    }
  }
  return null;
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

const page = async ({ searchParams }) => {
 const t = await getTranslations();

  const slug = searchParams?.cat_slug || "";
  let matchedCategory = null;
  let subCategories = [];
  let categoryData = [];

  const cookieStore = cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value;
  const lang = localeCookie || "az";

  try {
    const res = await axiosInstance.get("/layouts", {
      headers: { Lang: lang },
    });

    const rootCats = Array.isArray(res.data?.categories)
      ? res.data.categories
      : Array.isArray(res.data)
      ? res.data
      : [];

    categoryData = rootCats;

    if (slug) {
      matchedCategory = findCategoryBySlug(rootCats, slug);
      subCategories = matchedCategory?.sub_categories || [];
    }
  } catch (err) {
    console.error("Kategori fetch xətası:", err);
    matchedCategory = null;
    subCategories = [];
    categoryData = [];
  }

  return (
    <div>
      <Header t={t} categoryData={categoryData} /> 
      <CategoryPage t={t} category={matchedCategory} subCategories={subCategories} />
      <Footer t={t} />
    </div>
  );
};

export default page;


// testid
