// import React from "react";
// import { cookies } from "next/headers";
// import axiosInstance from "@/lib/axios";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
// import ProductsPage from "@/components/ProductsPage";

// const page = async ({ searchParams }) => {
//   const slug = searchParams.cat_slug || "";
//   const filter = searchParams.filter || "";
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE")?.value || "az";
//   let products = [];
//   try {
//     const res = await axiosInstance.get(
//       `/product-list?${filter && `filter[]=${filter}&`}cat_slug=${slug}`,
//       {
//         headers: {
//           Lang: lang,
//         },
//         cache: "no-store",
//       }
//     );
//     products = res.data;
//   } catch (error) {
//     console.error("Məhsullar alınarkən xəta baş verdi:", error);
//     products = [];
//   }

//   return (
//     <div>
//       <Header />
//       <ProductsPage
//         slug={slug}
//         productsCard={products?.products?.data}
//         productsFilterGroupsTitle={products?.filter_groups}
//       />
//       <Footer />
//     </div>
//   );
// };
// export default page;









// !esas versiya
// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import axiosInstance from "@/lib/axios";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
// import ProductsPage from "@/components/ProductsPage";

// const Page = () => {
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
//         ? filter.map(f => `filter[]=${f}`).join('&') + '&'
//         : '';
      
//       const lang = document.cookie
//         .split('; ')
//         .find(row => row.startsWith('NEXT_LOCALE='))
//         ?.split('=')[1] || 'az';

//       const res = await axiosInstance.get(
//         `/product-list?${filterQuery}cat_slug=${slug}`,
//         {
//           headers: {
//             Lang: lang,
//           },
//         }
//       );
      
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

//   if (loading) {
//     return (
//       <div>
//         <Header />
//         <div className="container">
//           <div style={{ textAlign: 'center', padding: '50px' }}>
//             Yüklənir...
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

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































// !son versiya
"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axiosInstance from "@/lib/axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductsPage from "@/components/ProductsPage";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filterGroups, setFilterGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  const slug = searchParams.get("cat_slug") || "";
  const filter = searchParams.getAll("filter") || [];

  const fetchProducts = async () => {
    setLoading(true);
    try {
      // Filter parametrlərini düzgün formatda hazırla
      const filterQuery = filter.length > 0 
        ? filter.map(f => `filter[]=${encodeURIComponent(f)}`).join('&') + '&'
        : '';
      
      const lang = document.cookie
        .split('; ')
        .find(row => row.startsWith('NEXT_LOCALE='))
        ?.split('=')[1] || 'az';

      const fullUrl = `/product-list?${filterQuery}cat_slug=${slug}`;
      console.log('API URL:', fullUrl); 

      const res = await axiosInstance.get(fullUrl, {
        headers: {
          Lang: lang,
        },
      });
      
      setProducts(res.data?.products?.data || []);
      setFilterGroups(res.data?.filter_groups || []);
    } catch (error) {
      console.error("Məhsullar alınarkən xəta baş verdi:", error);
      setProducts([]);
      setFilterGroups([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [slug, filter.join(',')]); // slug və ya filter dəyişəndə yenidən fetch et

  if (loading) {
    return (
      <div>
        <Header />
        <div className="container">
          <div style={{ textAlign: 'center', padding: '50px' }}>
            loading...
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <ProductsPage
        slug={slug}
        productsCard={products}
        productsFilterGroupsTitle={filterGroups}
      />
      <Footer />
    </div>
  );
};

export default Page;  