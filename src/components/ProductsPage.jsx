
// !Huseyn derya rehmetliy

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
// import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

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

// // Pagination Component (batch-based, 5 düyməlik bloklar)
// const Pagination = ({ currentPage, lastPage, onPageChange }) => {
//   if (lastPage <= 1) return null;

//   const batchSize = 5;
//   const currentBatch = Math.floor((currentPage - 1) / batchSize);
//   const startPage = currentBatch * batchSize + 1;
//   const endPage = Math.min(startPage + batchSize - 1, lastPage);

//   const pages = [];
//   for (let i = startPage; i <= endPage; i++) {
//     pages.push(i);
//   }

//   const prevBatchPage = startPage - 1;
//   const nextBatchPage = endPage + 1;

//   return (
//     <div className="paginationContainer" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', gap: '5px' }}>
//       {prevBatchPage >= 1 && (
//         <button
//           className="paginationButton"
//           onClick={() => onPageChange(prevBatchPage)}
//           style={{ padding: '8px 12px', cursor: 'pointer' }}
//         >
//           &#171;
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
//             backgroundColor: page === currentPage ? '#007bff' : 'white',
//             color: page === currentPage ? 'white' : 'black',
//             border: '1px solid #ddd'
//           }}
//         >
//           {page}
//         </button>
//       ))}

//       {nextBatchPage <= lastPage && (
//         <button
//           className="paginationButton"
//           onClick={() => onPageChange(nextBatchPage)}
//           style={{ padding: '8px 12px', cursor: 'pointer' }}
//         >
//           &#187;
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
//     } catch {
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
//     } catch {
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
//                     <Link
//                     //  href={item.slug}
//                     href={`/products?cat_slug=${item.slug}`}
//                      >
                      
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
//               <div className="productSortButtons">
//                 <span>Sırala: </span>
//                 <div className="productSortButton">
//                     <button>Endrimə görə</button>
//                 </div>
//                 <div className="productSortButton">
//                     <button>Popularlığa görə</button>
//                 </div>
//                 <div className="productSortButton">
//                     <button>Yeni</button>
//                 </div>
//                 <div className="productSortButton">
//                     <button>Ucuzdan bahaya</button>
//                 </div>
//                 <div className="productSortButton">
//                     <button>Bahadan ucuza</button>
//                 </div>
//                 <div className="productSortButton">
//                     <button>A-Z</button>
//                 </div>
//                 <div className="productSortButton">
//                     <button>Z-A</button>
//                 </div>
//               </div>
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

//           <div className="productsPageDescriptions">

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// !Huseyn derya rehmetliy








// File: components/ProductsPage.jsx
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Filter from "../../public/icons/filter.svg";
import { TbCurrencyManat } from "react-icons/tb";
import NewScale from "../../public/icons/newScale.svg";
import NewWishList from "../../public/icons/newWishlist.svg";
import { MdKeyboardDoubleArrowRight, MdKeyboardArrowRight } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FaHeart, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import {
  useGetFavQuery,
  useAddToFavMutation,
  useRemoveFromFavMutation,
} from "@/redux/wishlistService";
import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";

// RTK Query hooks are used below

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
  seoData,
  currentPage,
  lastPage,
  loading,
  onPageChange,
  t,
  sortBy,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // RTK Query data & mutations
  const { data: wishlistData } = useGetFavQuery();
  const [addToFav, { isLoading: genericAddingFav }] = useAddToFavMutation();
  const [removeFromFav, { isLoading: genericRemovingFav }] = useRemoveFromFavMutation();
  const { data: cartData } = useGetCartQuery();
  const [addToCart, { isLoading: genericAddingCart }] = useAddToCartMutation();

  const [wishlistedMap, setWishlistedMap] = useState({});
  const [cartMap, setCartMap] = useState({});
  const [addingFavMap, setAddingFavMap] = useState({});
  const [addingCartMap, setAddingCartMap] = useState({});

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  useEffect(() => {
    if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
      const newMap = {};
      wishlistData.wishlist.products.forEach((item) => {
        newMap[item.id] = true;
      });
      setWishlistedMap(newMap);
    }
  }, [wishlistData]);

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

  // Sıralama handler
  const handleSort = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort_by", value);
    params.set("page", "1");
    if (slug) params.set("cat_slug", slug);
    router.push(`/products?${params.toString()}`);
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
                    <Link href={`/products?cat_slug=${item.slug}`}>
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
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => handleFilterClick(filter)}
                      >
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
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => handleFilterClick(filter)}
                        >
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
                                background: selectedFilters.includes(childItem.value)
                                  ? "#f0f0f0"
                                  : "none",
                                border: "none",
                                color: selectedFilters.includes(childItem.value)
                                  ? "#007bff"
                                  : "inherit",
                                cursor: "pointer",
                                textAlign: "left",
                                width: "100%",
                                padding: "8px 12px",
                                borderRadius: "4px",
                                fontWeight: selectedFilters.includes(childItem.value)
                                  ? "bold"
                                  : "normal",
                              }}
                            >
                              {childItem.name}
                            </button>
                          </li>
                        ))}
                        {group.child.length === 0 && (
                          <li className="noFilterChild">Alt öğe bulunamadı.</li>
                        )}
                      </ul>
                    </FilterAccordion>
                  ))}
                </div>
              </div>
            </div>

            <div className="xl-10 lg-10 md-10 sm-12">
              <div className="productSortButtons">
                <span>Sırala: </span>
                <div className="productSortButton">
                  <button
                    onClick={() => handleSort("is_discount")}
                    style={{
                      border: sortBy === "is_discount" ? "1.5px solid black" : "0.5px solid black"
                    }}
                  >
                    Endrimə görə
                  </button>
                </div>
                <div className="productSortButton">
                  <button
                    onClick={() => handleSort("popularity")}
                    style={{
                      border: sortBy === "popularity" ? "1.5px solid black" : "0.5px solid black"
                    }}
                  >
                    Popularlığa görə
                  </button>
                </div>
                <div className="productSortButton">
                  <button
                    onClick={() => handleSort("new")}
                    style={{
                      border: sortBy === "new" ? "1.5px solid black" : "0.5px solid black"
                    }}
                  >
                    Yeni
                  </button>
                </div>
                <div className="productSortButton">
                  <button
                    onClick={() => handleSort("price_asc")}
                    style={{
                      border: sortBy === "price_asc" ? "1.5px solid black" : "0.5px solid black"
                    }}
                  >
                    Ucuzdan bahaya
                  </button>
                </div>
                <div className="productSortButton">
                  <button
                    onClick={() => handleSort("price_desc")}
                    style={{
                      border: sortBy === "price_desc" ? "1.5px solid black" : "0.5px solid black"
                    }}
                  >
                    Bahadan ucuza
                  </button>
                </div>
                <div className="productSortButton">
                  <button
                    onClick={() => handleSort("a_z")}
                    style={{
                      border: sortBy === "a_z" ? "1.5px solid black" : "0.5px solid black"
                    }}
                  >
                    A-Z
                  </button>
                </div>
                <div className="productSortButton">
                  <button
                    onClick={() => handleSort("z_a")}
                    style={{
                      border: sortBy === "z_a" ? "1.5px solid black" : "0.5px solid black"
                    }}
                  >
                    Z-A
                  </button>
                </div>
              </div>

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
                              href={`/products/${product.slug
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
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

          <div className="productsPageDescriptions">
            <h1>{seoData.page_title}</h1>
            <p>{seoData.page_description}</p>
          </div>
        </div>
      </div>
    </>
  );
}




