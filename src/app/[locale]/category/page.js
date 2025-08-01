// import React from "react";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
// import CategoryPage from "@/components/CategoryPage";
// import axiosInstance from "@/lib/axios";
// import { cookies } from "next/headers";
// import CategoryBestSeller from "@/components/CategoryBestSeller";

// function findCategoryBySlug(categoriesList, targetSlug) {
//   if (!Array.isArray(categoriesList) || !targetSlug) return null;
//   for (const cat of categoriesList) {
//     if (cat.slug === targetSlug) return cat;
//     if (Array.isArray(cat.sub_categories) && cat.sub_categories.length > 0) {
//       const found = findCategoryBySlug(cat.sub_categories, targetSlug);
//       if (found) return found;
//     }
//   }
//   return null;
// }


// async function getTranslations() {
//   try {
//     const response = await axiosInstance.get("/translation-list");
//     const data = response.data;

//     // Array-i obyektə çevir
//     const translationsObj = data.reduce((acc, item) => {
//       acc[item.key] = item.value;
//       return acc;
//     }, {});

//     return translationsObj;
//   } catch (err) {
//     console.log(err);
//   }
// }

// const page = async ({ searchParams }) => {
//  const t = await getTranslations();

//   const slug = searchParams?.cat_slug || "";
//   let matchedCategory = null;
//   let subCategories = [];
//   let categoryData = [];

//   const cookieStore = cookies();
//   const localeCookie = cookieStore.get("NEXT_LOCALE")?.value;
//   const lang = localeCookie || "az";

//   try {
//     const res = await axiosInstance.get("/layouts", {
//       headers: { Lang: lang },
//     });

//     const rootCats = Array.isArray(res.data?.categories)
//       ? res.data.categories
//       : Array.isArray(res.data)
//       ? res.data
//       : [];

//     categoryData = rootCats;

//     if (slug) {
//       matchedCategory = findCategoryBySlug(rootCats, slug);
//       subCategories = matchedCategory?.sub_categories || [];
//     }
//   } catch (err) {
//     console.error("Kategori fetch xətası:", err);
//     matchedCategory = null;
//     subCategories = [];
//     categoryData = [];
//   }

//   return (
//     <div>
//       <Header t={t} categoryData={categoryData} /> 
//       <CategoryPage t={t} category={matchedCategory} subCategories={subCategories} />
//       <CategoryBestSeller t={t} />
//       <Footer t={t} />
//     </div>
//   );
// };

// export default page;



// ?---------------






import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryPage from "@/components/CategoryPage";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
import CategoryBestSeller from "@/components/CategoryBestSeller";

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
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  
  try {
    const response = await axiosInstance.get("/translation-list", {
      headers: { Lang: lang?.value || "az" }, // ← Lang header əlavə edildi
    });
    const data = response.data;

    // Array-i obyektə çevir
    const translationsObj = data.reduce((acc, item) => {
      acc[item.key] = item.value;
      return acc;
    }, {});

    return translationsObj;
  } catch (err) {
    console.log(err);
    return {}; // ← Boş obyekt qaytarırıq
  }
}

async function getBestSellerProducts(categorySlug) {
  if (!categorySlug) return [];
  
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  
  try {
    const response = await axiosInstance.get(`/product-list?is_best_seller=1&cat_slug=${categorySlug}`, {
      headers: { Lang: lang?.value || "az" }, // ← Lang header əlavə edildi
    });
    return response.data || [];
  } catch (err) {
    console.error("Best seller məhsulları fetch xətası:", err);
    return [];
  }
}

const page = async ({ searchParams }) => {
  const t = await getTranslations();

  const slug = searchParams?.cat_slug || "";
  let matchedCategory = null;
  let subCategories = [];
  let categoryData = [];
  let bestSellerProducts = [];
  let settingData = {};

  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value;
  const lang = localeCookie || "az";

  try {
    const res = await axiosInstance.get("/layouts", {
      headers: { Lang: lang },
    });

    // settings və categories obyektlərini çıxarırıq
    settingData = res.data?.setting || {};

    const rootCats = Array.isArray(res.data?.categories)
      ? res.data.categories
      : Array.isArray(res.data)
      ? res.data
      : [];

    categoryData = rootCats;

    if (slug) {
      matchedCategory = findCategoryBySlug(rootCats, slug);
      subCategories = matchedCategory?.sub_categories || [];
      
      // Kategoriyanın ən çox satılan məhsullarını çək
      bestSellerProducts = await getBestSellerProducts(slug);
    }
  } catch (err) {
    console.error("Kategori fetch xətası:", err);
    matchedCategory = null;
    subCategories = [];
    categoryData = [];
    settingData = {};
  }
  

  return (
    <div>
      <Header 
        t={t} 
        categoryData={categoryData} 
        settingData={settingData} 
      />
      
      <CategoryPage 
        t={t} 
        category={matchedCategory} 
        subCategories={subCategories} 
      />
      <CategoryBestSeller 
        t={t} 
        bestSellerProducts={bestSellerProducts?.products?.data} 
        categorySlug={slug} 
      />
      <Footer 
        t={t} 
        settingData={settingData} 
      />
    </div>
  );
};

export default page;








