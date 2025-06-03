// import Footer from "@/components/Footer/Footer";
// import Header from "@/components/Header/Header";
// import ProductsPage from "@/components/ProductsPage";
// import React from "react";

// const page = () => {
//   return (
//     <div>
//       <Header />
//       <ProductsPage />
//       <Footer />
//     </div>
//   );
// };

// export default page;




import React from "react";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductsPage from "@/components/ProductsPage";

const page = async ({ searchParams }) => {
  const slug = searchParams.cat_slug || "";
  const filter = searchParams.filter || "";
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "az";
  let products = [];
  try {
    const res = await axiosInstance.get(
      `/product-list?${filter && `filter[]=${filter}&`}cat_slug=${slug}`,
      {
        headers: {
          Lang: lang,
        },
        cache: "no-store",
      }
    );
    products = res.data;
  } catch (error) {
    console.error("Məhsullar alınarkən xəta baş verdi:", error);
    products = [];
  }

  return (
    <div>
      <Header />
      <ProductsPage
        slug={slug}
        productsCard={products?.products?.data}
        productsFilterGroupsTitle={products?.filter_groups}
      />
      <Footer />
    </div>
  );
};
export default page;
