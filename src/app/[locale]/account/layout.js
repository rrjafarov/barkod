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

const AboutPage = ({ children, params }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const unwrappedParams = use(params);
  const { locale } = unwrappedParams;
  const isDefaultLocale = locale === "az";
  const pathname = usePathname();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const headers = {};
        if (locale) {
          headers["Lang"] = locale;
        }
        const { data: home } = await axiosInstance.get("/layouts", {
          headers,
        });
        setCategoryData(home?.categories || []);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setCategoryData([]);
      }
    };
    
    fetchCategories();
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
      window.location.assign(redirectTo);
      setTimeout(() => window.location.reload(), 2000);
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
      <Header categoryData={categoryData} />
      <div className="pages">
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
                    <FiUser />Profile
                  </Link>
                  <Link
                    href={generatePath("account/address")}
                    className={pathname === generatePath("account/address") ? "active" : ""}
                    style={underlineStyle("account/address")}
                  >
                   <GrLocation /> Address
                  </Link>
                  <Link
                    href={generatePath("account/order-history")}
                    className={pathname === generatePath("account/order-history") ? "active" : ""}
                    style={underlineStyle("account/order-history")}
                  >
                    <RiFileList3Line />Order History
                  </Link>
                  <Link
                    href={generatePath("account/change-password")}
                    className={pathname === generatePath("account/change-password") ? "active" : ""}
                    style={underlineStyle("account/change-password")}
                  >
                    <FiUnlock />Change Password
                  </Link>
                  <button onClick={handleLogoutClick}><BiLogOut />Logout</button>
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
              <h3 className="logout-title">Hesabdan çıxmaq istəyirsiniz?</h3>
              {/* <p className="logout-message">Bu əməliyyatı təsdiqləsəniz, hesabınızdan çıxacaqsınız.</p> */}
              <div className="logout-buttons">
                <button 
                  className="logout-btn-cancel" 
                  onClick={handleLogoutCancel}
                >
                  Xeyr
                </button>
                <button 
                  className="logout-btn-confirm" 
                  onClick={handleLogoutConfirm}
                >
                  Bəli
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default AboutPage;








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



// const AboutPage = ({ children, params }) => {
//   const [categoryData, setCategoryData] = useState([]);
//   const unwrappedParams = use(params);
//   const { locale } = unwrappedParams;
//   const isDefaultLocale = locale === "az";
//   const pathname = usePathname();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const headers = {};
//         if (locale) {
//           headers["Lang"] = locale;
//         }
//         const { data: home } = await axiosInstance.get("/layouts", {
//           headers,
//         });
//         setCategoryData(home?.categories || []);
//       } catch (error) {
//         console.error("Failed to fetch categories:", error);
//         setCategoryData([]);
//       }
//     };
    
//     fetchCategories();
//   }, [locale]);

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

//   // inline style helper for underline
//   const underlineStyle = (path) => {
//     return pathname === generatePath(path)
//       ? { borderBottom: "2px solid #000", paddingBottom: "4px" }
//       : {};
//   };

//   return (
//     <>
//       <Header categoryData={categoryData} />
//       <div className="pages">
//         <div className="account">
//           <div className="container">
//             <div className="row" id="account">
//               <div className="xl-3 lg-3 md-3 sm-12">
//                 <div className="supportLeft">
//                   <Link
//                     href={generatePath("account/profile")}
//                     className={pathname === generatePath("account/profile") ? "active" : ""}
//                     style={underlineStyle("account/profile")}
//                   >
//                     <FiUser />Profile
//                   </Link>
//                   <Link
//                     href={generatePath("account/address")}
//                     className={pathname === generatePath("account/address") ? "active" : ""}
//                     style={underlineStyle("account/address")}
//                   >
//                    <GrLocation /> Address
//                   </Link>
//                   <Link
//                     href={generatePath("account/order-history")}
//                     className={pathname === generatePath("account/order-history") ? "active" : ""}
//                     style={underlineStyle("account/order-history")}
//                   >
//                     <RiFileList3Line />Order History
//                   </Link>
//                   <Link
//                     href={generatePath("account/change-password")}
//                     className={pathname === generatePath("account/change-password") ? "active" : ""}
//                     style={underlineStyle("account/change-password")}
//                   >
//                     <FiUnlock />Change Password
//                   </Link>
//                   <button onClick={handleLogout}><BiLogOut />Logout</button>
//                 </div>
//               </div>
//               <div className="xl-9 lg-9 md-9 sm-12">{children}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AboutPage;














