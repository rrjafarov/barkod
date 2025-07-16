// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import axiosInstance from "@/lib/axios";
// import Cookies from "js-cookie";
// import { use } from "react";

// const AboutPage = ({ children, params }) => {
//   const unwrappedParams = use(params);
//   const { locale } = unwrappedParams;
//   const isDefaultLocale = locale === "az";
//   const pathname = usePathname();

//   const generatePath = (path) =>
//     isDefaultLocale ? `/${path}` : `/${locale}/${path}`;

//   const handleLogout = async () => {
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
//       const redirectTo = isDefaultLocale ? "/login" : `/${locale}/login`;
//       window.location.assign(redirectTo);
//       setTimeout(() => window.location.reload(), 2000);
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <>
//       <div className="pages">
//         {/* Breadcrumb komponenti də silinib, çünki dil dəyişikliklərinə bağlıdır */}
//         <div className="account">
//           <div className="container">
//             <div className="row">
//               <div className="xl-3 lg-3 md-3 sm-12">
//                 <div className="supportLeft">
//                   <Link
//                     href={generatePath("account/profile")}
//                     className={
//                       pathname === generatePath("account/profile")
//                         ? "active"
//                         : ""
//                     }
//                   >
//                     Profile
//                   </Link>
//                   <Link
//                     href={generatePath("account/address")}
//                     className={
//                       pathname === generatePath("account/address")
//                         ? "active"
//                         : ""
//                     }
//                   >
//                     Address
//                   </Link>
//                   <Link
//                     href={generatePath("account/order-history")}
//                     className={
//                       pathname === generatePath("account/order-history")
//                         ? "active"
//                         : ""
//                     }
//                   >
//                     Order History
//                   </Link>
//                   <Link
//                     href={generatePath("account/change-password")}
//                     className={
//                       pathname === generatePath("account/change-password")
//                         ? "active"
//                         : ""
//                     }
//                   >
//                     Change Password
//                   </Link>

//                   <button onClick={handleLogout}>
//                     Logout
//                   </button>
//                 </div>
//               </div>
//               <div className="xl-9 lg-9 md-9 sm-12">{children}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutPage;

















// "use client";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
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
//     return data.reduce((acc, item) => {
//       acc[item.key] = item.value;
//       return acc;
//     }, {});
//   } catch {
//     return {};
//   }
// }

// const AboutPage = ({ children, params }) => {
//   const [categoryData, setCategoryData] = useState([]);
//   const [showLogoutPopup, setShowLogoutPopup] = useState(false);
//   const [t, setT] = useState({});
//   const { locale } = use(params);
//   const isDefaultLocale = locale === "az";
//   const pathname = usePathname();
//   const router = useRouter();

//   const loginPath = isDefaultLocale ? "/login" : `/${locale}/login`;

//   // 1) Əgər token yoxdursa, dərhal login-ə yönləndir
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const token = Cookies.get("token");
//       if (!token) {
//         router.replace(loginPath);
//       }
//     }
//   }, [router, loginPath]);

//   // 2) Əgər endpoint 404/401 qaytararsa, hesab silinib hesab edək — token sil və login-ə yönləndir
//   useEffect(() => {
//     async function checkAccount() {
//       try {
//         const token = Cookies.get("token");
//         if (!token) return;
//         await axiosInstance.get("/account/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } catch (err) {
//         const status = err.response?.status;
//         if (status === 401 || status === 404) {
//           Cookies.remove("token");
//           router.replace(loginPath);
//         }
//       }
//     }
//     checkAccount();
//   }, [router, loginPath]);

//   // 3) Tərtibat üçün mövcud init bloqu
//   useEffect(() => {
//     async function init() {
//       const translations = await getTranslations();
//       setT(translations);
//       try {
//         const headers = locale ? { Lang: locale } : {};
//         const { data: home } = await axiosInstance.get("/layouts", { headers });
//         setCategoryData(home?.categories || []);
//       } catch {
//         setCategoryData([]);
//       }
//     }
//     init();
//   }, [locale]);

//   const generatePath = (path) =>
//     isDefaultLocale ? `/${path}` : `/${locale}/${path}`;

//   const handleLogoutClick = () => setShowLogoutPopup(true);
//   const handleLogoutCancel = () => setShowLogoutPopup(false);

//   const handleLogoutConfirm = async () => {
//     try {
//       const token = Cookies.get("token");
//       await axiosInstance.post(
//         "/logout",
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       Cookies.remove("token");
//       router.replace(loginPath);
//     } catch {
//       setShowLogoutPopup(false);
//     }
//   };

//   const underlineStyle = (path) =>
//     pathname === generatePath(path)
//       ? { borderBottom: "2px solid #000", paddingBottom: "4px" }
//       : {};

//   return (
//     <>
//       <Header t={t} categoryData={categoryData} />
//       <div className="pages">
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
//                     <GrLocation /> {t?.address || "Address"}
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
//                   <button onClick={handleLogoutClick}>
//                     <BiLogOut />{t?.logout || "Logout"}
//                   </button>
//                 </div>
//               </div>
//               <div className="xl-8 lg-8 md-8 sm-12">
//                 {children}
//               </div>
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
//               <h3 className="logout-title">
//                 {t?.questionlogout || "Hesabdan çıxmaq istəyirsiniz?"}
//               </h3>
//               <div className="logout-buttons">
//                 <button className="logout-btn-cancel" onClick={handleLogoutCancel}>
//                   {t?.no || "Xeyr"}
//                 </button>
//                 <button className="logout-btn-confirm" onClick={handleLogoutConfirm}>
//                   {t?.yes || "Bəli"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <Footer t={t} />
//     </>
//   );
// };

// export default AboutPage;


















// ! dunene kimi isleyirdin icine pox qoydular

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axiosInstance from "@/lib/axios";
import Cookies from "js-cookie";
import { use, useState, useEffect } from "react";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { BiLogOut } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { RiFileList3Line } from "react-icons/ri";
import { FiUnlock } from "react-icons/fi";


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


const AboutPage = ({ children, params }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [settingData, setSettingData] = useState([]);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [t, setT] = useState({});
  const unwrappedParams = use(params);
  const { locale } = unwrappedParams;
  const isDefaultLocale = locale === "az";
  const pathname = usePathname();

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const headers = {};
  //       if (locale) {
  //         headers["Lang"] = locale;
  //       }
  //       const { data: home } = await axiosInstance.get("/layouts", {
  //         headers,
  //       });
  //       setCategoryData(home?.categories || []);
  //     } catch (error) {
  //       console.error("Failed to fetch categories:", error);
  //       setCategoryData([]);
  //     }
  //   };
    
  //   fetchCategories();
  // }, [locale]);


   useEffect(() => {
    async function init() {
      // 1) load translations
      const translations = await getTranslations();
      setT(translations);

      // 2) load categories
      try {
        const headers = {};
        if (locale) {
          headers["Lang"] = locale;
        }
        const { data: home } = await axiosInstance.get("/layouts", {
          headers,
        });
        setCategoryData(home?.categories || []);
        setSettingData(home?.setting || []);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setCategoryData([]);
      }
    }
    init();
  }, [locale]);


  const generatePath = (path) =>
    isDefaultLocale ? `/${path}` : `/${locale}/${path}`;

  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  const handleLogoutConfirm = async () => {
    try {
      const token = typeof window !== "undefined" && Cookies.get("token");
      await axiosInstance.post(
        "/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Cookies.remove("token");
      setShowLogoutPopup(false);
      const redirectTo = isDefaultLocale ? "/login" : `/${locale}/login`;
      window.location.href = redirectTo;
    } catch (error) {
      console.error("Logout failed:", error);
      setShowLogoutPopup(false);
    }
  };

  const handleLogoutCancel = () => {
    setShowLogoutPopup(false);
  };

  // inline style helper for underline
  const underlineStyle = (path) => {
    return pathname === generatePath(path)
      ? { borderBottom: "2px solid #000", paddingBottom: "4px" }
      : {};
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
                    className={pathname === generatePath("account/profile") ? "active" : ""}
                    style={underlineStyle("account/profile")}
                  >
                    <FiUser />{t?.profile || "Profile"}
                  </Link>
                  <Link
                    href={generatePath("account/address")}
                    className={pathname === generatePath("account/address") ? "active" : ""}
                    style={underlineStyle("account/address")}
                  >
                   <GrLocation /> {t?.address || "Address"}
                  </Link>
                  <Link
                    href={generatePath("account/order-history")}
                    className={pathname === generatePath("account/order-history") ? "active" : ""}
                    style={underlineStyle("account/order-history")}
                  >
                    <RiFileList3Line />{t?.orderhistory || "Order History"}
                  </Link>
                  <Link
                    href={generatePath("account/change-password")}
                    className={pathname === generatePath("account/change-password") ? "active" : ""}
                    style={underlineStyle("account/change-password")}
                  >
                    <FiUnlock />{t?.changepassword || "Change password"}
                  </Link>
                  <button onClick={handleLogoutClick}><BiLogOut />{t?.logout || "Logout"}</button>
                </div>
              </div>
              <div className="xl-8 lg-8 md-8 sm-12">{children}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div className="logout-popup-overlay">
          <div className="logout-popup">
            <div className="logout-popup-content">
              <div className="logout-icon">
                <BiLogOut />
              </div>
              <h3 className="logout-title">{t?.questionlogout || "Hesabdan çıxmaq istəyirsiniz?"}</h3>
              <div className="logout-buttons">
                <button 
                  className="logout-btn-cancel" 
                  onClick={handleLogoutCancel}
                >
                  {t?.no || "Xeyr"}
                </button>
                <button 
                  className="logout-btn-confirm" 
                  onClick={handleLogoutConfirm}
                >
                  {t?.yes || "Bəli"}
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

