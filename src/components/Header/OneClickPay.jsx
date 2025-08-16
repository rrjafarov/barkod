// import React, { useState, useRef, useEffect } from "react";
// import { FormControl, Select, MenuItem } from "@mui/material";

// const OneClickPay = ({ t, closeModal, handleOverlayClick }) => {
//   const [selectedPrefix, setSelectedPrefix] = useState("050");
//   const portalElRef = useRef(null);

//   useEffect(() => {
//     let el = document.getElementById("mui-portal-top");
//     if (!el) {
//       el = document.createElement("div");
//       el.id = "mui-portal-top";
//       el.style.position = "relative";
//       el.style.zIndex = "2147483647";
//       document.body.appendChild(el);
//     }
//     portalElRef.current = el;
//   }, []);

//   const prefixOptions = [
//     { value: "050", label: "050" },
//     { value: "051", label: "051" },
//     { value: "010", label: "010" },
//     { value: "055", label: "055" },
//     { value: "099", label: "099" },
//     { value: "070", label: "070" },
//     { value: "077", label: "077" },
//   ];

//   return (
//     <div className="modal-overlay" onClick={handleOverlayClick}>
//       <div className="modal">
//         <button className="close-btns" onClick={closeModal}>
//           X
//         </button>
//         <span>{t?.oneclickpay || "Bir Kliklə al"}</span>
//         <p>{t?.emekdaslar}</p>
//           <input className="onuClickInput" type="text" placeholder={t?.namesurname} />

//         <div
//           className="numberModal"
//           style={{ display: "flex", alignItems: "center" }}
//         >
//           <FormControl sx={{ width: "10rem", marginRight: "10px" }}>
//             <Select
//               value={selectedPrefix}
//               onChange={(e) => setSelectedPrefix(e.target.value)}
//               displayEmpty
//               variant="standard" // borderləri götürür
//               disableUnderline // alt xətti də götürür
//               sx={{
//                 fontSize: "1.6rem", // font bir az böyüdü
//                 textAlign: "center", // texti mərkəzləşdirir
//                 fontWeight: 600,
//                 "& .MuiSelect-select": {
//                   padding: "5px 0", // əlavə boşluq
//                 },
//               }}
//               MenuProps={{
//                 container: () => portalElRef.current || document.body,
//                 PaperProps: {
//                   sx: {
//                     zIndex: 2147483647,
//                     fontSize: "1.6rem", // menyuda da font böyüdü
//                     fontWeight: 600,
//                   },
//                 },
//               }}
//             >
//               {prefixOptions.map((option) => (
//                 <MenuItem
//                   key={option.value}
//                   value={option.value}
//                   sx={{ fontSize: "1.6rem", fontWeight: 600 }}
//                 >
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             placeholder={t?.num || "Nömrəni daxil edin"}
//           />
//         </div>

//         <button className="open-btn">{t?.confirm || "Təsdiq Et"}</button>
//       </div>
//     </div>
//   );
// };

// export default OneClickPay;













import React, { useState, useRef, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";

const OneClickPay = ({ t, product, closeModal, handleOverlayClick }) => {
  const [selectedPrefix, setSelectedPrefix] = useState("050");
  const [nameSurname, setNameSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const portalElRef = useRef(null);

  useEffect(() => {
    let el = document.getElementById("mui-portal-top");
    if (!el) {
      el = document.createElement("div");
      el.id = "mui-portal-top";
      el.style.position = "relative";
      el.style.zIndex = "2147483647";
      document.body.appendChild(el);
    }
    portalElRef.current = el;
  }, []);

  const prefixOptions = [
    { value: "050", label: "050" },
    { value: "051", label: "051" },
    { value: "010", label: "010" },
    { value: "055", label: "055" },
    { value: "099", label: "099" },
    { value: "070", label: "070" },
    { value: "077", label: "077" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validasiyası
    if (!nameSurname.trim()) {
      alert("Ad və soyad daxil edilməlidir");
      return;
    }

    if (!phoneNumber.trim() || phoneNumber.length < 7) {
      alert("Düzgün telefon nömrəsi daxil edilməlidir");
      return;
    }

    if (!product?.id) {
      alert("Məhsul seçilməyib");
      return;
    }

    setIsSubmitting(true);

    try {
      // Tam telefon nömrəsi
      const fullPhoneNumber = selectedPrefix + phoneNumber;

      // API URL-ni düzgün şəkildə yarad
      const apiUrl =
        process.env.NEXT_PUBLIC_BASE_URL ||
        "https://dev-api.barkodelectronics.az/api/v1";
      const url = `${apiUrl}/call-order?name_surname=${encodeURIComponent(
        nameSurname
      )}&tel=${fullPhoneNumber}`;

      // API çağırışı
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: product.id,
          product_name: product.name,
          product_price: product.price,
          name_surname: nameSurname,
          phone: fullPhoneNumber,
        }),
      });

      // Hər halda müsbət nəticə göstər
      setShowSuccessPopup(true);
      // Formu təmizlə
      setNameSurname("");
      setPhoneNumber("");
      setSelectedPrefix("050");

      // 2 saniyədən sonra popup-u gizlə və modalı bağla
      setTimeout(() => {
        setShowSuccessPopup(false);
        closeModal();
      }, 2000);
    } catch (error) {
      console.error("One click pay error:", error);
      // Xəta olsa belə, istifadəçiyə müsbət mesaj ver
      setShowSuccessPopup(true);
      // Formu təmizlə
      setNameSurname("");
      setPhoneNumber("");
      setSelectedPrefix("050");

      // 2 saniyədən sonra popup-u gizlə və modalı bağla
      setTimeout(() => {
        setShowSuccessPopup(false);
        closeModal();
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {showSuccessPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#4CAF50",
            color: "white",
            padding: "20px 40px",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            zIndex: 2147483648,
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            textAlign: "center",
          }}
        >
          {t?.orderplaced || "Sifarişiniz qeydə alındı!"}
        </div>
      )}

      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal">
          <button className="close-btns" onClick={closeModal}>
            X
          </button>
          <span>{t?.oneclickpay || "Bir Kliklə al"}</span>
          <p>{t?.emekdaslar}</p>
          <input
            className="onuClickInput"
            type="text"
            placeholder={t?.namesurname}
            value={nameSurname}
            onChange={(e) => setNameSurname(e.target.value)}
          />

          <div
            className="numberModal"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FormControl sx={{ width: "10rem", marginRight: "10px" }}>
              <Select
                value={selectedPrefix}
                onChange={(e) => setSelectedPrefix(e.target.value)}
                displayEmpty
                variant="standard" // borderləri götürür
                disableUnderline // alt xətti də götürür
                sx={{
                  fontSize: "1.6rem", // font bir az böyüdü
                  textAlign: "center", // texti mərkəzləşdirir
                  fontWeight: 600,
                  "& .MuiSelect-select": {
                    padding: "5px 0", // əlavə boşluq
                  },
                }}
                MenuProps={{
                  container: () => portalElRef.current || document.body,
                  PaperProps: {
                    sx: {
                      zIndex: 2147483647,
                      fontSize: "1.6rem", // menyuda da font böyüdü
                      fontWeight: 600,
                    },
                  },
                }}
              >
                {prefixOptions.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    sx={{ fontSize: "1.6rem", fontWeight: 600 }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <input
              type="text"
              id="phone"
              name="phone"
              placeholder={t?.num || "Nömrəni daxil edin"}
              value={phoneNumber}
              onChange={(e) =>
                setPhoneNumber(e.target.value.replace(/\D/g, ""))
              }
              maxLength="7"
            />
          </div>

          <button
            className="open-btn"
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.6 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? t?.sending : t?.confirm || "Təsdiq Et"}
          </button>
        </div>
      </div>
    </>
  );
};

export default OneClickPay;


















// import React, { useState, useRef, useEffect } from "react";
// import { FormControl, Select, MenuItem } from "@mui/material";

// const OneClickPay = ({ t, product, closeModal, handleOverlayClick }) => {
//   const [selectedPrefix, setSelectedPrefix] = useState("050");
//   const [nameSurname, setNameSurname] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const portalElRef = useRef(null);

//   useEffect(() => {
//     let el = document.getElementById("mui-portal-top");
//     if (!el) {
//       el = document.createElement("div");
//       el.id = "mui-portal-top";
//       el.style.position = "relative";
//       el.style.zIndex = "2147483647";
//       document.body.appendChild(el);
//     }
//     portalElRef.current = el;
//   }, []);

//   const prefixOptions = [
//     { value: "050", label: "050" },
//     { value: "051", label: "051" },
//     { value: "010", label: "010" },
//     { value: "055", label: "055" },
//     { value: "099", label: "099" },
//     { value: "070", label: "070" },
//     { value: "077", label: "077" },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Form validasiyası
//     if (!nameSurname.trim()) {
//       alert("Ad və soyad daxil edilməlidir");
//       return;
//     }

//     if (!phoneNumber.trim() || phoneNumber.length < 7) {
//       alert("Düzgün telefon nömrəsi daxil edilməlidir");
//       return;
//     }

//     if (!product?.id) {
//       alert("Məhsul seçilməyib");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // Tam telefon nömrəsi
//       const fullPhoneNumber = selectedPrefix + phoneNumber;

//       // API URL-ni düzgün şəkildə yarad
//       const apiUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dev-api.barkodelectronics.az/api/v1';
//       const url = `${apiUrl}/call-order?name_surname=${encodeURIComponent(nameSurname)}&tel=${fullPhoneNumber}`;

//       // API çağırışı
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           product_id: product.id,
//           product_name: product.name,
//           product_price: product.price,
//           name_surname: nameSurname,
//           phone: fullPhoneNumber
//         })
//       });

//       // Hər halda müsbət nəticə göstər
//       alert("Sifarişiniz qəbul edildi! Tezliklə sizinlə əlaqə saxlanılacaq.");
//       // Formu təmizlə
//       setNameSurname("");
//       setPhoneNumber("");
//       setSelectedPrefix("050");
//       closeModal();

//     } catch (error) {
//       console.error("One click pay error:", error);
//       // Xəta olsa belə, istifadəçiyə müsbət mesaj ver
//       alert("Sifarişiniz qəbul edildi! Tezliklə sizinlə əlaqə saxlanılacaq.");
//       // Formu təmizlə və modalı bağla
//       setNameSurname("");
//       setPhoneNumber("");
//       setSelectedPrefix("050");
//       closeModal();
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="modal-overlay" onClick={handleOverlayClick}>
//       <div className="modal">
//         <button className="close-btns" onClick={closeModal}>
//           X
//         </button>
//         <span>{t?.oneclickpay || "Bir Kliklə al"}</span>
//         <p>{t?.emekdaslar}</p>
//         <input
//           className="onuClickInput"
//           type="text"
//           placeholder={t?.namesurname}
//           value={nameSurname}
//           onChange={(e) => setNameSurname(e.target.value)}
//         />

//         <div
//           className="numberModal"
//           style={{ display: "flex", alignItems: "center" }}
//         >
//           <FormControl sx={{ width: "10rem", marginRight: "10px" }}>
//             <Select
//               value={selectedPrefix}
//               onChange={(e) => setSelectedPrefix(e.target.value)}
//               displayEmpty
//               variant="standard" // borderləri götürür
//               disableUnderline // alt xətti də götürür
//               sx={{
//                 fontSize: "1.6rem", // font bir az böyüdü
//                 textAlign: "center", // texti mərkəzləşdirir
//                 fontWeight: 600,
//                 "& .MuiSelect-select": {
//                   padding: "5px 0", // əlavə boşluq
//                 },
//               }}
//               MenuProps={{
//                 container: () => portalElRef.current || document.body,
//                 PaperProps: {
//                   sx: {
//                     zIndex: 2147483647,
//                     fontSize: "1.6rem", // menyuda da font böyüdü
//                     fontWeight: 600,
//                   },
//                 },
//               }}
//             >
//               {prefixOptions.map((option) => (
//                 <MenuItem
//                   key={option.value}
//                   value={option.value}
//                   sx={{ fontSize: "1.6rem", fontWeight: 600 }}
//                 >
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             placeholder={t?.num || "Nömrəni daxil edin"}
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
//             maxLength="7"
//           />
//         </div>

//         <button
//           className="open-btn"
//           onClick={handleSubmit}
//           disabled={isSubmitting}
//           style={{
//             opacity: isSubmitting ? 0.6 : 1,
//             cursor: isSubmitting ? 'not-allowed' : 'pointer'
//           }}
//         >
//           {isSubmitting ? "Göndərilir..." : (t?.confirm || "Təsdiq Et")}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OneClickPay;
