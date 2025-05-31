// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import Phone from "../../public/icons/blackPhone.svg";
// import TV from "../../public/icons/blackTV.svg";
// import Laptop from "../../public/icons/blackLaptop.svg";
// import MeisetTexnikasi from "../../public/icons/blackMeisetTexnikasi.svg";
// import Fan from "../../public/icons/blackFan.svg";
// import Mebel from "../../public/icons/blackMebel.svg";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoClose } from "react-icons/io5";
// import { IoMdArrowRoundBack } from "react-icons/io";

// const MegaMenu = ({categoryData}) => {
//   const [activeTab, setActiveTab] = useState(null);
//   const [activeSubcategory, setActiveSubcategory] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(true);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const containerClass = activeTab
//     ? "containera categoryMegaMenu active"
//     : "containera categoryMegaMenu";

//   const handleMouseEnter = (tabKey) => {
//     if (!isMobile) setActiveTab(tabKey);
//   };
//   const handleCategoryClick = (e, tabKey) => {
//     if (isMobile) {
//       e.preventDefault();
//       setActiveTab(tabKey);
//       setActiveSubcategory(null);
//     }
//   };
//   const handleArrowClick = (e, tabKey) => {
//     e.preventDefault();
//     setActiveTab(tabKey);
//     setActiveSubcategory(null);
//   };
//   const handleMenuClose = () => setIsMenuOpen(false);

//   return (
//     isMenuOpen && (
//       <div className={containerClass}>
//         <div className="leftColumn">
//           <div className="mobileMenuHeader">
//             <span>Kateqoriyalar</span>
//             <span onClick={handleMenuClose} style={{ cursor: "pointer" }}>
//               <IoClose />
//             </span>
//           </div>
//           <ul>
//             <li
//               onMouseEnter={() => handleMouseEnter("elektronika")}
//               onClick={(e) => handleCategoryClick(e, "elektronika")}
//             >
//               <Link href="#">
//                 <div className="categoryLeftIcon ee">
//                   <Phone className="phoneIcon" />
//                 </div>
//                 <span>Telefonlar və aksesuarlar</span>
//                 <span
//                   className="arrowIcon"
//                   onClick={(e) => handleArrowClick(e, "elektronika")}
//                 >
//                   <IoIosArrowForward />
//                 </span>
//               </Link>
//             </li>
//             <li
//               onMouseEnter={() => handleMouseEnter("tv")}
//               onClick={(e) => handleCategoryClick(e, "tv")}
//             >
//               <Link href="/">
//                 <div className="categoryLeftIcon" id="categoryLeftIconTV">
//                   <TV />
//                 </div>
//                 <span>TV, audio-video foto</span>
//                 <span
//                   className="arrowIcon"
//                   onClick={(e) => handleArrowClick(e, "tv")}
//                 >
//                   <IoIosArrowForward />
//                 </span>
//               </Link>
//             </li>
//             <li
//               onMouseEnter={() => handleMouseEnter("laptop")}
//               onClick={(e) => handleCategoryClick(e, "laptop")}
//             >
//               <Link href="/">
//                 <div className="categoryLeftIcon" id="categoryLeftIconLaptop">
//                   <Laptop />
//                 </div>
//                 <span>Növbuklar və planşetlər</span>
//                 <span
//                   className="arrowIcon"
//                   onClick={(e) => handleArrowClick(e, "laptop")}
//                 >
//                   <IoIosArrowForward />
//                 </span>
//               </Link>
//             </li>
//             <li
//               onMouseEnter={() => handleMouseEnter("meiset")}
//               onClick={(e) => handleCategoryClick(e, "meiset")}
//             >
//               <Link href="/">
//                 <div className="categoryLeftIcon" id="categoryLeftIconMeiset">
//                   <MeisetTexnikasi />
//                 </div>
//                 <span>Məişət texnikası</span>
//                 <span
//                   className="arrowIcon"
//                   onClick={(e) => handleArrowClick(e, "meiset")}
//                 >
//                   <IoIosArrowForward />
//                 </span>
//               </Link>
//             </li>
//             <li
//               onMouseEnter={() => handleMouseEnter("fan")}
//               onClick={(e) => handleCategoryClick(e, "fan")}
//             >
//               <Link href="/">
//                 <div className="categoryLeftIcon" id="categoryLeftIconFan">
//                   <Fan />
//                 </div>
//                 <span>Gözəllik və sağlamlıq</span>
//                 <span
//                   className="arrowIcon"
//                   onClick={(e) => handleArrowClick(e, "fan")}
//                 >
//                   <IoIosArrowForward />
//                 </span>
//               </Link>
//             </li>
//             <li
//               onMouseEnter={() => handleMouseEnter("mebel")}
//               onClick={(e) => handleCategoryClick(e, "mebel")}
//             >
//               <Link href="/">
//                 <div className="categoryLeftIcon" id="categoryLeftIconMebel">
//                   <Mebel />
//                 </div>
//                 <span>Mebel, tekstil və dekor</span>
//                 <span
//                   className="arrowIcon"
//                   onClick={(e) => handleArrowClick(e, "mebel")}
//                 >
//                   <IoIosArrowForward />
//                 </span>
//               </Link>
//             </li>
//              <li
//               onMouseEnter={() => handleMouseEnter("elektronika")}
//               onClick={(e) => handleCategoryClick(e, "elektronika")}
//             >
//               <Link href="#">
//                 <div className="categoryLeftIcon ee">
//                   <Phone className="phoneIcon" />
//                 </div>
//                 <span>Telefonlar və aksesuarlar</span>
//                 <span
//                   className="arrowIcon"
//                   onClick={(e) => handleArrowClick(e, "elektronika")}
//                 >
//                   <IoIosArrowForward />
//                 </span>
//               </Link>
//             </li>
//             <li
//               onMouseEnter={() => handleMouseEnter("tv")}
//               onClick={(e) => handleCategoryClick(e, "tv")}
//             >
//               <Link href="/">
//                 <div className="categoryLeftIcon" id="categoryLeftIconTV">
//                   <TV />
//                 </div>
//                 <span>TV, audio-video foto</span>
//                 <span
//                   className="arrowIcon"
//                   onClick={(e) => handleArrowClick(e, "tv")}
//                 >
//                   <IoIosArrowForward />
//                 </span>
//               </Link>
//             </li>
//             <li
//               onMouseEnter={() => handleMouseEnter("laptop")}
//               onClick={(e) => handleCategoryClick(e, "laptop")}
//             >
//               <Link href="/">
//                 <div className="categoryLeftIcon" id="categoryLeftIconLaptop">
//                   <Laptop />
//                 </div>
//                 <span>Növbuklar və planşetlər</span>
//                 <span
//                   className="arrowIcon"
//                   onClick={(e) => handleArrowClick(e, "laptop")}
//                 >
//                   <IoIosArrowForward />
//                 </span>
//               </Link>
//             </li>
//             <li
//               onMouseEnter={() => handleMouseEnter("meiset")}
//               onClick={(e) => handleCategoryClick(e, "meiset")}
//             >
//               <Link href="/">
//                 <div className="categoryLeftIcon" id="categoryLeftIconMeiset">
//                   <MeisetTexnikasi />
//                 </div>
//                 <span>Məişət texnikası</span>
//                 <span
//                   className="arrowIcon"
//                   onClick={(e) => handleArrowClick(e, "meiset")}
//                 >
//                   <IoIosArrowForward />
//                 </span>
//               </Link>
//             </li>
//             <li
//               onMouseEnter={() => handleMouseEnter("fan")}
//               onClick={(e) => handleCategoryClick(e, "fan")}
//             >
//               <Link href="/">
//                 <div className="categoryLeftIcon" id="categoryLeftIconFan">
//                   <Fan />
//                 </div>
//                 <span>Gözəllik və sağlamlıq</span>
//                 <span
//                   className="arrowIcon"
//                   onClick={(e) => handleArrowClick(e, "fan")}
//                 >
//                   <IoIosArrowForward />
//                 </span>
//               </Link>
//             </li>
//             <li
//               onMouseEnter={() => handleMouseEnter("mebel")}
//               onClick={(e) => handleCategoryClick(e, "mebel")}
//             >
//               <Link href="/">
//                 <div className="categoryLeftIcon" id="categoryLeftIconMebel">
//                   <Mebel />
//                 </div>
//                 <span>Mebel, tekstil və dekor</span>
//                 <span
//                   className="arrowIcon"
//                   onClick={(e) => handleArrowClick(e, "mebel")}
//                 >
//                   <IoIosArrowForward />
//                 </span>
//               </Link>
//             </li>
//           </ul>
//         </div>



//         <div className="rightColumn">
//           <div className="mobileMenuHeader">
//             <span>Kateqoriyalar</span>
//             <span onClick={handleMenuClose} style={{ cursor: "pointer" }}>
//               <IoClose />
//             </span>
//           </div>

//           {/* Mobil: Alt kategori başlıkları dikey liste */}
//           {isMobile && activeTab && !activeSubcategory && (
//             <>
//               <p
//                 onClick={() => setActiveTab(null)}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "flex-start",
//                   gap: "1rem",
//                   cursor: "pointer",
//                   marginBottom: "1rem",
//                   fontSize: "1.6rem",
//                   fontWeight: 600,
//                 }}
//               >
//                 <IoMdArrowRoundBack />
//                 Geri
//               </p>
//               <div
//                 className="rightColumnItems"
//                 style={{ display: "flex", flexDirection: "column" }}
//               >
//                 {activeTab === "elektronika" && (
//                   <>
//                     <div className="rightColumnItem">
//                       <span className="catgorySubTitle">
//                         <Link
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveSubcategory("elek1");
//                           }}
//                         >
//                           Aksesuarlar
//                         </Link>
//                       </span>
//                     </div>
//                     <div className="rightColumnItem">
//                       <span className="catgorySubTitle">
//                         <Link
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveSubcategory("elek2");
//                           }}
//                         >
//                           Elekton
//                         </Link>
//                       </span>
//                     </div>
//                   </>
//                 )}

//                 {activeTab === "tv" && (
//                   <>
//                     <div className="rightColumnItem">
//                       <span className="catgorySubTitle">
//                         <Link
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveSubcategory("tv1");
//                           }}
//                         >
//                           Aksesuarlar
//                         </Link>
//                       </span>
//                     </div>
//                     <div className="rightColumnItem">
//                       <span className="catgorySubTitle">
//                         <Link
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveSubcategory("tv2");
//                           }}
//                         >
//                           Aksesuarlar
//                         </Link>
//                       </span>
//                     </div>
//                   </>
//                 )}

//                 {activeTab === "laptop" && (
//                   <>
//                     <div className="rightColumnItem">
//                       <span className="catgorySubTitle">
//                         <Link
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveSubcategory("lap1");
//                           }}
//                         >
//                           Aksesuarlar
//                         </Link>
//                       </span>
//                     </div>
//                     <div className="rightColumnItem">
//                       <span className="catgorySubTitle">
//                         <Link
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveSubcategory("lap2");
//                           }}
//                         >
//                           Aksesuarlar
//                         </Link>
//                       </span>
//                     </div>
//                   </>
//                 )}

//                 {activeTab === "meiset" && (
//                   <>
//                     <div className="rightColumnItem">
//                       <span className="catgorySubTitle">
//                         <Link
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveSubcategory("mei1");
//                           }}
//                         >
//                           Aksesuarlar
//                         </Link>
//                       </span>
//                     </div>
//                     <div className="rightColumnItem">
//                       <span className="catgorySubTitle">
//                         <Link
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveSubcategory("mei2");
//                           }}
//                         >
//                           Aksesuarlar
//                         </Link>
//                       </span>
//                     </div>
//                   </>
//                 )}

//                 {activeTab === "fan" && (
//                   <>
//                     <div className="rightColumnItem">
//                       <span className="catgorySubTitle">
//                         <Link
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveSubcategory("fan1");
//                           }}
//                         >
//                           Gözəllik
//                         </Link>
//                       </span>
//                     </div>
//                     <div className="rightColumnItem">
//                       <span className="catgorySubTitle">
//                         <Link
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveSubcategory("fan2");
//                           }}
//                         >
//                           Sağlamlıq
//                         </Link>
//                       </span>
//                     </div>
//                   </>
//                 )}

//                 {activeTab === "mebel" && (
//                   <>
//                     <div className="rightColumnItem">
//                       <span className="catgorySubTitle">
//                         <Link
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveSubcategory("meb1");
//                           }}
//                         >
//                           Mebel
//                         </Link>
//                       </span>
//                     </div>
//                     <div className="rightColumnItem">
//                       <span className="catgorySubTitle">
//                         <Link
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveSubcategory("meb2");
//                           }}
//                         >
//                           Dekor
//                         </Link>
//                       </span>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </>
//           )}

//           {/* Mobil: Alt kategori ürün listesi */}
//           {isMobile &&
//             activeTab === "elektronika" &&
//             activeSubcategory === "elek1" && (
//               <>
//                 <p
//                   onClick={() => setActiveSubcategory(null)}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                     gap: "1rem",
//                     cursor: "pointer",
//                     marginBottom: "1rem",
//                     fontSize: "1.6rem",
//                     fontWeight: 600,
//                   }}
//                 >
//                   <IoMdArrowRoundBack />
//                   Geri
//                 </p>
//                 <div className="rightColumnItems">
//                   <div className="rightColumnItem">
//                     <ul>
//                       <li>
//                         <Link href="#">Qulaqlıq</Link>
//                       </li>
//                       <li>
//                         <Link href="#">Naqil</Link>
//                       </li>
//                       <li>
//                         <Link href="#">Adapter</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </>
//             )}
//           {isMobile &&
//             activeTab === "elektronika" &&
//             activeSubcategory === "elek2" && (
//               <>
//                 <p
//                   onClick={() => setActiveSubcategory(null)}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                     gap: "1rem",
//                     cursor: "pointer",
//                     marginBottom: "1rem",
//                     fontSize: "1.6rem",
//                     fontWeight: 600,
//                   }}
//                 >
//                   <IoMdArrowRoundBack />
//                   Geri
//                 </p>
//                 <div className="rightColumnItems">
//                   <div className="rightColumnItem">
//                     <ul>
//                       <li>
//                         <Link href="#">Machinecs</Link>
//                       </li>
//                       <li>
//                         <Link href="#">Phones</Link>
//                       </li>
//                       <li>
//                         <Link href="#">Tablets</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </>
//             )}

//           {/* Desktop orijinal yapı */}
//           {!isMobile && activeTab === "elektronika" && (
//             <div className="rightColumnItems">
//               <div className="rightColumnItem">
//                 <span className="catgorySubTitle">
//                   <Link href="/">Aksesuarlar</Link>
//                 </span>
//                 <ul>
//                   <li>
//                     <Link href="#">Qulaqlıq</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Naqil</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Adapter</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="rightColumnItem">
//                 <span className="catgorySubTitle">
//                   <Link href="/">Elekronika</Link>
//                 </span>
//                 <ul>
//                   <li>
//                     <Link href="#">Machinecs</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Phones</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Tablets</Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           )}
//           {/* ... diğer desktop blokları */}
//         </div>
//       </div>
//     )
//   );
// };

// export default MegaMenu;

// !OPOPOPOP











// "use client"
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoClose } from "react-icons/io5";
// import { IoMdArrowRoundBack } from "react-icons/io";

// const MegaMenu = ({ categoryData }) => {
//   const [activeTab, setActiveTab] = useState(null);
//   const [activeSubcategory, setActiveSubcategory] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(true);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const containerClass = activeTab
//     ? "containera categoryMegaMenu active"
//     : "containera categoryMegaMenu";

//   const handleMouseEnter = (tabKey) => {
//     if (!isMobile) setActiveTab(tabKey);
//   };

//   const handleArrowClick = (e, tabKey) => {
//     e.preventDefault();
//     if (isMobile) {
//       setActiveTab(tabKey);
//       setActiveSubcategory(null);
//     }
//   };

//   const handleMenuClose = () => setIsMenuOpen(false);

//   return (
//     isMenuOpen && (
//       <div className={containerClass}>
//         <div className="leftColumn">
//           <div className="mobileMenuHeader">
//             <span>Kateqoriyalar</span>
//             <span onClick={handleMenuClose} style={{ cursor: "pointer" }}>
//               <IoClose />
//             </span>
//           </div>
//           <ul>
//             {categoryData.map((cat) => (
//               <li
//                 key={cat.id}
//                 onMouseEnter={() => handleMouseEnter(cat.slug)}
//               >
//                 <Link href={`/products?slug=${cat.slug}`}>
//                   <div className="categoryLeftIcon">
//                     <img src={cat.img_url} alt="" />
//                   </div>
//                   <span>{cat.name}</span>
//                 </Link>
//                 <span
//                   className="arrowIcon"
//                   onClick={(e) => handleArrowClick(e, cat.slug)}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <IoIosArrowForward />
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="rightColumn">
//           <div className="mobileMenuHeader">
//             <span>Kateqoriyalar</span>
//             <span onClick={handleMenuClose} style={{ cursor: "pointer" }}>
//               <IoClose />
//             </span>
//           </div>

//           {/* Mobil: Alt kategori başlıkları */}
//           {isMobile && activeTab && !activeSubcategory && (
//             <>
//               <p
//                 onClick={() => setActiveTab(null)}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "flex-start",
//                   gap: "1rem",
//                   cursor: "pointer",
//                   marginBottom: "1rem",
//                   fontSize: "1.6rem",
//                   fontWeight: 600,
//                 }}
//               >
//                 <IoMdArrowRoundBack />
//                 Geri
//               </p>
//               <div
//                 className="rightColumnItems"
//                 style={{ display: "flex", flexDirection: "column" }}
//               >
//                 {categoryData
//                   .find((c) => c.slug === activeTab)
//                   ?.sub_categories.map((sub) => (
//                     <div className="rightColumnItem" key={sub.id}>
//                       <span className="catgorySubTitle">
//                         <Link
//                           href={`/products?slug=${sub.slug}`}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setActiveSubcategory(sub.slug);
//                           }}
//                         >
//                           {sub.name}
//                         </Link>
//                       </span>
//                     </div>
//                   ))}
//               </div>
//             </>
//           )}

//           {/* Mobil: Alt kategori ürün listesi */}
//           {isMobile && activeTab && activeSubcategory && (
//             <>
//               <p
//                 onClick={() => setActiveSubcategory(null)}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "flex-start",
//                   gap: "1rem",
//                   cursor: "pointer",
//                   marginBottom: "1rem",
//                   fontSize: "1.6rem",
//                   fontWeight: 600,
//                 }}
//               >
//                 <IoMdArrowRoundBack />
//                 Geri
//               </p>
//               <div className="rightColumnItems">
//                 <div className="rightColumnItem">
//                   <ul>
//                     {categoryData
//                       .find((c) => c.slug === activeTab)
//                       ?.sub_categories.find((s) => s.slug === activeSubcategory)
//                       ?.sub_categories.map((deep) => (
//                         <li key={deep.id}>
//                           <Link href={`/products?slug=${deep.slug}`}>
//                             {deep.name}
//                           </Link>
//                         </li>
//                       ))}
//                   </ul>
//                 </div>
//               </div>
//             </>
//           )}

//           {/* Desktop: Orijinal yapı */}
//           {!isMobile && activeTab && (
//             <div className="rightColumnItems">
//               {categoryData
//                 .find((c) => c.slug === activeTab)
//                 ?.sub_categories.map((sub) => (
//                   <div className="rightColumnItem" key={sub.id}>
//                     <span className="catgorySubTitle">
//                       <Link href={`/products?slug=${sub.slug}`}>
//                         {sub.name}
//                       </Link>
//                     </span>
//                     {sub.sub_categories.length > 0 && (
//                       <ul>
//                         {sub.sub_categories.map((deep) => (
//                           <li key={deep.id}>
//                             <Link href={`/products?slug=${deep.slug}`}>
//                               {deep.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 ))}
//             </div>
//           )}
//         </div>
//       </div>
//     )
//   );
// };

// export default MegaMenu;

// // pppopopopopo










































































"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";

const MegaMenu = ({ categoryData }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerClass = activeTab
    ? "containera categoryMegaMenu active"
    : "containera categoryMegaMenu";

  const handleMouseEnter = (tabKey) => {
    if (!isMobile) setActiveTab(tabKey);
  };

  const handleArrowClick = (e, tabKey) => {
    e.preventDefault();
    if (isMobile) {
      setActiveTab(tabKey);
      setActiveSubcategory(null);
    }
  };

  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    isMenuOpen && (
      <div className={containerClass}>
        <div className="leftColumn">
          <div className="mobileMenuHeader">
            <span>Kateqoriyalar</span>
            <span onClick={handleMenuClose} style={{ cursor: "pointer" }}>
              <IoClose />
            </span>
          </div>
          <ul>
            {categoryData.map((cat) => (
              <li
                key={cat.id}
                onMouseEnter={() => handleMouseEnter(cat.slug)}
              >
                <Link href={`/products?slug=${cat.slug}`}>
                  <div className="categoryLeftIcon">
                    <img src={cat.img_url} alt="" />
                  </div>
                  <span>{cat.name}</span>
                </Link>
                <span
                  className="arrowIcon"
                  onClick={(e) => handleArrowClick(e, cat.slug)}
                  style={{ cursor: "pointer" }}
                >
                  <IoIosArrowForward />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rightColumn">
          <div className="mobileMenuHeader">
            <span>Kateqoriyalar</span>
            <span onClick={handleMenuClose} style={{ cursor: "pointer" }}>
              <IoClose />
            </span>
          </div>

          {/* Mobil: İkinci dərəcəli kateqoriyalar */}
          {isMobile && activeTab && !activeSubcategory && (
            <>
              <p
                onClick={() => setActiveTab(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "1rem",
                  cursor: "pointer",
                  marginBottom: "1rem",
                  fontSize: "1.6rem",
                  fontWeight: 600,
                }}
              >
                <IoMdArrowRoundBack />
                Geri
              </p>
              <div
                className="rightColumnItems"
                style={{ display: "flex", flexDirection: "column" }}
              >
                {categoryData
                  .find((c) => c.slug === activeTab)
                  ?.sub_categories.map((sub) => (
                    <div className="rightColumnItem" key={sub.id}>
                      <Link href={`/products?slug=${sub.slug}`}>
                        <span className="catgorySubTitle">{sub.name}</span>
                      </Link>
                      {sub.sub_categories.length > 0 && (
                        <span
                          className="arrowIcon"
                          onClick={() => setActiveSubcategory(sub.slug)}
                          style={{ cursor: "pointer" }}
                        >
                          <IoIosArrowForward />
                        </span>
                      )}
                    </div>
                  ))}
              </div>
            </>
          )}

          {/* Mobil: Üçüncü dərəcəli kateqoriyalar */}
          {isMobile && activeTab && activeSubcategory && (
            <>
              <p
                onClick={() => setActiveSubcategory(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "1rem",
                  cursor: "pointer",
                  marginBottom: "1rem",
                  fontSize: "1.6rem",
                  fontWeight: 600,
                }}
              >
                <IoMdArrowRoundBack />
                Geri
              </p>
              <div className="rightColumnItems">
                <div className="rightColumnItem">
                  <ul>
                    {categoryData
                      .find((c) => c.slug === activeTab)
                      ?.sub_categories.find((s) => s.slug === activeSubcategory)
                      ?.sub_categories.map((deep) => (
                        <li key={deep.id}>
                          <Link href={`/products?slug=${deep.slug}`}>
                            {deep.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Desktop: Orijinal struktur */}
          {!isMobile && activeTab && (
            <div className="rightColumnItems">
              {categoryData
                .find((c) => c.slug === activeTab)
                ?.sub_categories.map((sub) => (
                  <div className="rightColumnItem" key={sub.id}>
                    <span className="catgorySubTitle">
                      <Link href={`/products?slug=${sub.slug}`}>
                        {sub.name}
                      </Link>
                    </span>
                    {sub.sub_categories.length > 0 && (
                      <ul>
                        {sub.sub_categories.map((deep) => (
                          <li key={deep.id}>
                            <Link href={`/products?slug=${deep.slug}`}>
                              {deep.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default MegaMenu;