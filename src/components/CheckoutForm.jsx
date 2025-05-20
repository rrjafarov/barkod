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










"use client"
import { useState } from 'react'; // Add this import for state management

export default function CheckoutForm() {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility

  // Handle form submission to show the popup
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsPopupOpen(true); // Show the popup
  };

  // Handle closing the popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}> 
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

        {/* Telefon və E-mail üçün sətir */}
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

        {/* Şəhər Dropdown */}
        <div className="form-group">
          <select id="city" name="city">
            <option value="Bakı">Bakı</option>
            <option value="Gəncə">Gəncə</option>
            <option value="Sumqayıt">Sumqayıt</option>
          </select>
        </div>

        {/* Ünvan Sahəsi */}
        <div className="form-group adreesInput">
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Ünvan qeyd edin"
          />
        </div>

        {/* Ödəniş Metodu Radio Düymələri */}
        <div className="form-group">
          <label className="priceTitleSegment">Ödəniş üsulunu seç</label>
          <div className="radio-group">
            <div className="checkGroup">
              <label htmlFor="pay-now">İndi nağd ödə</label>
              <input
                type="checkbox"
                id="pay-now"
                name="payment"
                value="now"
                defaultChecked
              />
            </div>
            <div className="checkGroup">
              <label htmlFor="pay-later">Qapıda ödə</label>
              <input
                type="checkbox"
                id="pay-later"
                name="payment"
                value="later"
              />
            </div>
            <div className="checkGroup">
              <label htmlFor="installments">Hissə-hissə al</label>
              <input
                type="checkbox"
                id="installments"
                name="installments"
                value="installments"
              />
            </div>
          </div>
        </div>

        {/* Şərtlərə Razılıq Checkbox */}
        <div className="form-group contitionCheck">
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">Şərtlərə razıyam</label>
        </div>

        {/* Təsdiq Düyməsi */}
        <button type="submit" className="submit-button">
          Sifarişi tamamla
        </button>
      </form>

      {/* Popup Component */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close" onClick={handleClosePopup}>
              &times;
            </button>
            <h2>Sifarişiniz qeydə alındı!</h2>
            <p>Əməkdaşımız bir neçə dəqiqə ərzində sizinlə əlaqə saxlayacaq</p>
            <button className="popup-continue" onClick={handleClosePopup}>
              Davam et
            </button>
          </div>
        </div>
      )}
    </div>
  );
}