// import Footer from '@/components/Footer/Footer'
// import Header from '@/components/Header/Header'
// import Wishlist from '@/components/Slider/Wishlist'
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//         <Header />
//         <Wishlist />
//         <Footer />
//     </div>
//   )
// }

// export default page









// app/wishlist/page.jsx
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Wishlist from '@/components/Wishlist'; // Aşağıda yaradacağımız component
import { cookies } from 'next/headers';
import axiosInstance from '@/lib/axios';

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

async function getWishlistData(token, guestUUID, lang) {
  try {
    const headers = { Lang: lang || 'en' };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    } else if (guestUUID) {
      headers['Guest-UUID'] = guestUUID;
    }
    // `cache: "no-store"` ilə hər sorğuda yenidən fetch edirik
    const { data } = await axiosInstance.get('/wishlist', {
      headers,
      cache: 'no-store',
    });
    return data;
  } catch (error) {
    console.error('Failed to fetch wishlist data', error);
    // Backend cavab strukturu: { wishlist: {...} } gözlənirsə, boş struktur qaytaraq
    return { wishlist: { products: [] } };
  }
}

const WishlistPage = async () => {
  const categoryResponse = await getCategoryeData();
  const categoryData = categoryResponse?.categories || [];
  // cookies() yalnız server komponentlərdə işləyir
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const guestUUID = cookieStore.get('guest_uuid')?.value;
  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'en';

  const wishlistData = await getWishlistData(token, guestUUID, lang);

  return (
    <div>
      <Header categoryData={categoryData} />
      <Wishlist wishlistData={wishlistData} />
      <Footer />
    </div>
  );
};

export default WishlistPage;
