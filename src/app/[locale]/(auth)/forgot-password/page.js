// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import axiosInstance from "@/lib/axios";
// // import Breadcrumb from "@/src/components/Breadcrumb";
// // import Lock from "@/public/lock.svg";
// // import Eye from "@/public/eye.svg";
// // import Popup from "@/src/components/Popup";
// // import { useTranslations } from "next-intl";
// import Cookies from "js-cookie";

// import { HiLockClosed } from "react-icons/hi";
// import { LuEyeClosed, LuEye } from "react-icons/lu";

// const ForgotPasswordPage = () => {
//   const t = useTranslations();
//   const router = useRouter();
//   const [isPopup, setIsPopup] = useState(false);
//   const [formData, setFormData] = useState({
//     tel: "",
//     otp_code: "",
//     password: "",
//     password_confirmation: "",
//   });
//   const [resetPage, setResetPage] = useState(false);
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [passwordVisibleConfirm, setPasswordVisibleConfirm] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!resetPage) {
//         const response = await axiosInstance.post("/otp", {
//           tel: formData.tel,
//           otp_code: formData.otp_code,
//         });
//         setResetPage(true);
//       } else {
//         const response = await axiosInstance.post("/reset-password", {
//           tel: formData.tel,
//           otp_code: formData.otp_code,
//           password: formData.password,
//           password_confirmation: formData.password_confirmation,
//         });
//         setIsPopup(true);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       password !== password_confirmation && setError(t("password-not-match"));
//       error?.response?.data?.errors?.otp_code && setError(t("invalid-otp"));
//       error?.response?.data?.errors?.tel &&
//         setError(t("phone-number-must-be-9"));
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const locale = Cookies.get("NEXT_LOCALE") || "az";
//     if (token) {
//       router.push(`/${locale}/account/profile`);
//     }
//   }, [router]);

//   return (
//     <div className="pages">
//       {/* <Popup icon="check" title="password-reset-success" isActive={isPopup} /> */}
//       {/* <Breadcrumb
//         pageTitle="forgot-password"
//         title="forgot-password"
//         link="/forgot-password"
//       /> */}
//       <div className="auth">
//         {!resetPage ? (
//           <div className="authContainer">
//             <div className="authHeader">
//               <span className="active">{t("forgot-password")}</span>
//             </div>
//             <form onSubmit={handleSubmit}>
//               <label>{t("number")}</label>
//               <div className="phoneInput">
//                 <span>+994</span>
//                 <input
//                   type="number"
//                   id="phone"
//                   name="tel"
//                   className="input"
//                   placeholder=""
//                   required
//                   value={formData.tel}
//                   onChange={(e) =>
//                     setFormData({ ...formData, tel: e.target.value })
//                   }
//                 />
//               </div>
//               <button type="submit" className="blackButton">
//                 {t("send")}
//               </button>
//               {error && <div className="errorInfo">{error}</div>}
//             </form>
//           </div>
//         ) : (
//           <div className="authContainer">
//             <div className="authHeader">
//               <span className="active">{t("set-your-new-password")}</span>
//             </div>
//             <form onSubmit={handleSubmit}>
//               <label>{t("otp-code")}</label>
//               <div className="inputChild">
//                 <input
//                   type="text"
//                   id="otp_code"
//                   name="otp_code"
//                   className="input"
//                   required
//                   value={formData.otp_code}
//                   onChange={(e) =>
//                     setFormData({ ...formData, otp_code: e.target.value })
//                   }
//                 />
//               </div>
//               <label>{t("new-password")}</label>
//               <div className="inputChild passwordChild">
//                 <div className="password">
//                   <HiLockClosed />
//                 </div>
//                 <input
//                   type={passwordVisible ? "text" : "password"}
//                   placeholder="******"
//                   id="password"
//                   name="password"
//                   required
//                   value={formData.password}
//                   onChange={(e) =>
//                     setFormData({ ...formData, password: e.target.value })
//                   }
//                 />
//                 <div
//                   className="eye"
//                   onClick={() => setPasswordVisible((prev) => !prev)}
//                 >
//                   <LuEyeClosed />
//                 </div>
//               </div>
//               <label>{t("confirm-password")}</label>
//               <div className="inputChild passwordChild">
//                 <div className="password">
//                   <HiLockClosed />
//                 </div>
//                 <input
//                   type={passwordVisibleConfirm ? "text" : "password"}
//                   placeholder="******"
//                   id="password_confirmation"
//                   name="password_confirmation"
//                   required
//                   value={formData.password_confirmation}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       password_confirmation: e.target.value,
//                     })
//                   }
//                 />
//                 <div
//                   className="eye"
//                   onClick={() => setPasswordVisibleConfirm((prev) => !prev)}
//                 >
//                   <LuEyeClosed />
//                 </div>
//               </div>
//               <button type="submit" className="blackButton">
//                 {t("reset-password")}
//               </button>
//               {error && <div className="errorInfo">{error}</div>}
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPasswordPage;











"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axios";
import Cookies from "js-cookie";
import { HiLockClosed } from "react-icons/hi";
import { LuEyeClosed, LuEye } from "react-icons/lu";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
    return {};
  }
}

const ForgotPasswordPage = () => {
  const router = useRouter();
  const [categoryData, setCategoryData] = useState([]);
  const [settingData, setSettingData] = useState([]);
  const [t, setT] = useState({});   
  const [isPopup, setIsPopup] = useState(false);
  const [formData, setFormData] = useState({
    tel: "",
    otp_code: "",
    password: "",
    password_confirmation: "",
  });
  const [resetPage, setResetPage] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleConfirm, setPasswordVisibleConfirm] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // ===== YENI: SUPPORT VERISI UCUN STATE =====
  const [supportData, setSupportData] = useState([]);

  // ===== YENI: SUPPORT VERISINI CEKEN FUNKSIYA (HEADER/FOOTER UCUN) =====
  const fetchSupportData = async () => {
    try {
      const lang = Cookies.get("NEXT_LOCALE");
      const headers = {};
      if (lang) headers["Lang"] = lang;
      const { data } = await axiosInstance.get("/support", { headers });
      setSupportData(data?.support || []);
    } catch {
      setSupportData([]);
    }
  };


  // fetch categories on mount
  // useEffect(() => {
  //   async function fetchCategories() {
  //     try {
  //       const lang = Cookies.get("NEXT_LOCALE");
  //       const headers = {};
  //       if (lang) headers["Lang"] = lang;
  //       const { data } = await axiosInstance.get("/layouts", { headers });
  //       setCategoryData(data.categories || []);
  //     } catch (err) {
  //       console.error("Failed to load categories", err);
  //       setCategoryData([]);
  //     }
  //   }
  //   fetchCategories();
  // }, []);


   useEffect(() => {
    async function init() {
      // 1) translations
      const translations = await getTranslations();
      setT(translations);

      // 2) categories
      try {
        const lang = Cookies.get("NEXT_LOCALE");
        const headers = {};
        if (lang) headers["Lang"] = lang;
        const { data } = await axiosInstance.get("/layouts", { headers });
        setCategoryData(data.categories || []);
        setSettingData(data.setting || []);

      } catch {
        setCategoryData([]);
      }
      // ===== YENI: INIT ICINDE SUPPORT VERISINI DE YIG =====
      await fetchSupportData();
    }
    init();
  }, []);

  // redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/account/profile");
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!resetPage) {
        await axiosInstance.post("/otp", {
          tel: formData.tel,
          otp_code: formData.otp_code,
        });
        setResetPage(true);
        setError(null);
      } else {
        await axiosInstance.post("/reset-password", {
          tel: formData.tel,
          otp_code: formData.otp_code,
          password: formData.password,
          password_confirmation: formData.password_confirmation,
        });
        setIsPopup(true);
        setError(null);
      }
    } catch (err) {
      console.error("Error:", err);
      if (formData.password !== formData.password_confirmation) {
        setError("Passwords do not match.");
      } else if (err?.response?.data?.errors?.otp_code) {
        setError("Invalid OTP code.");
      } else if (err?.response?.data?.errors?.tel) {
        setError("Phone number must be 9 digits.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header supportData={supportData} settingData={settingData} t={t} categoryData={categoryData} />

      <div className="pages">
        <div className="auth">
          {!resetPage ? (
            <div className="authContainer">
              <div className="authHeader">
                <span className="active">{t?.["forgot-pass"] || "forgot password"}</span>
              </div>
              <form onSubmit={handleSubmit}>
                <label>{t?.num}</label>
                <div className="phoneInput">
                  <span>+994</span>
                  <input
                    type="number"
                    id="phone"
                    name="tel"
                    className="input"
                    required
                    value={formData.tel}
                    onChange={(e) =>
                      setFormData({ ...formData, tel: e.target.value })
                    }
                  />
                </div>
                <button type="submit" className="blackButton" disabled={isLoading}>
                  {isLoading ? (
                    <div style={{ 
                      width: '20px', 
                      height: '20px', 
                      border: '2px solid transparent', 
                      borderTop: '2px solid white', 
                      borderRadius: '50%', 
                      animation: 'spin 1s linear infinite' 
                    }}></div>
                  ) : (
                    t?.send || "send"
                  )}
                </button>
                {error && <div className="errorInfo">{error}</div>}
              </form>
            </div>
          ) : (
            <div className="authContainer">
              <div className="authHeader">
                <span className="active">
                  {t?.["setnewpass"] || "Set your new password"}
                </span>
              </div>
              <form onSubmit={handleSubmit}>
                <label>{t?.["otp-verification"] || "OTP Code"}</label>
                <div className="inputChild">
                  <input
                    type="text"
                    id="otp_code"
                    name="otp_code"
                    className="input"
                    required
                    value={formData.otp_code}
                    onChange={(e) =>
                      setFormData({ ...formData, otp_code: e.target.value })
                    }
                  />
                </div>
                <label>{t?.["new-password"] || "New password"}</label>
                <div className="inputChild passwordChild">
                  {/* <div className="password">
                    <HiLockClosed />
                  </div> */}
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder=""
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <div
                    className="eyes"
                    onClick={() => setPasswordVisible((prev) => !prev)}
                  >
                    {passwordVisible ? <LuEye /> : <LuEyeClosed />}
                  </div>
                </div>
                <label>{t?.["confirm-pass"] || "Confirm Password"}</label>
                <div className="inputChild passwordChild">
                  {/* <div className="password">
                    <HiLockClosed />
                  </div> */}
                  <input
                    type={passwordVisibleConfirm ? "text" : "password"}
                    placeholder=""
                    id="password_confirmation"
                    name="password_confirmation"
                    required
                    value={formData.password_confirmation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password_confirmation: e.target.value,
                      })
                    }
                  />
                  <div
                    className="eyes"
                    onClick={() =>
                      setPasswordVisibleConfirm((prev) => !prev)
                    }
                  >
                    {passwordVisibleConfirm ? <LuEye /> : <LuEyeClosed />}
                  </div>
                </div>
                <button type="submit" className="blackButton" disabled={isLoading}>
                  {isLoading ? (
                    <div style={{ 
                      width: '20px', 
                      height: '20px', 
                      border: '2px solid transparent', 
                      borderTop: '2px solid white', 
                      borderRadius: '50%', 
                      animation: 'spin 1s linear infinite' 
                    }}></div>
                  ) : (
                    t?.["reset-pass"] || "Reset Password"
                  )}
                </button>
                {error && <div className="errorInfo">{error}</div>}
              </form>
            </div>
          )}
        </div>
      </div>

      <Footer supportData={supportData} settingData={settingData} t={t} />

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default ForgotPasswordPage;

















