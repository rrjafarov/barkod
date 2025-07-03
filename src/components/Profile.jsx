// import React from "react";

// const Profile = () => {
//   return (
//     <div>
//       <div className="container">
//         <div className="profile">
//           <span>Profil</span>
//           <div className="profileContent">
//             <span>Şəxsi məlumatlar</span>
//             <div className="profileName">
//               <strong>Ad soyad:</strong>
//               <span>Rafael Jafarov</span>
//             </div>
//             <div className="profilePhone">
//               <strong>Telefon:</strong>
//               <div className="profilePhoneContent">
//                 <strong>+994</strong>
//                 <span>708284050</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;




























// ----------------------------
// "use client";

// import React, { useState, useEffect } from "react";
// // import Popup from "@/src/components/Popup";
// import {
//   useGetUserInfoQuery,
//   useUpdateUserInfoMutation,
// } from "@/redux/userService";

// const Profile = () => {
//   const [formData, setFormData] = useState({
//     name_surname: "",
//     tel: "",
//   });
//   const [error, setError] = useState(null);
//   const [isPopup, setIsPopup] = useState(false);

//   const {
//     data: userInfo,
//     error: fetchError,
//     isLoading,
//   } = useGetUserInfoQuery();

//   const [updateUserInfo, { isLoading: isUpdating }] =
//     useUpdateUserInfoMutation();

//   useEffect(() => {
//     if (userInfo) {
//       setFormData({
//         name_surname: userInfo.name_surname || "",
//         tel: userInfo.tel || "",
//       });
//     }
//     if (fetchError) {
//       console.error("İstifadəçi məlumatları alınmadı:", fetchError);
//     }
//   }, [userInfo, fetchError]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     const digits = (formData.tel || "").replace(/\D/g, "");
//     if (digits.length !== 9) {
//       setError("Telefon nömrəsi 9 rəqəm olmalıdır");
//       return;
//     }

//     if (!formData.name_surname.trim()) {
//       setError("Ad soyad boş ola bilməz");
//       return;
//     }

//     try {
//       await updateUserInfo({
//         name_surname: formData.name_surname.trim(),
//         tel: digits,
//       }).unwrap();

//       setIsPopup(true);
//       setError(null);
//       setTimeout(() => setIsPopup(false), 2000);
//     } catch (updateErr) {
//       console.error("Məlumat yenilənərkən xəta baş verdi:", updateErr);
//       setError("Məlumat yenilənərkən xəta baş verdi");
//       setTimeout(() => setIsPopup(false), 2000);
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="loaderDiv">
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="container">
//         <div className="profile">
//           <span>Profil</span>

//           <div className="profileContent">
//             <span>Şəxsi məlumatlar</span>

//             {/* <Popup icon="check" isActive={isPopup} title="Uğurla yeniləndi" /> */}

//             <form onSubmit={handleSubmit}>
//               <div className="profileName">
//                 <strong>Ad soyad:</strong>
//                 <input
//                   type="text"
//                   value={formData.name_surname}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name_surname: e.target.value })
//                   }
//                 />
//               </div>

//               <div className="profilePhone">
//                 <strong>Telefon:</strong>
//                 <div className="profilePhoneContent">
//                   <strong>+994</strong>
//                   <input
//                     type="text"
//                     value={formData.tel || ""}
//                     maxLength={9}
//                     pattern="[0-9]{9}"
//                     inputMode="numeric"
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         tel: e.target.value.replace(/\D/g, ""),
//                       })
//                     }
//                   />
//                 </div>
//               </div>

//               <button type="submit" className="blackButton" disabled={isUpdating}>
//                 {isUpdating ? "Yadda saxlanır..." : "Yadda saxla"}
//               </button>

//               {error && <div className="errorInfo">{error}</div>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// ----------------------------



"use client";

import React, { useState, useEffect } from "react";
import {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} from "@/redux/userService";

const Profile = ({t}) => {
  const [formData, setFormData] = useState({
    name_surname: "",
    tel: "",
  });
  const [error, setError] = useState(null);
  const [isPopup, setIsPopup] = useState(false);

  const {
    data: userInfo,
    error: fetchError,
    isLoading,
  } = useGetUserInfoQuery();

  const [updateUserInfo, { isLoading: isUpdating }] =
    useUpdateUserInfoMutation();

  useEffect(() => {
    if (userInfo) {
      setFormData({
        name_surname: userInfo.name_surname || "",
        tel: userInfo.tel || "",
      });
    }
    if (fetchError) {
      console.error("İstifadəçi məlumatları alınmadı:", fetchError);
    }
  }, [userInfo, fetchError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const digits = (formData.tel || "").replace(/\D/g, "");
    if (digits.length !== 9) {
      setError("Telefon nömrəsi 9 rəqəm olmalıdır");
      return;
    }

    if (!formData.name_surname.trim()) {
      setError("Ad soyad boş ola bilməz");
      return;
    }

    try {
      await updateUserInfo({
        name_surname: formData.name_surname.trim(),
        tel: digits,
      }).unwrap();

      setIsPopup(true);
      setError(null);
      setTimeout(() => setIsPopup(false), 2000);
    } catch (updateErr) {
      console.error("Məlumat yenilənərkən xəta baş verdi:", updateErr);
      setError("Məlumat yenilənərkən xəta baş verdi");
      setTimeout(() => setIsPopup(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="loaderDiv">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="profile">
      {/* <span>Profil</span> */}

      <div className="profileContent">
        <span>{t?.["personal-info"] || "Personal information"}</span>

        {/* <Popup icon="check" isActive={isPopup} title="Uğurla yeniləndi" /> */}

        <form onSubmit={handleSubmit}>
          <div className="profileName">
            <strong>{t?.namesurname || "Name surname"}:</strong>
            <input
              type="text"
              value={formData.name_surname}
              onChange={(e) =>
                setFormData({ ...formData, name_surname: e.target.value })
              }
            />
          </div>

          <div className="profilePhone">
            <strong>{t?.phone || "phone"}:</strong>
            <div className="profilePhoneContent">
              <strong>+994</strong>
              <input
                type="text"
                value={formData.tel || ""}
                maxLength={9}
                pattern="[0-9]{9}"
                inputMode="numeric"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    tel: e.target.value.replace(/\D/g, ""),
                  })
                }
              />
            </div>
          </div>

          {/* <button type="submit" className="blackButton" disabled={isUpdating}>
            {isUpdating ? "Yadda saxlanır..." : "Yadda saxla"}
          </button> */}

          {error && <div className="errorInfo">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Profile;










// // components/Profile.jsx
// "use client";

// import React, { useState, useEffect } from "react";
// // import { useTranslations } from "next-intl";
// import Cookies from "js-cookie"; // Eğer gerekirse token kontrolü yapılabilir
// // import Popup from "@/src/components/Popup"; // Projendeki Popup bileşen yoluna göre ayarlayın
// import {
//   useGetUserInfoQuery,
//   useUpdateUserInfoMutation,
// } from "@/redux/userService"; // Proje yolunuza göre ayarlayın

// const Profile = () => {
//   // const t = useTranslations();

//   // Form state
//   const [formData, setFormData] = useState({
//     name_surname: "",
//     tel: "",
//   });
//   const [error, setError] = useState(null);
//   const [isPopup, setIsPopup] = useState(false);

//   // RTK Query hooks
//   const {
//     data: userInfo,
//     error: fetchError,
//     isLoading,
//   } = useGetUserInfoQuery();

//   const [updateUserInfo, { isLoading: isUpdating }] = useUpdateUserInfoMutation();

//   // When userInfo loads, populate formData
//   useEffect(() => {
//     if (userInfo) {
//       setFormData({
//         name_surname: userInfo.name_surname || "",
//         tel: userInfo.tel || "",
//       });
//     }
//     if (fetchError) {
//       console.error("User info fetch failed:", fetchError);
//     }
//   }, [userInfo, fetchError]);

//   // Handle save button
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     // Validate phone length = 9 digits
//     const digits = (formData.tel || "").replace(/\D/g, "");
//     if (digits.length !== 9) {
//       setError(t("phone-number-must-be-9") || "Telefon nömrəsi 9 rəqəm olmalıdır");
//       return;
//     }

//     // Optionally validate name_surname non-empty
//     if (!formData.name_surname.trim()) {
//       setError(t("name-required") || "Ad soyad boş ola bilməz");
//       return;
//     }

//     try {
//       await updateUserInfo({
//         name_surname: formData.name_surname.trim(),
//         tel: digits,
//       }).unwrap();

//       // Show popup
//       setIsPopup(true);
//       setError(null);
//       // Hide popup after 2s
//       setTimeout(() => setIsPopup(false), 2000);
//     } catch (updateErr) {
//       console.error("User info update failed:", updateErr);
//       setError(t("fill-error") || "Məlumat yenilənərkən xəta baş verdi");
//       // Still hide popup if somehow shown
//       setTimeout(() => setIsPopup(false), 2000);
//     }
//   };

//   if (isLoading) {
//     // Loader while fetching
//     return (
//       <div className="loaderDiv">
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="container">
//         <div className="profile">
//           {/* Title */}
//           <span>{t("profile") || "Profil"}</span>

//           <div className="profileContent">
//             {/* Subtitle */}
//             <span>{t("personal-information") || "Şəxsi məlumatlar"}</span>

//             {/* Popup: appears on successful update */}
//             <Popup icon="check" isActive={isPopup} title="profile-updated" />

//             {/* Form fields */}
//             <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//               {/* Name */}
//               <div className="profileName" style={{ marginBottom: "1rem" }}>
//                 <strong>{t("name-surname") || "Ad soyad:"}</strong>
//                 <input
//                   type="text"
//                   value={formData.name_surname}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name_surname: e.target.value })
//                   }
//                   className="inputChild" // Eğer stil gerekiyorsa
//                   style={{ marginLeft: "0.5rem" }}
//                 />
//               </div>

//               {/* Phone */}
//               <div className="profilePhone" style={{ marginBottom: "1rem" }}>
//                 <strong>{t("number") || "Telefon:"}</strong>
//                 <div
//                   className="profilePhoneContent phoneInput"
//                   style={{ display: "inline-flex", alignItems: "center", marginLeft: "0.5rem" }}
//                 >
//                   <strong>+994</strong>
//                   <input
//                     type="text"
//                     value={formData.tel || ""}
//                     maxLength={9}
//                     pattern="[0-9]{9}"
//                     inputMode="numeric"
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         tel: e.target.value.replace(/\D/g, ""),
//                       })
//                     }
//                     className="input"
//                     style={{ marginLeft: "0.5rem" }}
//                   />
//                 </div>
//               </div>

//               {/* Save button */}
//               <button
//                 type="submit"
//                 className="blackButton"
//                 disabled={isUpdating}
//                 style={{ marginTop: "1rem" }}
//               >
//                 {isUpdating
//                   ? (t("saving") || "Yadda saxlanır...")
//                   : t("save") || "Yadda saxla"}
//               </button>

//               {/* Error message */}
//               {error && (
//                 <div className="errorInfo" style={{ marginTop: "0.5rem" }}>
//                   {error}
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

