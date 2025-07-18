// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import axiosInstance from "@/lib/axios";
// import Cookies from "js-cookie";
// import { use, useState, useEffect } from "react";
// import Header from '@/components/Header/Header';
// import Footer from '@/components/Footer/Footer';
// import { BiLogOut } from "react-icons/bi";
// import { FiUser } from "react-icons/fi";
// import { GrLocation } from "react-icons/gr";
// import { RiFileList3Line } from "react-icons/ri";
// import { FiUnlock } from "react-icons/fi";


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


// const AboutPage = ({ children, params }) => {
//   const [categoryData, setCategoryData] = useState([]);
//   const [settingData, setSettingData] = useState([]);
//   const [showLogoutPopup, setShowLogoutPopup] = useState(false);
//   const [t, setT] = useState({});
//   const unwrappedParams = use(params);
//   const { locale } = unwrappedParams;
//   const isDefaultLocale = locale === "az";
//   const pathname = usePathname();

//   // useEffect(() => {
//   //   const fetchCategories = async () => {
//   //     try {
//   //       const headers = {};
//   //       if (locale) {
//   //         headers["Lang"] = locale;
//   //       }
//   //       const { data: home } = await axiosInstance.get("/layouts", {
//   //         headers,
//   //       });
//   //       setCategoryData(home?.categories || []);
//   //     } catch (error) {
//   //       console.error("Failed to fetch categories:", error);
//   //       setCategoryData([]);
//   //     }
//   //   };
    
//   //   fetchCategories();
//   // }, [locale]);


//    useEffect(() => {
//     async function init() {
//       // 1) load translations
//       const translations = await getTranslations();
//       setT(translations);

//       // 2) load categories
//       try {
//         const headers = {};
//         if (locale) {
//           headers["Lang"] = locale;
//         }
//         const { data: home } = await axiosInstance.get("/layouts", {
//           headers,
//         });
//         setCategoryData(home?.categories || []);
//         setSettingData(home?.setting || []);
//       } catch (error) {
//         console.error("Failed to fetch categories:", error);
//         setCategoryData([]);
//       }
//     }
//     init();
//   }, [locale]);


//   const generatePath = (path) =>
//     isDefaultLocale ? `/${path}` : `/${locale}/${path}`;

//   const handleLogoutClick = () => {
//     setShowLogoutPopup(true);
//   };

//   const handleLogoutConfirm = async () => {
//     try {
//       const token = typeof window !== "undefined" && Cookies.get("token");
//       await axiosInstance.post(
//         "/logout",
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       Cookies.remove("token");
//       setShowLogoutPopup(false);
//       const redirectTo = isDefaultLocale ? "/login" : `/${locale}/login`;
//       window.location.href = redirectTo;
//     } catch (error) {
//       console.error("Logout failed:", error);
//       setShowLogoutPopup(false);
//     }
//   };

//   const handleLogoutCancel = () => {
//     setShowLogoutPopup(false);
//   };

//   // inline style helper for underline
//   const underlineStyle = (path) => {
//     return pathname === generatePath(path)
//       ? { borderBottom: "2px solid #000", paddingBottom: "4px" }
//       : {};
//   };

//   return (
//     <>
//       <Header settingData={settingData} t={t} categoryData={categoryData} />
//       <div className="pagesProfile">
//         <div className="account">
//           <div className="container">
//             <div className="row" id="account">
//               <div className="xl-4 lg-4 md-4 sm-12">
//                 <div className="supportLeft">
//                   <Link
//                     href={generatePath("account/profile")}
//                     className={pathname === generatePath("account/profile") ? "active" : ""}
//                     style={underlineStyle("account/profile")}
//                   >
//                     <FiUser />{t?.profile || "Profile"}
//                   </Link>
//                   <Link
//                     href={generatePath("account/address")}
//                     className={pathname === generatePath("account/address") ? "active" : ""}
//                     style={underlineStyle("account/address")}
//                   >
//                    <GrLocation /> {t?.address || "Address"}
//                   </Link>
//                   <Link
//                     href={generatePath("account/order-history")}
//                     className={pathname === generatePath("account/order-history") ? "active" : ""}
//                     style={underlineStyle("account/order-history")}
//                   >
//                     <RiFileList3Line />{t?.orderhistory || "Order History"}
//                   </Link>
//                   <Link
//                     href={generatePath("account/change-password")}
//                     className={pathname === generatePath("account/change-password") ? "active" : ""}
//                     style={underlineStyle("account/change-password")}
//                   >
//                     <FiUnlock />{t?.changepassword || "Change password"}
//                   </Link>
//                   <button onClick={handleLogoutClick}><BiLogOut />{t?.logout || "Logout"}</button>
//                 </div>
//               </div>
//               <div className="xl-8 lg-8 md-8 sm-12">{children}</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showLogoutPopup && (
//         <div className="logout-popup-overlay">
//           <div className="logout-popup">
//             <div className="logout-popup-content">
//               <div className="logout-icon">
//                 <BiLogOut />
//               </div>
//               <h3 className="logout-title">{t?.questionlogout || "Hesabdan çıxmaq istəyirsiniz?"}</h3>
//               <div className="logout-buttons">
//                 <button 
//                   className="logout-btn-cancel" 
//                   onClick={handleLogoutCancel}
//                 >
//                   {t?.no || "Xeyr"}
//                 </button>
//                 <button 
//                   className="logout-btn-confirm" 
//                   onClick={handleLogoutConfirm}
//                 >
//                   {t?.yes || "Bəli"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <Footer settingData={settingData} t={t} />
//     </>
//   );
// };

// export default AboutPage;

// ! SOS DIL DEYISIMI ISLEMIR






"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import axiosInstance from "@/lib/axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { BiLogOut } from "react-icons/bi";
import { FiUser, FiUnlock } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { RiFileList3Line } from "react-icons/ri";

async function getTranslations() {
  // 1) Dil bilgisini cookie'den alıyoruz
  const lang = Cookies.get("NEXT_LOCALE") || "az";

  try {
    // 2) API'ya Lang header ile çağrı
    const { data } = await axiosInstance.get("/translation-list", {
      headers: { Lang: lang },
      cache: "no-store",
    });

    // 3) Array'i { key: value } objesine dönüştürüyoruz
    return data.reduce((acc, item) => {
      acc[item.key] = item.value;
      return acc;
    }, {});
  } catch (err) {
    console.error("Failed to fetch translations:", err);
    return {};
  }
}

const AboutPage = ({ children }) => {
  const [t, setT] = useState({});
  const [categoryData, setCategoryData] = useState([]);
  const [settingData, setSettingData] = useState([]);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const pathname = usePathname();
  // 4) Client-side dil değeri
  const lang = Cookies.get("NEXT_LOCALE") || "az";
  const isDefaultLocale = lang === "az";

  useEffect(() => {
    async function init() {
      // a) Çevirileri yükle
      const translations = await getTranslations();
      setT(translations);

      // b) Kategorileri ve ayarları yükle
      try {
        const { data: home } = await axiosInstance.get("/layouts", {
          headers: { Lang: lang },
          cache: "no-store",
        });
        setCategoryData(home.categories || []);
        setSettingData(home.setting || []);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setCategoryData([]);
      }
    }
    init();
  }, [lang]); // lang değiştiğinde tekrar çalışır

  // Alt sayfa linklerini doğru locale ile oluşturur
  const generatePath = (path) =>
    isDefaultLocale ? `/${path}` : `/${lang}/${path}`;

  // Aktif link altını çizer
  const underlineStyle = (path) =>
    pathname === generatePath(path)
      ? { borderBottom: "2px solid #000", paddingBottom: "4px" }
      : {};

  const handleLogoutClick = () => setShowLogoutPopup(true);
  const handleLogoutCancel = () => setShowLogoutPopup(false);
  const handleLogoutConfirm = async () => {
    try {
      const token = Cookies.get("token");
      await axiosInstance.post(
        "/logout",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      Cookies.remove("token");
      const redirectTo = isDefaultLocale ? "/login" : `/${lang}/login`;
      window.location.href = redirectTo;
    } catch (error) {
      console.error("Logout failed:", error);
      setShowLogoutPopup(false);
    }
  };

  return (
    <>
      <Header settingData={settingData} t={t} categoryData={categoryData} />

      <div className="pagesProfile">
        <div className="account">
          <div className="container">
            <div className="row" id="account">
              <div className="xl-4 lg-4 md-4 sm-12">
                <div className="supportLeft">
                  <Link
                    href={generatePath("account/profile")}
                    style={underlineStyle("account/profile")}
                  >
                    <FiUser /> {t.profile || "Profile"}
                  </Link>
                  <Link
                    href={generatePath("account/address")}
                    style={underlineStyle("account/address")}
                  >
                    <GrLocation /> {t.address || "Address"}
                  </Link>
                  <Link
                    href={generatePath("account/order-history")}
                    style={underlineStyle("account/order-history")}
                  >
                    <RiFileList3Line /> {t.orderhistory || "Order History"}
                  </Link>
                  <Link
                    href={generatePath("account/change-password")}
                    style={underlineStyle("account/change-password")}
                  >
                    <FiUnlock /> {t.changepassword || "Change password"}
                  </Link>
                  <button onClick={handleLogoutClick}>
                    <BiLogOut /> {t.logout || "Logout"}
                  </button>
                </div>
              </div>

              <div className="xl-8 lg-8 md-8 sm-12">{children}</div>
            </div>
          </div>
        </div>
      </div>

      {showLogoutPopup && (
        <div className="logout-popup-overlay">
          <div className="logout-popup">
            <div className="logout-popup-content">
              <div className="logout-icon">
                <BiLogOut />
              </div>
              <h3 className="logout-title">
                {t.questionlogout || "Hesabdan çıxmaq istəyirsiniz?"}
              </h3>
              <div className="logout-buttons">
                <button
                  className="logout-btn-cancel"
                  onClick={handleLogoutCancel}
                >
                  {t.no || "Xeyr"}
                </button>
                <button
                  className="logout-btn-confirm"
                  onClick={handleLogoutConfirm}
                >
                  {t.yes || "Bəli"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer settingData={settingData} t={t} />
    </>
  );
};

export default AboutPage;
