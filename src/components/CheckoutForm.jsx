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











// ? burda kapitala yonlendirme var amma burdada adrees dogru deyill
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

  const [addAddress, { isLoading: isAdding }] = useAddAddressMutation();
  const [updateAddress, { isLoading: isUpdating }] = useUpdateAddressMutation();

  useEffect(() => {
    if (edit) {
      setName(edit.name);
      setAddress(edit.address);
      setRegion(edit.region);
      setTel(edit.tel.replace("+994", ""));
    } else {
      setName("");
      setAddress("");
      setRegion("");
      setTel("");
    }
  }, [edit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { name, address, region, tel: `+994${tel}` };
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
      <div className="layer" onClick={() => setActive(false)}></div>
      <div className="popupContainer">
        <button className="close" onClick={() => setActive(false)}>
          <FiX />
        </button>
        <form onSubmit={handleSubmit}>
          <p>{edit ? "Update Address" : t?.["add-address"]}</p>

          <label>{t?.name || "name"}</label>
          <div className="inputChild">
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <label>{t?.address}</label>
          <div className="inputChild">
            <input
              type="text"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <label>{t?.city || "City"}</label>
          <div className="selectBox selectBoxCity">
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              required
            >
              <option value="" disabled>
                {t?.["select-region"]}
              </option>
              {delivery?.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name_az} | {city.name_ru}
                </option>
              ))}
            </select>
            <FiChevronDown />
          </div>

          <label>{t?.phone || "phone"}</label>
          <div className="phoneInput">
            <span>+994</span>
            <input
              type="number"
              value={tel}
              required
              onChange={(e) => setTel(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className={`blackButton ${added ? "active" : ""}`}
            disabled={isAdding || isUpdating}
          >
            {isAdding || isUpdating ? (
              <div className="loader2"></div>
            ) : added ? (
              "Address Added"
            ) : edit ? (
              "Update Address"
            ) : (
              t?.["add-address"]
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
    onSelect(address);
  };

  return (
    <div className="xl-6 lg-6 md-6 sm-12">
      <div className="addressCard">
        <input
          type="radio"
          name="checkout-address"
          checked={selectedAddress?.id === address.id}
          onChange={handleSelect}
        />
        <div className="addressCardInner">
          <div className="tick">
            <FiCheck />
          </div>
          <div>
            <span>Name</span>
            <p>{address?.name}</p>
          </div>
          <div>
            <span>City</span>
            <p>{address?.region}</p>
          </div>
          <div>
            <span>Address</span>
            <p>{address?.address}</p>
          </div>
          <div>
            <span>Number</span>
            <p>{address?.tel}</p>
          </div>
        </div>
        <button
          className="delete"
          onClick={(e) => {
            e.stopPropagation();
            deleteAddressList(address.id);
          }}
          disabled={isDeleting}
        >
          {isDeleting ? <div className="loader2"></div> : <FiX />}
        </button>
        <button
          className="edit"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(address);
          }}
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
  const [paymentMethod, setPaymentMethod] = useState("0"); // 0 for cash, 1 for online

  // Get user addresses
  const { data: addressData, isLoading: isAddressLoading, refetch } = useGetAddressListQuery();

  // Check if user is logged in
  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
    
    // If user is logged in and has addresses, select the first one or main one
    if (token && addressData && addressData.length > 0) {
      const mainAddress = addressData.find(addr => addr.is_main);
      setSelectedAddress(mainAddress || addressData[0]);
    }
  }, [addressData]);

  const handleAddressAdded = () => {
    refetch();
  };

  const handleAddClick = () => {
    setEditAddress(null);
    setIsAddressPopupOpen(true);
  };

  const handleEditClick = (address) => {
    setEditAddress(address);
    setIsAddressPopupOpen(true);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();

    if (isLoggedIn && selectedAddress) {
      // Use selected address for logged in user
      formData.append("name", selectedAddress.name || "");
      formData.append("surname", ""); // You might want to split name or add surname field
      formData.append("tel", selectedAddress.tel || "");
      formData.append("email", form.email?.value || "");
      formData.append("address", selectedAddress.address || "");
      
      // Find city ID from deliveryData by matching region name
      // selectedAddress.region is in format "Bakı | Баку"
      const cityData = deliveryData.find(city => {
        const combinedName = `${city.name_az} | ${city.name_ru}`;
        return combinedName === selectedAddress.region ||
               city.name_az === selectedAddress.region ||
               city.name_ru === selectedAddress.region ||
               city.name === selectedAddress.region;
      });
      formData.append("city", cityData ? cityData.id.toString() : "1");
    } else {
      // Use form data for guest user
      formData.append("name", form.name?.value || "");
      formData.append("surname", form.surname?.value || "");
      formData.append("tel", form.phone?.value || "");
      formData.append("email", form.email?.value || "");
      formData.append("address", form.address?.value || "");
      formData.append("city", form.city?.value || "");
    }

    // Use the selected payment method
    formData.append("payment_method", paymentMethod);

    console.log("FormData being sent:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      await axiosInstance.post("/make-payment", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setIsPopupOpen(true);
    } catch (err) {
      console.error("Ödeme işlemi başarısız:", err);
      console.error("Error details:", err.response?.data);
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Loading state for addresses
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
        {/* Address Section for Logged In Users */}
        {isLoggedIn && (
          <div className="address-section">
            <h3>{t?.["shipping-address"] || "Shipping Address"}</h3>
            
            {/* Add Address Button */}
            <div className="addressParent">
              <div className="addressParentCards">
                <button
                  type="button"
                  className="addressCardCreate"
                  onClick={handleAddClick}
                >
                  <FiPlus />
                  <span>{t?.["add-address"] || "Add address"}</span>
                </button>
              </div>
            </div>

            {/* Address List */}
            <div className="address-list">
              {addressData?.map((address) => (
                <CheckoutAddressCard
                  key={address.id}
                  t={t}
                  address={address}
                  selectedAddress={selectedAddress}
                  onSelect={setSelectedAddress}
                  onEdit={handleEditClick}
                />
              ))}
            </div>

            {/* Email field for logged in users */}
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="E-mail" />
            </div>
          </div>
        )}

        {/* Guest User Form */}
        {!isLoggedIn && (
          <>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Ad"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  required
                  placeholder="Soyad"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Telefon"
                />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="E-mail" />
              </div>
            </div>

            <div className="form-group">
              <select id="city" name="city" defaultValue={deliveryData[0]?.id} required>
                {deliveryData.map((region) => (
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
                placeholder="Ünvan qeyd edin"
                required
              />
            </div>
          </>
        )}

        {/* Payment Method (same for both) */}
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
          <label htmlFor="terms">Şərtlərə razıyam</label>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="submit-button"
          disabled={isLoggedIn && !selectedAddress}
        >
          Sifarişi tamamla
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
            <Link href="/">
              <button className="popup-continue" onClick={handleClosePopup}>
                Davam et
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

