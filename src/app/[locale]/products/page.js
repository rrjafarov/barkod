
// // File: app/products/page.js
// "use client";
// import React, { useEffect, useState, useCallback } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import axiosInstance from "@/lib/axios";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
// import ProductsPage from "@/components/ProductsPage";

// async function getTranslations() {
//   try {
//     const response = await axiosInstance.get("/translation-list");
//     const data = response.data;
//     return data.reduce((acc, item) => {
//       acc[item.key] = item.value;
//       return acc;
//     }, {});
//   } catch {
//     return {};
//   }
// }

// export default function Page() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // URL'dən gələn parametrlər
//   const slug = searchParams.get("cat_slug") || "";
//   const pageParam = parseInt(searchParams.get("page") || "1", 10);
//   const sortBy = searchParams.get("sort_by") || "";
//   const searchText = searchParams.get("search_text") || "";

//   // State'lər
//   const [categoryData, setCategoryData] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [filterGroups, setFilterGroups] = useState([]);
//   const [breadCrumbs, setBreadCrumbs] = useState([]);
//   const [reklamBanner, setReklamBanner] = useState({});
//   const [seoData, setSeoData] = useState({});
//   const [t, setT] = useState({});
  
//   const [currentPage, setCurrentPage] = useState(pageParam);
//   const [lastPage, setLastPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [settingData, setSettingData] = useState({});

//   const filter = searchParams.getAll("filter") || [];
//   const lang = document.cookie
//     .split("; ")
//     .find((c) => c.startsWith("NEXT_LOCALE="))
//     ?.split("=")[1] || "az";

//   // Kategori verisi
//   const fetchCategoryData = async () => {
//     try {
//       const res = await axiosInstance.get("/layouts", { headers: { Lang: lang } });
//       setCategoryData(res.data.categories || []);
//       setSettingData(res.data.setting || {}); // ← ADDED
//     } catch {
//       setCategoryData([]);
//       setSettingData({}); // ← ADDED
//     }
//   };

//   // Ürünleri sayfa + sort + search ilə fetch et
//   const fetchProducts = useCallback(
//     async (page) => {
//       setLoading(true);
//       try {
//         if (searchText) {
//           // Search mode
//           const res = await axiosInstance.get(
//             `/smart-search?search_text=${encodeURIComponent(searchText)}&page=${page}`,
//             { headers: { Lang: lang } }
//           );
//           const pag = res.data.paginate;
//           setProducts(res.data.data || []);
//           setFilterGroups([]);
//           setBreadCrumbs([]);
//           setReklamBanner({});
//           setSeoData({});
//           setCurrentPage(pag.currentPage);
//           setLastPage(pag.lastPage);
//         } else {
//           // Category mode
//           const filterQuery = filter.length
//             ? filter.map((f) => `filter[]=${encodeURIComponent(f)}`).join("&") + "&"
//             : "";
//           const sortQuery = sortBy ? `&sort_by=${sortBy}` : "";
//           const fullUrl = `/product-list?${filterQuery}cat_slug=${slug}&page=${page}${sortQuery}`;
//           const res = await axiosInstance.get(fullUrl, { headers: { Lang: lang } });
//           const pag = res.data.products.paginate;

//           setProducts(res.data.products.data || []);
//           setFilterGroups(res.data.filter_groups || []);
//           setBreadCrumbs(res.data.bread_crumbs || []);
//           setReklamBanner(res.data.cat || {});
//           setSeoData(res.data.seo || {});
//           setCurrentPage(pag.currentPage);
//           setLastPage(pag.lastPage);
//         }
//       } catch (e) {
//         console.error(e);
//       } finally {
//         setLoading(false);
//       }
//     },
//     [slug, filter.join(","), lang, sortBy, searchText]
//   );
//   // İlk çalıştırma: dil + kategori
//   useEffect(() => {
//     getTranslations().then(setT);
//     fetchCategoryData();
//   }, []);

//   // slug, filter, pageParam, sortBy veya searchText dəyişəndə yenidən fetch et
//   useEffect(() => {
//     fetchProducts(pageParam);
//   }, [slug, filter.join(","), pageParam, fetchProducts, sortBy, searchText]);

//   // Pagination handler
//   const handlePageChange = (page) => {
//     if (page < 1 || page > lastPage || page === currentPage) return;
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("page", page.toString());
//     router.push(`/products?${params.toString()}`);
//     fetchProducts(page);
//   };
  
//   return (
//     <div>
//       <Header t={t} categoryData={categoryData} settingData={settingData}  />
//       <ProductsPage
//         t={t}
//         slug={slug}
//         productsCard={products}
//         productsFilterGroupsTitle={filterGroups}
//         productsBreadCrumbs={breadCrumbs}
//         categoryData={categoryData}
//         reklamBanner={reklamBanner}
//         seoData={seoData}
//         currentPage={currentPage}
//         lastPage={lastPage}
//         loading={loading}
//         onPageChange={handlePageChange}
//         sortBy={sortBy}
//       />
//       <Footer t={t} settingData={settingData} />
//     </div>
//   );
// }
// ! bu islekdir sadee sort islemir
















// app/products/page.js
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";
import ProductsClient from "./ProductsClient";

// Metadata generate et
export async function generateMetadata({ searchParams }) {
  const cat_slug = searchParams.cat_slug || "";
  const search_text = searchParams.search_text || "";
  
  try {
    let seoData = {};
    
    const cookieStore = await cookies();
    const locale = cookieStore.get("NEXT_LOCALE")?.value || "az";
    
    if (search_text) {
      // Search üçün basic SEO
      seoData = {
        meta_title: `${search_text} - Barkod Electronics`,
        meta_description: `${search_text} axtarış nəticələri`,
      };
    } else if (cat_slug) {
      // Kategory üçün API-dən SEO data götür
      const response = await axiosInstance.get(
        `/product-list?cat_slug=${cat_slug}&page=1`,
        { headers: { Lang: locale } }
      );
      seoData = response.data.seo || {};
    }

    const canonicalUrl = `https://barkodelectronics.az/products?cat_slug=${cat_slug}`;
    
    return {
      title: seoData.meta_title || "Məhsullar | Barkod Electronics",
      description: seoData.meta_description || "Barkod Electronics məhsulları",
      openGraph: {
        title: seoData.meta_title || "Məhsullar | Barkod Electronics",
        description: seoData.meta_description || "Barkod Electronics məhsulları",
        url: canonicalUrl,
        site_name: "barkodelectronics.az",
        type: "website",
        locale,
      },
      twitter: {
        card: "summary_large_image",
        title: seoData.meta_title || "Məhsullar | Barkod Electronics",
        description: seoData.meta_description || "Barkod Electronics məhsulları",
        site: "@barkodelectronics",
      },
      alternates: {
        canonical: canonicalUrl,
      },
    };
  } catch (error) {
    console.error("Metadata error:", error);
    return {
      title: "Məhsullar | Barkod Electronics",
      description: "Barkod Electronics məhsulları",
    };
  }
}

// Server component - yalnız client componenti render edir
export default function ProductsPage({ searchParams }) {
  return <ProductsClient searchParams={searchParams} />;
}






























// // File: app/products/page.js
// "use client";
// import React, { useEffect, useState, useCallback } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import axiosInstance from "@/lib/axios";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
// import ProductsPage from "@/components/ProductsPage";

// async function getTranslations() {
//   try {
//     const response = await axiosInstance.get("/translation-list");
//     const data = response.data;
//     return data.reduce((acc, item) => {
//       acc[item.key] = item.value;
//       return acc;
//     }, {});
//   } catch {
//     return {};
//   }
// }

// export default function Page() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // URL'dən gələn parametrlər
//   const slug = searchParams.get("cat_slug") || "";
//   const pageParam = parseInt(searchParams.get("page") || "1", 10);
//   const sortBy = searchParams.get("sort_by") || "";
//   const searchText = searchParams.get("search_text") || "";

//   // State'lər
//   const [categoryData, setCategoryData] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [filterGroups, setFilterGroups] = useState([]);
//   const [breadCrumbs, setBreadCrumbs] = useState([]);
//   const [reklamBanner, setReklamBanner] = useState({});
//   const [seoData, setSeoData] = useState({});
//   const [t, setT] = useState({});
  
//   const [currentPage, setCurrentPage] = useState(pageParam);
//   const [lastPage, setLastPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [settingData, setSettingData] = useState({});
//   const [totalProducts, setTotalProducts] = useState(0); // ← NEW: total məhsul sayı

//   const filter = searchParams.getAll("filter") || [];
//   const lang = document.cookie
//     .split("; ")
//     .find((c) => c.startsWith("NEXT_LOCALE="))
//     ?.split("=")[1] || "az";

//   // Kategori verisi
//   const fetchCategoryData = async () => {
//     try {
//       const res = await axiosInstance.get("/layouts", { headers: { Lang: lang } });
//       setCategoryData(res.data.categories || []);
//       setSettingData(res.data.setting || {}); // ← ADDED
//     } catch {
//       setCategoryData([]);
//       setSettingData({}); // ← ADDED
//     }
//   };

//   // Ürünleri sayfa + sort + search ilə fetch et
//   const fetchProducts = useCallback(
//     async (page) => {
//       setLoading(true);
//       try {
//         if (searchText) {
//           // Search mode
//           const res = await axiosInstance.get(
//             `/smart-search?search_text=${encodeURIComponent(searchText)}&page=${page}`,
//             { headers: { Lang: lang } }
//           );
//           const pag = res.data.paginate;
//           setProducts(res.data.data || []);
//           setFilterGroups([]);
//           setBreadCrumbs([]);
//           setReklamBanner({});
//           setSeoData({});
//           setCurrentPage(pag.currentPage);
//           setLastPage(pag.lastPage);
//           setTotalProducts(pag.total || 0); // ← ADDED: total'u set et
//         } else {
//           // Category mode
//           const filterQuery = filter.length
//             ? filter.map((f) => `filter[]=${encodeURIComponent(f)}`).join("&") + "&"
//             : "";
//           const sortQuery = sortBy ? `&sort_by=${sortBy}` : "";
//           const fullUrl = `/product-list?${filterQuery}cat_slug=${slug}&page=${page}${sortQuery}`;
//           const res = await axiosInstance.get(fullUrl, { headers: { Lang: lang } });
//           const pag = res.data.products.paginate;

//           setProducts(res.data.products.data || []);
//           setFilterGroups(res.data.filter_groups || []);
//           setBreadCrumbs(res.data.bread_crumbs || []);
//           setReklamBanner(res.data.cat || {});
//           setSeoData(res.data.seo || {});
//           setCurrentPage(pag.currentPage);
//           setLastPage(pag.lastPage);
//           setTotalProducts(pag.total || 0); // ← ADDED: category mode üçün də total'u set et
//         }
//       } catch (e) {
//         console.error(e);
//       } finally {
//         setLoading(false);
//       }
//     },
//     [slug, filter.join(","), lang, sortBy, searchText]
//   );
//   // İlk çalıştırma: dil + kategori
//   useEffect(() => {
//     getTranslations().then(setT);
//     fetchCategoryData();
//   }, []);

//   // slug, filter, pageParam, sortBy veya searchText dəyişəndə yenidən fetch et
//   useEffect(() => {
//     fetchProducts(pageParam);
//   }, [slug, filter.join(","), pageParam, fetchProducts, sortBy, searchText]);

//   // Pagination handler
//   const handlePageChange = (page) => {
//     if (page < 1 || page > lastPage || page === currentPage) return;
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("page", page.toString());
//     router.push(`/products?${params.toString()}`);
//     fetchProducts(page);
//   };
  
//   return (
//     <div>
//       <Header t={t} categoryData={categoryData} settingData={settingData}  />
//       <ProductsPage
//         t={t}
//         slug={slug}
//         productsCard={products}
//         productsFilterGroupsTitle={filterGroups}
//         productsBreadCrumbs={breadCrumbs}
//         categoryData={categoryData}
//         reklamBanner={reklamBanner}
//         seoData={seoData}
//         currentPage={currentPage}
//         lastPage={lastPage}
//         loading={loading}
//         onPageChange={handlePageChange}
//         sortBy={sortBy}
//         productsTotal={totalProducts} // ← NEW PROP: toplam məhsul sayı
//       />
//       <Footer t={t} settingData={settingData} />
//     </div>
//   );
// }
