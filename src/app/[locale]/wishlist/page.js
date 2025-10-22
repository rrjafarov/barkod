
// app/wishlist/page.jsx
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Wishlist from "@/components/Wishlist"; // Aşağıda yaradacağımız component
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

async function getCategoryeData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: home } = await axiosInstance.get(`/layouts`, {
      // headers: { Lang: lang.value },
      headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
      cache: "no-store",
    });
    return home;
  } catch (error) {
    throw error;
  }
}

async function getWishlistData(token, guestUUID, lang) {
  try {
    const headers = { Lang: lang || "en" };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    } else if (guestUUID) {
      headers["Guest-UUID"] = guestUUID;
    }
    // `cache: "no-store"` ilə hər sorğuda yenidən fetch edirik
    const { data } = await axiosInstance.get("/wishlist", {
      headers,
      headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
      cache: "no-store",
    });
    return data;
  } catch (error) {
    return { wishlist: { products: [] } };
  }
}

async function getTranslations() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data } = await axiosInstance.get("/translation-list", {
      headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
      cache: "no-store",
    });
    return data.reduce((acc, item) => {
      acc[item.key] = item.value;
      return acc;
    }, {});
  } catch (err) {
    return {};
  }
}

async function getSupportData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: home } = await axiosInstance.get(`/support`, {
      headers: { Lang: lang?.value || "az" }, // ← DÜZƏLDILDI
      cache: "no-store",
    });
    return home;
  } catch (error) {
    throw error;
  }
}


const WishlistPage = async () => {
  const t = await getTranslations();

  const categoryResponse = await getCategoryeData();
  const categoryData = categoryResponse?.categories || [];
  const settingData = categoryResponse?.setting || [];

  // cookies() yalnız server komponentlərdə işləyir
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const guestUUID = cookieStore.get("guest_uuid")?.value;
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "en";

  const wishlistData = await getWishlistData(token, guestUUID, lang);


  const supportResponse = await getSupportData();
  const supportData = supportResponse?.support || [];

  return (
    <div>
      <Header supportData={supportData}  settingData={settingData} t={t} categoryData={categoryData} />
      <Wishlist t={t} wishlistData={wishlistData} />
      <Footer supportData={supportData}  settingData={settingData} t={t} />
    </div>
  );
};

export default WishlistPage;
