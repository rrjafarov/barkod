// import React from "react";

// const OneClickPay = ({ t, closeModal, handleOverlayClick }) => {
//   return (
//     <div className="modal-overlay" onClick={handleOverlayClick}>
//       <div className="modal">
//         <button className="close-btns" onClick={closeModal}>
//           X
//         </button>
//         <span>{t?.oneclickpay || "on"}</span>
//         <div className="numberModal">
//           <label htmlFor="phone">{t?.num}: +994</label>
//           <input type="text" id="phone" name="phone" />
//         </div>
//         <button className="open-btn">{t?.oneclickpay || "on"}</button>
//       </div>
//     </div>
//   );
// };

// export default OneClickPay;














import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";

const OneClickPay = ({ t, closeModal, handleOverlayClick }) => {
  const [selectedPrefix, setSelectedPrefix] = useState("050");

  const prefixOptions = [
    { value: "050", label: "050" },
    { value: "051", label: "051" },
    { value: "010", label: "010" },
    { value: "055", label: "055" },
    { value: "099", label: "099" },
    { value: "070", label: "070" },
    { value: "077", label: "077" },
  ];

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="close-btns" onClick={closeModal}>
          X
        </button>
        <span>{t?.oneclickpay || "Bir Kliklə al"}</span>
        <p>
          {t?.subtitle ||
            "Əməkdaşımız bir neçə dəqiqə ərzində sizlə əlaqə saxlayacaq"}
        </p>
        <div className="numberModal" style={{ display: "flex", alignItems: "center" }}>
          <FormControl sx={{ width: "10rem", marginRight: "10px" }}>
            <Select
              value={selectedPrefix}
              onChange={(e) => setSelectedPrefix(e.target.value)}
              displayEmpty
              sx={{
                fontSize: "1.4rem",
                fontWeight: 600,
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    zIndex: "12991", // açılan option hissəsinin z-index dəyərini qaldırdım
                  },
                },
              }}
            >
              {prefixOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{ fontSize: "1.4rem", fontWeight: 600 }}
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
            placeholder={t?.placeholder || "Nömrəni daxil edin"}
          />
        </div>
        <button className="open-btn">{t?.confirm || "Təsdiq Et"}</button>
      </div>
    </div>
  );
};

export default OneClickPay;
