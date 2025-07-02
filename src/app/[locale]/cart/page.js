// import AddToCart from '@/components/AddToCart'
// import Footer from '@/components/Footer/Footer'
// import Header from '@/components/Header/Header'
// import React from 'react'
// import { cookies } from "next/headers";
// import axiosInstance from "@/lib/axios";

// async function getAddToCartData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
//   try {
//     const { data: cart } = await axiosInstance.get(`/cart/list`, {
//       // headers: { Lang: lang.value },
//       cache: "no-store",
//     });
//     return cart;
//   } catch (error) {
//     console.error("Failed to cart page data", error);
//     throw error;
//   }
// }

// const page = async () => {
//   const cartResponse = await getAddToCartData();
//   // const cartData = cartResponse?.data || [];
//   const cartData = cartResponse || {}; 

  
//   return (
//     <div>
//         <Header />
//         <AddToCart cartData={cartData} />
//         <Footer />
//     </div>
//   )
// }

// export default page
















import AddToCart from '@/components/AddToCart';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

async function getAddToCartData(token, guestUUID, lang) {
  try {
    const headers = { Lang: lang || 'en' };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    } else if (guestUUID) {
      headers['Guest-UUID'] = guestUUID;
    }

    const { data: cart } = await axiosInstance.get(`/cart/list`, {
      headers,
      cache: "no-store",
    });
    return cart;
  } catch (error) {
    console.error("Failed to fetch cart data", error);
    return { cart: {} }; // Boş obyekt qaytarırıq ki, komponent səhv verməsin
  }
}

async function getCategoryeData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: home } = await axiosInstance.get(`/layouts`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return home;
  } catch (error) {
    console.error("Failed to home page data", error);
    throw error;
  }
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

const CartPage = async () => {
  const t = await getTranslations();
const categoryResponse = await getCategoryeData();
  const categoryData = categoryResponse?.categories || [];

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const guestUUID = cookieStore.get("guest_uuid")?.value;
  const lang = cookieStore.get("NEXT_LOCALE")?.value || 'en';

  const cartData = await getAddToCartData(token, guestUUID, lang);

  return (
    <div>
      <Header t={t} categoryData={categoryData} />
      <AddToCart  t={t} cartData={cartData} />
      <Footer t={t} />
    </div>
  );
};

export default CartPage;