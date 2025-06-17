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

const CartPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const guestUUID = cookieStore.get("guest_uuid")?.value;
  const lang = cookieStore.get("NEXT_LOCALE")?.value || 'en';

  const cartData = await getAddToCartData(token, guestUUID, lang);

  return (
    <div>
      <Header />
      <AddToCart cartData={cartData} />
      <Footer />
    </div>
  );
};

export default CartPage;