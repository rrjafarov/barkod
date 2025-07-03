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


























// ! bu isleyire
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

// // RTK Query hooks
// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";

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

//   // RTK Query data & mutations
//   const { data: wishlistData } = useGetFavQuery();
//   const [addToFav, { isLoading: genericAddingFav }] = useAddToFavMutation();
//   const [removeFromFav, { isLoading: genericRemovingFav }] = useRemoveFromFavMutation();
//   const { data: cartData } = useGetCartQuery();
//   const [addToCart, { isLoading: genericAddingCart }] = useAddToCartMutation();

//   // Local map states
//   const [wishlistedMap, setWishlistedMap] = useState({});
//   const [cartMap, setCartMap] = useState({});
//   const [addingFavMap, setAddingFavMap] = useState({});
//   const [addingCartMap, setAddingCartMap] = useState({});

//   // Delayed loading for infinite scroll
//   const [delayedLoading, setDelayedLoading] = useState(false);
//   const loaderRef = useRef(null);

//   // Modal handlers
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };

//   // Sync wishlist map when data arrives
//   useEffect(() => {
//     if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
//       const newMap = {};
//       wishlistData.wishlist.products.forEach((item) => {
//         newMap[item.id] = true;
//       });
//       setWishlistedMap(newMap);
//     }
//   }, [wishlistData]);

//   // Sync cart map when data arrives
//   useEffect(() => {
//     if (cartData && Array.isArray(cartData.cart?.cart_products)) {
//       const newMap = {};
//       cartData.cart.cart_products.forEach((c) => {
//         const pid = c.product?.id;
//         if (pid != null) newMap[pid] = true;
//       });
//       setCartMap(newMap);
//     }
//   }, [cartData]);

//   // Wishlist toggle with optimistic update
//   const handleToggleWishlist = async (productId) => {
//     if (addingFavMap[productId]) return;
//     const currently = !!wishlistedMap[productId];
//     setWishlistedMap((p) => ({ ...p, [productId]: !currently }));
//     setAddingFavMap((p) => ({ ...p, [productId]: true }));
//     try {
//       if (currently) {
//         await removeFromFav(productId).unwrap();
//       } else {
//         await addToFav(productId).unwrap();
//       }
//     } catch (e) {
//       setWishlistedMap((p) => ({ ...p, [productId]: currently }));
//     } finally {
//       setAddingFavMap((p) => { const c = { ...p }; delete c[productId]; return c; });
//     }
//   };

//   // Add to cart with optimistic update
//   const handleAddToCart = async (productId) => {
//     if (cartMap[productId] || addingCartMap[productId]) return;
//     setCartMap((p) => ({ ...p, [productId]: true }));
//     setAddingCartMap((p) => ({ ...p, [productId]: true }));
//     try {
//       await addToCart({ productId, quantity: 1 }).unwrap();
//     } catch (e) {
//       setCartMap((p) => { const c = { ...p }; delete c[productId]; return c; });
//     } finally {
//       setAddingCartMap((p) => { const c = { ...p }; delete c[productId]; return c; });
//     }
//   };

//   // Infinite scroll with 1.5s delay
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

//   // Filter handlers (unchanged)
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
//       const f = group.child.find((c) => c.value === filterValue);
//       if (f) return f.name;
//     }
//     return filterValue;
//   };

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
//               const isLast = index === productsBreadCrumbs.length - 1;
//               return (
//                 <React.Fragment key={index}>
//                   {item.clickable === "true" ? (
//                     <Link href={item.slug}>
//                       <span>{item.name}</span>
//                     </Link>
//                   ) : (
//                     <span className="lastChildBread">{item.name}</span>
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
//             <div className="modal-overlay" onClick={handleOverlayClick}>
//               <div className="modal">
//                 <button className="close-btns" onClick={closeModal}>
//                   X
//                 </button>
//                 <span>Bir kliklə al</span>
//                 <div className="numberModal">
//                   <label htmlFor="phone">Nömrə: +994</label>
//                   <input type="text" id="phone" name="phone" />
//                 </div>
//                 <button className="open-btn">Bir kliklə al</button>
//               </div>
//             </div>
//           )}

//           <div className="row">
//             <div className="xl-2 lg-2 md-2 sm-12">
//               <div className="filter-container">
//                 <button
//                   className="filter-title"
//                   onClick={() => setMobileFilterOpen(!isMobileFilterOpen)}
//                 >
//                   <span>Filter</span>
//                   <div className="filter-icon">
//                     <Filter className="filIcon" />
//                   </div>
//                 </button>

//                 <div className="selectedFilter desktop-only">
//                   {selectedFilters.map((filter) => (
//                     <div className="selectedFilterInner" key={filter}>
//                       <span style={{ cursor: "pointer" }} onClick={() => handleFilterClick(filter)}>
//                         x
//                       </span>
//                       <p>{getFilterName(filter)}</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className={`filter-panel ${isMobileFilterOpen ? "active" : ""}`}>
//                   <button className="filter-titless">Filter</button>
//                   <div className="selectedFilter mobile-only">
//                     {selectedFilters.map((filter) => (
//                       <div className="selectedFilterInner" key={filter}>
//                         <span style={{ cursor: "pointer" }} onClick={() => handleFilterClick(filter)}>
//                           x
//                         </span>
//                         <p>{getFilterName(filter)}</p>
//                       </div>
//                     ))}
//                   </div>
//                   <button className="close-btn" onClick={() => setMobileFilterOpen(false)}>
//                     x
//                   </button>
//                   <div className="lineFiltered"></div>

//                   {productsFilterGroupsTitle?.map((group) => (
//                     <FilterAccordion key={group.value} title={group.name} defaultOpen={true}>
//                       <ul className="filterList">
//                         {group.child.map((childItem) => (
//                           <li key={childItem.value} className="filterListItem">
//                             <button
//                               onClick={() => handleFilterClick(childItem.value)}
//                               className="filter-button-link"
//                               style={{
//                                 background: selectedFilters.includes(childItem.value) ? "#f0f0f0" : "none",
//                                 border: "none",
//                                 color: selectedFilters.includes(childItem.value) ? "#007bff" : "inherit",
//                                 cursor: "pointer",
//                                 textAlign: "left",
//                                 width: "100%",
//                                 padding: "8px 12px",
//                                 borderRadius: "4px",
//                                 fontWeight: selectedFilters.includes(childItem.value) ? "bold" : "normal",
//                               }}
//                             >
//                               {childItem.name}
//                             </button>
//                           </li>
//                         ))}
//                         {group.child.length === 0 && <li className="noFilterChild">Alt öğe bulunamadı.</li>}
//                       </ul>
//                     </FilterAccordion>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="xl-10 lg-10 md-10 sm-12">
//               <div className="productPageCards">
//                 <div className="row">
//                   {productsCard.map((product) => {
//                     const pid = product.id;
//                     const isWish = !!wishlistedMap[pid];
//                     const isAddingFav = !!addingFavMap[pid];
//                     const isInCart = !!cartMap[pid];
//                     const isAddingCart = !!addingCartMap[pid];

//                     return (
//                       <div className="xl-3 lg-4 md-6 sm-6" key={pid}>
//                         <div className="secondHomePageProductsCard">
//                           <div className="secondHomePageProductsCardDiv">
//                             <Link
//                               href={`/products/${product?.slug?.toLowerCase().replace(/\s+/g, "-")}`}
//                               className="blockCardLink"
//                             >
//                               <div className="secondHomePageProductsCardImage">
//                                 <Image
//                                   src={product.image || "/images/defaultImage.png"}
//                                   alt={product.name}
//                                   width={200}
//                                   height={200}
//                                 />
//                               </div>
//                             </Link>
//                             <div className="secondHomePageProductsCardContent">
//                               <p>{product.name}</p>
//                               <div className="discount">
//                                 <span>{product.disc_percent} %</span>
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
//                                     onClick={() => handleToggleWishlist(pid)}
//                                     className="wishlist-btn"
//                                     disabled={isAddingFav}
//                                   >
//                                     {isWish ? (
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
//                               <button
//                                 className="cartBtn"
//                                 onClick={() => handleAddToCart(pid)}
//                                 disabled={isInCart || isAddingCart}
//                               >
//                                 {isAddingCart ? (
//                                   <div className="spinner-small"></div>
//                                 ) : isInCart ? (
//                                   "✔︎ Əlavə edildi"
//                                 ) : (
//                                   "Səbətə at"
//                                 )}
//                               </button>
//                               <button onClick={openModal} className="clickBtn">
//                                 Bir Klikle Al
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 {delayedLoading && <div className="spinner" />}

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


// ! 01.07.25 0 0 0 0 0 0 0
























"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
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
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

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

// Pagination Component (batch-based, 5 düyməlik bloklar)
const Pagination = ({ currentPage, lastPage, onPageChange }) => {
  if (lastPage <= 1) return null;

  const batchSize = 5;
  const currentBatch = Math.floor((currentPage - 1) / batchSize);
  const startPage = currentBatch * batchSize + 1;
  const endPage = Math.min(startPage + batchSize - 1, lastPage);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const prevBatchPage = startPage - 1;
  const nextBatchPage = endPage + 1;

  return (
    <div className="paginationContainer" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', gap: '5px' }}>
      {prevBatchPage >= 1 && (
        <button
          className="paginationButton"
          onClick={() => onPageChange(prevBatchPage)}
          style={{ padding: '8px 12px', cursor: 'pointer' }}
        >
          &#171;
        </button>
      )}

      {pages.map(page => (
        <button
          key={page}
          className={`paginationButton ${page === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(page)}
          style={{
            padding: '8px 12px',
            cursor: 'pointer',
            backgroundColor: page === currentPage ? '#007bff' : 'white',
            color: page === currentPage ? 'white' : 'black',
            border: '1px solid #ddd'
          }}
        >
          {page}
        </button>
      ))}

      {nextBatchPage <= lastPage && (
        <button
          className="paginationButton"
          onClick={() => onPageChange(nextBatchPage)}
          style={{ padding: '8px 12px', cursor: 'pointer' }}
        >
          &#187;
        </button>
      )}
    </div>
  );
};

export default function ProductsPage({
  slug,
  productsCard,
  productsFilterGroupsTitle,
  productsBreadCrumbs,
  reklamBanner,
  currentPage,
  lastPage,
  loading,
  onPageChange,
  t
}) {
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
    } catch {
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
    } catch {
      setCartMap((p) => { const c = { ...p }; delete c[productId]; return c; });
    } finally {
      setAddingCartMap((p) => { const c = { ...p }; delete c[productId]; return c; });
    }
  };

  // Filter handlers
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

                {loading && <div className="spinner" />}
              </div>

              <Pagination
                currentPage={currentPage}
                lastPage={lastPage}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}












// ! PAGINATE COXDUR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// "use client";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
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
// import { FaCaretLeft } from "react-icons/fa";
// import { FaCaretRight } from "react-icons/fa";

// // RTK Query hooks
// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";

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

// // Pagination Component
// const Pagination = ({ currentPage, lastPage, onPageChange }) => {
//   if (lastPage <= 1) return null;

//   const pages = [];
//   for (let i = 1; i <= lastPage; i++) {
//     pages.push(i);
//   }

//   return (
//     <div className="paginationContainer" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', gap: '5px' }}>
//       {currentPage > 1 && (
//         <button 
//         className="paginationButton"
//           onClick={() => onPageChange(currentPage - 1)}
//           style={{ padding: '8px 12px', cursor: 'pointer' }}
//         >
//           <FaCaretLeft />

//         </button>
//       )}
      
//       {pages.map(page => (
//         <button
//           key={page}
//           className={`paginationButton ${page === currentPage ? "active" : ""}`}
//           onClick={() => onPageChange(page)}
//           style={{
//             padding: '8px 12px',
//             cursor: 'pointer',
//             backgroundColor: currentPage === page ? '#007bff' : 'white',
//             color: currentPage === page ? 'white' : 'black',
//             border: '1px solid #ddd'
//           }}
//         >
//           {page}
//         </button>
//       ))}
      
//       {currentPage < lastPage && (
//         <button 
//           onClick={() => onPageChange(currentPage + 1)}
//           style={{ padding: '8px 12px', cursor: 'pointer' }}
//           className="paginationButton"
//         >
//           <FaCaretRight />
//         </button>
//       )}
//     </div>
//   );
// };

// export default function ProductsPage({
//   slug,
//   productsCard,
//   productsFilterGroupsTitle,
//   productsBreadCrumbs,
//   reklamBanner,
//   currentPage,
//   lastPage,
//   loading,
//   onPageChange,
//   t
// }) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   // RTK Query data & mutations
//   const { data: wishlistData } = useGetFavQuery();
//   const [addToFav, { isLoading: genericAddingFav }] = useAddToFavMutation();
//   const [removeFromFav, { isLoading: genericRemovingFav }] = useRemoveFromFavMutation();
//   const { data: cartData } = useGetCartQuery();
//   const [addToCart, { isLoading: genericAddingCart }] = useAddToCartMutation();

//   // Local map states
//   const [wishlistedMap, setWishlistedMap] = useState({});
//   const [cartMap, setCartMap] = useState({});
//   const [addingFavMap, setAddingFavMap] = useState({});
//   const [addingCartMap, setAddingCartMap] = useState({});

//   // Modal handlers
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };

//   // Sync wishlist map when data arrives
//   useEffect(() => {
//     if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
//       const newMap = {};
//       wishlistData.wishlist.products.forEach((item) => {
//         newMap[item.id] = true;
//       });
//       setWishlistedMap(newMap);
//     }
//   }, [wishlistData]);

//   // Sync cart map when data arrives
//   useEffect(() => {
//     if (cartData && Array.isArray(cartData.cart?.cart_products)) {
//       const newMap = {};
//       cartData.cart.cart_products.forEach((c) => {
//         const pid = c.product?.id;
//         if (pid != null) newMap[pid] = true;
//       });
//       setCartMap(newMap);
//     }
//   }, [cartData]);

//   // Wishlist toggle with optimistic update
//   const handleToggleWishlist = async (productId) => {
//     if (addingFavMap[productId]) return;
//     const currently = !!wishlistedMap[productId];
//     setWishlistedMap((p) => ({ ...p, [productId]: !currently }));
//     setAddingFavMap((p) => ({ ...p, [productId]: true }));
//     try {
//       if (currently) {
//         await removeFromFav(productId).unwrap();
//       } else {
//         await addToFav(productId).unwrap();
//       }
//     } catch (e) {
//       setWishlistedMap((p) => ({ ...p, [productId]: currently }));
//     } finally {
//       setAddingFavMap((p) => { const c = { ...p }; delete c[productId]; return c; });
//     }
//   };

//   // Add to cart with optimistic update
//   const handleAddToCart = async (productId) => {
//     if (cartMap[productId] || addingCartMap[productId]) return;
//     setCartMap((p) => ({ ...p, [productId]: true }));
//     setAddingCartMap((p) => ({ ...p, [productId]: true }));
//     try {
//       await addToCart({ productId, quantity: 1 }).unwrap();
//     } catch (e) {
//       setCartMap((p) => { const c = { ...p }; delete c[productId]; return c; });
//     } finally {
//       setAddingCartMap((p) => { const c = { ...p }; delete c[productId]; return c; });
//     }
//   };

//   // Filter handlers
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
//       const f = group.child.find((c) => c.value === filterValue);
//       if (f) return f.name;
//     }
//     return filterValue;
//   };

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
//               const isLast = index === productsBreadCrumbs.length - 1;
//               return (
//                 <React.Fragment key={index}>
//                   {item.clickable === "true" ? (
//                     <Link href={item.slug}>
//                       <span>{item.name}</span>
//                     </Link>
//                   ) : (
//                     <span className="lastChildBread">{item.name}</span>
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
//             <div className="modal-overlay" onClick={handleOverlayClick}>
//               <div className="modal">
//                 <button className="close-btns" onClick={closeModal}>
//                   X
//                 </button>
//                 <span>Bir kliklə al</span>
//                 <div className="numberModal">
//                   <label htmlFor="phone">Nömrə: +994</label>
//                   <input type="text" id="phone" name="phone" />
//                 </div>
//                 <button className="open-btn">Bir kliklə al</button>
//               </div>
//             </div>
//           )}

//           <div className="row">
//             <div className="xl-2 lg-2 md-2 sm-12">
//               <div className="filter-container">
//                 <button
//                   className="filter-title"
//                   onClick={() => setMobileFilterOpen(!isMobileFilterOpen)}
//                 >
//                   <span>Filter</span>
//                   <div className="filter-icon">
//                     <Filter className="filIcon" />
//                   </div>
//                 </button>

//                 <div className="selectedFilter desktop-only">
//                   {selectedFilters.map((filter) => (
//                     <div className="selectedFilterInner" key={filter}>
//                       <span style={{ cursor: "pointer" }} onClick={() => handleFilterClick(filter)}>
//                         x
//                       </span>
//                       <p>{getFilterName(filter)}</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className={`filter-panel ${isMobileFilterOpen ? "active" : ""}`}>
//                   <button className="filter-titless">Filter</button>
//                   <div className="selectedFilter mobile-only">
//                     {selectedFilters.map((filter) => (
//                       <div className="selectedFilterInner" key={filter}>
//                         <span style={{ cursor: "pointer" }} onClick={() => handleFilterClick(filter)}>
//                           x
//                         </span>
//                         <p>{getFilterName(filter)}</p>
//                       </div>
//                     ))}
//                   </div>
//                   <button className="close-btn" onClick={() => setMobileFilterOpen(false)}>
//                     x
//                   </button>
//                   <div className="lineFiltered"></div>

//                   {productsFilterGroupsTitle?.map((group) => (
//                     <FilterAccordion key={group.value} title={group.name} defaultOpen={true}>
//                       <ul className="filterList">
//                         {group.child.map((childItem) => (
//                           <li key={childItem.value} className="filterListItem">
//                             <button
//                               onClick={() => handleFilterClick(childItem.value)}
//                               className="filter-button-link"
//                               style={{
//                                 background: selectedFilters.includes(childItem.value) ? "#f0f0f0" : "none",
//                                 border: "none",
//                                 color: selectedFilters.includes(childItem.value) ? "#007bff" : "inherit",
//                                 cursor: "pointer",
//                                 textAlign: "left",
//                                 width: "100%",
//                                 padding: "8px 12px",
//                                 borderRadius: "4px",
//                                 fontWeight: selectedFilters.includes(childItem.value) ? "bold" : "normal",
//                               }}
//                             >
//                               {childItem.name}
//                             </button>
//                           </li>
//                         ))}
//                         {group.child.length === 0 && <li className="noFilterChild">Alt öğe bulunamadı.</li>}
//                       </ul>
//                     </FilterAccordion>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="xl-10 lg-10 md-10 sm-12">
//               <div className="productPageCards">
//                 <div className="row">
//                   {productsCard.map((product) => {
//                     const pid = product.id;
//                     const isWish = !!wishlistedMap[pid];
//                     const isAddingFav = !!addingFavMap[pid];
//                     const isInCart = !!cartMap[pid];
//                     const isAddingCart = !!addingCartMap[pid];

//                     return (
//                       <div className="xl-3 lg-4 md-6 sm-6" key={pid}>
//                         <div className="secondHomePageProductsCard">
//                           <div className="secondHomePageProductsCardDiv">
//                             <Link
//                               href={`/products/${product?.slug?.toLowerCase().replace(/\s+/g, "-")}`}
//                               className="blockCardLink"
//                             >
//                               <div className="secondHomePageProductsCardImage">
//                                 <Image
//                                   src={product.image || "/images/defaultImage.png"}
//                                   alt={product.name}
//                                   width={200}
//                                   height={200}
//                                 />
//                               </div>
//                             </Link>
//                             <div className="secondHomePageProductsCardContent">
//                               <p>{product.name}</p>
//                               <div className="discount">
//                                 <span>{product.disc_percent} %</span>
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
//                                     onClick={() => handleToggleWishlist(pid)}
//                                     className="wishlist-btn"
//                                     disabled={isAddingFav}
//                                   >
//                                     {isWish ? (
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
//                               <button
//                                 className="cartBtn"
//                                 onClick={() => handleAddToCart(pid)}
//                                 disabled={isInCart || isAddingCart}
//                               >
//                                 {isAddingCart ? (
//                                   <div className="spinner-small"></div>
//                                 ) : isInCart ? (
//                                   "✔︎ Əlavə edildi"
//                                 ) : (
//                                   "Səbətə at"
//                                 )}
//                               </button>
//                               <button onClick={openModal} className="clickBtn">
//                                 Bir Klikle Al
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 {loading && <div className="spinner" />}
//               </div>

//               <Pagination
//                 currentPage={currentPage}
//                 lastPage={lastPage}
//                 onPageChange={onPageChange}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// ! PAGINATE COXDUR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




















































































// ! surpriz
// "use client";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";
// import Filter from "../../public/icons/filter.svg";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../public/icons/newScale.svg";
// import { MdKeyboardDoubleArrowRight, MdKeyboardArrowRight } from "react-icons/md";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

// // RTK Query hooks
// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";

// // Accordion for filter groups
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

// // Pagination Component
// const Pagination = ({ currentPage, lastPage, onPageChange }) => {
//   if (lastPage <= 1) return null;
//   const pages = Array.from({ length: lastPage }, (_, i) => i + 1);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', gap: '5px' }}>
//       {currentPage > 1 && (
//         <button onClick={() => onPageChange(currentPage - 1)}>‹</button>
//       )}
//       {pages.map((page) => (
//         <button
//           key={page}
//           onClick={() => onPageChange(page)}
//           style={{
//             background: currentPage === page ? '#007bff' : 'white',
//             color: currentPage === page ? 'white' : 'black',
//             border: '1px solid #ddd',
//             padding: '8px 12px',
//             cursor: 'pointer'
//           }}
//         >
//           {page}
//         </button>
//       ))}
//       {currentPage < lastPage && (
//         <button onClick={() => onPageChange(currentPage + 1)}>›</button>
//       )}
//     </div>
//   );
// };

// export default function ProductsPage({
//   slug,
//   productsCard,
//   productsFilterGroupsTitle,
//   productsBreadCrumbs,
//   reklamBanner,
//   loading,
//   currentPage,
//   lastPage,
//   onPageChange
// }) {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // RTK Query data & mutations
//   const { data: wishlistData } = useGetFavQuery();
//   const [addToFav, { isLoading: addingFav }] = useAddToFavMutation();
//   const [removeFromFav, { isLoading: removingFav }] = useRemoveFromFavMutation();
//   const { data: cartData } = useGetCartQuery();
//   const [addToCart, { isLoading: addingCart }] = useAddToCartMutation();

//   // Local maps for optimistic UI
//   const [wishlistedMap, setWishlistedMap] = useState({});
//   const [cartMap, setCartMap] = useState({});
//   const [addingFavMap, setAddingFavMap] = useState({});
//   const [addingCartMap, setAddingCartMap] = useState({});

//   // Mobile filter state and modal
//   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   // Sync wishlist map
//   useEffect(() => {
//     if (wishlistData?.wishlist?.products) {
//       const map = {};
//       wishlistData.wishlist.products.forEach(p => map[p.id] = true);
//       setWishlistedMap(map);
//     }
//   }, [wishlistData]);

//   // Sync cart map
//   useEffect(() => {
//     if (cartData?.cart?.cart_products) {
//       const map = {};
//       cartData.cart.cart_products.forEach(c => {
//         if (c.product?.id) map[c.product.id] = true;
//       });
//       setCartMap(map);
//     }
//   }, [cartData]);

//   // Wishlist toggle
//   const handleToggleWishlist = async (productId) => {
//     if (addingFavMap[productId]) return;
//     const isFav = !!wishlistedMap[productId];
//     setWishlistedMap(prev => ({ ...prev, [productId]: !isFav }));
//     setAddingFavMap(prev => ({ ...prev, [productId]: true }));
//     try {
//       if (isFav) await removeFromFav(productId).unwrap();
//       else await addToFav(productId).unwrap();
//     } catch {
//       setWishlistedMap(prev => ({ ...prev, [productId]: isFav }));
//     } finally {
//       setAddingFavMap(prev => { const m = { ...prev }; delete m[productId]; return m; });
//     }
//   };

//   // Add to cart
//   const handleAddToCart = async (productId) => {
//     if (cartMap[productId] || addingCartMap[productId]) return;
//     setCartMap(prev => ({ ...prev, [productId]: true }));
//     setAddingCartMap(prev => ({ ...prev, [productId]: true }));
//     try {
//       await addToCart({ productId, quantity: 1 }).unwrap();
//     } catch {
//       setCartMap(prev => { const m = { ...prev }; delete m[productId]; return m; });
//     } finally {
//       setAddingCartMap(prev => { const m = { ...prev }; delete m[productId]; return m; });
//     }
//   };

//   // Filter click
//   const handleFilterClick = (value) => {
//     const params = new URLSearchParams(searchParams.toString());
//     const existing = params.getAll("filter");
//     if (existing.includes(value)) {
//       params.delete("filter");
//       existing.filter(f => f !== value).forEach(f => params.append("filter", f));
//     } else {
//       params.append("filter", value);
//     }
//     if (slug) params.set("cat_slug", slug);
//     router.push(`/products?${params.toString()}`);
//   };
//   const selectedFilters = searchParams.getAll("filter");
//   const getFilterName = (val) => {
//     for (const group of productsFilterGroupsTitle || []) {
//       const found = group.child.find(c => c.value === val);
//       if (found) return found.name;
//     }
//     return val;
//   };

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
//           to { transform: rotate(360deg); }
//         }
//       `}</style>

//       <div className="container">
//         {/* Breadcrumbs */}
//         <div className="breadCrumb">
//           {productsBreadCrumbs.map((item, idx) => {
//             const isLast = idx === productsBreadCrumbs.length - 1;
//             return (
//               <React.Fragment key={idx}>
//                 {item.clickable === "true" ? (
//                   <Link href={item.slug}><span>{item.name}</span></Link>
//                 ) : (
//                   <span className="lastChildBread">{item.name}</span>
//                 )}
//                 {!isLast && (
//                   <strong>
//                     {idx === 0
//                       ? <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//                       : <MdKeyboardArrowRight className="breadCrumpIcon" />
//                     }
//                   </strong>
//                 )}
//               </React.Fragment>
//             );
//           })}
//         </div>

//         {/* Banner */}
//         {reklamBanner?.reklam_banner && (
//           <div className="productsPageBanner">
//             <Image
//               src={reklamBanner.reklam_banner}
//               alt="banner"
//               width={1000}
//               height={600}
//             />
//           </div>
//         )}

//         {/* Filter & Products layout */}
//         <div className="row">
//           {/* Filters */}
//           <div className="xl-2 lg-2 md-2 sm-12">
//             <button
//               className="filter-title"
//               onClick={() => setMobileFilterOpen(o => !o)}
//             >
//               <Filter className="filIcon" /> Filter
//             </button>
//             <div className={`filter-panel ${isMobileFilterOpen ? 'active' : ''}`}>
//               <button className="close-btn" onClick={() => setMobileFilterOpen(false)}>x</button>
//               <div className="selectedFilter">
//                 {selectedFilters.map(f => (
//                   <div key={f} className="selectedFilterInner">
//                     <span onClick={() => handleFilterClick(f)}>x</span>
//                     <p>{getFilterName(f)}</p>
//                   </div>
//                 ))}
//               </div>
//               {productsFilterGroupsTitle?.map(group => (
//                 <FilterAccordion key={group.value} title={group.name} defaultOpen>
//                   <ul className="filterList">
//                     {group.child.length
//                       ? group.child.map(c => (
//                           <li key={c.value}>
//                             <button
//                               onClick={() => handleFilterClick(c.value)}
//                               style={{
//                                 background: selectedFilters.includes(c.value) ? '#f0f0f0' : 'inherit',
//                                 fontWeight: selectedFilters.includes(c.value) ? 'bold' : 'normal'
//                               }}
//                             >
//                               {c.name}
//                             </button>
//                           </li>
//                         ))
//                       : <li>Alt öğe bulunamadı.</li>
//                     }
//                   </ul>
//                 </FilterAccordion>
//               ))}
//             </div>
//           </div>

//           {/* Product Cards */}
//           <div className="xl-10 lg-10 md-10 sm-12">
//             <div className="row">
//               {productsCard.map(product => {
//                 const pid = product.id;
//                 const isFav = !!wishlistedMap[pid];
//                 const isInCart = !!cartMap[pid];
//                 const favLoading = !!addingFavMap[pid];
//                 const cartLoading = !!addingCartMap[pid];

//                 return (
//                   <div key={pid} className="xl-3 lg-4 md-6 sm-6">
//                     <div className="productCard">
//                       <Link href={`/products/${product.slug}`}>
//                         <Image
//                           src={product.image || '/images/defaultImage.png'}
//                           alt={product.name}
//                           width={200}
//                           height={200}
//                         />
//                       </Link>
//                       <p>{product.name}</p>
//                       <div className="price">
//                         <span className="oldPrice">
//                           {product.old_price}<TbCurrencyManat />
//                         </span>
//                         <span className="newPrice">
//                           {product.price}<TbCurrencyManat />
//                         </span>
//                       </div>
//                       <div className="actions">
//                         <button onClick={() => handleToggleWishlist(pid)} disabled={favLoading}>
//                           {isFav ? <FaHeart /> : <FiHeart />}
//                         </button>
//                         <button onClick={() => handleAddToCart(pid)} disabled={isInCart || cartLoading}>
//                           {cartLoading
//                             ? <div className="spinner-small" />
//                             : isInCart
//                               ? '✔︎ Əlavə edildi'
//                               : 'Səbətə at'
//                           }
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Loading spinner */}
//             {loading && <div className="spinner" />}

//             {/* Pagination */}
//             <Pagination
//               currentPage={currentPage}
//               lastPage={lastPage}
//               onPageChange={onPageChange}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }






















// ! ----------------------------- bu pagonate isleyir

// "use client";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
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

// // RTK Query hooks
// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";

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

// // Pagination Component
// const Pagination = ({ currentPage, lastPage, onPageChange }) => {
//   if (lastPage <= 1) return null;

//   const pages = [];
//   for (let i = 1; i <= lastPage; i++) {
//     pages.push(i);
//   }

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', gap: '5px' }}>
//       {currentPage > 1 && (
//         <button 
//           onClick={() => onPageChange(currentPage - 1)}
//           style={{ padding: '8px 12px', cursor: 'pointer' }}
//         >
//           ‹
//         </button>
//       )}
      
//       {pages.map(page => (
//         <button
//           key={page}
//           onClick={() => onPageChange(page)}
//           style={{
//             padding: '8px 12px',
//             cursor: 'pointer',
//             backgroundColor: currentPage === page ? '#007bff' : 'white',
//             color: currentPage === page ? 'white' : 'black',
//             border: '1px solid #ddd'
//           }}
//         >
//           {page}
//         </button>
//       ))}
      
//       {currentPage < lastPage && (
//         <button 
//           onClick={() => onPageChange(currentPage + 1)}
//           style={{ padding: '8px 12px', cursor: 'pointer' }}
//         >
//           ›
//         </button>
//       )}
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
//   currentPage,
//   lastPage,
//   loading,
//   onPageChange
// }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   // RTK Query data & mutations
//   const { data: wishlistData } = useGetFavQuery();
//   const [addToFav, { isLoading: genericAddingFav }] = useAddToFavMutation();
//   const [removeFromFav, { isLoading: genericRemovingFav }] = useRemoveFromFavMutation();
//   const { data: cartData } = useGetCartQuery();
//   const [addToCart, { isLoading: genericAddingCart }] = useAddToCartMutation();

//   // Local map states
//   const [wishlistedMap, setWishlistedMap] = useState({});
//   const [cartMap, setCartMap] = useState({});
//   const [addingFavMap, setAddingFavMap] = useState({});
//   const [addingCartMap, setAddingCartMap] = useState({});

//   // Modal handlers
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };

//   // Sync wishlist map when data arrives
//   useEffect(() => {
//     if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
//       const newMap = {};
//       wishlistData.wishlist.products.forEach((item) => {
//         newMap[item.id] = true;
//       });
//       setWishlistedMap(newMap);
//     }
//   }, [wishlistData]);

//   // Sync cart map when data arrives
//   useEffect(() => {
//     if (cartData && Array.isArray(cartData.cart?.cart_products)) {
//       const newMap = {};
//       cartData.cart.cart_products.forEach((c) => {
//         const pid = c.product?.id;
//         if (pid != null) newMap[pid] = true;
//       });
//       setCartMap(newMap);
//     }
//   }, [cartData]);

//   // Wishlist toggle with optimistic update
//   const handleToggleWishlist = async (productId) => {
//     if (addingFavMap[productId]) return;
//     const currently = !!wishlistedMap[productId];
//     setWishlistedMap((p) => ({ ...p, [productId]: !currently }));
//     setAddingFavMap((p) => ({ ...p, [productId]: true }));
//     try {
//       if (currently) {
//         await removeFromFav(productId).unwrap();
//       } else {
//         await addToFav(productId).unwrap();
//       }
//     } catch (e) {
//       setWishlistedMap((p) => ({ ...p, [productId]: currently }));
//     } finally {
//       setAddingFavMap((p) => { const c = { ...p }; delete c[productId]; return c; });
//     }
//   };

//   // Add to cart with optimistic update
//   const handleAddToCart = async (productId) => {
//     if (cartMap[productId] || addingCartMap[productId]) return;
//     setCartMap((p) => ({ ...p, [productId]: true }));
//     setAddingCartMap((p) => ({ ...p, [productId]: true }));
//     try {
//       await addToCart({ productId, quantity: 1 }).unwrap();
//     } catch (e) {
//       setCartMap((p) => { const c = { ...p }; delete c[productId]; return c; });
//     } finally {
//       setAddingCartMap((p) => { const c = { ...p }; delete c[productId]; return c; });
//     }
//   };

//   // Filter handlers
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
//       const f = group.child.find((c) => c.value === filterValue);
//       if (f) return f.name;
//     }
//     return filterValue;
//   };

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
//               const isLast = index === productsBreadCrumbs.length - 1;
//               return (
//                 <React.Fragment key={index}>
//                   {item.clickable === "true" ? (
//                     <Link href={item.slug}>
//                       <span>{item.name}</span>
//                     </Link>
//                   ) : (
//                     <span className="lastChildBread">{item.name}</span>
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
//             <div className="modal-overlay" onClick={handleOverlayClick}>
//               <div className="modal">
//                 <button className="close-btns" onClick={closeModal}>
//                   X
//                 </button>
//                 <span>Bir kliklə al</span>
//                 <div className="numberModal">
//                   <label htmlFor="phone">Nömrə: +994</label>
//                   <input type="text" id="phone" name="phone" />
//                 </div>
//                 <button className="open-btn">Bir kliklə al</button>
//               </div>
//             </div>
//           )}

//           <div className="row">
//             <div className="xl-2 lg-2 md-2 sm-12">
//               <div className="filter-container">
//                 <button
//                   className="filter-title"
//                   onClick={() => setMobileFilterOpen(!isMobileFilterOpen)}
//                 >
//                   <span>Filter</span>
//                   <div className="filter-icon">
//                     <Filter className="filIcon" />
//                   </div>
//                 </button>

//                 <div className="selectedFilter desktop-only">
//                   {selectedFilters.map((filter) => (
//                     <div className="selectedFilterInner" key={filter}>
//                       <span style={{ cursor: "pointer" }} onClick={() => handleFilterClick(filter)}>
//                         x
//                       </span>
//                       <p>{getFilterName(filter)}</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className={`filter-panel ${isMobileFilterOpen ? "active" : ""}`}>
//                   <button className="filter-titless">Filter</button>
//                   <div className="selectedFilter mobile-only">
//                     {selectedFilters.map((filter) => (
//                       <div className="selectedFilterInner" key={filter}>
//                         <span style={{ cursor: "pointer" }} onClick={() => handleFilterClick(filter)}>
//                           x
//                         </span>
//                         <p>{getFilterName(filter)}</p>
//                       </div>
//                     ))}
//                   </div>
//                   <button className="close-btn" onClick={() => setMobileFilterOpen(false)}>
//                     x
//                   </button>
//                   <div className="lineFiltered"></div>

//                   {productsFilterGroupsTitle?.map((group) => (
//                     <FilterAccordion key={group.value} title={group.name} defaultOpen={true}>
//                       <ul className="filterList">
//                         {group.child.map((childItem) => (
//                           <li key={childItem.value} className="filterListItem">
//                             <button
//                               onClick={() => handleFilterClick(childItem.value)}
//                               className="filter-button-link"
//                               style={{
//                                 background: selectedFilters.includes(childItem.value) ? "#f0f0f0" : "none",
//                                 border: "none",
//                                 color: selectedFilters.includes(childItem.value) ? "#007bff" : "inherit",
//                                 cursor: "pointer",
//                                 textAlign: "left",
//                                 width: "100%",
//                                 padding: "8px 12px",
//                                 borderRadius: "4px",
//                                 fontWeight: selectedFilters.includes(childItem.value) ? "bold" : "normal",
//                               }}
//                             >
//                               {childItem.name}
//                             </button>
//                           </li>
//                         ))}
//                         {group.child.length === 0 && <li className="noFilterChild">Alt öğe bulunamadı.</li>}
//                       </ul>
//                     </FilterAccordion>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="xl-10 lg-10 md-10 sm-12">
//               <div className="productPageCards">
//                 <div className="row">
//                   {productsCard.map((product) => {
//                     const pid = product.id;
//                     const isWish = !!wishlistedMap[pid];
//                     const isAddingFav = !!addingFavMap[pid];
//                     const isInCart = !!cartMap[pid];
//                     const isAddingCart = !!addingCartMap[pid];

//                     return (
//                       <div className="xl-3 lg-4 md-6 sm-6" key={pid}>
//                         <div className="secondHomePageProductsCard">
//                           <div className="secondHomePageProductsCardDiv">
//                             <Link
//                               href={`/products/${product?.slug?.toLowerCase().replace(/\s+/g, "-")}`}
//                               className="blockCardLink"
//                             >
//                               <div className="secondHomePageProductsCardImage">
//                                 <Image
//                                   src={product.image || "/images/defaultImage.png"}
//                                   alt={product.name}
//                                   width={200}
//                                   height={200}
//                                 />
//                               </div>
//                             </Link>
//                             <div className="secondHomePageProductsCardContent">
//                               <p>{product.name}</p>
//                               <div className="discount">
//                                 <span>{product.disc_percent} %</span>
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
//                                     onClick={() => handleToggleWishlist(pid)}
//                                     className="wishlist-btn"
//                                     disabled={isAddingFav}
//                                   >
//                                     {isWish ? (
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
//                               <button
//                                 className="cartBtn"
//                                 onClick={() => handleAddToCart(pid)}
//                                 disabled={isInCart || isAddingCart}
//                               >
//                                 {isAddingCart ? (
//                                   <div className="spinner-small"></div>
//                                 ) : isInCart ? (
//                                   "✔︎ Əlavə edildi"
//                                 ) : (
//                                   "Səbətə at"
//                                 )}
//                               </button>
//                               <button onClick={openModal} className="clickBtn">
//                                 Bir Klikle Al
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 {loading && <div className="spinner" />}
//               </div>

//               <Pagination
//                 currentPage={currentPage}
//                 lastPage={lastPage}
//                 onPageChange={onPageChange}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductsPage;


























// !  ----------------------------------BU KOD TAM ISLEKDIR---------------------------------------
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

// // RTK Query hooks
// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";

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
//   loading, // loading prop əlavə edildi
// }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   // RTK Query data & mutations
//   const { data: wishlistData } = useGetFavQuery();
//   const [addToFav, { isLoading: genericAddingFav }] = useAddToFavMutation();
//   const [removeFromFav, { isLoading: genericRemovingFav }] = useRemoveFromFavMutation();
//   const { data: cartData } = useGetCartQuery();
//   const [addToCart, { isLoading: genericAddingCart }] = useAddToCartMutation();

//   // Local map states
//   const [wishlistedMap, setWishlistedMap] = useState({});
//   const [cartMap, setCartMap] = useState({});
//   const [addingFavMap, setAddingFavMap] = useState({});
//   const [addingCartMap, setAddingCartMap] = useState({});

//   // Intersection observer üçün ref
//   const loaderRef = useRef(null);
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   // Modal handlers
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };

//   // Sync wishlist map when data arrives
//   useEffect(() => {
//     if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
//       const newMap = {};
//       wishlistData.wishlist.products.forEach((item) => {
//         newMap[item.id] = true;
//       });
//       setWishlistedMap(newMap);
//     }
//   }, [wishlistData]);

//   // Sync cart map when data arrives
//   useEffect(() => {
//     if (cartData && Array.isArray(cartData.cart?.cart_products)) {
//       const newMap = {};
//       cartData.cart.cart_products.forEach((c) => {
//         const pid = c.product?.id;
//         if (pid != null) newMap[pid] = true;
//       });
//       setCartMap(newMap);
//     }
//   }, [cartData]);

//   // Wishlist toggle with optimistic update
//   const handleToggleWishlist = async (productId) => {
//     if (addingFavMap[productId]) return;
//     const currently = !!wishlistedMap[productId];
//     setWishlistedMap((p) => ({ ...p, [productId]: !currently }));
//     setAddingFavMap((p) => ({ ...p, [productId]: true }));
//     try {
//       if (currently) {
//         await removeFromFav(productId).unwrap();
//       } else {
//         await addToFav(productId).unwrap();
//       }
//     } catch (e) {
//       setWishlistedMap((p) => ({ ...p, [productId]: currently }));
//     } finally {
//       setAddingFavMap((p) => { const c = { ...p }; delete c[productId]; return c; });
//     }
//   };

//   // Add to cart with optimistic update
//   const handleAddToCart = async (productId) => {
//     if (cartMap[productId] || addingCartMap[productId]) return;
//     setCartMap((p) => ({ ...p, [productId]: true }));
//     setAddingCartMap((p) => ({ ...p, [productId]: true }));
//     try {
//       await addToCart({ productId, quantity: 1 }).unwrap();
//     } catch (e) {
//       setCartMap((p) => { const c = { ...p }; delete c[productId]; return c; });
//     } finally {
//       setAddingCartMap((p) => { const c = { ...p }; delete c[productId]; return c; });
//     }
//   };

//   // Intersection Observer quraşdırılması
//   useEffect(() => {
//     if (!loaderRef.current || !hasMore) return;
    
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsIntersecting(entry.isIntersecting);
//       },
//       { rootMargin: "200px" }
//     );
    
//     observer.observe(loaderRef.current);
//     return () => observer.disconnect();
//   }, [hasMore]);

//   // Fetch more məntiqini ayrıca useEffect ilə idarə etmək
//   useEffect(() => {
//     if (isIntersecting && hasMore && !loading) {
//       const timer = setTimeout(() => {
//         fetchMore();
//       }, 500);
      
//       return () => clearTimeout(timer);
//     }
//   }, [isIntersecting, hasMore, loading, fetchMore]);

//   // Filter handlers (unchanged)
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
//       const f = group.child.find((c) => c.value === filterValue);
//       if (f) return f.name;
//     }
//     return filterValue;
//   };

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
//               const isLast = index === productsBreadCrumbs.length - 1;
//               return (
//                 <React.Fragment key={index}>
//                   {item.clickable === "true" ? (
//                     <Link href={item.slug}>
//                       <span>{item.name}</span>
//                     </Link>
//                   ) : (
//                     <span className="lastChildBread">{item.name}</span>
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
//             <div className="modal-overlay" onClick={handleOverlayClick}>
//               <div className="modal">
//                 <button className="close-btns" onClick={closeModal}>
//                   X
//                 </button>
//                 <span>Bir kliklə al</span>
//                 <div className="numberModal">
//                   <label htmlFor="phone">Nömrə: +994</label>
//                   <input type="text" id="phone" name="phone" />
//                 </div>
//                 <button className="open-btn">Bir kliklə al</button>
//               </div>
//             </div>
//           )}

//           <div className="row">
//             <div className="xl-2 lg-2 md-2 sm-12">
//               <div className="filter-container">
//                 <button
//                   className="filter-title"
//                   onClick={() => setMobileFilterOpen(!isMobileFilterOpen)}
//                 >
//                   <span>Filter</span>
//                   <div className="filter-icon">
//                     <Filter className="filIcon" />
//                   </div>
//                 </button>

//                 <div className="selectedFilter desktop-only">
//                   {selectedFilters.map((filter) => (
//                     <div className="selectedFilterInner" key={filter}>
//                       <span style={{ cursor: "pointer" }} onClick={() => handleFilterClick(filter)}>
//                         x
//                       </span>
//                       <p>{getFilterName(filter)}</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className={`filter-panel ${isMobileFilterOpen ? "active" : ""}`}>
//                   <button className="filter-titless">Filter</button>
//                   <div className="selectedFilter mobile-only">
//                     {selectedFilters.map((filter) => (
//                       <div className="selectedFilterInner" key={filter}>
//                         <span style={{ cursor: "pointer" }} onClick={() => handleFilterClick(filter)}>
//                           x
//                         </span>
//                         <p>{getFilterName(filter)}</p>
//                       </div>
//                     ))}
//                   </div>
//                   <button className="close-btn" onClick={() => setMobileFilterOpen(false)}>
//                     x
//                   </button>
//                   <div className="lineFiltered"></div>

//                   {productsFilterGroupsTitle?.map((group) => (
//                     <FilterAccordion key={group.value} title={group.name} defaultOpen={true}>
//                       <ul className="filterList">
//                         {group.child.map((childItem) => (
//                           <li key={childItem.value} className="filterListItem">
//                             <button
//                               onClick={() => handleFilterClick(childItem.value)}
//                               className="filter-button-link"
//                               style={{
//                                 background: selectedFilters.includes(childItem.value) ? "#f0f0f0" : "none",
//                                 border: "none",
//                                 color: selectedFilters.includes(childItem.value) ? "#007bff" : "inherit",
//                                 cursor: "pointer",
//                                 textAlign: "left",
//                                 width: "100%",
//                                 padding: "8px 12px",
//                                 borderRadius: "4px",
//                                 fontWeight: selectedFilters.includes(childItem.value) ? "bold" : "normal",
//                               }}
//                             >
//                               {childItem.name}
//                             </button>
//                           </li>
//                         ))}
//                         {group.child.length === 0 && <li className="noFilterChild">Alt öğe bulunamadı.</li>}
//                       </ul>
//                     </FilterAccordion>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="xl-10 lg-10 md-10 sm-12">
//               <div className="productPageCards">
//                 <div className="row">
//                   {productsCard.map((product) => {
//                     const pid = product.id;
//                     const isWish = !!wishlistedMap[pid];
//                     const isAddingFav = !!addingFavMap[pid];
//                     const isInCart = !!cartMap[pid];
//                     const isAddingCart = !!addingCartMap[pid];

//                     return (
//                       <div className="xl-3 lg-4 md-6 sm-6" key={pid}>
//                         <div className="secondHomePageProductsCard">
//                           <div className="secondHomePageProductsCardDiv">
//                             <Link
//                               href={`/products/${product?.slug?.toLowerCase().replace(/\s+/g, "-")}`}
//                               className="blockCardLink"
//                             >
//                               <div className="secondHomePageProductsCardImage">
//                                 <Image
//                                   src={product.image || "/images/defaultImage.png"}
//                                   alt={product.name}
//                                   width={200}
//                                   height={200}
//                                 />
//                               </div>
//                             </Link>
//                             <div className="secondHomePageProductsCardContent">
//                               <p>{product.name}</p>
//                               <div className="discount">
//                                 <span>{product.disc_percent} %</span>
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
//                                     onClick={() => handleToggleWishlist(pid)}
//                                     className="wishlist-btn"
//                                     disabled={isAddingFav}
//                                   >
//                                     {isWish ? (
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
//                               <button
//                                 className="cartBtn"
//                                 onClick={() => handleAddToCart(pid)}
//                                 disabled={isInCart || isAddingCart}
//                               >
//                                 {isAddingCart ? (
//                                   <div className="spinner-small"></div>
//                                 ) : isInCart ? (
//                                   "✔︎ Əlavə edildi"
//                                 ) : (
//                                   "Səbətə at"
//                                 )}
//                               </button>
//                               <button onClick={openModal} className="clickBtn">
//                                 Bir Klikle Al
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 {loading && <div className="spinner" />}

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


// !  ----------------------------------BU KOD TAM ISLEKDIR---------------------------------------
































































































































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

// !en kohne versiya infinite scrool olmayan versiya lazimsiz
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
