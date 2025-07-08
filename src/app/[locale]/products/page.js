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

//   // URL'den gelen cat_slug, page ve sort_by parametreleri
//   const slug = searchParams.get("cat_slug") || "";
//   const pageParam = parseInt(searchParams.get("page") || "1", 10);
//   const sortBy = searchParams.get("sort_by") || "";

//   // State'ler
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
//     } catch {
//       setCategoryData([]);
//     }
//   };

//   // Ürünleri sayfa + sort ile fetch et
//   const fetchProducts = useCallback(
//     async (page) => {
//       setLoading(true);
//       try {
//         const filterQuery = filter.length
//           ? filter.map((f) => `filter[]=${encodeURIComponent(f)}`).join("&") + "&"
//           : "";
//         const sortQuery = sortBy ? `&sort_by=${sortBy}` : "";
//         const fullUrl = `/product-list?${filterQuery}cat_slug=${slug}&page=${page}${sortQuery}`;
//         const res = await axiosInstance.get(fullUrl, { headers: { Lang: lang } });
//         const pag = res.data.products.paginate;

//         setProducts(res.data.products.data || []);
//         setFilterGroups(res.data.filter_groups || []);
//         setBreadCrumbs(res.data.bread_crumbs || []);
//         setReklamBanner(res.data.cat || {});
//         setSeoData(res.data.seo || {});
//         setCurrentPage(pag.currentPage);
//         setLastPage(pag.lastPage);
//       } catch (e) {
//         console.error(e);
//       } finally {
//         setLoading(false);
//       }
//     },
//     [slug, filter.join(","), lang, sortBy]
//   );

//   // İlk çalıştırma: dil + kategori
//   useEffect(() => {
//     getTranslations().then(setT);
//     fetchCategoryData();
//   }, []);

//   // slug, filter, pageParam veya sortBy değişince yeni sayfayı çek
//   useEffect(() => {
//     fetchProducts(pageParam);
//   }, [slug, filter.join(","), pageParam, fetchProducts, sortBy]);

//   // Pagination handler: hem URL'i güncelle hem veriyi çek
//   const handlePageChange = (page) => {
//     if (page < 1 || page > lastPage || page === currentPage) return;
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("page", page.toString());
//     router.push(`/products?${params.toString()}`);
//     fetchProducts(page);
//   };

//   return (
//     <div>
//       <Header t={t} categoryData={categoryData} />
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
//       <Footer t={t} />
//     </div>
//   );
// }
// * al sana bombe













// File: app/products/page.js
"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axiosInstance from "@/lib/axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductsPage from "@/components/ProductsPage";

async function getTranslations() {
  try {
    const response = await axiosInstance.get("/translation-list");
    const data = response.data;
    return data.reduce((acc, item) => {
      acc[item.key] = item.value;
      return acc;
    }, {});
  } catch {
    return {};
  }
}

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL'dən gələn parametrlər
  const slug = searchParams.get("cat_slug") || "";
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const sortBy = searchParams.get("sort_by") || "";
  const searchText = searchParams.get("search_text") || "";

  // State'lər
  const [categoryData, setCategoryData] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterGroups, setFilterGroups] = useState([]);
  const [breadCrumbs, setBreadCrumbs] = useState([]);
  const [reklamBanner, setReklamBanner] = useState({});
  const [seoData, setSeoData] = useState({});
  const [t, setT] = useState({});
  const [currentPage, setCurrentPage] = useState(pageParam);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const filter = searchParams.getAll("filter") || [];
  const lang = document.cookie
    .split("; ")
    .find((c) => c.startsWith("NEXT_LOCALE="))
    ?.split("=")[1] || "az";

  // Kategori verisi
  const fetchCategoryData = async () => {
    try {
      const res = await axiosInstance.get("/layouts", { headers: { Lang: lang } });
      setCategoryData(res.data.categories || []);
    } catch {
      setCategoryData([]);
    }
  };

  // Ürünleri sayfa + sort + search ilə fetch et
  const fetchProducts = useCallback(
    async (page) => {
      setLoading(true);
      try {
        if (searchText) {
          // Search mode
          const res = await axiosInstance.get(
            `/smart-search?search_text=${encodeURIComponent(searchText)}&page=${page}`,
            { headers: { Lang: lang } }
          );
          const pag = res.data.paginate;
          setProducts(res.data.data || []);
          setFilterGroups([]);
          setBreadCrumbs([]);
          setReklamBanner({});
          setSeoData({});
          setCurrentPage(pag.currentPage);
          setLastPage(pag.lastPage);
        } else {
          // Category mode
          const filterQuery = filter.length
            ? filter.map((f) => `filter[]=${encodeURIComponent(f)}`).join("&") + "&"
            : "";
          const sortQuery = sortBy ? `&sort_by=${sortBy}` : "";
          const fullUrl = `/product-list?${filterQuery}cat_slug=${slug}&page=${page}${sortQuery}`;
          const res = await axiosInstance.get(fullUrl, { headers: { Lang: lang } });
          const pag = res.data.products.paginate;

          setProducts(res.data.products.data || []);
          setFilterGroups(res.data.filter_groups || []);
          setBreadCrumbs(res.data.bread_crumbs || []);
          setReklamBanner(res.data.cat || {});
          setSeoData(res.data.seo || {});
          setCurrentPage(pag.currentPage);
          setLastPage(pag.lastPage);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    },
    [slug, filter.join(","), lang, sortBy, searchText]
  );

  // İlk çalıştırma: dil + kategori
  useEffect(() => {
    getTranslations().then(setT);
    fetchCategoryData();
  }, []);

  // slug, filter, pageParam, sortBy veya searchText dəyişəndə yenidən fetch et
  useEffect(() => {
    fetchProducts(pageParam);
  }, [slug, filter.join(","), pageParam, fetchProducts, sortBy, searchText]);

  // Pagination handler
  const handlePageChange = (page) => {
    if (page < 1 || page > lastPage || page === currentPage) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/products?${params.toString()}`);
    fetchProducts(page);
  };

  return (
    <div>
      <Header t={t} categoryData={categoryData} />
      <ProductsPage
        t={t}
        slug={slug}
        productsCard={products}
        productsFilterGroupsTitle={filterGroups}
        productsBreadCrumbs={breadCrumbs}
        categoryData={categoryData}
        reklamBanner={reklamBanner}
        seoData={seoData}
        currentPage={currentPage}
        lastPage={lastPage}
        loading={loading}
        onPageChange={handlePageChange}
        sortBy={sortBy}
      />
      <Footer t={t} />
    </div>
  );
}
// ! bu islekdir sadee sort islemir







































































































































































































// *kohne 
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

//   // URL'den gelen cat_slug ve page parametreleri
//   const slug = searchParams.get("cat_slug") || "";
//   const pageParam = parseInt(searchParams.get("page") || "1", 10);

//   // State'ler
//   const [categoryData, setCategoryData] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [filterGroups, setFilterGroups] = useState([]);
//   const [breadCrumbs, setBreadCrumbs] = useState([]);
//   const [reklamBanner, setReklamBanner] = useState({});
//   const [t, setT] = useState({});
//   const [currentPage, setCurrentPage] = useState(pageParam);
//   const [lastPage, setLastPage] = useState(1);
//   const [loading, setLoading] = useState(false);

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
//     } catch {
//       setCategoryData([]);
//     }
//   };

//   // Ürünleri sayfa ile fetch et
//   const fetchProducts = useCallback(
//     async (page) => {
//       setLoading(true);
//       try {
//         const filterQuery = filter.length
//           ? filter.map((f) => `filter[]=${encodeURIComponent(f)}`).join("&") + "&"
//           : "";
//         const fullUrl = `/product-list?${filterQuery}cat_slug=${slug}&page=${page}`;
//         const res = await axiosInstance.get(fullUrl, { headers: { Lang: lang } });
//         const pag = res.data.products.paginate;

//         setProducts(res.data.products.data || []);
//         setFilterGroups(res.data.filter_groups || []);
//         setBreadCrumbs(res.data.bread_crumbs || []);
//         setReklamBanner(res.data.cat || {});
//         setCurrentPage(pag.currentPage);
//         setLastPage(pag.lastPage);
//       } catch (e) {
//         console.error(e);
//       } finally {
//         setLoading(false);
//       }
//     },
//     [slug, filter.join(","), lang]
//   );

//   // İlk çalıştırma: dil + kategori
//   useEffect(() => {
//     getTranslations().then(setT);
//     fetchCategoryData();
//   }, []);

//   // slug, filter veya pageParam değişince yeni sayfayı çek
//   useEffect(() => {
//     fetchProducts(pageParam);
//   }, [slug, filter.join(","), pageParam, fetchProducts]);

//   // Pagination handler: hem URL'i güncelle hem veriyi çek
//   const handlePageChange = (page) => {
//     if (page < 1 || page > lastPage || page === currentPage) return;
//     router.push(`/products?cat_slug=${slug}&page=${page}`);
//     fetchProducts(page);
//   };

//   return (
//     <div>
//       <Header t={t} categoryData={categoryData} />
//       <ProductsPage
//         t={t}
//         slug={slug}
//         productsCard={products}
//         productsFilterGroupsTitle={filterGroups}
//         productsBreadCrumbs={breadCrumbs}
//         categoryData={categoryData}
//         reklamBanner={reklamBanner}
//         currentPage={currentPage}
//         lastPage={lastPage}
//         loading={loading}
//         onPageChange={handlePageChange}
//       />
//       <Footer t={t} />
//     </div>
//   );
// }





