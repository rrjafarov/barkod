
// "use client";
// import React, { useState } from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import Link from "next/link";

// const Stores = ({ t, branchesData }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedMapSrc, setSelectedMapSrc] = useState(
//     branchesData[0]?.location || ""
//   );

//   const filteredStores = branchesData.filter((store) =>
//     store.branch_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container">
//       <div className="breadCrumb">
//         <Link href="/">
//           <span>{t?.homebreadcrumbs || "Home Page"}</span>
//         </Link>
//         <strong>
//           <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//         </strong>
//         <Link href="#">
//           <span className="lastChildBread">{t?.stores || "stores"}</span>
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
//                     placeholder={t?.search}
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </div>
//                 {filteredStores.map((store) => (
//                   <div
//                     key={store.id}
//                     className="storesCard"
//                     style={{
//                       cursor: "pointer",
//                       borderWidth:
//                         store.location === selectedMapSrc ? "3px" : "1px",
//                     }}
//                     onClick={() => setSelectedMapSrc(store.location)}
//                   >
//                     <div className="storesCardItem">
//                       <div className="storesCardItemTitle">
//                         <h5>{store.branch_name}</h5>
//                         <FaLocationDot className="storeLocationIcon" />
//                       </div>
//                       <p className="storesCardItemSubTitle">
//                         {store.address}
//                       </p>
//                       <div className="storesCardItemFooterTitle">
//                         <strong>
//                           {t?.contact || "contact"}: <span>{store.tel}</span>
//                         </strong>
//                         <span>{store.working_time}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="xl-9 lg-9 md-9 sm-12">
//           <div className="storesMap">
//             <iframe
//               src={selectedMapSrc}
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









// ?------------


"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";

const Stores = ({ t, branchesData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMapSrc, setSelectedMapSrc] = useState(
    branchesData[0]?.location || ""
  );

  const filteredStores = branchesData.filter((store) =>
    store.branch_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="breadCrumb">
        <Link href="/">
          <span>{t?.homebreadcrumbs || "Home Page"}</span>
        </Link>
        <strong>
          <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
        </strong>
        <Link href="#">
          <span className="lastChildBread">{t?.stores || "stores"}</span>
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
                    placeholder={t?.search}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                {/* Scrollable container for store cards */}
                <div 
                  className="storesCardsContainer"
                  style={{
                    height: "500px", // Increased height
                    overflowY: "auto",
                    overflowX: "hidden",
                    padding: "5px 12px", // Reduced top/bottom padding to 5px
                    scrollbarWidth: "thin", // For Firefox
                    scrollbarColor: "#ec1f27 #f1f1f1" // For Firefox - orange scrollbar
                  }}
                >
                  {filteredStores.map((store) => (
                    <div
                      key={store.id}
                      className="storesCard"
                      style={{
                        cursor: "pointer",
                        borderWidth:
                          store.location === selectedMapSrc ? "3px" : "1px",
                        marginBottom: "15px" // Add some spacing between cards
                      }}
                      onClick={() => setSelectedMapSrc(store.location)}
                    >
                      <div className="storesCardItem">
                        <div className="storesCardItemTitle">
                          <h5>{store.branch_name}</h5>
                          <FaLocationDot className="storeLocationIcon" />
                        </div>
                        <p className="storesCardItemSubTitle">
                          {store.address}
                        </p>
                        <div className="storesCardItemFooterTitle">
                          <strong>
                            {t?.contact || "contact"}: <span>{store.tel}</span>
                          </strong>
                          <span>{store.working_time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl-9 lg-9 md-9 sm-12">
          <div className="storesMap">
            <iframe
              src={selectedMapSrc}
              width="1000"
              height="600"
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

// Add this CSS to your stylesheet or as a style tag
const scrollbarStyles = `
  .storesCardsContainer::-webkit-scrollbar {
    width: 8px;
  }
  
  .storesCardsContainer::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  .storesCardsContainer::-webkit-scrollbar-thumb {
    background: #ec1f27;
    border-radius: 10px;
  }
  
  .storesCardsContainer::-webkit-scrollbar-thumb:hover {
    background: #d11a24;
  }
`;