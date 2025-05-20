// "use client"
// import React, { useState, useEffect } from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import {
//   MdKeyboardDoubleArrowRight,
//   MdKeyboardArrowRight,
// } from "react-icons/md";
// import Link from "next/link";

// const Stores = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const cards = document.querySelectorAll(".storesCardItemTitle h5");
//     cards.forEach((h5) => {
//       const parentCard = h5.closest(".storesCard");
//       if (!parentCard) return;
//       const match = h5.textContent
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase());
//       parentCard.style.display = match ? "block" : "none";
//     });
//   }, [searchTerm]);

//   return (
//     <div className="container">
//       <div className="breadCrumb">
//         <Link href="/">
//           <span>Ana Səhifə</span>
//         </Link>
//         <strong>
//           <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//         </strong>
//         <Link href="#">
//           <span className="lastChildBread">Mağazalarımız</span>
//         </Link>
//       </div>
//       <div className="row">
//         <div className="xl-3 lg-3 md-3 sm-12">
//           <div className="stores">
//             <div className="row">
//               <div className="xl-12 lg-12 md-12 sm-12">
//                 <div className="storeSearch">
//                   <input
//                     type="search"
//                     placeholder="Mağaza axtar..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </div>
//                 <div className="storesCard">
//                   <div className="storesCardItem">
//                     <div className="storesCardItemTitle">
//                       <h5>Baş ofis</h5>
//                       <FaLocationDot className="storeLocationIcon" />
//                     </div>
//                     <p className="storesCardItemSubTitle">
//                       208 Ahmad Rajabli, Baku 1052
//                     </p>
//                     <div className="storesCardItemFooterTitle">
//                       <strong>
//                         Əlaqə: <span>+994777773344</span>
//                       </strong>
//                       <span>10:00-19:00</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="storesCard">
//                   <div className="storesCardItem">
//                     <div className="storesCardItemTitle">
//                       <h5>Xaçmaz Filialımız</h5>
//                       <FaLocationDot className="storeLocationIcon" />
//                     </div>
//                     <p className="storesCardItemSubTitle">
//                       208 Ahmad Rajabli, Baku 1052
//                     </p>
//                     <div className="storesCardItemFooterTitle">
//                       <strong>
//                         Əlaqə: <span>+994777773344</span>
//                       </strong>
//                       <span>10:00-19:00</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="xl-9 lg-9 md-9 sm-12">
//           <div className="storesMap">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.9893874785475!2d49.859489375840646!3d40.412040455925116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030873391b938e5%3A0x64ded33536aa5a06!2sBarkod!5e1!3m2!1str!2saz!4v1745356067117!5m2!1str!2saz"
//               width="1000"
//               height="500"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stores;


















"use client"
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import {
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Link from "next/link";

const storesData = [
  {
    id: 1,
    name: "Baş ofis",
    address: "208 Ahmad Rajabli, Baku 1052",
    contact: "+994777773344",
    hours: "10:00-19:00",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.9893874785475!2d49.859489375840646!3d40.412040455925116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030873391b938e5%3A0x64ded33536aa5a06!2sBarkod!5e1!3m2!1str!2saz!4v1745356067117!5m2!1str!2saz"
  },
  {
    id: 2,
    name: "Xaçmaz Filialımız",
    address: "208 Ahmad Rajabli, Baku 1052",
    contact: "+994777773344",
    hours: "10:00-19:00",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.982515268272!2d48.948490375842!3d41.564890455925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40398f06377ed865%3A0x123456789abcdef0!2sXacmaz!5e1!3m2!1str!2saz!4v1745356067117!5m2!1str!2saz"
  }
];

const Stores = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedMapSrc, setSelectedMapSrc] = React.useState(storesData[0].mapSrc); // Default ilk mağaza haritası

  // Arama filtreleme için kullanılacak
  const filteredStores = storesData.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="breadCrumb">
        <Link href="/">
          <span>Ana Səhifə</span>
        </Link>
        <strong>
          <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
        </strong>
        <Link href="#">
          <span className="lastChildBread">Mağazalarımız</span>
        </Link>
      </div>
      <div className="row">
        <div className="xl-3 lg-3 md-3 sm-12">
          <div className="stores">
            <div className="row">
              <div className="xl-12 lg-12 md-12 sm-12">
                <div className="storeSearch">
                  <input
                    type="search"
                    placeholder="Mağaza axtar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                {filteredStores.map(store => (
                  <div
                    key={store.id}
                    className="storesCard"
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedMapSrc(store.mapSrc)}
                  >
                    <div className="storesCardItem">
                      <div className="storesCardItemTitle">
                        <h5>{store.name}</h5>
                        <FaLocationDot className="storeLocationIcon" />
                      </div>
                      <p className="storesCardItemSubTitle">{store.address}</p>
                      <div className="storesCardItemFooterTitle">
                        <strong>
                          Əlaqə: <span>{store.contact}</span>
                        </strong>
                        <span>{store.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="xl-9 lg-9 md-9 sm-12">
          <div className="storesMap">
            <iframe
              src={selectedMapSrc}
              width="1000"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;
