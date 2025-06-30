
// // !son versiya
// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import axiosInstance from "@/lib/axios";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
// import ProductsPage from "@/components/ProductsPage";

// // async function getCategoryeData() {
// //   const cookieStore = await cookies();
// //   const lang = cookieStore.get("NEXT_LOCALE");
// //   try {
// //     const { data: home } = await axiosInstance.get(`/layouts`, {
// //       // headers: { Lang: lang.value },
// //       cache: "no-store",
// //     });
// //     return home;
// //   } catch (error) {
// //     console.error("Failed to home page data", error);
// //     throw error;
// //   }
// // }

// const Page = () => {

//   // const categoryResponse = await getCategoryeData();
//   // const categoryData = categoryResponse?.categories || [];
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [products, setProducts] = useState([]);
//   const [filterGroups, setFilterGroups] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const slug = searchParams.get("cat_slug") || "";
//   const filter = searchParams.getAll("filter") || [];

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const filterQuery = filter.length > 0
//         ? filter.map(f => `filter[]=${encodeURIComponent(f)}`).join('&') + '&'
//         : '';

//       const lang = document.cookie
//         .split('; ')
//         .find(row => row.startsWith('NEXT_LOCALE='))
//         ?.split('=')[1] || 'az';

//       const fullUrl = `/product-list?${filterQuery}cat_slug=${slug}`;
//       console.log('API URL:', fullUrl);

//       const res = await axiosInstance.get(fullUrl, {
//         headers: {
//           Lang: lang,
//         },
//       });

//       setProducts(res.data?.products?.data || []);
//       setFilterGroups(res.data?.filter_groups || []);
//     } catch (error) {
//       console.error("Məhsullar alınarkən xəta baş verdi:", error);
//       setProducts([]);
//       setFilterGroups([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [slug, filter.join(',')]); // slug və ya filter dəyişəndə yenidən fetch et

//   // if (loading) {
//   //   return (
//   //     <div>
//   //       <Header />
//   //       <div className="container">
//   //         <div style={{ textAlign: 'center', padding: '50px' }}>
//   //           loading...
//   //         </div>
//   //       </div>
//   //       <Footer />
//   //     </div>
//   //   );
//   // }

//   return (
//     <div>
//       <Header />
//       <ProductsPage
//         slug={slug}
//         productsCard={products}
//         productsFilterGroupsTitle={filterGroups}
//       />
//       <Footer />
//     </div>
//   );
// };

// export default Page;




// ? nisbeten
// // app/products/page.jsx
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
//     const translationsObj = data.reduce((acc, item) => {
//       acc[item.key] = item.value;
//       return acc;
//     }, {});
//     return translationsObj;
//   } catch (err) {
//     console.log(err);
//     return {};
//   }
// }

// export default function Page() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // Kategori ve ürün/filter grubu state'leri
//   const [categoryData, setCategoryData] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [filterGroups, setFilterGroups] = useState([]);
//   const [breadCrumbs, setBreadCrumbs] = useState([]);
//   const [reklamBanner, setReklamBanner] = useState({});
//   const [t, setT] = useState({});

//   // ** infinite scroll üçün əlavə state **
//   const [currentPage, setCurrentPage] = useState(1);
//   const [lastPage, setLastPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const slug = searchParams.get("cat_slug") || "";
//   const filter = searchParams.getAll("filter") || [];

//   const lang = (() => {
//     const match = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("NEXT_LOCALE="));
//     return match ? match.split("=")[1] : "az";
//   })();

//   // Kategori verisini client-side fetch eden fonksiyon
//   const fetchCategoryData = async () => {
//     try {
//       const res = await axiosInstance.get(`/layouts`, {
//         headers: { Lang: lang },
//       });
//       const home = res.data;
//       setCategoryData(home?.categories || []);
//     } catch (error) {
//       console.error("Kategori verisi alınırken hata:", error);
//       setCategoryData([]);
//     }
//   };

//   // Ürünleri fetch eden fonksiyon (səhifə nömrəsiylə)
//   const fetchProducts = useCallback(
//     async (page = 1, reset = false) => {
//       if (loading) return;
//       setLoading(true);
//       try {
//         const filterQuery =
//           filter.length > 0
//             ? filter.map((f) => `filter[]=${encodeURIComponent(f)}`).join("&") +
//               "&"
//             : "";
//         const fullUrl = `/product-list?${filterQuery}cat_slug=${slug}&page=${page}`;

//         const res = await axiosInstance.get(fullUrl, {
//           headers: { Lang: lang },
//         });
//         const pag = res.data.products.paginate;
//         const fetched = res.data.products.data || [];

//         setProducts(prev =>
//           reset ? fetched : [...prev, ...fetched]
//         );
//         if (reset) {
//           setFilterGroups(res.data?.filter_groups || []);
//           setBreadCrumbs(res.data?.bread_crumbs || []);
//           setReklamBanner(res.data?.cat || {});
//         }
//         setCurrentPage(pag.currentPage);
//         setLastPage(pag.lastPage);
//       } catch (error) {
//         console.error("Məhsullar alınarkən xəta baş verdi:", error);
//       } finally {
//         setLoading(false);
//       }
//     },
//     [slug, filter.join(","), lang, loading]
//   );

//   // İlk yüklənmə
//   useEffect(() => {
//     async function init() {
//       const translations = await getTranslations();
//       setT(translations);
//       await fetchCategoryData();
//     }
//     init();
//   }, []);

//   // slug veya filter değiştiğinde resetlə yüklə
//   useEffect(() => {
//     fetchProducts(1, true);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [slug, filter.join(",")]);

//   // Fetch more callback
//   const handleFetchMore = () => {
//     if (currentPage < lastPage && !loading) {
//       fetchProducts(currentPage + 1);
//     }
//   };

//   return (
//     <div>
//       <Header t={t} categoryData={categoryData} />
//       <ProductsPage
//         slug={slug}
//         productsCard={products}
//         productsFilterGroupsTitle={filterGroups}
//         productsBreadCrumbs={breadCrumbs}
//         categoryData={categoryData}
//         reklamBanner={reklamBanner}
//         fetchMore={handleFetchMore}
//         hasMore={currentPage < lastPage}
//         loading={loading}
//       />
//       <Footer t={t} />
//     </div>
//   );
// }
// ? nisbeten
































// *Son versiya
"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axiosInstance from "@/lib/axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductsPage from "@/components/ProductsPage";


async function getTranslations() {
  try {
    const response = await axiosInstance.get("/translation-list");
    const data = response.data;
    const translationsObj = data.reduce((acc, item) => {
      acc[item.key] = item.value;
      return acc;
    }, {});
    return translationsObj;
  } catch (err) {
    console.log(err);
    return {};
  }
}

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Kategori ve ürün/filter grubu state'leri
  const [categoryData, setCategoryData] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterGroups, setFilterGroups] = useState([]);
  const [breadCrumbs, setBreadCrumbs] = useState([]);
  const [reklamBanner, setReklamBanner] = useState([]);
  const [t, setT] = useState({}); 

  const slug = searchParams.get("cat_slug") || "";
  const filter = searchParams.getAll("filter") || [];

  // Kategori verisini client-side fetch eden fonksiyon
  const fetchCategoryData = async () => {
    try {
      const lang =
        document.cookie
          .split("; ")
          .find((row) => row.startsWith("NEXT_LOCALE="))
          ?.split("=")[1] || "az";

      const res = await axiosInstance.get(`/layouts`, {
        headers: { Lang: lang },
      });
      const home = res.data;
      setCategoryData(home?.categories || []);
    } catch (error) {
      console.error("Kategori verisi alınırken hata:", error);
      setCategoryData([]);
    }
  };

  // Ürünleri fetch eden fonksiyon
  const fetchProducts = async () => {
    try {
      const filterQuery =
        filter.length > 0
          ? filter.map((f) => `filter[]=${encodeURIComponent(f)}`).join("&") +
            "&"
          : "";

      const lang =
        document.cookie
          .split("; ")
          .find((row) => row.startsWith("NEXT_LOCALE="))
          ?.split("=")[1] || "az";

      const fullUrl = `/product-list?${filterQuery}cat_slug=${slug}`;
      
      // console.log("API URL:", fullUrl);

      const res = await axiosInstance.get(fullUrl, {
        headers: {
          Lang: lang,
        },
      });

      setProducts(res.data?.products?.data || []);
      setFilterGroups(res.data?.filter_groups || []);
      setBreadCrumbs(res.data?.bread_crumbs || []);
      setReklamBanner(res.data?.cat || []);
    } catch (error) {
      console.error("Məhsullar alınarkən xəta baş verdi:", error);
      setProducts([]);
      setFilterGroups([]);
      setBreadCrumbs([]);
      setReklamBanner([])
    }
  };

    useEffect(() => {
    async function init() {
      const translations = await getTranslations();
      setT(translations);
      await fetchCategoryData();
    }
    init();
  }, []);

  // Sayfa yüklendiğinde kategori verisini al
  useEffect(() => {
    fetchCategoryData();
  }, []);

  // slug veya filter değiştiğinde ürünleri yeniden fetch et
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, filter.join(",")]);


  return (
    <div>
      <Header t={t} categoryData={categoryData} />
      <ProductsPage
        slug={slug}
        productsCard={products}
        productsFilterGroupsTitle={filterGroups}
        productsBreadCrumbs={breadCrumbs}
        categoryData={categoryData} 
        reklamBanner={reklamBanner}
      />
      <Footer t={t} />
    </div>
  );
}
