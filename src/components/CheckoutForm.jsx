// // import './form.scss';

// export default function CheckoutForm() {
//   return (
//     <div className="form-container">
//       <form>
//         {/* Ad və Soyad üçün sətir */}
//         <div className="form-row">
//           <div className="form-group">
//             <input
//               type="text"
//               id="name"
//               name="name"
//               required
//               placeholder="Ad"
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               id="surname"
//               name="surname"
//               required
//               placeholder="Soyad"
//             />
//           </div>
//         </div>

//         {/* Telefon və E-mail üçün sətir */}
//         <div className="form-row">
//           <div className="form-group">
//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               required
//               placeholder="Telefon"
//             />
//           </div>
//           <div className="form-group">
//             <input type="email" id="email" name="email" placeholder="E-mail" />
//           </div>
//         </div>

//         {/* Şəhər Dropdown */}
//         <div className="form-group">
//           <select id="city" name="city">
//             <option value="Bakı">Bakı</option>
//             <option value="Gəncə">Gəncə</option>
//             <option value="Sumqayıt">Sumqayıt</option>
//           </select>
//         </div>

//         {/* Ünvan Sahəsi */}
//         <div className="form-group adreesInput">
//           <input
//             type="text"
//             id="address"
//             name="address"
//             placeholder="Ünvan qeyd edin"
//           />
//         </div>

//         {/* Ödəniş Metodu Radio Düymələri */}
//         <div className="form-group">
//           <label className="priceTitleSegment">Ödəniş üsulunu seç</label>
//           <div className="radio-group">
//             <div className="checkGroup">
//               <label htmlFor="pay-now">İndi nağd ödə</label>
//               <input
//                 type="checkbox"
//                 id="pay-now"
//                 name="payment"
//                 value="now"
//                 defaultChecked
//               />
//             </div>
//             <div className="checkGroup">
//               <label htmlFor="pay-later">Qapıda ödə</label>
//               <input
//                 type="checkbox"
//                 id="pay-later"
//                 name="payment"
//                 value="later"
//               />
//             </div>
//             <div className="checkGroup">
//               <label htmlFor="installments">Hissə-hissə al</label>
//               <input
//                 type="checkbox"
//                 id="installments"
//                 name="installments"
//                 value="installments"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Şərtlərə Razılıq Checkbox */}
//         <div className="form-group contitionCheck">
//           <input type="checkbox" id="terms" name="terms" required />
//           <label htmlFor="terms">Şərtlərə razıyam</label>
//         </div>

//         {/* Təsdiq Düyməsi */}
//         <button type="submit" className="submit-button">
//           Sifarişi tamamla
//         </button>
//       </form>
//     </div>
//   );
// }










// ! bu kod ileyir problem ise token ile address getmir

// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import axiosInstance from "@/lib/axios";
// import Cookies from "js-cookie";
// import { FiPlus, FiChevronDown, FiX, FiCheck, FiEdit2 } from "react-icons/fi";
// import {
//   useGetAddressListQuery,
//   useAddAddressMutation,
//   useUpdateAddressMutation,
//   useDeleteAddressListMutation,
// } from "@/redux/userService";

// // Address Popup Component
// const CheckoutAddressPopup = ({ t, active, setActive, edit, delivery, onAddressAdded }) => {
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [region, setRegion] = useState("");
//   const [tel, setTel] = useState("");
//   const [added, setAdded] = useState(false);

//   const [addAddress, { isLoading: isAdding }] = useAddAddressMutation();
//   const [updateAddress, { isLoading: isUpdating }] = useUpdateAddressMutation();

//   useEffect(() => {
//     if (edit) {
//       setName(edit.name);
//       setAddress(edit.address);
//       setRegion(edit.region);
//       setTel(edit.tel.replace("+994", ""));
//     } else {
//       setName("");
//       setAddress("");
//       setRegion("");
//       setTel("");
//     }
//   }, [edit]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = { name, address, region, tel: `+994${tel}` };
//       if (edit) {
//         await updateAddress({ id: edit.id, data: payload }).unwrap();
//       } else {
//         await addAddress(payload).unwrap();
//       }
//       setAdded(true);
//       onAddressAdded && onAddressAdded();
//       setTimeout(() => setActive(false), 1500);
//     } catch (error) {
//       console.error("Failed to submit address", error);
//     } finally {
//       setTimeout(() => {
//         setName("");
//         setAddress("");
//         setRegion("");
//         setTel("");
//         setAdded(false);
//       }, 1500);
//     }
//   };

//   return (
//     <div className={`popupAddress ${active ? "active" : ""}`}>
//       <div className="layer" onClick={() => setActive(false)}></div>
//       <div className="popupContainer">
//         <button className="close" onClick={() => setActive(false)}>
//           <FiX />
//         </button>
//         <form onSubmit={handleSubmit}>
//           <p>{edit ? "Update Address" : t?.["add-address"]}</p>

//           <label>{t?.name || "name"}</label>
//           <div className="inputChild">
//             <input
//               type="text"
//               value={name}
//               required
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <label>{t?.address}</label>
//           <div className="inputChild">
//             <input
//               type="text"
//               value={address}
//               required
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           </div>

//           <label>{t?.city || "City"}</label>
//           <div className="selectBox selectBoxCity">
//             <select
//               value={region}
//               onChange={(e) => setRegion(e.target.value)}
//               required
//             >
//               <option value="" disabled>
//                 {t?.["select-region"]}
//               </option>
//               {delivery?.map((city) => (
//                 <option key={city.id} value={city.name}>
//                   {city.name_az} | {city.name_ru}
//                 </option>
//               ))}
//             </select>
//             <FiChevronDown />
//           </div>

//           <label>{t?.phone || "phone"}</label>
//           <div className="phoneInput">
//             <span>+994</span>
//             <input
//               type="number"
//               value={tel}
//               required
//               onChange={(e) => setTel(e.target.value)}
//             />
//           </div>

//           <button
//             type="submit"
//             className={`blackButton ${added ? "active" : ""}`}
//             disabled={isAdding || isUpdating}
//           >
//             {isAdding || isUpdating ? (
//               <div className="loader2"></div>
//             ) : added ? (
//               "Address Added"
//             ) : edit ? (
//               "Update Address"
//             ) : (
//               t?.["add-address"]
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// // Address Card Component for checkout
// const CheckoutAddressCard = ({ t, address, selectedAddress, onSelect, onEdit }) => {
//   const [deleteAddressList, { isLoading: isDeleting }] = useDeleteAddressListMutation();

//   const handleSelect = () => {
//     onSelect(address);
//   };

//   return (
//     <div className="xl-6 lg-6 md-6 sm-12">
//       <div className="addressCard">
//         <input
//           type="radio"
//           name="checkout-address"
//           checked={selectedAddress?.id === address.id}
//           onChange={handleSelect}
//         />
//         <div className="addressCardInner">
//           <div className="tick">
//             <FiCheck />
//           </div>
//           <div>
//             <span>Name</span>
//             <p>{address?.name}</p>
//           </div>
//           <div>
//             <span>City</span>
//             <p>{address?.region}</p>
//           </div>
//           <div>
//             <span>Address</span>
//             <p>{address?.address}</p>
//           </div>
//           <div>
//             <span>Number</span>
//             <p>{address?.tel}</p>
//           </div>
//         </div>
//         <button
//           className="delete"
//           onClick={(e) => {
//             e.stopPropagation();
//             deleteAddressList(address.id);
//           }}
//           disabled={isDeleting}
//         >
//           {isDeleting ? <div className="loader2"></div> : <FiX />}
//         </button>
//         <button
//           className="edit"
//           onClick={(e) => {
//             e.stopPropagation();
//             onEdit(address);
//           }}
//         >
//           <FiEdit2 />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default function CheckoutForm({ deliveryData, products, t }) {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [isAddressPopupOpen, setIsAddressPopupOpen] = useState(false);
//   const [editAddress, setEditAddress] = useState(null);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Get user addresses
//   const { data: addressData, isLoading: isAddressLoading, refetch } = useGetAddressListQuery();

//   // Check if user is logged in
//   useEffect(() => {
//     const token = Cookies.get("token");
//     setIsLoggedIn(!!token);
    
//     // If user is logged in and has addresses, select the first one or main one
//     if (token && addressData && addressData.length > 0) {
//       const mainAddress = addressData.find(addr => addr.is_main);
//       setSelectedAddress(mainAddress || addressData[0]);
//     }
//   }, [addressData]);

//   const handleAddressAdded = () => {
//     refetch();
//   };

//   const handleAddClick = () => {
//     setEditAddress(null);
//     setIsAddressPopupOpen(true);
//   };

//   const handleEditClick = (address) => {
//     setEditAddress(address);
//     setIsAddressPopupOpen(true);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData();

//     if (isLoggedIn && selectedAddress) {
//       // Use selected address for logged in user
//       formData.append("name", selectedAddress.name);
//       formData.append("surname", ""); // You might want to split name or add surname field
//       formData.append("tel", selectedAddress.tel);
//       formData.append("email", form.email?.value || "");
//       formData.append("address", selectedAddress.address);
//       formData.append("city", selectedAddress.region);
//     } else {
//       // Use form data for guest user
//       formData.append("name", form.name.value);
//       formData.append("surname", form.surname.value);
//       formData.append("tel", form.phone.value);
//       formData.append("email", form.email.value);
//       formData.append("address", form.address.value);
//       formData.append("city", form.city.value);
//     }

//     formData.append("payment_method", "0");

//     try {
//       await axiosInstance.post("/make-payment", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setIsPopupOpen(true);
//     } catch (err) {
//       console.error("Ödeme işlemi başarısız:", err);
//     }
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//   };

//   // Loading state for addresses
//   if (isLoggedIn && isAddressLoading) {
//     return (
//       <div className="loaderDiv">
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="form-container">
//       {/* Address Popup */}
//       <CheckoutAddressPopup
//         t={t}
//         active={isAddressPopupOpen}
//         setActive={setIsAddressPopupOpen}
//         edit={editAddress}
//         delivery={deliveryData}
//         onAddressAdded={handleAddressAdded}
//       />

//       <form onSubmit={handleSubmit}>
//         {/* Address Section for Logged In Users */}
//         {isLoggedIn && (
//           <div className="address-section">
//             <h3>{t?.["shipping-address"] || "Shipping Address"}</h3>
            
//             {/* Add Address Button */}
//             <div className="addressParent">
//               <div className="addressParentCards">
//                 <button
//                   type="button"
//                   className="addressCardCreate"
//                   onClick={handleAddClick}
//                 >
//                   <FiPlus />
//                   <span>{t?.["add-address"] || "Add address"}</span>
//                 </button>
//               </div>
//             </div>

//             {/* Address List */}
//             <div className="address-list">
//               {addressData?.map((address) => (
//                 <CheckoutAddressCard
//                   key={address.id}
//                   t={t}
//                   address={address}
//                   selectedAddress={selectedAddress}
//                   onSelect={setSelectedAddress}
//                   onEdit={handleEditClick}
//                 />
//               ))}
//             </div>

//             {/* Email field for logged in users */}
//             <div className="form-group">
//               <input type="email" id="email" name="email" placeholder="E-mail" />
//             </div>
//           </div>
//         )}

//         {/* Guest User Form */}
//         {!isLoggedIn && (
//           <>
//             <div className="form-row">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   placeholder="Ad"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   id="surname"
//                   name="surname"
//                   required
//                   placeholder="Soyad"
//                 />
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   id="phone"
//                   name="phone"
//                   required
//                   placeholder="Telefon"
//                 />
//               </div>
//               <div className="form-group">
//                 <input type="email" id="email" name="email" placeholder="E-mail" />
//               </div>
//             </div>

//             <div className="form-group">
//               <select id="city" name="city">
//                 {deliveryData.map((region) => (
//                   <option key={region.id} value={region.id}>
//                     {region.name_az} | {region.name_ru}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group adreesInput">
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 placeholder="Ünvan qeyd edin"
//               />
//             </div>
//           </>
//         )}

//         {/* Payment Method (same for both) */}
//         <div className="form-group">
//           <label className="priceTitleSegment">Ödəniş üsulunu seç</label>
//           <div className="radio-group">
//             <div className="checkGroup">
//               <label htmlFor="pay-now">Nağd ödə</label>
//               <input
//                 type="radio"
//                 id="pay-now"
//                 name="pay"
//                 value="now"
//                 defaultChecked
//               />
//             </div>
//             <div className="checkGroup">
//               <label htmlFor="pay-later">Online ödə</label>
//               <input type="radio" id="pay-later" name="pay" value="later" />
//             </div>

//             {/* <div className="checkGroup">
//               <label htmlFor="installments">Hissə-hissə al</label>
//               <input
//                 type="radio"
//                 id="installments"
//                 name="pay"
//                 value="installments"
//               />
//             </div> */}
//           </div>
//         </div>

//         {/* Terms Agreement */}
//         <div className="form-group contitionCheck">
//           <input type="checkbox" id="terms" name="terms" required />
//           <label htmlFor="terms">Şərtlərə razıyam</label>
//         </div>

//         {/* Submit Button */}
//         <button 
//           type="submit" 
//           className="submit-button"
//           disabled={isLoggedIn && !selectedAddress}
//         >
//           Sifarişi tamamla
//         </button>
//       </form>

//       {/* Success Popup */}
//       {isPopupOpen && (
//         <div className="popup-overlay">
//           <div className="popup-contentCheckout">
//             <button className="popup-close" onClick={handleClosePopup}>
//               &times;
//             </button>
//             <h2>Sifarişiniz qeydə alındı!</h2>
//             <p>Əməkdaşımız bir neçə dəqiqə ərzində sizinlə əlaqə saxlayacaq</p>
//             <Link href="/">
//               <button className="popup-continue" onClick={handleClosePopup}>
//                 Davam et
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// ! bu kod ileyir problem ise token ile address getmir












"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";
import Cookies from "js-cookie";
import { FiPlus, FiChevronDown, FiX, FiCheck, FiEdit2 } from "react-icons/fi";
import {
  useGetAddressListQuery,
  useAddAddressMutation,
  useUpdateAddressMutation,
  useDeleteAddressListMutation,
} from "@/redux/userService";

// Address Popup Component
const CheckoutAddressPopup = ({ t, active, setActive, edit, delivery, onAddressAdded }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("");
  const [tel, setTel] = useState("");
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");

  const [addAddress, { isLoading: isAdding }] = useAddAddressMutation();
  const [updateAddress, { isLoading: isUpdating }] = useUpdateAddressMutation();

  useEffect(() => {
    if (edit) {
      setName(edit.name || "");
      setAddress(edit.address || "");
      setRegion(edit.region || "");
      setTel(edit.tel ? edit.tel.replace("+994", "") : "");
    } else {
      setName("");
      setAddress("");
      setRegion("");
      setTel("");
    }
    setError("");
  }, [edit]);

  // Phone validation
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{9}$/; // 9 digits after +994
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!validatePhone(tel)) {
      setError("Telefon nömrəsi düzgün formatda olmalıdır (9 rəqəm)");
      return;
    }

    if (!name.trim() || !address.trim() || !region || !tel) {
      setError("Bütün sahələr doldurulmalıdır");
      return;
    }

    try {
      const payload = { 
        name: name.trim(), 
        address: address.trim(), 
        region, 
        tel: `+994${tel}` 
      };
      
      if (edit) {
        await updateAddress({ id: edit.id, data: payload }).unwrap();
      } else {
        await addAddress(payload).unwrap();
      }
      
      setAdded(true);
      onAddressAdded && onAddressAdded();
      setTimeout(() => setActive(false), 1500);
    } catch (error) {
      console.error("Failed to submit address", error);
      setError(error?.data?.message || "Ünvan əlavə edilərkən xəta baş verdi");
    } finally {
      setTimeout(() => {
        setName("");
        setAddress("");
        setRegion("");
        setTel("");
        setAdded(false);
      }, 1500);
    }
  };

  return (
    <div className={`popupAddress ${active ? "active" : ""}`}>
      <div className="layer" onClick={() => setActive(false)} />
      <div className="popupContainer">
        <button className="close" onClick={() => setActive(false)}>
          <FiX />
        </button>
        <form onSubmit={handleSubmit}>
          <p>{edit ? "Ünvanı yenilə" : t?.["add-address"] || "Ünvan əlavə et"}</p>

          {error && <div className="error-message">{error}</div>}

          <label>{t?.name || "Ad"}</label>
          <div className="inputChild">
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Adınızı daxil edin"
            />
          </div>

          <label>{t?.address || "Ünvan"}</label>
          <div className="inputChild">
            <input
              type="text"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Ünvanınızı daxil edin"
            />
          </div>

          <label>{t?.city || "Şəhər"}</label>
          <div className="selectBox selectBoxCity">
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              required
            >
              <option value="" disabled>
                {t?.["select-region"] || "Şəhər seçin"}
              </option>
              {delivery?.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name_az} | {city.name_ru}
                </option>
              ))}
            </select>
            <FiChevronDown />
          </div>

          <label>{t?.phone || "Telefon"}</label>
          <div className="phoneInput">
            <span>+994</span>
            <input
              type="tel"
              value={tel}
              required
              maxLength="9"
              pattern="[0-9]{9}"
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ''); // Only numbers
                setTel(value);
              }}
              placeholder="501234567"
            />
          </div>

          <button
            type="submit"
            className={`blackButton ${added ? "active" : ""}`}
            disabled={isAdding || isUpdating}
          >
            {isAdding || isUpdating ? (
              <div className="loader2" />
            ) : added ? (
              "Ünvan əlavə edildi"
            ) : edit ? (
              "Ünvanı yenilə"
            ) : (
              t?.["add-address"] || "Ünvan əlavə et"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

// Address Card Component for checkout
const CheckoutAddressCard = ({ t, address, selectedAddress, onSelect, onEdit }) => {
  const [deleteAddressList, { isLoading: isDeleting }] = useDeleteAddressListMutation();

  const handleSelect = () => {
    console.log("Card clicked, selecting address:", address);
    onSelect(address);
  };

  const handleDelete = async (e) => {
    e.stopPropagation();
    if (window.confirm("Bu ünvanı silmək istədiyinizdən əminsiniz?")) {
      try {
        await deleteAddressList(address.id).unwrap();
      } catch (error) {
        console.error("Failed to delete address", error);
      }
    }
  };

  return (
    <div className="xl-6 lg-6 md-6 sm-12">
      <div 
        className={`addressCard ${selectedAddress?.id === address.id ? 'selected' : ''}`}
        onClick={handleSelect}
        style={{ cursor: 'pointer' }}
      >
        <input
          type="radio"
          name="checkout-address"
          checked={selectedAddress?.id === address.id}
          onChange={handleSelect}
          onClick={(e) => e.stopPropagation()}
        />
        <div className="addressCardInner">
          <div className="tick"><FiCheck /></div>
          <div><span>Ad</span><p>{address?.name}</p></div>
          <div><span>Şəhər</span><p>{address?.region}</p></div>
          <div><span>Ünvan</span><p>{address?.address}</p></div>
          <div><span>Telefon</span><p>{address?.tel}</p></div>
        </div>
        <button
          className="delete"
          onClick={handleDelete}
          disabled={isDeleting}
          title="Ünvanı sil"
        >
          {isDeleting ? <div className="loader2" /> : <FiX />}
        </button>
        <button
          className="edit"
          onClick={(e) => { e.stopPropagation(); onEdit(address); }}
          title="Ünvanı redaktə et"
        >
          <FiEdit2 />
        </button>
      </div>
    </div>
  );
};

export default function CheckoutForm({ deliveryData, products, t }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAddressPopupOpen, setIsAddressPopupOpen] = useState(false);
  const [editAddress, setEditAddress] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("0");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [paymentUrl, setPaymentUrl] = useState(null);

  // Get user addresses with skip condition
  const token = Cookies.get("token");
  const { data: addressData, isLoading: isAddressLoading, refetch } = useGetAddressListQuery(
    undefined, // query params
    { skip: !token } // skip query if no token
  );

  // Debug: Log address data
  console.log("Address Data:", addressData);
  console.log("Selected Address:", selectedAddress);
  console.log("Is Logged In:", isLoggedIn);

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  // Separate useEffect for address selection
  useEffect(() => {
    if (isLoggedIn && addressData?.length > 0) {
      // Find main address or use first one
      const mainAddress = addressData.find(a => a.is_main);
      const addressToSelect = mainAddress || addressData[0];
      
      console.log("Setting selected address:", addressToSelect);
      setSelectedAddress(addressToSelect);
    } else if (!isLoggedIn) {
      setSelectedAddress(null);
    }
  }, [isLoggedIn, addressData]);

  const handleAddressAdded = () => {
    refetch();
  };

  const handleAddClick = () => {
    setEditAddress(null);
    setIsAddressPopupOpen(true);
  };

  const handleEditClick = (addr) => {
    setEditAddress(addr);
    setIsAddressPopupOpen(true);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleContinue = () => {
    if (paymentUrl) {
      window.open(paymentUrl, '_blank');
    } else {
      window.location.href = "/";
    }
  };

  // Address selection handler with debugging
  const handleAddressSelect = (address) => {
    console.log("Address selected:", address);
    setSelectedAddress(address);
  };

  // Form validation
  const validateForm = (formData) => {
    const requiredFields = [];

    if (!isLoggedIn) {
      if (!formData.get("name")?.trim()) requiredFields.push("Ad");
      if (!formData.get("phone")?.trim()) requiredFields.push("Telefon");
      if (!formData.get("city")) requiredFields.push("Şəhər");
      if (!formData.get("address")?.trim()) requiredFields.push("Ünvan");
    } else if (!selectedAddress) {
      requiredFields.push("Ünvan seçimi");
    }

    if (!formData.get("terms")) requiredFields.push("Şərtlərlə razılıq");

    return requiredFields;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    // Validate form
    const missingFields = validateForm(formData);
    if (missingFields.length > 0) {
      setFormError(`Aşağıdakı sahələr tələb olunur: ${missingFields.join(", ")}`);
      setIsSubmitting(false);
      return;
    }

    // Prepare data with detailed logging
    const submitData = new FormData();
    
    console.log("=== FORM SUBMISSION DEBUG ===");
    console.log("Is Logged In:", isLoggedIn);
    console.log("Selected Address:", selectedAddress);
    console.log("Payment Method:", paymentMethod);
    
    if (isLoggedIn && selectedAddress) {
      console.log("Using logged in user address:");
      console.log("Name:", selectedAddress.name);
      console.log("Tel:", selectedAddress.tel);
      console.log("Address:", selectedAddress.address);
      console.log("Region:", selectedAddress.region);
      
      submitData.append("name", selectedAddress.name);
      submitData.append("tel", selectedAddress.tel);
      submitData.append("address", selectedAddress.address);
      
      // Find city data for the selected address - improved matching
      const cityData = deliveryData.find(city => {
        const cityName = city.name || city.name_az || city.name_ru;
        const combined = `${city.name_az} | ${city.name_ru}`;
        const region = selectedAddress.region;
        
        console.log("Comparing:", {
          cityName,
          combined,
          region,
          match: combined === region || 
                 city.name_az === region || 
                 city.name_ru === region ||
                 cityName === region
        });
        
        return combined === region ||
               city.name_az === region ||
               city.name_ru === region ||
               cityName === region;
      });
      
      console.log("Found city data:", cityData);
      
      if (cityData) {
        submitData.append("city_id", cityData.id.toString());
        submitData.append("shipping_address_id", selectedAddress.id.toString());
      } else {
        console.warn("No matching city found for region:", selectedAddress.region);
        submitData.append("region", selectedAddress.region);
      }
    } else {
      console.log("Using guest user data:");
      const guestName = formData.get("name") || "";
      const guestPhone = formData.get("phone") || "";
      const guestCity = formData.get("city") || "";
      const guestAddress = formData.get("address") || "";
      
      console.log("Guest Name:", guestName);
      console.log("Guest Phone:", guestPhone);
      console.log("Guest City:", guestCity);
      console.log("Guest Address:", guestAddress);
      
      submitData.append("name", guestName);
      submitData.append("tel", guestPhone);
      submitData.append("city", guestCity);
      submitData.append("address", guestAddress);
    }

    submitData.append("email", formData.get("email") || "");
    submitData.append("order_note", formData.get("order_note") || "");
    submitData.append("payment_method", paymentMethod);

    // Add product information
    if (products && products.length > 0) {
      console.log("Adding products:", products);
      products.forEach((product, index) => {
        submitData.append(`products[${index}][id]`, product.product.id);
        submitData.append(`products[${index}][qty]`, product.qty || 1);
        submitData.append(`products[${index}][price]`, product.product.price);
      });
    }

    // Log all form data being sent
    console.log("=== FINAL FORM DATA ===");
    for (let [key, value] of submitData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await axiosInstance.post("/make-payment", submitData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      
      console.log("Order submitted successfully:", response.data);
      
      // Store payment URL if exists
      if (response.data && response.data.payment_url) {
        setPaymentUrl(response.data.payment_url);
      }
      
      setIsPopupOpen(true);
      
    } catch (err) {
      console.error("Payment failed:", err);
      console.error("Error response:", err.response?.data);
      setFormError(
        err.response?.data?.message || 
        "Ödeme işlemi başarısız oldu. Lütfen tekrar deneyin."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoggedIn && isAddressLoading) {
    return (
      <div className="loaderDiv">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="form-container">
      {/* Address Popup */}
      <CheckoutAddressPopup
        t={t}
        active={isAddressPopupOpen}
        setActive={setIsAddressPopupOpen}
        edit={editAddress}
        delivery={deliveryData}
        onAddressAdded={handleAddressAdded}
      />

      <form onSubmit={handleSubmit}>
        {formError && <div className="form-error">{formError}</div>}

        {isLoggedIn ? (
          <div className="address-section">
            <h3>{t?.["shipping-address"] || "Çatdırılma ünvanı"}</h3>
            <div className="addressParent">
              <div className="addressParentCards">
                <button 
                  type="button" 
                  className="addressCardCreate" 
                  onClick={handleAddClick}
                >
                  <FiPlus />
                  <span>{t?.["add-address"] || "Ünvan əlavə et"}</span>
                </button>
              </div>
            </div>
            <div className="address-list">
              {addressData?.map((address) => (
                <CheckoutAddressCard
                  key={address.id}
                  t={t}
                  address={address}
                  selectedAddress={selectedAddress}
                  onSelect={handleAddressSelect}
                  onEdit={handleEditClick}
                />
              ))}
            </div>
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="E-mail (ixtiyari)" 
              />
            </div>
          </div>
        ) : (
          <>
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Ad *" 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  id="surname" 
                  name="surname" 
                  placeholder="Soyad" 
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  placeholder="Telefon *" 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="E-mail" 
                />
              </div>
            </div>
            <div className="form-group">
              <select 
                id="city" 
                name="city" 
                defaultValue={deliveryData[0]?.id} 
                required
              >
                <option value="" disabled>Şəhər seçin *</option>
                {deliveryData?.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.name_az} | {region.name_ru}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group adreesInput">
              <input 
                type="text" 
                id="address" 
                name="address" 
                placeholder="Ünvan qeyd edin *" 
                required 
              />
            </div>
          </>
        )}

        {/* Order Note */}
        <div className="form-group">
          <textarea 
            id="order_note" 
            name="order_note" 
            placeholder="Sifariş qeydi (ixtiyari)"
            rows="3"
          />
        </div>

        {/* Payment Method */}
        <div className="form-group">
          <label className="priceTitleSegment">Ödəniş üsulunu seç</label>
          <div className="radio-group">
            <div className="checkGroup">
              <label htmlFor="pay-cash">Nağd ödə</label>
              <input
                type="radio"
                id="pay-cash"
                name="payment"
                value="0"
                checked={paymentMethod === "0"}
                onChange={handlePaymentMethodChange}
              />
            </div>
            <div className="checkGroup">
              <label htmlFor="pay-online">Online ödə</label>
              <input
                type="radio"
                id="pay-online"
                name="payment"
                value="1"
                checked={paymentMethod === "1"}
                onChange={handlePaymentMethodChange}
              />
            </div>
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="form-group contitionCheck">
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">Şərtlərə razıyam *</label>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="submit-button" 
          disabled={isSubmitting || (isLoggedIn && !selectedAddress)}
        >
          {isSubmitting ? "Göndərilir..." : "Sifarişi tamamla"}
        </button>
      </form>

      {/* Success Popup */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-contentCheckout">
            <button className="popup-close" onClick={handleClosePopup}>
              &times;
            </button>
            <h2>Sifarişiniz qeydə alındı!</h2>
            <p>Əməkdaşımız bir neçə dəqiqə ərzində sizinlə əlaqə saxlayacaq</p>
            <button className="popup-continue" onClick={handleContinue}>
              {paymentUrl ? "Ödənişə davam et" : "Davam et"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



















// ? claude-nin adrres kodu  gunceldir 22.07.25


// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import axiosInstance from "@/lib/axios";
// import Cookies from "js-cookie";
// import { FiPlus, FiChevronDown, FiX, FiCheck, FiEdit2 } from "react-icons/fi";
// import {
//   useGetAddressListQuery,
//   useAddAddressMutation,
//   useUpdateAddressMutation,
//   useDeleteAddressListMutation,
// } from "@/redux/userService";

// // Address Popup Component
// const CheckoutAddressPopup = ({ t, active, setActive, edit, delivery, onAddressAdded }) => {
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [region, setRegion] = useState("");
//   const [tel, setTel] = useState("");
//   const [added, setAdded] = useState(false);
//   const [error, setError] = useState("");

//   const [addAddress, { isLoading: isAdding }] = useAddAddressMutation();
//   const [updateAddress, { isLoading: isUpdating }] = useUpdateAddressMutation();

//   useEffect(() => {
//     if (edit) {
//       setName(edit.name || "");
//       setAddress(edit.address || "");
//       setRegion(edit.region || "");
//       setTel(edit.tel ? edit.tel.replace("+994", "") : "");
//     } else {
//       setName("");
//       setAddress("");
//       setRegion("");
//       setTel("");
//     }
//     setError("");
//   }, [edit]);

//   // Phone validation
//   const validatePhone = (phone) => {
//     const phoneRegex = /^[0-9]{9}$/; // 9 digits after +994
//     return phoneRegex.test(phone);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // Validation
//     if (!validatePhone(tel)) {
//       setError("Telefon nömrəsi düzgün formatda olmalıdır (9 rəqəm)");
//       return;
//     }

//     if (!name.trim() || !address.trim() || !region || !tel) {
//       setError("Bütün sahələr doldurulmalıdır");
//       return;
//     }

//     try {
//       const payload = { 
//         name: name.trim(), 
//         address: address.trim(), 
//         region, 
//         tel: `+994${tel}` 
//       };
      
//       if (edit) {
//         await updateAddress({ id: edit.id, data: payload }).unwrap();
//       } else {
//         await addAddress(payload).unwrap();
//       }
      
//       setAdded(true);
//       onAddressAdded && onAddressAdded();
//       setTimeout(() => setActive(false), 1500);
//     } catch (error) {
//       console.error("Failed to submit address", error);
//       setError(error?.data?.message || "Ünvan əlavə edilərkən xəta baş verdi");
//     } finally {
//       setTimeout(() => {
//         setName("");
//         setAddress("");
//         setRegion("");
//         setTel("");
//         setAdded(false);
//       }, 1500);
//     }
//   };

//   return (
//     <div className={`popupAddress ${active ? "active" : ""}`}>
//       <div className="layer" onClick={() => setActive(false)} />
//       <div className="popupContainer">
//         <button className="close" onClick={() => setActive(false)}>
//           <FiX />
//         </button>
//         <form onSubmit={handleSubmit}>
//           <p>{edit ? "Ünvanı yenilə" : t?.["add-address"] || "Ünvan əlavə et"}</p>

//           {error && <div className="error-message">{error}</div>}

//           <label>{t?.name || "Ad"}</label>
//           <div className="inputChild">
//             <input
//               type="text"
//               value={name}
//               required
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Adınızı daxil edin"
//             />
//           </div>

//           <label>{t?.address || "Ünvan"}</label>
//           <div className="inputChild">
//             <input
//               type="text"
//               value={address}
//               required
//               onChange={(e) => setAddress(e.target.value)}
//               placeholder="Ünvanınızı daxil edin"
//             />
//           </div>

//           <label>{t?.city || "Şəhər"}</label>
//           <div className="selectBox selectBoxCity">
//             <select
//               value={region}
//               onChange={(e) => setRegion(e.target.value)}
//               required
//             >
//               <option value="" disabled>
//                 {t?.["select-region"] || "Şəhər seçin"}
//               </option>
//               {delivery?.map((city) => (
//                 <option key={city.id} value={city.name}>
//                   {city.name_az} | {city.name_ru}
//                 </option>
//               ))}
//             </select>
//             <FiChevronDown />
//           </div>

//           <label>{t?.phone || "Telefon"}</label>
//           <div className="phoneInput">
//             <span>+994</span>
//             <input
//               type="tel"
//               value={tel}
//               required
//               maxLength="9"
//               pattern="[0-9]{9}"
//               onChange={(e) => {
//                 const value = e.target.value.replace(/\D/g, ''); // Only numbers
//                 setTel(value);
//               }}
//               placeholder="501234567"
//             />
//           </div>

//           <button
//             type="submit"
//             className={`blackButton ${added ? "active" : ""}`}
//             disabled={isAdding || isUpdating}
//           >
//             {isAdding || isUpdating ? (
//               <div className="loader2" />
//             ) : added ? (
//               "Ünvan əlavə edildi"
//             ) : edit ? (
//               "Ünvanı yenilə"
//             ) : (
//               t?.["add-address"] || "Ünvan əlavə et"
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// // Address Card Component for checkout
// const CheckoutAddressCard = ({ t, address, selectedAddress, onSelect, onEdit }) => {
//   const [deleteAddressList, { isLoading: isDeleting }] = useDeleteAddressListMutation();

//   const handleSelect = () => {
//     console.log("Card clicked, selecting address:", address);
//     onSelect(address);
//   };

//   const handleDelete = async (e) => {
//     e.stopPropagation();
//     if (window.confirm("Bu ünvanı silmək istədiyinizdən əminsiniz?")) {
//       try {
//         await deleteAddressList(address.id).unwrap();
//       } catch (error) {
//         console.error("Failed to delete address", error);
//       }
//     }
//   };

//   return (
//     <div className="xl-6 lg-6 md-6 sm-12">
//       <div 
//         className={`addressCard ${selectedAddress?.id === address.id ? 'selected' : ''}`}
//         onClick={handleSelect}
//         style={{ cursor: 'pointer' }}
//       >
//         <input
//           type="radio"
//           name="checkout-address"
//           checked={selectedAddress?.id === address.id}
//           onChange={handleSelect}
//           onClick={(e) => e.stopPropagation()}
//         />
//         <div className="addressCardInner">
//           <div className="tick"><FiCheck /></div>
//           <div><span>Ad</span><p>{address?.name}</p></div>
//           <div><span>Şəhər</span><p>{address?.region}</p></div>
//           <div><span>Ünvan</span><p>{address?.address}</p></div>
//           <div><span>Telefon</span><p>{address?.tel}</p></div>
//         </div>
//         <button
//           className="delete"
//           onClick={handleDelete}
//           disabled={isDeleting}
//           title="Ünvanı sil"
//         >
//           {isDeleting ? <div className="loader2" /> : <FiX />}
//         </button>
//         <button
//           className="edit"
//           onClick={(e) => { e.stopPropagation(); onEdit(address); }}
//           title="Ünvanı redaktə et"
//         >
//           <FiEdit2 />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default function CheckoutForm({ deliveryData, products, t }) {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [isAddressPopupOpen, setIsAddressPopupOpen] = useState(false);
//   const [editAddress, setEditAddress] = useState(null);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("0");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formError, setFormError] = useState("");

//   // Get user addresses with skip condition
//   const token = Cookies.get("token");
//   const { data: addressData, isLoading: isAddressLoading, refetch } = useGetAddressListQuery(
//     undefined, // query params
//     { skip: !token } // skip query if no token
//   );

//   // Debug: Log address data
//   console.log("Address Data:", addressData);
//   console.log("Selected Address:", selectedAddress);
//   console.log("Is Logged In:", isLoggedIn);

//   useEffect(() => {
//     setIsLoggedIn(!!token);
//   }, [token]);

//   // Separate useEffect for address selection
//   useEffect(() => {
//     if (isLoggedIn && addressData?.length > 0) {
//       // Find main address or use first one
//       const mainAddress = addressData.find(a => a.is_main);
//       const addressToSelect = mainAddress || addressData[0];
      
//       console.log("Setting selected address:", addressToSelect);
//       setSelectedAddress(addressToSelect);
//     } else if (!isLoggedIn) {
//       setSelectedAddress(null);
//     }
//   }, [isLoggedIn, addressData]);

//   const handleAddressAdded = () => {
//     refetch();
//   };

//   const handleAddClick = () => {
//     setEditAddress(null);
//     setIsAddressPopupOpen(true);
//   };

//   const handleEditClick = (addr) => {
//     setEditAddress(addr);
//     setIsAddressPopupOpen(true);
//   };

//   const handlePaymentMethodChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//   };

//   // Address selection handler with debugging
//   const handleAddressSelect = (address) => {
//     console.log("Address selected:", address);
//     setSelectedAddress(address);
//   };

//   // Form validation
//   const validateForm = (formData) => {
//     const requiredFields = [];

//     if (!isLoggedIn) {
//       if (!formData.get("name")?.trim()) requiredFields.push("Ad");
//       if (!formData.get("phone")?.trim()) requiredFields.push("Telefon");
//       if (!formData.get("city")) requiredFields.push("Şəhər");
//       if (!formData.get("address")?.trim()) requiredFields.push("Ünvan");
//     } else if (!selectedAddress) {
//       requiredFields.push("Ünvan seçimi");
//     }

//     if (!formData.get("terms")) requiredFields.push("Şərtlərlə razılıq");

//     return requiredFields;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormError("");
//     setIsSubmitting(true);

//     const form = e.target;
//     const formData = new FormData(form);

//     // Validate form
//     const missingFields = validateForm(formData);
//     if (missingFields.length > 0) {
//       setFormError(`Aşağıdakı sahələr tələb olunur: ${missingFields.join(", ")}`);
//       setIsSubmitting(false);
//       return;
//     }

//     // Prepare data with detailed logging
//     const submitData = new FormData();
    
//     console.log("=== FORM SUBMISSION DEBUG ===");
//     console.log("Is Logged In:", isLoggedIn);
//     console.log("Selected Address:", selectedAddress);
//     console.log("Payment Method:", paymentMethod);
    
//     if (isLoggedIn && selectedAddress) {
//       console.log("Using logged in user address:");
//       console.log("Name:", selectedAddress.name);
//       console.log("Tel:", selectedAddress.tel);
//       console.log("Address:", selectedAddress.address);
//       console.log("Region:", selectedAddress.region);
      
//       submitData.append("name", selectedAddress.name);
//       submitData.append("tel", selectedAddress.tel);
//       submitData.append("address", selectedAddress.address);
      
//       // Find city data for the selected address - improved matching
//       const cityData = deliveryData.find(city => {
//         const cityName = city.name || city.name_az || city.name_ru;
//         const combined = `${city.name_az} | ${city.name_ru}`;
//         const region = selectedAddress.region;
        
//         console.log("Comparing:", {
//           cityName,
//           combined,
//           region,
//           match: combined === region || 
//                  city.name_az === region || 
//                  city.name_ru === region ||
//                  cityName === region
//         });
        
//         return combined === region ||
//                city.name_az === region ||
//                city.name_ru === region ||
//                cityName === region;
//       });
      
//       console.log("Found city data:", cityData);
      
//       if (cityData) {
//         submitData.append("city_id", cityData.id.toString());
//         submitData.append("shipping_address_id", selectedAddress.id.toString());
//       } else {
//         console.warn("No matching city found for region:", selectedAddress.region);
//         submitData.append("region", selectedAddress.region);
//       }
//     } else {
//       console.log("Using guest user data:");
//       const guestName = formData.get("name") || "";
//       const guestPhone = formData.get("phone") || "";
//       const guestCity = formData.get("city") || "";
//       const guestAddress = formData.get("address") || "";
      
//       console.log("Guest Name:", guestName);
//       console.log("Guest Phone:", guestPhone);
//       console.log("Guest City:", guestCity);
//       console.log("Guest Address:", guestAddress);
      
//       submitData.append("name", guestName);
//       submitData.append("tel", guestPhone);
//       submitData.append("city", guestCity);
//       submitData.append("address", guestAddress);
//     }

//     submitData.append("email", formData.get("email") || "");
//     submitData.append("order_note", formData.get("order_note") || "");
//     submitData.append("payment_method", paymentMethod);

//     // Add product information
//     if (products && products.length > 0) {
//       console.log("Adding products:", products);
//       products.forEach((product, index) => {
//         submitData.append(`products[${index}][id]`, product.product.id);
//         submitData.append(`products[${index}][qty]`, product.qty || 1);
//         submitData.append(`products[${index}][price]`, product.product.price);
//       });
//     }

//     // Log all form data being sent
//     console.log("=== FINAL FORM DATA ===");
//     for (let [key, value] of submitData.entries()) {
//       console.log(`${key}: ${value}`);
//     }

//     try {
//       const response = await axiosInstance.post("/make-payment", submitData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
      
//       console.log("Order submitted successfully:", response.data);
//       setIsPopupOpen(true);
//     } catch (err) {
//       console.error("Payment failed:", err);
//       console.error("Error response:", err.response?.data);
//       setFormError(
//         err.response?.data?.message || 
//         "Ödeme işlemi başarısız oldu. Lütfen tekrar deneyin."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (isLoggedIn && isAddressLoading) {
//     return (
//       <div className="loaderDiv">
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="form-container">
//       {/* Address Popup */}
//       <CheckoutAddressPopup
//         t={t}
//         active={isAddressPopupOpen}
//         setActive={setIsAddressPopupOpen}
//         edit={editAddress}
//         delivery={deliveryData}
//         onAddressAdded={handleAddressAdded}
//       />

//       <form onSubmit={handleSubmit}>
//         {formError && <div className="form-error">{formError}</div>}

//         {isLoggedIn ? (
//           <div className="address-section">
//             <h3>{t?.["shipping-address"] || "Çatdırılma ünvanı"}</h3>
//             <div className="addressParent">
//               <div className="addressParentCards">
//                 <button 
//                   type="button" 
//                   className="addressCardCreate" 
//                   onClick={handleAddClick}
//                 >
//                   <FiPlus />
//                   <span>{t?.["add-address"] || "Ünvan əlavə et"}</span>
//                 </button>
//               </div>
//             </div>
//             <div className="address-list">
//               {addressData?.map((address) => (
//                 <CheckoutAddressCard
//                   key={address.id}
//                   t={t}
//                   address={address}
//                   selectedAddress={selectedAddress}
//                   onSelect={handleAddressSelect}
//                   onEdit={handleEditClick}
//                 />
//               ))}
//             </div>
//             <div className="form-group">
//               <input 
//                 type="email" 
//                 id="email" 
//                 name="email" 
//                 placeholder="E-mail (ixtiyari)" 
//               />
//             </div>
//           </div>
//         ) : (
//           <>
//             <div className="form-row">
//               <div className="form-group">
//                 <input 
//                   type="text" 
//                   id="name" 
//                   name="name" 
//                   required 
//                   placeholder="Ad *" 
//                 />
//               </div>
//               <div className="form-group">
//                 <input 
//                   type="text" 
//                   id="surname" 
//                   name="surname" 
//                   placeholder="Soyad" 
//                 />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="form-group">
//                 <input 
//                   type="tel" 
//                   id="phone" 
//                   name="phone" 
//                   required 
//                   placeholder="Telefon *" 
//                 />
//               </div>
//               <div className="form-group">
//                 <input 
//                   type="email" 
//                   id="email" 
//                   name="email" 
//                   placeholder="E-mail" 
//                 />
//               </div>
//             </div>
//             <div className="form-group">
//               <select 
//                 id="city" 
//                 name="city" 
//                 defaultValue={deliveryData[0]?.id} 
//                 required
//               >
//                 <option value="" disabled>Şəhər seçin *</option>
//                 {deliveryData?.map((region) => (
//                   <option key={region.id} value={region.id}>
//                     {region.name_az} | {region.name_ru}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group adreesInput">
//               <input 
//                 type="text" 
//                 id="address" 
//                 name="address" 
//                 placeholder="Ünvan qeyd edin *" 
//                 required 
//               />
//             </div>
//           </>
//         )}

//         {/* Order Note */}
//         <div className="form-group">
//           <textarea 
//             id="order_note" 
//             name="order_note" 
//             placeholder="Sifariş qeydi (ixtiyari)"
//             rows="3"
//           />
//         </div>

//         {/* Payment Method */}
//         <div className="form-group">
//           <label className="priceTitleSegment">Ödəniş üsulunu seç</label>
//           <div className="radio-group">
//             <div className="checkGroup">
//               <label htmlFor="pay-cash">Nağd ödə</label>
//               <input
//                 type="radio"
//                 id="pay-cash"
//                 name="payment"
//                 value="0"
//                 checked={paymentMethod === "0"}
//                 onChange={handlePaymentMethodChange}
//               />
//             </div>
//             <div className="checkGroup">
//               <label htmlFor="pay-online">Online ödə</label>
//               <input
//                 type="radio"
//                 id="pay-online"
//                 name="payment"
//                 value="1"
//                 checked={paymentMethod === "1"}
//                 onChange={handlePaymentMethodChange}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Terms Agreement */}
//         <div className="form-group contitionCheck">
//           <input type="checkbox" id="terms" name="terms" required />
//           <label htmlFor="terms">Şərtlərə razıyam *</label>
//         </div>

//         {/* Submit Button */}
//         <button 
//           type="submit" 
//           className="submit-button" 
//           disabled={isSubmitting || (isLoggedIn && !selectedAddress)}
//         >
//           {isSubmitting ? "Göndərilir..." : "Sifarişi tamamla"}
//         </button>
//       </form>

//       {/* Success Popup */}
//       {isPopupOpen && (
//         <div className="popup-overlay">
//           <div className="popup-contentCheckout">
//             <button className="popup-close" onClick={handleClosePopup}>
//               &times;
//             </button>
//             <h2>Sifarişiniz qeydə alındı!</h2>
//             <p>Əməkdaşımız bir neçə dəqiqə ərzində sizinlə əlaqə saxlayacaq</p>
//             <Link href="/">
//               <button className="popup-continue" onClick={handleClosePopup}>
//                 Davam et
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// ? claude-nin adrres kodu gunceldir




