// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import Image from "next/image";
// import Filter from "../../public/icons/filter.svg";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../public/icons/newScale.svg";
// import NewWishList from "../../public/icons/newWishlist.svg";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

// const FilterAccordion = ({ title, children, defaultOpen = false }) => {
//   const [isOpen, setIsOpen] = useState(defaultOpen);
//   return (
//     <div className="accordion">
//       <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
//         {title}
//         <img
//           src={isOpen ? "/icons/minusIcon.svg" : "/icons/plusIcon.svg"}
//           alt="+"
//           className="toggle-icon"
//         />
//       </button>
//       {isOpen && <div className="accordion-content">{children}</div>}
//     </div>
//   );
// };

// const ProductsPage = ({ slug, productsCard, productsFilterGroupsTitle }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };
//   const toggleWishlist = () => {
//     setIsWishlisted((prev) => !prev);
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="breadCrumb">
//           <Link href="/">
//             <span>Ana Səhifə</span>
//           </Link>
//           <strong>
//             <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//           </strong>
//           <Link href="/products">
//             <span>Məhsullar</span>
//           </Link>
//           <strong>
//             <MdKeyboardArrowRight className="breadCrumpIcon" />
//           </strong>
//           <span className="lastChildBread">Telefonlar</span>
//         </div>
//         <div className="productsPageBanner">
//           <div className="productsPageBannerImage">
//             <Image
//               src="/images/productPageBanner1.jpg"
//               alt="banner"
//               width={1000}
//               height={600}
//             />
//           </div>
//         </div>
//         {showModal && (
//           <div className="modal-overlay" onClick={handleOverlayClick}>
//             <div className="modal">
//               <button className="close-btns" onClick={closeModal}>
//                 X
//               </button>
//               <span>Bir kliklə al</span>
//               <div></div>
//               <div className="numberModal">
//                 <label htmlFor="phone">Nömrə: +994</label>
//                 <input type="text" id="phone" name="phone" />
//               </div>
//               <button className="open-btn">Bir kliklə al</button>
//             </div>
//           </div>
//         )}

//         <div className="row">
//           <div className="xl-2 lg-2 md-2 sm-12">
//             <div className="filter-container">
//               {/* Filtre butonu her zaman görünsün */}
//               <button
//                 className="filter-title"
//                 onClick={() => setMobileFilterOpen(!isMobileFilterOpen)}
//               >
//                 <span>Filter</span>
//                 <div className="filter-icon">
//                   <Filter className="filIcon" />
//                 </div>
//               </button>

//               {/* Desktop için seçili filtreler (filter-title altında) */}
//               <div className="selectedFilter desktop-only">
//                 <div className="selectedFilterInner">
//                   <span>x</span>
//                   <p>siemens</p>
//                 </div>
//                 <div className="selectedFilterInner">
//                   <span>x</span>
//                   <p>borsch</p>
//                 </div>
//               </div>

//               {/* Filtre paneli: mobilde açıldığında tüm ekranı kaplar */}
//               <div
//                 className={`filter-panel ${isMobileFilterOpen ? "active" : ""}`}
//               >
//                 {/* Mobilde açılan menüde filter-titless başlığı altında olacak */}
//                 <button className="filter-titless">Filter</button>

//                 {/* Mobil için seçili filtreler (filter-titless altında) */}
//                 <div className="selectedFilter mobile-only">
//                   <div className="selectedFilterInner">
//                     <span>x</span>
//                     <p>siemens</p>
//                   </div>
//                   <div className="selectedFilterInner">
//                     <span>x</span>
//                     <p>borsch</p>
//                   </div>
//                 </div>

//                 <button
//                   className="close-btn"
//                   onClick={() => setMobileFilterOpen(false)}
//                 >
//                   x
//                 </button>
//                 <div className="lineFiltered"></div>

//                 {/* <FilterAccordion title="Qiymət" defaultOpen={true}>
//                   <ul>
//                     <li>
//                       X-ray Equipment<p>(22)</p>
//                     </li>
//                     <li>Medical Devices</li>
//                     <li>
//                       Dental Equipment <p>(23)</p>
//                     </li>
//                     <li>
//                       Surgical Equipment <p>(22)</p>
//                     </li>
//                   </ul>
//                 </FilterAccordion> */}

//                 {productsFilterGroupsTitle?.map((group) => (
//                   <FilterAccordion
//                     key={group.value}
//                     title={group.name}
//                     defaultOpen={true}
//                   >
//                     <ul className="filterList">
//                       {group.child.map((childItem) => (
//                         <li key={childItem.value} className="filterListItem">
//                           <Link
//                             href={`/products?cat_slug=${slug}&filter[]=${childItem.value}`}
//                           >
//                             {childItem.name}
//                           </Link>
//                         </li>
//                       ))}
//                       {group.child.length === 0 && (
//                         <li className="noFilterChild">Alt öğe bulunamadı.</li>
//                       )}
//                     </ul>
//                   </FilterAccordion>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="xl-10 lg-10 md-10 sm-12">
//             <div className="productPageCards">
//               <div className="row">
//                 {productsCard && productsCard.length > 0 ? (
//                   <>
//                     {productsCard.map((product) => (
//                       <div className="xl-3 lg-4 md-6 sm-6" key={product.id}>
//                         <div className="secondHomePageProductsCard">
//                           <div className="secondHomePageProductsCardDiv">
//                             <Link
//                               href={`/products/${product.id}`}
//                               className="blockCardLink"
//                             >
//                               <div className="secondHomePageProductsCardImage">
//                                 <Image
//                                   src={
//                                     product.photo || "/images/iphone16pro.png"
//                                   }
//                                   alt={product.name}
//                                   width={200}
//                                   height={200}
//                                 />
//                               </div>
//                             </Link>
//                             <div className="secondHomePageProductsCardContent">
//                               <span>{product.name}</span>
//                               <div className="discount">
//                                 <span>
//                                   -{product.discount} <TbCurrencyManat />
//                                 </span>
//                               </div>
//                               <div className="cardBottomContent">
//                                 <div className="price">
//                                   <span className="oldPrice">
//                                     {product.oldPrice}
//                                     <TbCurrencyManat />
//                                   </span>
//                                   <span className="newPrice">
//                                     {product.price}
//                                     <TbCurrencyManat />
//                                   </span>
//                                 </div>

//                                 <div className="wishList">
//                                   <button>
//                                     <NewScale className="newScalePR" />
//                                   </button>
//                                   <button
//                                     onClick={toggleWishlist}
//                                     className="wishlist-btn"
//                                   >
//                                     {isWishlisted ? (
//                                       <FaHeart className="newWishlistPR active" />
//                                     ) : (
//                                       <FiHeart className="newWishlistPR" />
//                                     )}
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="addToCartClick">
//                             <div className="addToCartClickItem">
//                               <button className="cartBtn">Səbətə at</button>
//                               <button onClick={openModal} className="clickBtn">
//                                 Bir Klikle Al
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </>
//                 ) : (
//                   <p className="noProductsMessage">product not foundddeec</p>
//                 )}

//                 {/* <div className="xl-3 lg-4 md-6 sm-6">
//                   <div className="secondHomePageProductsCard">
//                     <div className="secondHomePageProductsCardDiv">
//                       <Link href="/products/id" className="blockCardLink">
//                         <div className="secondHomePageProductsCardImage">
//                           <Image
//                             src="/images/iphone16pro.png"
//                             alt="sony"
//                             width={200}
//                             height={200}
//                           />
//                         </div>
//                       </Link>
//                       <div className="secondHomePageProductsCardContent">
//                         <span>iPhone 16 Pro Max 256 GB Black Titanium</span>
//                         <div className="discount">
//                           <span>
//                             -350 <TbCurrencyManat />
//                           </span>
//                         </div>
//                         <div className="cardBottomContent">
//                           <div className="price">
//                             <span className="oldPrice">
//                               3000,00
//                               <TbCurrencyManat />
//                             </span>
//                             <span className="newPrice">
//                               2400,00
//                               <TbCurrencyManat />
//                             </span>
//                           </div>

//                           <div className="wishList">
//                             <button>
//                               <NewScale className="newScalePR" />
//                             </button>

//                             <button
//                               onClick={toggleWishlist}
//                               className="wishlist-btn"
//                             >
//                               {isWishlisted ? (
//                                 <FaHeart className="newWishlistPR active" />
//                               ) : (
//                                 <FiHeart className="newWishlistPR" />
//                               )}
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="addToCartClick">
//                       <div className="addToCartClickItem">
//                         <button className="cartBtn">Səbətə at</button>
//                         <button onClick={openModal} className="clickBtn">
//                           Bir Klikle Al
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";
// import Filter from "../../public/icons/filter.svg";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../public/icons/newScale.svg";
// import NewWishList from "../../public/icons/newWishlist.svg";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

// const FilterAccordion = ({ title, children, defaultOpen = false }) => {
//   const [isOpen, setIsOpen] = useState(defaultOpen);
//   return (
//     <div className="accordion">
//       <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
//         {title}
//         <img
//           src={isOpen ? "/icons/minusIcon.svg" : "/icons/plusIcon.svg"}
//           alt="toggle"
//           className="toggle-icon"
//         />
//       </button>
//       {isOpen && <div className="accordion-content">{children}</div>}
//     </div>
//   );
// };

// const ProductsPage = ({ slug, productsCard, productsFilterGroupsTitle }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };
//   const toggleWishlist = () => {
//     setIsWishlisted((prev) => !prev);
//   };

//   const handleFilterClick = (filterValue) => {
//     const currentFilters = searchParams.getAll("filter");
//     const params = new URLSearchParams(searchParams.toString());

//     // Eğer filter zaten seçiliyse, onu sil
//     if (currentFilters.includes(filterValue)) {
//       params.delete("filter");
//       currentFilters
//         .filter((f) => f !== filterValue)
//         .forEach((f) => params.append("filter", f));
//     } else {
//       // Yeni filter ekle
//       params.append("filter", filterValue);
//     }

//     // slug’u koru
//     if (slug) {
//       params.set("cat_slug", slug);
//     }

//     router.push(`/products?${params.toString()}`);
//   };

//   // Şu anki URL’den seçili filtreleri alıyoruz
//   const selectedFilters = searchParams.getAll("filter");

//   return (
//     <div>
//       <div className="container">
//         <div className="breadCrumb">
//           <Link href="/">
//             <span>Ana Səhifə</span>
//           </Link>
//           <strong>
//             <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//           </strong>
//           <Link href="/products">
//             <span>Məhsullar</span>
//           </Link>
//           <strong>
//             <MdKeyboardArrowRight className="breadCrumpIcon" />
//           </strong>
//           <span className="lastChildBread">Telefonlar</span>
//         </div>
//         <div className="productsPageBanner">
//           <div className="productsPageBannerImage">
//             <Image
//               src="/images/productPageBanner1.jpg"
//               alt="banner"
//               width={1000}
//               height={600}
//             />
//           </div>
//         </div>
//         {showModal && (
//           <div className="modal-overlay" onClick={handleOverlayClick}>
//             <div className="modal">
//               <button className="close-btns" onClick={closeModal}>
//                 X
//               </button>
//               <span>Bir kliklə al</span>
//               <div></div>
//               <div className="numberModal">
//                 <label htmlFor="phone">Nömrə: +994</label>
//                 <input type="text" id="phone" name="phone" />
//               </div>
//               <button className="open-btn">Bir kliklə al</button>
//             </div>
//           </div>
//         )}

//         <div className="row">
//           <div className="xl-2 lg-2 md-2 sm-12">
//             <div className="filter-container">
//               <button
//                 className="filter-title"
//                 onClick={() => setMobileFilterOpen(!isMobileFilterOpen)}
//               >
//                 <span>Filter</span>
//                 <div className="filter-icon">
//                   <Filter className="filIcon" />
//                 </div>
//               </button>

//               {/* === Masaüstü için seçili filtreler === */}
//               <div className="selectedFilter desktop-only">
//                 {selectedFilters.length > 0 ? (
//                   selectedFilters.map((filter) => (
//                     <div className="selectedFilterInner" key={filter}>
//                       {/* "x"e tıklayınca handleFilterClick ile URL’den siliniyor */}
//                       <span
//                         style={{ cursor: "pointer" }}
//                         onClick={() => handleFilterClick(filter)}
//                       >
//                         x
//                       </span>
//                       <p>{filter}</p>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="noSelectedFilterText">Seçilmiş filtr yoxdur.</p>
//                 )}
//               </div>

//               <div
//                 className={`filter-panel ${isMobileFilterOpen ? "active" : ""}`}
//               >
//                 <button className="filter-titless">Filter</button>

//                 {/* === Mobil için seçili filtreler === */}
//                 <div className="selectedFilter mobile-only">
//                   {selectedFilters.length > 0 ? (
//                     selectedFilters.map((filter) => (
//                       <div className="selectedFilterInner" key={filter}>
//                         <span
//                           style={{ cursor: "pointer" }}
//                           onClick={() => handleFilterClick(filter)}
//                         >
//                           x
//                         </span>
//                         <p>{filter}</p>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="noSelectedFilterText">Filtr seçilməyib.</p>
//                   )}
//                 </div>

//                 <button
//                   className="close-btn"
//                   onClick={() => setMobileFilterOpen(false)}
//                 >
//                   x
//                 </button>
//                 <div className="lineFiltered"></div>

//                 {productsFilterGroupsTitle?.map((group) => (
//                   <FilterAccordion
//                     key={group.value}
//                     title={group.name}
//                     defaultOpen={true}
//                   >
//                     <ul className="filterList">
//                       {group.child.map((childItem) => (
//                         <li key={childItem.value} className="filterListItem">
//                           <button
//                             onClick={() => handleFilterClick(childItem.value)}
//                             className="filter-button-link"
//                             style={{
//                               background: "none",
//                               border: "none",
//                               color: "inherit",
//                               cursor: "pointer",
//                               textAlign: "left",
//                               width: "100%",
//                             }}
//                           >
//                             {childItem.name}
//                           </button>
//                         </li>
//                       ))}
//                       {group.child.length === 0 && (
//                         <li className="noFilterChild">
//                           Alt öğe bulunamadı.
//                         </li>
//                       )}
//                     </ul>
//                   </FilterAccordion>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="xl-10 lg-10 md-10 sm-12">
//             <div className="productPageCards">
//               <div className="row">
//                 {productsCard && productsCard.length > 0 ? (
//                   <>
//                     {productsCard.map((product) => (
//                       <div className="xl-3 lg-4 md-6 sm-6" key={product.id}>
//                         <div className="secondHomePageProductsCard">
//                           <div className="secondHomePageProductsCardDiv">
//                             <Link
//                               href={`/products/${product.id}`}
//                               className="blockCardLink"
//                             >
//                               <div className="secondHomePageProductsCardImage">
//                                 <Image
//                                   src={
//                                     product.photo || "/images/iphone16pro.png"
//                                   }
//                                   alt={product.name}
//                                   width={200}
//                                   height={200}
//                                 />
//                               </div>
//                             </Link>
//                             <div className="secondHomePageProductsCardContent">
//                               <span>{product.name}</span>
//                               <div className="discount">
//                                 <span>
//                                   -{product.discount} <TbCurrencyManat />
//                                 </span>
//                               </div>
//                               <div className="cardBottomContent">
//                                 <div className="price">
//                                   <span className="oldPrice">
//                                     {product.oldPrice}
//                                     <TbCurrencyManat />
//                                   </span>
//                                   <span className="newPrice">
//                                     {product.price}
//                                     <TbCurrencyManat />
//                                   </span>
//                                 </div>

//                                 <div className="wishList">
//                                   <button>
//                                     <NewScale className="newScalePR" />
//                                   </button>
//                                   <button
//                                     onClick={toggleWishlist}
//                                     className="wishlist-btn"
//                                   >
//                                     {isWishlisted ? (
//                                       <FaHeart className="newWishlistPR active" />
//                                     ) : (
//                                       <FiHeart className="newWishlistPR" />
//                                     )}
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="addToCartClick">
//                             <div className="addToCartClickItem">
//                               <button className="cartBtn">Səbətə at</button>
//                               <button onClick={openModal} className="clickBtn">
//                                 Bir Klikle Al
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </>
//                 ) : (
//                   <p className="noProductsMessage">Məhsul tapılmadı</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;




//! Calisti
// "use client";
// import Link from "next/link";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";
// import Filter from "../../public/icons/filter.svg";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../public/icons/newScale.svg";
// import { MdKeyboardDoubleArrowRight, MdKeyboardArrowRight } from "react-icons/md";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

// const FilterAccordion = ({ title, children, defaultOpen = false }) => {
//   const [isOpen, setIsOpen] = useState(defaultOpen);
//   return (
//     <div className="accordion">
//       <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
//         {title}
//         <img
//           src={isOpen ? "/icons/minusIcon.svg" : "/icons/plusIcon.svg"}
//           alt="toggle"
//           className="toggle-icon"
//         />
//       </button>
//       {isOpen && <div className="accordion-content">{children}</div>}
//     </div>
//   );
// };

// const ProductsPage = ({
//   slug,
//   productsCard,
//   productsFilterGroupsTitle,
//   categoryData,
//   productsBreadCrumbs,
//   reklamBanner,
//   fetchMore,
//   hasMore,
// }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   // ** Yeni: gecikdirilmiş loading üçün state **
//   const [delayedLoading, setDelayedLoading] = useState(false);

//   const loaderRef = useRef(null);

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const toggleWishlist = () => setIsWishlisted((prev) => !prev);

//   const handleFilterClick = (filterValue) => {
//     const currentFilters = searchParams.getAll("filter");
//     const params = new URLSearchParams(searchParams.toString());

//     if (currentFilters.includes(filterValue)) {
//       params.delete("filter");
//       currentFilters
//         .filter((f) => f !== filterValue)
//         .forEach((f) => params.append("filter", f));
//     } else {
//       params.append("filter", filterValue);
//     }

//     if (slug) params.set("cat_slug", slug);
//     router.push(`/products?${params.toString()}`);
//   };

//   useEffect(() => {
//     if (!loaderRef.current || !hasMore) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // Yeni yükleməni 1.5s gecikdiririk
//           setDelayedLoading(true);
//           setTimeout(() => {
//             fetchMore();
//             setDelayedLoading(false);
//           }, 1500);
//         }
//       },
//       { rootMargin: "200px" }
//     );
//     obs.observe(loaderRef.current);
//     return () => obs.disconnect();
//   }, [loaderRef.current, hasMore, fetchMore]);

//   return (
//     <div>
//       <div className="container">
//         <div className="breadCrumb">
//           {productsBreadCrumbs.map((item, index) => {
//             const isFirst = index === 0;
//             const isLast = index === productsBreadCrumbs.length - 1;
//             return (
//               <React.Fragment key={index}>
//                 {item.clickable === "true" ? (
//                   <Link href={item.slug}>
//                     <span>{item.name}</span>
//                   </Link>
//                 ) : (
//                   <span className="lastChildBread">{item.name}</span>
//                 )}
//                 {!isLast && (
//                   <strong>
//                     {isFirst ? (
//                       <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//                     ) : (
//                       <MdKeyboardArrowRight className="breadCrumpIcon" />
//                     )}
//                   </strong>
//                 )}
//               </React.Fragment>
//             );
//           })}
//         </div>

//         {reklamBanner?.reklam_banner && (
//           <div className="productsPageBanner">
//             <div className="productsPageBannerImage">
//               <Image
//                 src={reklamBanner.reklam_banner}
//                 alt="banner"
//                 width={1000}
//                 height={600}
//               />
//             </div>
//           </div>
//         )}

//         <div className="row">
//           <div className="xl-2 lg-2 md-2 sm-12">
//             {/* Sol filter tərəfi */}
//           </div>

//           <div className="xl-10 lg-10 md-10 sm-12">
//             <div className="productPageCards">
//               <div className="row">
//                 {productsCard.map((product) => (
//                   <div className="xl-3 lg-4 md-6 sm-6" key={product.id}>
//                     <div className="secondHomePageProductsCard">
//                       <div className="secondHomePageProductsCardDiv">
//                         <Link
//                           href={`/products/${product.slug?.toLowerCase()}`}
//                           className="blockCardLink"
//                         >
//                           <div className="secondHomePageProductsCardImage">
//                             <Image
//                               src={product.image || "/images/defaultImage.png"}
//                               alt={product.name}
//                               width={200}
//                               height={200}
//                             />
//                           </div>
//                         </Link>
//                         <div className="secondHomePageProductsCardContent">
//                           <span>{product.name}</span>
//                           <div className="discount">
//                             <span>{product.disc_percent} %</span>
//                           </div>
//                           <div className="cardBottomContent">
//                             <div className="price">
//                               <span className="oldPrice">
//                                 {product.old_price}
//                                 <TbCurrencyManat />
//                               </span>
//                               <span className="newPrice">
//                                 {product.price}
//                                 <TbCurrencyManat />
//                               </span>
//                             </div>

//                             <div className="wishList">
//                               <button>
//                                 <NewScale className="newScalePR" />
//                               </button>
//                               <button
//                                 onClick={toggleWishlist}
//                                 className="wishlist-btn"
//                               >
//                                 {isWishlisted ? (
//                                   <FaHeart className="newWishlistPR active" />
//                                 ) : (
//                                   <FiHeart className="newWishlistPR" />
//                                 )}
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="addToCartClick">
//                         <div className="addToCartClickItem">
//                           <button className="cartBtn">Səbətə at</button>
//                           <button onClick={openModal} className="clickBtn">
//                             Bir Kliklə Al
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Yeni: yalnız bu konteyner içində loading mesajı */}
//               {delayedLoading && (
//                 <p className="text-center" style={{ margin: "1rem 0" }}>
//                   Yüklənir...
//                 </p>
//               )}

//               {/* Infinite scroll üçün sentinel */}
//               {hasMore && <div ref={loaderRef} style={{ height: 1 }} />}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

//! Calisti


















































// "use client";
// import Link from "next/link";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";
// import Filter from "../../public/icons/filter.svg";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../public/icons/newScale.svg";
// import NewWishList from "../../public/icons/newWishlist.svg";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

// const FilterAccordion = ({ title, children, defaultOpen = false }) => {
//   const [isOpen, setIsOpen] = useState(defaultOpen);
//   return (
//     <div className="accordion">
//       <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
//         {title}
//         <img
//           src={isOpen ? "/icons/minusIcon.svg" : "/icons/plusIcon.svg"}
//           alt="toggle"
//           className="toggle-icon"
//         />
//       </button>
//       {isOpen && <div className="accordion-content">{children}</div>}
//     </div>
//   );
// };

// const ProductsPage = ({
//   slug,
//   productsCard,
//   productsFilterGroupsTitle,
//   categoryData,
//   productsBreadCrumbs,
//   reklamBanner,
//   fetchMore,
//   hasMore,
// }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   // Yeni: gecikdirilmiş loading üçün state
//   const [delayedLoading, setDelayedLoading] = useState(false);
//   const loaderRef = useRef(null);

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };
//   const toggleWishlist = () => {
//     setIsWishlisted((prev) => !prev);
//   };

//   const handleFilterClick = (filterValue) => {
//     const currentFilters = searchParams.getAll("filter");
//     const params = new URLSearchParams(searchParams.toString());

//     if (currentFilters.includes(filterValue)) {
//       params.delete("filter");
//       currentFilters
//         .filter((f) => f !== filterValue)
//         .forEach((f) => params.append("filter", f));
//     } else {
//       params.append("filter", filterValue);
//     }

//     if (slug) {
//       params.set("cat_slug", slug);
//     }

//     router.push(`/products?${params.toString()}`);
//   };

//   const selectedFilters = searchParams.getAll("filter");

//   const getFilterName = (filterValue) => {
//     for (const group of productsFilterGroupsTitle || []) {
//       const foundChild = group.child.find(
//         (child) => child.value === filterValue
//       );
//       if (foundChild) {
//         return foundChild.name;
//       }
//     }
//     return filterValue;
//   };

//   // IntersectionObserver + 1.5s gecikmə
//   useEffect(() => {
//     if (!loaderRef.current || !hasMore) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setDelayedLoading(true);
//           setTimeout(() => {
//             fetchMore();
//             setDelayedLoading(false);
//           }, 1500);
//         }
//       },
//       { rootMargin: "200px" }
//     );
//     obs.observe(loaderRef.current);
//     return () => obs.disconnect();
//   }, [loaderRef.current, hasMore, fetchMore]);

//   return (
//     <div>
//       <div className="container">
//         <div className="breadCrumb">
//           {productsBreadCrumbs.map((item, index) => {
//             const isFirst = index === 0;
//             const isLast = index === productsBreadCrumbs.length - 1;
//             return (
//               <React.Fragment key={index}>
//                 {item.clickable === "true" ? (
//                   <Link href={item.slug}>
//                     <span>{item.name}</span>
//                   </Link>
//                 ) : (
//                   <span className="lastChildBread">{item.name}</span>
//                 )}
//                 {!isLast && (
//                   <strong>
//                     {isFirst ? (
//                       <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//                     ) : (
//                       <MdKeyboardArrowRight className="breadCrumpIcon" />
//                     )}
//                   </strong>
//                 )}
//               </React.Fragment>
//             );
//           })}
//         </div>

//         {reklamBanner?.reklam_banner && (
//           <div className="productsPageBanner">
//             <div className="productsPageBannerImage">
//               <Image
//                 src={reklamBanner.reklam_banner}
//                 alt="banner"
//                 width={1000}
//                 height={600}
//               />
//             </div>
//           </div>
//         )}

//         {showModal && (
//           <div className="modal-overlay" onClick={handleOverlayClick}>
//             <div className="modal">
//               <button className="close-btns" onClick={closeModal}>
//                 X
//               </button>
//               <span>Bir kliklə al</span>
//               <div></div>
//               <div className="numberModal">
//                 <label htmlFor="phone">Nömrə: +994</label>
//                 <input type="text" id="phone" name="phone" />
//               </div>
//               <button className="open-btn">Bir kliklə al</button>
//             </div>
//           </div>
//         )}

//         <div className="row">
//           <div className="xl-2 lg-2 md-2 sm-12">
//             <div className="filter-container">
//               <button
//                 className="filter-title"
//                 onClick={() => setMobileFilterOpen(!isMobileFilterOpen)}
//               >
//                 <span>Filter</span>
//                 <div className="filter-icon">
//                   <Filter className="filIcon" />
//                 </div>
//               </button>

//               <div className="selectedFilter desktop-only">
//                 {selectedFilters.map((filter) => (
//                   <div className="selectedFilterInner" key={filter}>
//                     <span
//                       style={{ cursor: "pointer" }}
//                       onClick={() => handleFilterClick(filter)}
//                     >
//                       x
//                     </span>
//                     <p>{getFilterName(filter)}</p>
//                   </div>
//                 ))}
//               </div>

//               <div
//                 className={`filter-panel ${isMobileFilterOpen ? "active" : ""}`}
//               >
//                 <button className="filter-titless">Filter</button>
//                 <div className="selectedFilter mobile-only">
//                   {selectedFilters.map((filter) => (
//                     <div className="selectedFilterInner" key={filter}>
//                       <span
//                         style={{ cursor: "pointer" }}
//                         onClick={() => handleFilterClick(filter)}
//                       >
//                         x
//                       </span>
//                       <p>{getFilterName(filter)}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <button
//                   className="close-btn"
//                   onClick={() => setMobileFilterOpen(false)}
//                 >
//                   x
//                 </button>
//                 <div className="lineFiltered"></div>

//                 {productsFilterGroupsTitle?.map((group) => (
//                   <FilterAccordion
//                     key={group.value}
//                     title={group.name}
//                     defaultOpen={true}
//                   >
//                     <ul className="filterList">
//                       {group.child.map((childItem) => (
//                         <li key={childItem.value} className="filterListItem">
//                           <button
//                             onClick={() =>
//                               handleFilterClick(childItem.value)
//                             }
//                             className="filter-button-link"
//                             style={{
//                               background: selectedFilters.includes(
//                                 childItem.value
//                               )
//                                 ? "#f0f0f0"
//                                 : "none",
//                               border: "none",
//                               color: selectedFilters.includes(
//                                 childItem.value
//                               )
//                                 ? "#007bff"
//                                 : "inherit",
//                               cursor: "pointer",
//                               textAlign: "left",
//                               width: "100%",
//                               padding: "8px 12px",
//                               borderRadius: "4px",
//                               fontWeight: selectedFilters.includes(
//                                 childItem.value
//                               )
//                                 ? "bold"
//                                 : "normal",
//                             }}
//                           >
//                             {childItem.name}
//                           </button>
//                         </li>
//                       ))}
//                       {group.child.length === 0 && (
//                         <li className="noFilterChild">
//                           Alt öğe bulunamadı.
//                         </li>
//                       )}
//                     </ul>
//                   </FilterAccordion>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="xl-10 lg-10 md-10 sm-12">
//             <div className="productPageCards">
//               <div className="row">
//                 {productsCard.map((product) => (
//                   <div className="xl-3 lg-4 md-6 sm-6" key={product.id}>
//                     <div className="secondHomePageProductsCard">
//                       <div className="secondHomePageProductsCardDiv">
//                         <Link
//                           href={`/products/${product
//                             ?.slug
//                             ?.toLowerCase()
//                             .replace(/\s+/g, "-")}`}
//                           className="blockCardLink"
//                         >
//                           <div className="secondHomePageProductsCardImage">
//                             <Image
//                               src={
//                                 product.image ||
//                                 "/images/defaultImage.png"
//                               }
//                               alt={product.name}
//                               width={200}
//                               height={200}
//                             />
//                           </div>
//                         </Link>
//                         <div className="secondHomePageProductsCardContent">
//                           <span>{product.name}</span>
//                           <div className="discount">
//                             <span>{product.disc_percent}  %</span>
//                           </div>
//                           <div className="cardBottomContent">
//                             <div className="price">
//                               <span className="oldPrice">
//                                 {product.old_price}
//                                 <TbCurrencyManat />
//                               </span>
//                               <span className="newPrice">
//                                 {product.price}
//                                 <TbCurrencyManat />
//                               </span>
//                             </div>
//                             <div className="wishList">
//                               <button>
//                                 <NewScale className="newScalePR" />
//                               </button>
//                               <button
//                                 onClick={toggleWishlist}
//                                 className="wishlist-btn"
//                               >
//                                 {isWishlisted ? (
//                                   <FaHeart className="newWishlistPR active" />
//                                 ) : (
//                                   <FiHeart className="newWishlistPR" />
//                                 )}
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="addToCartClick">
//                         <div className="addToCartClickItem">
//                           <button className="cartBtn">Səbətə at</button>
//                           <button onClick={openModal} className="clickBtn">
//                             Bir Klikle Al
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Yeni: yalnız bu konteyner içində loading mesajı */}
//               {delayedLoading && (
//                 <p className="text-center" style={{ margin: "1rem 0" }}>
//                   Yüklənir...
//                 </p>
//               )}

//               {/* Infinite scroll sentinel */}
//               {hasMore && <div ref={loaderRef} style={{ height: 1 }} />}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;



























"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Filter from "../../public/icons/filter.svg";
import { TbCurrencyManat } from "react-icons/tb";
import NewScale from "../../public/icons/newScale.svg";
import NewWishList from "../../public/icons/newWishlist.svg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

// RTK Query hooks
import {
  useGetFavQuery,
  useAddToFavMutation,
  useRemoveFromFavMutation,
} from "@/redux/wishlistService";
import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";

const FilterAccordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="accordion">
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img
          src={isOpen ? "/icons/minusIcon.svg" : "/icons/plusIcon.svg"}
          alt="toggle"
          className="toggle-icon"
        />
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const ProductsPage = ({
  slug,
  productsCard,
  productsFilterGroupsTitle,
  categoryData,
  productsBreadCrumbs,
  reklamBanner,
  fetchMore,
  hasMore,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // RTK Query data & mutations
  const { data: wishlistData } = useGetFavQuery();
  const [addToFav, { isLoading: genericAddingFav }] = useAddToFavMutation();
  const [removeFromFav, { isLoading: genericRemovingFav }] = useRemoveFromFavMutation();
  const { data: cartData } = useGetCartQuery();
  const [addToCart, { isLoading: genericAddingCart }] = useAddToCartMutation();

  // Local map states
  const [wishlistedMap, setWishlistedMap] = useState({});
  const [cartMap, setCartMap] = useState({});
  const [addingFavMap, setAddingFavMap] = useState({});
  const [addingCartMap, setAddingCartMap] = useState({});

  // Delayed loading for infinite scroll
  const [delayedLoading, setDelayedLoading] = useState(false);
  const loaderRef = useRef(null);

  // Modal handlers
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  // Sync wishlist map when data arrives
  useEffect(() => {
    if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
      const newMap = {};
      wishlistData.wishlist.products.forEach((item) => {
        newMap[item.id] = true;
      });
      setWishlistedMap(newMap);
    }
  }, [wishlistData]);

  // Sync cart map when data arrives
  useEffect(() => {
    if (cartData && Array.isArray(cartData.cart?.cart_products)) {
      const newMap = {};
      cartData.cart.cart_products.forEach((c) => {
        const pid = c.product?.id;
        if (pid != null) newMap[pid] = true;
      });
      setCartMap(newMap);
    }
  }, [cartData]);

  // Wishlist toggle with optimistic update
  const handleToggleWishlist = async (productId) => {
    if (addingFavMap[productId]) return;
    const currently = !!wishlistedMap[productId];
    setWishlistedMap((p) => ({ ...p, [productId]: !currently }));
    setAddingFavMap((p) => ({ ...p, [productId]: true }));
    try {
      if (currently) {
        await removeFromFav(productId).unwrap();
      } else {
        await addToFav(productId).unwrap();
      }
    } catch (e) {
      setWishlistedMap((p) => ({ ...p, [productId]: currently }));
    } finally {
      setAddingFavMap((p) => { const c = { ...p }; delete c[productId]; return c; });
    }
  };

  // Add to cart with optimistic update
  const handleAddToCart = async (productId) => {
    if (cartMap[productId] || addingCartMap[productId]) return;
    setCartMap((p) => ({ ...p, [productId]: true }));
    setAddingCartMap((p) => ({ ...p, [productId]: true }));
    try {
      await addToCart({ productId, quantity: 1 }).unwrap();
    } catch (e) {
      setCartMap((p) => { const c = { ...p }; delete c[productId]; return c; });
    } finally {
      setAddingCartMap((p) => { const c = { ...p }; delete c[productId]; return c; });
    }
  };

  // Infinite scroll with 1.5s delay
  useEffect(() => {
    if (!loaderRef.current || !hasMore) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDelayedLoading(true);
          setTimeout(() => {
            fetchMore();
            setDelayedLoading(false);
          }, 1500);
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(loaderRef.current);
    return () => obs.disconnect();
  }, [loaderRef.current, hasMore, fetchMore]);

  // Filter handlers (unchanged)
  const handleFilterClick = (filterValue) => {
    const currentFilters = searchParams.getAll("filter");
    const params = new URLSearchParams(searchParams.toString());
    if (currentFilters.includes(filterValue)) {
      params.delete("filter");
      currentFilters
        .filter((f) => f !== filterValue)
        .forEach((f) => params.append("filter", f));
    } else {
      params.append("filter", filterValue);
    }
    if (slug) {
      params.set("cat_slug", slug);
    }
    router.push(`/products?${params.toString()}`);
  };
  const selectedFilters = searchParams.getAll("filter");
  const getFilterName = (filterValue) => {
    for (const group of productsFilterGroupsTitle || []) {
      const f = group.child.find((c) => c.value === filterValue);
      if (f) return f.name;
    }
    return filterValue;
  };

  return (
    <>
      <style jsx>{`
        .spinner {
          width: 35px;
          height: 35px;
          border: 4px solid red;
          border-top: 4px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 2rem auto;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div>
        <div className="container">
          <div className="breadCrumb">
            {productsBreadCrumbs.map((item, index) => {
              const isFirst = index === 0;
              const isLast = index === productsBreadCrumbs.length - 1;
              return (
                <React.Fragment key={index}>
                  {item.clickable === "true" ? (
                    <Link href={item.slug}>
                      <span>{item.name}</span>
                    </Link>
                  ) : (
                    <span className="lastChildBread">{item.name}</span>
                  )}
                  {!isLast && (
                    <strong>
                      {isFirst ? (
                        <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
                      ) : (
                        <MdKeyboardArrowRight className="breadCrumpIcon" />
                      )}
                    </strong>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {reklamBanner?.reklam_banner && (
            <div className="productsPageBanner">
              <div className="productsPageBannerImage">
                <Image
                  src={reklamBanner.reklam_banner}
                  alt="banner"
                  width={1000}
                  height={600}
                />
              </div>
            </div>
          )}

          {showModal && (
            <div className="modal-overlay" onClick={handleOverlayClick}>
              <div className="modal">
                <button className="close-btns" onClick={closeModal}>
                  X
                </button>
                <span>Bir kliklə al</span>
                <div className="numberModal">
                  <label htmlFor="phone">Nömrə: +994</label>
                  <input type="text" id="phone" name="phone" />
                </div>
                <button className="open-btn">Bir kliklə al</button>
              </div>
            </div>
          )}

          <div className="row">
            <div className="xl-2 lg-2 md-2 sm-12">
              <div className="filter-container">
                <button
                  className="filter-title"
                  onClick={() => setMobileFilterOpen(!isMobileFilterOpen)}
                >
                  <span>Filter</span>
                  <div className="filter-icon">
                    <Filter className="filIcon" />
                  </div>
                </button>

                <div className="selectedFilter desktop-only">
                  {selectedFilters.map((filter) => (
                    <div className="selectedFilterInner" key={filter}>
                      <span style={{ cursor: "pointer" }} onClick={() => handleFilterClick(filter)}>
                        x
                      </span>
                      <p>{getFilterName(filter)}</p>
                    </div>
                  ))}
                </div>

                <div className={`filter-panel ${isMobileFilterOpen ? "active" : ""}`}>
                  <button className="filter-titless">Filter</button>
                  <div className="selectedFilter mobile-only">
                    {selectedFilters.map((filter) => (
                      <div className="selectedFilterInner" key={filter}>
                        <span style={{ cursor: "pointer" }} onClick={() => handleFilterClick(filter)}>
                          x
                        </span>
                        <p>{getFilterName(filter)}</p>
                      </div>
                    ))}
                  </div>
                  <button className="close-btn" onClick={() => setMobileFilterOpen(false)}>
                    x
                  </button>
                  <div className="lineFiltered"></div>

                  {productsFilterGroupsTitle?.map((group) => (
                    <FilterAccordion key={group.value} title={group.name} defaultOpen={true}>
                      <ul className="filterList">
                        {group.child.map((childItem) => (
                          <li key={childItem.value} className="filterListItem">
                            <button
                              onClick={() => handleFilterClick(childItem.value)}
                              className="filter-button-link"
                              style={{
                                background: selectedFilters.includes(childItem.value) ? "#f0f0f0" : "none",
                                border: "none",
                                color: selectedFilters.includes(childItem.value) ? "#007bff" : "inherit",
                                cursor: "pointer",
                                textAlign: "left",
                                width: "100%",
                                padding: "8px 12px",
                                borderRadius: "4px",
                                fontWeight: selectedFilters.includes(childItem.value) ? "bold" : "normal",
                              }}
                            >
                              {childItem.name}
                            </button>
                          </li>
                        ))}
                        {group.child.length === 0 && <li className="noFilterChild">Alt öğe bulunamadı.</li>}
                      </ul>
                    </FilterAccordion>
                  ))}
                </div>
              </div>
            </div>

            <div className="xl-10 lg-10 md-10 sm-12">
              <div className="productPageCards">
                <div className="row">
                  {productsCard.map((product) => {
                    const pid = product.id;
                    const isWish = !!wishlistedMap[pid];
                    const isAddingFav = !!addingFavMap[pid];
                    const isInCart = !!cartMap[pid];
                    const isAddingCart = !!addingCartMap[pid];

                    return (
                      <div className="xl-3 lg-4 md-6 sm-6" key={pid}>
                        <div className="secondHomePageProductsCard">
                          <div className="secondHomePageProductsCardDiv">
                            <Link
                              href={`/products/${product?.slug?.toLowerCase().replace(/\s+/g, "-")}`}
                              className="blockCardLink"
                            >
                              <div className="secondHomePageProductsCardImage">
                                <Image
                                  src={product.image || "/images/defaultImage.png"}
                                  alt={product.name}
                                  width={200}
                                  height={200}
                                />
                              </div>
                            </Link>
                            <div className="secondHomePageProductsCardContent">
                              <p>{product.name}</p>
                              <div className="discount">
                                <span>{product.disc_percent} %</span>
                              </div>
                              <div className="cardBottomContent">
                                <div className="price">
                                  <span className="oldPrice">
                                    {product.old_price}
                                    <TbCurrencyManat />
                                  </span>
                                  <span className="newPrice">
                                    {product.price}
                                    <TbCurrencyManat />
                                  </span>
                                </div>
                                <div className="wishList">
                                  <button>
                                    <NewScale className="newScalePR" />
                                  </button>
                                  <button
                                    onClick={() => handleToggleWishlist(pid)}
                                    className="wishlist-btn"
                                    disabled={isAddingFav}
                                  >
                                    {isWish ? (
                                      <FaHeart className="newWishlistPR active" />
                                    ) : (
                                      <FiHeart className="newWishlistPR" />
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="addToCartClick">
                            <div className="addToCartClickItem">
                              <button
                                className="cartBtn"
                                onClick={() => handleAddToCart(pid)}
                                disabled={isInCart || isAddingCart}
                              >
                                {isAddingCart ? (
                                  <div className="spinner-small"></div>
                                ) : isInCart ? (
                                  "✔︎ Əlavə edildi"
                                ) : (
                                  "Səbətə at"
                                )}
                              </button>
                              <button onClick={openModal} className="clickBtn">
                                Bir Klikle Al
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {delayedLoading && <div className="spinner" />}

                {hasMore && <div ref={loaderRef} style={{ height: 1 }} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;





















// ! e baba İskender Buyuk ama yorqun
// "use client";
// import Link from "next/link";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";
// import Filter from "../../public/icons/filter.svg";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../public/icons/newScale.svg";
// import NewWishList from "../../public/icons/newWishlist.svg";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

// const FilterAccordion = ({ title, children, defaultOpen = false }) => {
//   const [isOpen, setIsOpen] = useState(defaultOpen);
//   return (
//     <div className="accordion">
//       <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
//         {title}
//         <img
//           src={isOpen ? "/icons/minusIcon.svg" : "/icons/plusIcon.svg"}
//           alt="toggle"
//           className="toggle-icon"
//         />
//       </button>
//       {isOpen && <div className="accordion-content">{children}</div>}
//     </div>
//   );
// };

// const ProductsPage = ({
//   slug,
//   productsCard,
//   productsFilterGroupsTitle,
//   categoryData,
//   productsBreadCrumbs,
//   reklamBanner,
//   fetchMore,
//   hasMore,
// }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   // Yeni: gecikdirilmiş loading üçün state
//   const [delayedLoading, setDelayedLoading] = useState(false);
//   const loaderRef = useRef(null);

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };
//   const toggleWishlist = () => {
//     setIsWishlisted((prev) => !prev);
//   };

//   const handleFilterClick = (filterValue) => {
//     const currentFilters = searchParams.getAll("filter");
//     const params = new URLSearchParams(searchParams.toString());

//     if (currentFilters.includes(filterValue)) {
//       params.delete("filter");
//       currentFilters
//         .filter((f) => f !== filterValue)
//         .forEach((f) => params.append("filter", f));
//     } else {
//       params.append("filter", filterValue);
//     }

//     if (slug) {
//       params.set("cat_slug", slug);
//     }

//     router.push(`/products?${params.toString()}`);
//   };

//   const selectedFilters = searchParams.getAll("filter");

//   const getFilterName = (filterValue) => {
//     for (const group of productsFilterGroupsTitle || []) {
//       const foundChild = group.child.find(
//         (child) => child.value === filterValue
//       );
//       if (foundChild) {
//         return foundChild.name;
//       }
//     }
//     return filterValue;
//   };

//   // IntersectionObserver + 1.5s gecikmə
//   useEffect(() => {
//     if (!loaderRef.current || !hasMore) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setDelayedLoading(true);
//           setTimeout(() => {
//             fetchMore();
//             setDelayedLoading(false);
//           }, 1500);
//         }
//       },
//       { rootMargin: "200px" }
//     );
//     obs.observe(loaderRef.current);
//     return () => obs.disconnect();
//   }, [loaderRef.current, hasMore, fetchMore]);

//   return (
//     <>
//       <style jsx>{`
//         .spinner {
//           width: 35px;
//           height: 35px;
//           border: 4px solid red;
//           border-top: 4px solid transparent;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//           margin: 2rem auto;
//         }
//         @keyframes spin {
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>

//       <div>
//         <div className="container">
//           <div className="breadCrumb">
//             {productsBreadCrumbs.map((item, index) => {
//               const isFirst = index === 0;
//               const isLast =
//                 index === productsBreadCrumbs.length - 1;
//               return (
//                 <React.Fragment key={index}>
//                   {item.clickable === "true" ? (
//                     <Link href={item.slug}>
//                       <span>{item.name}</span>
//                     </Link>
//                   ) : (
//                     <span className="lastChildBread">
//                       {item.name}
//                     </span>
//                   )}
//                   {!isLast && (
//                     <strong>
//                       {isFirst ? (
//                         <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//                       ) : (
//                         <MdKeyboardArrowRight className="breadCrumpIcon" />
//                       )}
//                     </strong>
//                   )}
//                 </React.Fragment>
//               );
//             })}
//           </div>

//           {reklamBanner?.reklam_banner && (
//             <div className="productsPageBanner">
//               <div className="productsPageBannerImage">
//                 <Image
//                   src={reklamBanner.reklam_banner}
//                   alt="banner"
//                   width={1000}
//                   height={600}
//                 />
//               </div>
//             </div>
//           )}

//           {showModal && (
//             <div
//               className="modal-overlay"
//               onClick={handleOverlayClick}
//             >
//               <div className="modal">
//                 <button
//                   className="close-btns"
//                   onClick={closeModal}
//                 >
//                   X
//                 </button>
//                 <span>Bir kliklə al</span>
//                 <div></div>
//                 <div className="numberModal">
//                   <label htmlFor="phone">Nömrə: +994</label>
//                   <input
//                     type="text"
//                     id="phone"
//                     name="phone"
//                   />
//                 </div>
//                 <button className="open-btn">
//                   Bir kliklə al
//                 </button>
//               </div>
//             </div>
//           )}

//           <div className="row">
//             <div className="xl-2 lg-2 md-2 sm-12">
//               <div className="filter-container">
//                 <button
//                   className="filter-title"
//                   onClick={() =>
//                     setMobileFilterOpen(!isMobileFilterOpen)
//                   }
//                 >
//                   <span>Filter</span>
//                   <div className="filter-icon">
//                     <Filter className="filIcon" />
//                   </div>
//                 </button>

//                 <div className="selectedFilter desktop-only">
//                   {selectedFilters.map((filter) => (
//                     <div
//                       className="selectedFilterInner"
//                       key={filter}
//                     >
//                       <span
//                         style={{ cursor: "pointer" }}
//                         onClick={() => handleFilterClick(filter)}
//                       >
//                         x
//                       </span>
//                       <p>
//                         {getFilterName(filter)}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 <div
//                   className={`filter-panel ${
//                     isMobileFilterOpen ? "active" : ""
//                   }`}
//                 >
//                   <button className="filter-titless">
//                     Filter
//                   </button>
//                   <div className="selectedFilter mobile-only">
//                     {selectedFilters.map((filter) => (
//                       <div
//                         className="selectedFilterInner"
//                         key={filter}
//                       >
//                         <span
//                           style={{
//                             cursor: "pointer",
//                           }}
//                           onClick={() =>
//                             handleFilterClick(filter)
//                           }
//                         >
//                           x
//                         </span>
//                         <p>
//                           {getFilterName(filter)}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                   <button
//                     className="close-btn"
//                     onClick={() =>
//                       setMobileFilterOpen(false)
//                     }
//                   >
//                     x
//                   </button>
//                   <div className="lineFiltered"></div>

//                   {productsFilterGroupsTitle?.map(
//                     (group) => (
//                       <FilterAccordion
//                         key={group.value}
//                         title={group.name}
//                         defaultOpen={true}
//                       >
//                         <ul className="filterList">
//                           {group.child.map(
//                             (childItem) => (
//                               <li
//                                 key={childItem.value}
//                                 className="filterListItem"
//                               >
//                                 <button
//                                   onClick={() =>
//                                     handleFilterClick(
//                                       childItem.value
//                                     )
//                                   }
//                                   className="filter-button-link"
//                                   style={{
//                                     background: selectedFilters.includes(
//                                       childItem.value
//                                     )
//                                       ? "#f0f0f0"
//                                       : "none",
//                                     border: "none",
//                                     color: selectedFilters.includes(
//                                       childItem.value
//                                     )
//                                       ? "#007bff"
//                                       : "inherit",
//                                     cursor: "pointer",
//                                     textAlign: "left",
//                                     width: "100%",
//                                     padding:
//                                       "8px 12px",
//                                     borderRadius:
//                                       "4px",
//                                     fontWeight: selectedFilters.includes(
//                                       childItem.value
//                                     )
//                                       ? "bold"
//                                       : "normal",
//                                   }}
//                                 >
//                                   {childItem.name}
//                                 </button>
//                               </li>
//                             )
//                           )}
//                           {group.child.length ===
//                             0 && (
//                             <li className="noFilterChild">
//                               Alt öğe bulunamadı.
//                             </li>
//                           )}
//                         </ul>
//                       </FilterAccordion>
//                     )
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="xl-10 lg-10 md-10 sm-12">
//               <div className="productPageCards">
//                 <div className="row">
//                   {productsCard.map((product) => (
//                     <div
//                       className="xl-3 lg-4 md-6 sm-6"
//                       key={product.id}
//                     >
//                       <div className="secondHomePageProductsCard">
//                         <div className="secondHomePageProductsCardDiv">
//                           <Link
//                             href={`/products/${product
//                               ?.slug
//                               ?.toLowerCase()
//                               .replace(
//                                 /\s+/g,
//                                 "-"
//                               )}`}
//                             className="blockCardLink"
//                           >
//                             <div className="secondHomePageProductsCardImage">
//                               <Image
//                                 src={
//                                   product.image ||
//                                   "/images/defaultImage.png"
//                                 }
//                                 alt={product.name}
//                                 width={200}
//                                 height={200}
//                               />
//                             </div>
//                           </Link>
//                           <div className="secondHomePageProductsCardContent">
//                             <span>{product.name}</span>
//                             <div className="discount">
//                               <span>
//                                 {product.disc_percent} %
//                               </span>
//                             </div>
//                             <div className="cardBottomContent">
//                               <div className="price">
//                                 <span className="oldPrice">
//                                   {product.old_price}
//                                   <TbCurrencyManat />
//                                 </span>
//                                 <span className="newPrice">
//                                   {product.price}
//                                   <TbCurrencyManat />
//                                 </span>
//                               </div>
//                               <div className="wishList">
//                                 <button>
//                                   <NewScale className="newScalePR" />
//                                 </button>
//                                 <button
//                                   onClick={toggleWishlist}
//                                   className="wishlist-btn"
//                                 >
//                                   {isWishlisted ? (
//                                     <FaHeart className="newWishlistPR active" />
//                                   ) : (
//                                     <FiHeart className="newWishlistPR" />
//                                   )}
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="addToCartClick">
//                           <div className="addToCartClickItem">
//                             <button className="cartBtn">
//                               Səbətə at
//                             </button>
//                             <button
//                               onClick={openModal}
//                               className="clickBtn"
//                             >
//                               Bir Klikle Al
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Yeni: yalnız bu konteyner içində spinner */}
//                 {delayedLoading && <div className="spinner" />}

//                 {/* Infinite scroll sentinel */}
//                 {hasMore && <div ref={loaderRef} style={{ height: 1 }} />}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductsPage;
// ! e baba İskende Buyuk ama yorqun 
// !30.06.25


























































































// ! EN SON VERISYA


// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";
// import Filter from "../../public/icons/filter.svg";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../public/icons/newScale.svg";
// import NewWishList from "../../public/icons/newWishlist.svg";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

// const FilterAccordion = ({ title, children, defaultOpen = false }) => {
//   const [isOpen, setIsOpen] = useState(defaultOpen);
//   return (
//     <div className="accordion">
//       <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
//         {title}
//         <img
//           src={isOpen ? "/icons/minusIcon.svg" : "/icons/plusIcon.svg"}
//           alt="toggle"
//           className="toggle-icon"
//         />
//       </button>
//       {isOpen && <div className="accordion-content">{children}</div>}
//     </div>
//   );
// };

// const ProductsPage = ({
//   slug,
//   productsCard,
//   productsFilterGroupsTitle,
//   categoryData,
//   productsBreadCrumbs,
//   reklamBanner,
// }) => {
//   // console.log(productsBreadCrumbs , "dededed")
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };
//   const toggleWishlist = () => {
//     setIsWishlisted((prev) => !prev);
//   };

//   const handleFilterClick = (filterValue) => {
//     const currentFilters = searchParams.getAll("filter");
//     const params = new URLSearchParams(searchParams.toString());

//     // Eğer filter zaten seçiliyse, onu sil
//     if (currentFilters.includes(filterValue)) {
//       params.delete("filter");
//       currentFilters
//         .filter((f) => f !== filterValue)
//         .forEach((f) => params.append("filter", f));
//     } else {
//       // Yeni filter ekle
//       params.append("filter", filterValue);
//     }

//     // slug'u koru
//     if (slug) {
//       params.set("cat_slug", slug);
//     }

//     router.push(`/products?${params.toString()}`);
//   };

//   // Şu anki URL'den seçili filtreleri alıyoruz
//   const selectedFilters = searchParams.getAll("filter");

//   // Filter adını ID yerine name ile göstermek üçün
//   const getFilterName = (filterValue) => {
//     for (const group of productsFilterGroupsTitle || []) {
//       const foundChild = group.child.find(
//         (child) => child.value === filterValue
//       );
//       if (foundChild) {
//         return foundChild.name;
//       }
//     }
//     return filterValue; // Eğer bulunamazsa ID'yi göster
//   };

//   return (
//     <div>
//       <div className="container">
//         {/* <div className="breadCrumb">
//           <Link href="/">
//             <span>Ana Səhifə</span>
//           </Link>
//           <strong>
//             <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//           </strong>
//           <Link href="/products">
//             <span>Məhsullar</span>
//           </Link>
//           <strong>
//             <MdKeyboardArrowRight className="breadCrumpIcon" />
//           </strong>
//           <span className="lastChildBread">Telefonlar</span>
//         </div> */}

//         <div className="breadCrumb">
//           {productsBreadCrumbs.map((item, index) => {
//             const isFirst = index === 0;
//             const isLast = index === productsBreadCrumbs.length - 1;

//             return (
//               <React.Fragment key={index}>
//                 {item.clickable === "true" ? (
//                   <Link href={item.slug}>
//                     <span>{item.name}</span>
//                   </Link>
//                 ) : (
//                   <span className="lastChildBread">{item.name}</span>
//                 )}

//                 {!isLast && (
//                   <strong>
//                     {isFirst ? (
//                       <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//                     ) : (
//                       <MdKeyboardArrowRight className="breadCrumpIcon" />
//                     )}
//                   </strong>
//                 )}
//               </React.Fragment>
//             );
//           })}
//         </div>

//         {/* <div className="productsPageBanner">
//           <div className="productsPageBannerImage">
//             <Image
//               src="/images/productPageBanner1.jpg"
//               alt="banner"
//               width={1000}
//               height={600}
//             />
//           </div>
//         </div> */}

//         {reklamBanner?.reklam_banner && (
//           <div className="productsPageBanner">
//             <div className="productsPageBannerImage">
//               <Image
//                 src={reklamBanner.reklam_banner}
//                 alt="banner"
//                 width={1000}
//                 height={600}
//               />
//             </div>
//           </div>
//         )}

//         {showModal && (
//           <div className="modal-overlay" onClick={handleOverlayClick}>
//             <div className="modal">
//               <button className="close-btns" onClick={closeModal}>
//                 X
//               </button>
//               <span>Bir kliklə al</span>
//               <div></div>
//               <div className="numberModal">
//                 <label htmlFor="phone">Nömrə: +994</label>
//                 <input type="text" id="phone" name="phone" />
//               </div>
//               <button className="open-btn">Bir kliklə al</button>
//             </div>
//           </div>
//         )}

//         <div className="row">
//           <div className="xl-2 lg-2 md-2 sm-12">
//             <div className="filter-container">
//               <button
//                 className="filter-title"
//                 onClick={() => setMobileFilterOpen(!isMobileFilterOpen)}
//               >
//                 <span>Filter</span>
//                 <div className="filter-icon">
//                   <Filter className="filIcon" />
//                 </div>
//               </button>

//               {/* === Masaüstü için seçili filtreler === */}
//               <div className="selectedFilter desktop-only">
//                 {selectedFilters.length > 0 &&
//                   selectedFilters.map((filter) => (
//                     <div className="selectedFilterInner" key={filter}>
//                       <span
//                         style={{ cursor: "pointer" }}
//                         onClick={() => handleFilterClick(filter)}
//                       >
//                         x
//                       </span>
//                       <p>{getFilterName(filter)}</p>
//                     </div>
//                   ))}
//               </div>

//               <div
//                 className={`filter-panel ${isMobileFilterOpen ? "active" : ""}`}
//               >
//                 <button className="filter-titless">Filter</button>

//                 {/* === Mobil için seçili filtreler === */}
//                 <div className="selectedFilter mobile-only">
//                   {selectedFilters.length > 0 &&
//                     selectedFilters.map((filter) => (
//                       <div className="selectedFilterInner" key={filter}>
//                         <span
//                           style={{ cursor: "pointer" }}
//                           onClick={() => handleFilterClick(filter)}
//                         >
//                           x
//                         </span>
//                         <p>{getFilterName(filter)}</p>
//                       </div>
//                     ))}
//                 </div>

//                 <button
//                   className="close-btn"
//                   onClick={() => setMobileFilterOpen(false)}
//                 >
//                   x
//                 </button>
//                 <div className="lineFiltered"></div>

//                 {productsFilterGroupsTitle?.map((group) => (
//                   <FilterAccordion
//                     key={group.value}
//                     title={group.name}
//                     defaultOpen={true}
//                   >
//                     <ul className="filterList">
//                       {group.child.map((childItem) => (
//                         <li key={childItem.value} className="filterListItem">
//                           <button
//                             onClick={() => handleFilterClick(childItem.value)}
//                             className="filter-button-link"
//                             style={{
//                               background: selectedFilters.includes(
//                                 childItem.value
//                               )
//                                 ? "#f0f0f0"
//                                 : "none",
//                               border: "none",
//                               color: selectedFilters.includes(childItem.value)
//                                 ? "#007bff"
//                                 : "inherit",
//                               cursor: "pointer",
//                               textAlign: "left",
//                               width: "100%",
//                               padding: "8px 12px",
//                               borderRadius: "4px",
//                               fontWeight: selectedFilters.includes(
//                                 childItem.value
//                               )
//                                 ? "bold"
//                                 : "normal",
//                             }}
//                           >
//                             {childItem.name}
//                           </button>
//                         </li>
//                       ))}
//                       {group.child.length === 0 && (
//                         <li className="noFilterChild">Alt öğe bulunamadı.</li>
//                       )}
//                     </ul>
//                   </FilterAccordion>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="xl-10 lg-10 md-10 sm-12">
//             <div className="productPageCards">
//               <div className="row">
//                 {productsCard && productsCard.length > 0 && (
//                   <>
//                     {productsCard.map((product) => (
//                       <div className="xl-3 lg-4 md-6 sm-6" key={product.id}>
//                         <div className="secondHomePageProductsCard">
//                           <div className="secondHomePageProductsCardDiv">
//                             <Link
//                               href={`/products/${product?.slug
//                                 ?.toLowerCase()
//                                 .replace(/\s+/g, "-")}`}
//                               // {`/products/${product.id}`}
//                               // -${product.id}
//                               className="blockCardLink"
//                             >
//                               <div className="secondHomePageProductsCardImage">
//                                 <Image
//                                   src={
//                                     product.image || "/images/defaultImage.png"
//                                   }
//                                   alt={product.name}
//                                   width={200}
//                                   height={200}
//                                 />
//                               </div>
//                             </Link>
//                             <div className="secondHomePageProductsCardContent">
//                               <span>{product.name}</span>
//                               <div className="discount">
//                                 <span>
//                                   {product.disc_percent}  %
//                                   {/* <TbCurrencyManat /> */}
//                                 </span>
//                               </div>
//                               <div className="cardBottomContent">
//                                 <div className="price">
//                                   <span className="oldPrice">
//                                     {product.old_price}
//                                     <TbCurrencyManat />
//                                   </span>
//                                   <span className="newPrice">
//                                     {product.price}
//                                     <TbCurrencyManat />
//                                   </span>
//                                 </div>

//                                 <div className="wishList">
//                                   <button>
//                                     <NewScale className="newScalePR" />
//                                   </button>
//                                   <button
//                                     onClick={toggleWishlist}
//                                     className="wishlist-btn"
//                                   >
//                                     {isWishlisted ? (
//                                       <FaHeart className="newWishlistPR active" />
//                                     ) : (
//                                       <FiHeart className="newWishlistPR" />
//                                     )}
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="addToCartClick">
//                             <div className="addToCartClickItem">
//                               <button className="cartBtn">Səbətə at</button>
//                               <button onClick={openModal} className="clickBtn">
//                                 Bir Klikle Al
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </>
//                 )}
//                 {/* “Məhsul tapılmadı” mesajı kaldırıldı; ürün yoksa hiçbir şey render edilmeyecek */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

// ! EN SON VERISYA
