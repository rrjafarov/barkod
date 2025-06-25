// !
// "use client";
// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "../../app/[locale]/globals.scss";

// import { Pagination, Autoplay } from "swiper/modules";
// import Link from "next/link";
// import Image from "next/image";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../../public/icons/newScale.svg";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

// const HomePageProductsCard = ({
//   homePageDataNewProducts,
//   homePageDataDiscountedProducts,
//   homePageDataBestSellingProducts,
// }) => {
//   // 1. Tab seçimi üçün state
//   const [selectedTab, setSelectedTab] = useState("Latest Products");
//   // 2. Modal və wishlist state-ləri
//   const [showModal, setShowModal] = useState(false);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const toggleWishlist = () => setIsWishlisted((prev) => !prev);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") closeModal();
//   };

//   // 3. Hansı tab-a görə hansı datanı göstərəcəyik
//   const displayData = React.useMemo(() => {
//     switch (selectedTab) {
//       case "Discounted":
//         return homePageDataDiscountedProducts;
//       case "Best Selling":
//         return homePageDataBestSellingProducts;
//       case "Latest Products":
//       default:
//         return homePageDataNewProducts;
//     }
//   }, [
//     selectedTab,
//     homePageDataNewProducts,
//     homePageDataDiscountedProducts,
//     homePageDataBestSellingProducts,
//   ]);

//   return (
//     <div className="container">
//       {showModal && (
//         <div className="modal-overlay" onClick={handleOverlayClick}>
//           <div className="modal">
//             <button className="close-btns" onClick={closeModal}>
//               X
//             </button>
//             <span>Bir kliklə al</span>
//             <div className="numberModal">
//               <label htmlFor="phone">Nömrə: +994</label>
//               <input type="text" id="phone" name="phone" />
//             </div>
//             <button className="open-btn">Bir kliklə al</button>
//           </div>
//         </div>
//       )}

//       {/* 4. Tab başlıqları */}
//       <div className="productsHeadTitle">
//         {["Latest Products", "Discounted", "Best Selling"].map((tab) => (
//           <span
//             key={tab}
//             onClick={() => setSelectedTab(tab)}
//             className={tab === selectedTab ? "active-tab" : ""}
//             style={{
//               cursor: "pointer",
//               fontWeight: tab === selectedTab ? "bold" : "normal",
//             }}
//           >
//             {tab}
//           </span>
//         ))}
//       </div>

//       {/* 5. Seçilən data ilə Swiper */}
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={15}
//         loop={true}
//         pagination={{
//           clickable: true,
//           el: ".my-custom-pagination",
//         }}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         speed={4000}
//         modules={[Pagination, Autoplay]}
//         breakpoints={{
//           340: { slidesPerView: 2, spaceBetween: 20 },
//           640: { slidesPerView: 2, spaceBetween: 20 },
//           991: { slidesPerView: 3, spaceBetween: 20 },
//           1024: { slidesPerView: 4, spaceBetween: 20 },
//           1440: { slidesPerView: 4, spaceBetween: 20 },
//         }}
//         className="mySwiper custom-overflow-container"
//       >
//         {displayData.map((product) => (
//           <SwiperSlide key={product.id} className="productCardSlide">
//             <div className="secondHomePageProductsCard">
//               <div className="secondHomePageProductsCardDiv">
//                 <Link href={product.slug} className="blockCardLink">
//                   <div className="secondHomePageProductsCardImage">
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       width={200}
//                       height={200}
//                     />
//                   </div>
//                 </Link>
//                 <div className="secondHomePageProductsCardContent">
//                   <span>{product.name}</span>
//                   {product.disc_percent != null && (
//                     <div className="discount">
//                       <span>{product.disc_percent} %</span>
//                     </div>
//                   )}
//                   <div className="cardBottomContent">
//                     <div className="price">
//                       {product.old_price && (
//                         <span className="oldPrice">
//                           {product.old_price}
//                           <TbCurrencyManat />
//                         </span>
//                       )}
//                       <span className="newPrice">
//                         {product.price}
//                         <TbCurrencyManat />
//                       </span>
//                     </div>
//                     <div className="wishList">
//                       <button>
//                         <NewScale className="newScalePR" />
//                       </button>
//                       <button onClick={toggleWishlist} className="wishlist-btn">
//                         {isWishlisted ? (
//                           <FaHeart className="newWishlistPR active" />
//                         ) : (
//                           <FiHeart className="newWishlistPR" />
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="addToCartClick">
//                 <div className="addToCartClickItem">
//                   <button className="cartBtn">Səbətə at</button>
//                   <button onClick={openModal} className="clickBtn">
//                     Bir Kliklə Al
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}

//         <div className="my-custom-pagination"></div>
//       </Swiper>

//       <style jsx>{`
//         .productsHeadTitle span {
//           margin-right: 1rem;
//         }
//         .active-tab {
//           border-bottom: 2px solid #000;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePageProductsCard;

// !

// "use client";
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "../../app/[locale]/globals.scss";

// import { Pagination, Autoplay } from "swiper/modules";
// import Link from "next/link";
// import Image from "next/image";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../../public/icons/newScale.svg";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

// const HomePageProductsCard = ({
//   homePageDataNewProducts = [],
//   homePageDataDiscountedProducts = [],
//   homePageDataBestSellingProducts = [],
// }) => {
//   // State-lər
//   const [selectedTab, setSelectedTab] = useState("Latest Products");
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const toggleWishlist = () => setIsWishlisted((prev) => !prev);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") closeModal();
//   };

//   // Tab klik funksiyası
//   const handleTabClick = (tab) => {
//     if (tab === selectedTab) return;
//     setLoading(true);
//     setTimeout(() => {
//       setSelectedTab(tab);
//       setLoading(false);
//     }, 500);
//   };

//   // Hansı datanı göstərək
//   const displayData = React.useMemo(() => {
//     switch (selectedTab) {
//       case "Discounted":
//         return homePageDataDiscountedProducts;
//       case "Best Selling":
//         return homePageDataBestSellingProducts;
//       case "Latest Products":
//       default:
//         return homePageDataNewProducts;
//     }
//   }, [
//     selectedTab,
//     homePageDataNewProducts,
//     homePageDataDiscountedProducts,
//     homePageDataBestSellingProducts,
//   ]);

//   return (
//     <div className="container">
//       {/* Modal */}
//       {showModal && (
//         <div className="modal-overlay" onClick={handleOverlayClick}>
//           <div className="modal">
//             <button className="close-btns" onClick={closeModal}>
//               X
//             </button>
//             <span>Bir kliklə al</span>
//             <div className="numberModal">
//               <label htmlFor="phone">Nömrə: +994</label>
//               <input type="text" id="phone" name="phone" />
//             </div>
//             <button className="open-btn">Bir kliklə al</button>
//           </div>
//         </div>
//       )}

//       {/* Tab başlıqları */}
//       <div className="productsHeadTitle">
//         {["Latest Products", "Discounted", "Best Selling"].map((tab) => (
//           <span
//             key={tab}
//             onClick={() => handleTabClick(tab)}
//             className={tab === selectedTab ? "active-tab" : ""}
//             style={{
//               cursor: "pointer",
//               fontWeight: tab === selectedTab ? "bold" : "normal",
//             }}
//           >
//             {tab}
//           </span>
//         ))}
//       </div>

//       {/* Loading spinner */}
//       {loading && (
//         <div className="tab-loading">
//           <div className="spinner"></div>
//         </div>
//       )}

//       {/* Məhsul slideri */}
//       {!loading && (
//         <Swiper
//           slidesPerView={4}
//           spaceBetween={15}
//           loop={true}
//           pagination={{ clickable: true, el: ".my-custom-pagination" }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           speed={4000}
//           modules={[Pagination, Autoplay]}
//           breakpoints={{
//             340: { slidesPerView: 2, spaceBetween: 20 },
//             640: { slidesPerView: 3.3, spaceBetween: 20 },
//             991: { slidesPerView: 3.5, spaceBetween: 20 },
//             1024: { slidesPerView: 4, spaceBetween: 20 },
//             1440: { slidesPerView: 4, spaceBetween: 20 },
//           }}
//           className="mySwiper custom-overflow-container"
//         >
//           {displayData.map((product) => (
//             <SwiperSlide key={product.id} className="productCardSlide">
//               <div className="secondHomePageProductsCard">
//                 <div className="secondHomePageProductsCardDiv">
//                   <Link href={product.slug} className="blockCardLink">
//                     <div className="secondHomePageProductsCardImage">
//                       <Image
//                         src={product.image}
//                         alt={product.name}
//                         width={200}
//                         height={200}
//                       />
//                     </div>
//                   </Link>
//                   <div className="secondHomePageProductsCardContent">
//                     <span>{product.name}</span>
//                     {product.disc_percent != null && (
//                       <div className="discount">
//                         <span>{product.disc_percent} %</span>
//                       </div>
//                     )}
//                     <div className="cardBottomContent">
//                       <div className="price">
//                         {product.old_price && (
//                           <span className="oldPrice">
//                             {product.old_price}
//                             <TbCurrencyManat />
//                           </span>
//                         )}
//                         <span className="newPrice">
//                           {product.price}
//                           <TbCurrencyManat />
//                         </span>
//                       </div>
//                       <div className="wishList">
//                         <button>
//                           <NewScale className="newScalePR" />
//                         </button>
//                         <button onClick={toggleWishlist} className="wishlist-btn">
//                           {isWishlisted ? (
//                             <FaHeart className="newWishlistPR active" />
//                           ) : (
//                             <FiHeart className="newWishlistPR" />
//                           )}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="addToCartClick">
//                   <div className="addToCartClickItem">
//                     <button className="cartBtn">Səbətə at</button>
//                     <button onClick={openModal} className="clickBtn">
//                       Bir Kliklə Al
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}

//           <div className="my-custom-pagination"></div>
//         </Swiper>
//       )}

//       {/* Styling */}
//       <style jsx>{`
//         .productsHeadTitle span {
//           margin-right: 1rem;
//         }
//         .active-tab {
//           border-bottom: 2px solid #000;
//         }
//         .tab-loading {
//           width: 100%;
//           padding: 3rem 0;
//           text-align: center;
//         }
//         .spinner {
//           margin: 0 auto;
//           width: 30px;
//           height: 30px;
//           border: 4px solid rgba(0, 0, 0, 0.1);
//           border-top-color: #ec1f27;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//         }
//         @keyframes spin {
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePageProductsCard;

// ! kohne kodlar




// "use client";
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "../../app/[locale]/globals.scss";
// import { Pagination, Autoplay } from "swiper/modules";
// import Link from "next/link";
// import Image from "next/image";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../../public/icons/newScale.svg";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

// const HomePageProductsCard = ({
//   homePageDataNewProducts = [],
//   homePageDataDiscountedProducts = [],
//   homePageDataBestSellingProducts = [],
// }) => {
//   // State-lər
//   const [selectedTab, setSelectedTab] = useState("Latest Products");
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   // her ürünün favori durumu için map
//   const [wishlistedMap, setWishlistedMap] = useState({}); // { [productId]: true/false }

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   const toggleWishlist = (productId) => {
//     setWishlistedMap((prev) => ({
//       ...prev,
//       [productId]: !prev[productId],
//     }));
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") closeModal();
//   };

//   // Tab klik funksiyası
//   const handleTabClick = (tab) => {
//     if (tab === selectedTab) return;
//     setLoading(true);
//     setTimeout(() => {
//       setSelectedTab(tab);
//       setLoading(false);
//     }, 300);
//   };

//   // Hansı datanı göstərək
//   const displayData = React.useMemo(() => {
//     switch (selectedTab) {
//       case "Discounted":
//         return homePageDataDiscountedProducts;
//       case "Best Selling":
//         return homePageDataBestSellingProducts;
//       case "Latest Products":
//       default:
//         return homePageDataNewProducts;
//     }
//   }, [
//     selectedTab,
//     homePageDataNewProducts,
//     homePageDataDiscountedProducts,
//     homePageDataBestSellingProducts,
//   ]);

//   return (
//     <div className="container">
//       {/* Modal */}
//       {showModal && (
//         <div className="modal-overlay" onClick={handleOverlayClick}>
//           <div className="modal">
//             <button className="close-btns" onClick={closeModal}>
//               X
//             </button>
//             <span>Bir kliklə al</span>
//             <div className="numberModal">
//               <label htmlFor="phone">Nömrə: +994</label>
//               <input type="text" id="phone" name="phone" />
//             </div>
//             <button className="open-btn">Bir kliklə al</button>
//           </div>
//         </div>
//       )}

//       {/* Tab başlıqları */}
//       <div className="productsHeadTitle">
//         {["Latest Products", "Discounted", "Best Selling"].map((tab) => (
//           <span
//             key={tab}
//             onClick={() => handleTabClick(tab)}
//             className={tab === selectedTab ? "active-tab" : ""}
//             style={{
//               cursor: "pointer",
//               fontWeight: tab === selectedTab ? "bold" : "normal",
//             }}
//           >
//             {tab}
//           </span>
//         ))}
//       </div>

//       {/* Loading spinner */}
//       {loading && (
//         <div className="tab-loading">
//           <div className="spinner"></div>
//         </div>
//       )}

//       {/* Məhsul slideri */}
//       {!loading && (
//         <Swiper
//           slidesPerView={4}
//           spaceBetween={15}
//           loop={true}
//           pagination={{ clickable: true, el: ".my-custom-pagination" }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           speed={4000}
//           modules={[Pagination, Autoplay]}
//           breakpoints={{
//             340: { slidesPerView: 2, spaceBetween: 20 },
//             640: { slidesPerView: 3.3, spaceBetween: 20 },
//             991: { slidesPerView: 3.5, spaceBetween: 20 },
//             1024: { slidesPerView: 4, spaceBetween: 20 },
//             1440: { slidesPerView: 4, spaceBetween: 20 },
//           }}
//           className="mySwiper custom-overflow-container"
//         >
//           {displayData.map((product) => {
//             const isWishlisted = wishlistedMap[product.id] === true;
//             return (
//               <SwiperSlide key={product.id} className="productCardSlide">
//                 <div className="secondHomePageProductsCard">
//                   <div className="secondHomePageProductsCardDiv">
//                     <Link
//                       href={`/products/${product.slug}`}
//                       className="blockCardLink"
//                     >
//                       <div className="secondHomePageProductsCardImage">
//                         <Image
//                           // src={`https://dev-admin.barkodelectronics.az/storage${product.image}`}
//                           src={product.image}
//                           alt={product.name}
//                           width={200}
//                           height={200}
//                         />
//                       </div>
//                     </Link>
//                     <div className="secondHomePageProductsCardContent">
//                       <span>{product.name}</span>
//                       {product.disc_percent != null && (
//                         <div className="discount">
//                           <span>{product.disc_percent} %</span>
//                         </div>
//                       )}
//                       <div className="cardBottomContent">
//                         <div className="price">
//                           {product.old_price && (
//                             <span className="oldPrice">
//                               {product.old_price}
//                               <TbCurrencyManat />
//                             </span>
//                           )}
//                           <span className="newPrice">
//                             {product.price}
//                             <TbCurrencyManat />
//                           </span>
//                         </div>
//                         <div className="wishList">
//                           <button>
//                             <NewScale className="newScalePR" />
//                           </button>
//                           <button
//                             onClick={() => toggleWishlist(product.id)}
//                             className="wishlist-btn"
//                           >
//                             {isWishlisted ? (
//                               <FaHeart className="newWishlistPR active" />
//                             ) : (
//                               <FiHeart className="newWishlistPR" />
//                             )}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="addToCartClick">
//                     <div className="addToCartClickItem">
//                       <button className="cartBtn">Səbətə at</button>
//                       <button onClick={openModal} className="clickBtn">
//                         Bir Kliklə Al
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}

//           <div className="my-custom-pagination"></div>
//         </Swiper>
//       )}

//       {/* Styling */}
//       <style jsx>{`
//         .productsHeadTitle span {
//           margin-right: 1rem;
//         }
//         .active-tab {
//           border-bottom: 2px solid #000;
//         }
//         .tab-loading {
//           width: 100%;
//           padding: 3rem 0;
//           text-align: center;
//         }
//         .spinner {
//           margin: 0 auto;
//           width: 30px;
//           height: 30px;
//           border: 4px solid rgba(0, 0, 0, 0.1);
//           border-top-color: #ec1f27;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//         }
//         @keyframes spin {
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePageProductsCard;




// ! yeni kod yuxari












































// "use client";
// import React, { useState, useEffect, useMemo } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "../../app/[locale]/globals.scss";
// import { Pagination, Autoplay } from "swiper/modules";
// import Link from "next/link";
// import Image from "next/image";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../../public/icons/newScale.svg";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

// // RTK Query hook’ları: import yollarını proje yapınıza göre güncelleyin
// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";

// // import { useGetCartQuery, useAddToCartMutation } from "@/src/redux/cartService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";

// const HomePageProductsCard = ({
//   homePageDataNewProducts = [],
//   homePageDataDiscountedProducts = [],
//   homePageDataBestSellingProducts = [],
// }) => {
//   // Tab seçimi ve loading spinner (tab değişiminde)
//   const [selectedTab, setSelectedTab] = useState("Latest Products");
//   const [loadingTab, setLoadingTab] = useState(false);

//   // Modal state
//   const [showModal, setShowModal] = useState(false);

//   // Local map’ler: productId -> boolean
//   const [wishlistedMap, setWishlistedMap] = useState({}); // favoride mi?
//   const [cartMap, setCartMap] = useState({}); // sepette mi?

//   // Loading map’leri: productId -> boolean
//   const [addingFavMap, setAddingFavMap] = useState({});
//   const [addingCartMap, setAddingCartMap] = useState({});

//   // RTK Query hook’ları
//   const {
//     data: wishlistData,
//     isLoading: isLoadingWishlistData,
//     // isError, error gibi gerekirse ekleyin
//   } = useGetFavQuery();
//   const [addToFav, { isLoading: genericAddingFav }] = useAddToFavMutation();
//   const [removeFromFav, { isLoading: genericRemovingFav }] = useRemoveFromFavMutation();

//   const {
//     data: cartData,
//     isLoading: isLoadingCartData,
//     // isError, error
//   } = useGetCartQuery();
//   const [addToCart, { isLoading: genericAddingCart }] = useAddToCartMutation();

//   // Modal fonksiyonları
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") closeModal();
//   };

//   // Tab click: seçili tabı değiştirirken loading göster
//   const handleTabClick = (tab) => {
//     if (tab === selectedTab) return;
//     setLoadingTab(true);
//     setTimeout(() => {
//       setSelectedTab(tab);
//       setLoadingTab(false);
//     }, 300);
//   };

//   // Hangi datayı göstereceğiz?
//   const displayData = useMemo(() => {
//     switch (selectedTab) {
//       case "Discounted":
//         return homePageDataDiscountedProducts;
//       case "Best Selling":
//         return homePageDataBestSellingProducts;
//       case "Latest Products":
//       default:
//         return homePageDataNewProducts;
//     }
//   }, [
//     selectedTab,
//     homePageDataNewProducts,
//     homePageDataDiscountedProducts,
//     homePageDataBestSellingProducts,
//   ]);

//   // wishlistData veya cartData değiştiğinde map’leri kur / sync et
//   useEffect(() => {
//     // WishlistData’den favori ürün map’i oluştur
//     if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
//       const newWishMap = {};
//       wishlistData.wishlist.products.forEach((item) => {
//         // item.id backend response’a göre düzenleyin
//         newWishMap[item.id] = true;
//       });
//       setWishlistedMap(newWishMap);
//     }
//   }, [wishlistData]);

//   useEffect(() => {
//     // CartData’den sepetteki ürün map’i oluştur
//     if (cartData && Array.isArray(cartData.cart?.cart_products)) {
//       const newCartMap = {};
//       cartData.cart.cart_products.forEach((cartItem) => {
//         // cartItem.product?.id backend response’a göre düzenleyin
//         const pid = cartItem.product?.id;
//         if (pid != null) {
//           newCartMap[pid] = true;
//         }
//       });
//       setCartMap(newCartMap);
//     }
//   }, [cartData]);

//   // Wishlist toggle handler (optimistic update + rollback)
//   const handleToggleWishlist = async (productId) => {
//     // Eğer halihazırda işlemdeyse engelle
//     if (addingFavMap[productId]) return;
//     const currentlyFav = !!wishlistedMap[productId];
//     // Optimistic update: hemen map’i toggle et
//     setWishlistedMap((prev) => ({
//       ...prev,
//       [productId]: !currentlyFav,
//     }));
//     // İşlem loading map’ine ekle
//     setAddingFavMap((prev) => ({
//       ...prev,
//       [productId]: true,
//     }));
//     try {
//       if (currentlyFav) {
//         await removeFromFav(productId).unwrap();
//       } else {
//         await addToFav(productId).unwrap();
//       }
//       // Başarı: RTK Query invalidation/refetch mekanizması ile useGetFavQuery tekrar çekilir ve useEffect ile map sync edilir.
//     } catch (error) {
//       console.error("Wishlist toggle error:", error);
//       // Rollback: eski değeri geri set et
//       setWishlistedMap((prev) => ({
//         ...prev,
//         [productId]: currentlyFav,
//       }));
//       // İsteğe bağlı: toast/alert göster
//     } finally {
//       // Loading map’inden çıkar
//       setAddingFavMap((prev) => {
//         const copy = { ...prev };
//         delete copy[productId];
//         return copy;
//       });
//     }
//   };

//   // Sepete ekleme handler (optimistic update + rollback)
//   const handleAddToCart = async (productId) => {
//     // Eğer zaten sepetteyse veya işlemdeyse engelle
//     if (cartMap[productId] || addingCartMap[productId]) return;
//     // Eğer stok yoksa da engelle
//     const prod = displayData.find((p) => p.id === productId);
//     if (prod?.in_stock === 0) return;

//     // Optimistic update: hemen sepette işaretle
//     setCartMap((prev) => ({
//       ...prev,
//       [productId]: true,
//     }));
//     setAddingCartMap((prev) => ({
//       ...prev,
//       [productId]: true,
//     }));
//     try {
//       await addToCart({ productId, quantity: 1 }).unwrap();
//       // Başarı: animasyon göstermek istersen burada tetikle
//       // Modal veya kısa animasyon için state ekleyebilirsin. Burada örnek yok, istersen ekle.
//     } catch (error) {
//       console.error("Add to cart error:", error);
//       // Rollback: eski değeri geri set et
//       setCartMap((prev) => {
//         const copy = { ...prev };
//         delete copy[productId];
//         return copy;
//       });
//       // İsteğe bağlı: toast/alert göster
//     } finally {
//       setAddingCartMap((prev) => {
//         const copy = { ...prev };
//         delete copy[productId];
//         return copy;
//       });
//     }
//   };

//   return (
//     <div className="container">
//       {/* Modal */}
//       {showModal && (
//         <div className="modal-overlay" onClick={handleOverlayClick}>
//           <div className="modal">
//             <button className="close-btns" onClick={closeModal}>
//               X
//             </button>
//             <span>Bir kliklə al</span>
//             <div className="numberModal">
//               <label htmlFor="phone">Nömrə: +994</label>
//               <input type="text" id="phone" name="phone" />
//             </div>
//             <button className="open-btn">Bir kliklə al</button>
//           </div>
//         </div>
//       )}

//       {/* Tab başlıkları */}
//       <div className="productsHeadTitle">
//         {["Latest Products", "Discounted", "Best Selling"].map((tab) => (
//           <span
//             key={tab}
//             onClick={() => handleTabClick(tab)}
//             className={tab === selectedTab ? "active-tab" : ""}
//             style={{
//               cursor: "pointer",
//               fontWeight: tab === selectedTab ? "bold" : "normal",
//             }}
//           >
//             {tab}
//           </span>
//         ))}
//       </div>

//       {/* Loading spinner (tab değişiminde) */}
//       {loadingTab && (
//         <div className="tab-loading">
//           <div className="spinner"></div>
//         </div>
//       )}

//       {/* Ürün slider */}
//       {!loadingTab && (
//         <Swiper
//           slidesPerView={4}
//           spaceBetween={15}
//           loop={true}
//           pagination={{ clickable: true, el: ".my-custom-pagination" }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           speed={4000}
//           modules={[Pagination, Autoplay]}
//           breakpoints={{
//             340: { slidesPerView: 2, spaceBetween: 20 },
//             640: { slidesPerView: 3.3, spaceBetween: 20 },
//             991: { slidesPerView: 3.5, spaceBetween: 20 },
//             1024: { slidesPerView: 4, spaceBetween: 20 },
//             1440: { slidesPerView: 4, spaceBetween: 20 },
//           }}
//           className="mySwiper custom-overflow-container"
//         >
//           {displayData.map((product) => {
//             const productId = product.id;
//             const isWishlisted = !!wishlistedMap[productId];
//             const isAddingFav = !!addingFavMap[productId];
//             const isInCart = !!cartMap[productId];
//             const isAddingCart = !!addingCartMap[productId];

//             return (
//               <SwiperSlide key={productId} className="productCardSlide">
//                 <div className="secondHomePageProductsCard">
//                   <div className="secondHomePageProductsCardDiv">
//                     <Link
//                       href={`/products/${product.slug}`}
//                       className="blockCardLink"
//                     >
//                       <div className="secondHomePageProductsCardImage">
//                         <Image
//                           src={product.image}
//                           alt={product.name}
//                           width={200}
//                           height={200}
//                         />
//                       </div>
//                     </Link>
//                     <div className="secondHomePageProductsCardContent">
//                       <span>{product.name}</span>
//                       {product.disc_percent != null && (
//                         <div className="discount">
//                           <span>{product.disc_percent} %</span>
//                         </div>
//                       )}
//                       <div className="cardBottomContent">
//                         <div className="price">
//                           {product.old_price && product.old_price !== product.price && (
//                             <span className="oldPrice">
//                               {product.old_price}
//                               <TbCurrencyManat />
//                             </span>
//                           )}
//                           <span className="newPrice">
//                             {product.price}
//                             <TbCurrencyManat />
//                           </span>
//                         </div>
//                         <div className="wishList">
//                           <button className="newScaleBtn">
//                             <NewScale className="newScalePR" />
//                           </button>
//                           <button
//                             onClick={() => handleToggleWishlist(productId)}
//                             className="wishlist-btn"
//                             disabled={isAddingFav}
//                           >
//                             {isWishlisted ? (
//                               <FaHeart className="newWishlistPR active" />
//                             ) : (
//                               <FiHeart className="newWishlistPR" />
//                             )}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="addToCartClick">
//                     <div className="addToCartClickItem">
//                       <button
//                         className="cartBtn"
//                         onClick={() => handleAddToCart(productId)}
//                         disabled={isAddingCart || isInCart || product.in_stock === 0}
//                       >
//                         {isAddingCart
//                           ? (
//                             <div className="spinner-small"></div>
//                           )
//                           : isInCart
//                             ? "✔︎ Səbətə əlavə edildi"
//                             : product.in_stock === 0
//                               ? "Stokda yoxdur"
//                               : "Səbətə at"}
//                       </button>
//                       <button onClick={openModal} className="clickBtn">
//                         Bir Kliklə Al
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}

//           <div className="my-custom-pagination"></div>
//         </Swiper>
//       )}

//       {/* Styling */}
//       <style jsx>{`
//         .productsHeadTitle span {
//           margin-right: 1rem;
//         }
//         .active-tab {
//           border-bottom: 2px solid #000;
//         }
//         .tab-loading {
//           width: 100%;
//           padding: 3rem 0;
//           text-align: center;
//         }
//         .spinner {
//           margin: 0 auto;
//           width: 30px;
//           height: 30px;
//           border: 4px solid rgba(0, 0, 0, 0.1);
//           border-top-color: #ec1f27;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//         }
//         .spinner-small {
//           width: 16px;
//           height: 16px;
//           border: 3px solid rgba(0, 0, 0, 0.1);
//           border-top-color: #ec1f27;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//           display: inline-block;
//         }
//         @keyframes spin {
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         /* İsteğe bağlı diğer stil ayarlamaları */
//         .wishlist-btn:disabled,
//         .cartBtn:disabled {
//           cursor: not-allowed;
//           opacity: 0.6;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePageProductsCard;

// !en son versiya yucaridaki 18.06

















// *18.06.25
// "use client";
// import React, { useState, useEffect, useMemo } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "../../app/[locale]/globals.scss";
// import { Pagination, Autoplay } from "swiper/modules";
// import Link from "next/link";
// import Image from "next/image";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../../public/icons/newScale.svg";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

// // RTK Query hook’ları: import yollarını proje yapınıza göre güncelleyin
// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";

// const HomePageProductsCard = ({
//   homePageDataNewProducts = [],
//   homePageDataDiscountedProducts = [],
//   homePageDataBestSellingProducts = [],
// }) => {
//   // Tab seçimi ve loading spinner (tab değişiminde)
//   const [selectedTab, setSelectedTab] = useState("Latest Products");
//   const [loadingTab, setLoadingTab] = useState(false);

//   // Modal state
//   const [showModal, setShowModal] = useState(false);

//   // Local map’ler: productId -> boolean
//   const [wishlistedMap, setWishlistedMap] = useState({}); // favoride mi?
//   const [cartMap, setCartMap] = useState({}); // sepette mi?

//   // Loading map’leri: productId -> boolean
//   const [addingFavMap, setAddingFavMap] = useState({});
//   const [addingCartMap, setAddingCartMap] = useState({});

//   // RTK Query hook’ları
//   const {
//     data: wishlistData,
//     isLoading: isLoadingWishlistData,
//     // isError, error gibi gerekirse ekleyin
//   } = useGetFavQuery();
//   const [addToFav, { isLoading: genericAddingFav }] = useAddToFavMutation();
//   const [removeFromFav, { isLoading: genericRemovingFav }] = useRemoveFromFavMutation();

//   const {
//     data: cartData,
//     isLoading: isLoadingCartData,
//     // isError, error
//   } = useGetCartQuery();
//   const [addToCart, { isLoading: genericAddingCart }] = useAddToCartMutation();

//   // Modal fonksiyonları
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") closeModal();
//   };

//   // Tab click: seçili tabı değiştirirken loading göster
//   const handleTabClick = (tab) => {
//     if (tab === selectedTab) return;
//     setLoadingTab(true);
//     setTimeout(() => {
//       setSelectedTab(tab);
//       setLoadingTab(false);
//     }, 300);
//   };

//   // Hangi datayı göstereceğiz?
//   const displayData = useMemo(() => {
//     switch (selectedTab) {
//       case "Discounted":
//         return homePageDataDiscountedProducts;
//       case "Best Selling":
//         return homePageDataBestSellingProducts;
//       case "Latest Products":
//       default:
//         return homePageDataNewProducts;
//     }
//   }, [
//     selectedTab,
//     homePageDataNewProducts,
//     homePageDataDiscountedProducts,
//     homePageDataBestSellingProducts,
//   ]);

//   // wishlistData veya cartData değiştiğinde map’leri kur / sync et
//   useEffect(() => {
//     // WishlistData’den favori ürün map’i oluştur
//     if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
//       const newWishMap = {};
//       wishlistData.wishlist.products.forEach((item) => {
//         // item.id backend response’a göre düzenleyin
//         newWishMap[item.id] = true;
//       });
//       setWishlistedMap(newWishMap);
//     }
//   }, [wishlistData]);

//   useEffect(() => {
//     // CartData’den sepetteki ürün map’i oluştur
//     if (cartData && Array.isArray(cartData.cart?.cart_products)) {
//       const newCartMap = {};
//       cartData.cart.cart_products.forEach((cartItem) => {
//         // cartItem.product?.id backend response’a göre düzenleyin
//         const pid = cartItem.product?.id;
//         if (pid != null) {
//           newCartMap[pid] = true;
//         }
//       });
//       setCartMap(newCartMap);
//     }
//   }, [cartData]);

//   // Wishlist toggle handler (optimistic update + rollback)
//   const handleToggleWishlist = async (productId) => {
//     if (addingFavMap[productId]) return;
//     const currentlyFav = !!wishlistedMap[productId];
//     setWishlistedMap((prev) => ({
//       ...prev,
//       [productId]: !currentlyFav,
//     }));
//     setAddingFavMap((prev) => ({
//       ...prev,
//       [productId]: true,
//     }));
//     try {
//       if (currentlyFav) {
//         await removeFromFav(productId).unwrap();
//       } else {
//         await addToFav(productId).unwrap();
//       }
//       // Başarı: RTK Query invalidation/refetch mekanizması ile useGetFavQuery tekrar çekilir ve useEffect ile map sync edilir.
//     } catch (error) {
//       console.error("Wishlist toggle error:", error);
//       setWishlistedMap((prev) => ({
//         ...prev,
//         [productId]: currentlyFav,
//       }));
//     } finally {
//       setAddingFavMap((prev) => {
//         const copy = { ...prev };
//         delete copy[productId];
//         return copy;
//       });
//     }
//   };

//   // Sepete ekleme handler (optimistic update + rollback), stok kontrolü kaldırıldı
//   const handleAddToCart = async (productId) => {
//     if (cartMap[productId] || addingCartMap[productId]) return;
//     // Stok kontrolü artık yapılmıyor, direk ekleme denenecek
//     setCartMap((prev) => ({
//       ...prev,
//       [productId]: true,
//     }));
//     setAddingCartMap((prev) => ({
//       ...prev,
//       [productId]: true,
//     }));
//     try {
//       await addToCart({ productId, quantity: 1 }).unwrap();
//     } catch (error) {
//       console.error("Add to cart error:", error);
//       setCartMap((prev) => {
//         const copy = { ...prev };
//         delete copy[productId];
//         return copy;
//       });
//     } finally {
//       setAddingCartMap((prev) => {
//         const copy = { ...prev };
//         delete copy[productId];
//         return copy;
//       });
//     }
//   };

//   return (
//     <div className="container">
//       {/* Modal */}
//       {showModal && (
//         <div className="modal-overlay" onClick={handleOverlayClick}>
//           <div className="modal">
//             <button className="close-btns" onClick={closeModal}>
//               X
//             </button>
//             <span>Bir kliklə al</span>
//             <div className="numberModal">
//               <label htmlFor="phone">Nömrə: +994</label>
//               <input type="text" id="phone" name="phone" />
//             </div>
//             <button className="open-btn">Bir kliklə al</button>
//           </div>
//         </div>
//       )}

//       {/* Tab başlıkları */}
//       <div className="productsHeadTitle">
//         {["Latest Products", "Discounted", "Best Selling"].map((tab) => (
//           <span
//             key={tab}
//             onClick={() => handleTabClick(tab)}
//             className={tab === selectedTab ? "active-tab" : ""}
//             style={{
//               cursor: "pointer",
//               fontWeight: tab === selectedTab ? "bold" : "normal",
//             }}
//           >
//             {tab}
//           </span>
//         ))}
//       </div>

//       {/* Loading spinner (tab değişiminde) */}
//       {loadingTab && (
//         <div className="tab-loading">
//           <div className="spinner"></div>
//         </div>
//       )}

//       {/* Ürün slider */}
//       {!loadingTab && (
//         <Swiper
//           slidesPerView={4}
//           spaceBetween={15}
//           loop={true}
//           pagination={{ clickable: true, el: ".my-custom-pagination" }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           speed={4000}
//           modules={[Pagination, Autoplay]}
//           breakpoints={{
//             340: { slidesPerView: 2, spaceBetween: 20 },
//             640: { slidesPerView: 3.3, spaceBetween: 20 },
//             991: { slidesPerView: 3.5, spaceBetween: 20 },
//             1024: { slidesPerView: 4, spaceBetween: 20 },
//             1440: { slidesPerView: 4, spaceBetween: 20 },
//           }}
//           className="mySwiper custom-overflow-container"
//         >
//           {displayData.map((product) => {
//             const productId = product.id;
//             const isWishlisted = !!wishlistedMap[productId];
//             const isAddingFav = !!addingFavMap[productId];
//             const isInCart = !!cartMap[productId];
//             const isAddingCart = !!addingCartMap[productId];

//             return (
//               <SwiperSlide key={productId} className="productCardSlide">
//                 <div className="secondHomePageProductsCard">
//                   <div className="secondHomePageProductsCardDiv">
//                     <Link
//                       href={`/products/${product.slug}`}
//                       className="blockCardLink"
//                     >
//                       <div className="secondHomePageProductsCardImage">
//                         <Image
//                           src={product.image}
//                           alt={product.name}
//                           width={200}
//                           height={200}
//                         />
//                       </div>
//                     </Link>
//                     <div className="secondHomePageProductsCardContent">
//                       <span>{product.name}</span>
//                       {product.disc_percent != null && (
//                         <div className="discount">
//                           <span>{product.disc_percent} %</span>
//                         </div>
//                       )}
//                       <div className="cardBottomContent">
//                         <div className="price">
//                           {product.old_price && product.old_price !== product.price && (
//                             <span className="oldPrice">
//                               {product.old_price}
//                               <TbCurrencyManat />
//                             </span>
//                           )}
//                           <span className="newPrice">
//                             {product.price}
//                             <TbCurrencyManat />
//                           </span>
//                         </div>
//                         <div className="wishList">
//                           <button className="newScaleBtn">
//                             <NewScale className="newScalePR" />
//                           </button>
//                           <button
//                             onClick={() => handleToggleWishlist(productId)}
//                             className="wishlist-btn"
//                             disabled={isAddingFav}
//                           >
//                             {isWishlisted ? (
//                               <FaHeart className="newWishlistPR active" />
//                             ) : (
//                               <FiHeart className="newWishlistPR" />
//                             )}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="addToCartClick">
//                     <div className="addToCartClickItem">
//                       <button
//                         className="cartBtn"
//                         onClick={() => handleAddToCart(productId)}
//                         disabled={isAddingCart || isInCart}
//                       >
//                         {isAddingCart
//                           ? (
//                             <div className="spinner-small"></div>
//                           )
//                           : isInCart
//                             ? "✔︎ Əlavə edildi"
//                             : "Səbətə at"}
//                       </button>
//                       <button onClick={openModal} className="clickBtn">
//                         Bir Kliklə Al
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}

//           <div className="my-custom-pagination"></div>
//         </Swiper>
//       )}

//       {/* Styling */}
//       <style jsx>{`
//         .productsHeadTitle span {
//           margin-right: 1rem;
//         }
//         .active-tab {
//           border-bottom: 2px solid #000;
//         }
//         .tab-loading {
//           width: 100%;
//           padding: 3rem 0;
//           text-align: center;
//         }
//         .spinner {
//           margin: 0 auto;
//           width: 30px;
//           height: 30px;
//           border: 4px solid rgba(0, 0, 0, 0.1);
//           border-top-color: #ec1f27;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//         }
//         .spinner-small {
//           width: 16px;
//           height: 16px;
//           border: 3px solid rgba(0, 0, 0, 0.1);
//           border-top-color: #ec1f27;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//           display: inline-block;
//         }
//         @keyframes spin {
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         /* İsteğe bağlı diğer stil ayarlamaları */
//         .wishlist-btn:disabled,
//         .cartBtn:disabled {
//           cursor: not-allowed;
//           opacity: 0.6;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePageProductsCard;
// *18.06.25















"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../app/[locale]/globals.scss";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { TbCurrencyManat } from "react-icons/tb";
import NewScale from "../../../public/icons/newScale.svg";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

// RTK Query hook’ları
import {
  useGetFavQuery,
  useAddToFavMutation,
  useRemoveFromFavMutation,
} from "@/redux/wishlistService";
import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";

const HomePageProductsCard = ({
  t,
  homePageDataNewProducts = [],
  homePageDataDiscountedProducts = [],
  homePageDataBestSellingProducts = [],
}) => {
  // Tab seçimi ve loading spinner (tab değişiminde)
  // Burada id’leri saklıyoruz: "latestproducts", "discounted", "bestselling"
  const [selectedTab, setSelectedTab] = useState("latestproducts");
  const [loadingTab, setLoadingTab] = useState(false);

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // Local map’ler: productId -> boolean
  const [wishlistedMap, setWishlistedMap] = useState({}); // favoride mi?
  const [cartMap, setCartMap] = useState({}); // sepette mi?

  // Loading map’leri: productId -> boolean
  const [addingFavMap, setAddingFavMap] = useState({});
  const [addingCartMap, setAddingCartMap] = useState({});

  // RTK Query hook’ları
  const {
    data: wishlistData,
    isLoading: isLoadingWishlistData,
  } = useGetFavQuery();
  const [addToFav, { isLoading: genericAddingFav }] = useAddToFavMutation();
  const [removeFromFav, { isLoading: genericRemovingFav }] = useRemoveFromFavMutation();

  const {
    data: cartData,
    isLoading: isLoadingCartData,
  } = useGetCartQuery();
  const [addToCart, { isLoading: genericAddingCart }] = useAddToCartMutation();

  // Modal fonksiyonları
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") closeModal();
  };

  // Çeviri objesine göre tab’ları tanımla
  // Burada t içindeki anahtar isimlerine dikkat et: örneğin t.latestproducts veya t.latestProducts
  // Aşağıdaki örnekte t?.latestproducts, t?.discounted, t?.bestselling kullanıldı. 
  // Eğer senin t objende farklı anahtar varsa (örn. latestProducts), orayı güncelle.

  
  const tabs = useMemo(
    () => [
      { id: "latestproducts", label: t?.latestproducts || "LatestProducts" },
      { id: "discounted", label: t?.discounted || "Discounted" },
      { id: "bestselling", label: t?.bestselling || "Best Selling" },
    ],
    [t]
  );

  // Tab click: seçili tab’ı değiştirirken loading göster
  const handleTabClick = (tabId) => {
    if (tabId === selectedTab) return;
    setLoadingTab(true);
    setTimeout(() => {
      setSelectedTab(tabId);
      setLoadingTab(false);
    }, 300);
  };

  // Hangi datayı göstereceğiz? selectedTab id’ye göre
  const displayData = useMemo(() => {
    switch (selectedTab) {
      case "discounted":
        return homePageDataDiscountedProducts;
      case "bestselling":
        return homePageDataBestSellingProducts;
      case "latestproducts":
      default:
        return homePageDataNewProducts;
    }
  }, [
    selectedTab,
    homePageDataNewProducts,
    homePageDataDiscountedProducts,
    homePageDataBestSellingProducts,
  ]);

  // wishlistData veya cartData değiştiğinde map’leri kur / sync et
  useEffect(() => {
    // WishlistData’den favori ürün map’i oluştur
    if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
      const newWishMap = {};
      wishlistData.wishlist.products.forEach((item) => {
        // item.id backend response’a göre düzenleyin
        newWishMap[item.id] = true;
      });
      setWishlistedMap(newWishMap);
    }
  }, [wishlistData]);

  useEffect(() => {
    // CartData’den sepetteki ürün map’i oluştur
    if (cartData && Array.isArray(cartData.cart?.cart_products)) {
      const newCartMap = {};
      cartData.cart.cart_products.forEach((cartItem) => {
        // cartItem.product?.id backend response’a göre düzenleyin
        const pid = cartItem.product?.id;
        if (pid != null) {
          newCartMap[pid] = true;
        }
      });
      setCartMap(newCartMap);
    }
  }, [cartData]);

  // Wishlist toggle handler (optimistic update + rollback)
  const handleToggleWishlist = async (productId) => {
    if (addingFavMap[productId]) return;
    const currentlyFav = !!wishlistedMap[productId];
    // Optimistic update: hemen map’i toggle et
    setWishlistedMap((prev) => ({
      ...prev,
      [productId]: !currentlyFav,
    }));
    setAddingFavMap((prev) => ({
      ...prev,
      [productId]: true,
    }));
    try {
      if (currentlyFav) {
        await removeFromFav(productId).unwrap();
      } else {
        await addToFav(productId).unwrap();
      }
      // Başarı: RTK Query invalidation/refetch ile data yenilenecek
    } catch (error) {
      console.error("Wishlist toggle error:", error);
      // Rollback: eski değeri geri set et
      setWishlistedMap((prev) => ({
        ...prev,
        [productId]: currentlyFav,
      }));
    } finally {
      setAddingFavMap((prev) => {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      });
    }
  };

  // Sepete ekleme handler (optimistic update + rollback)
  const handleAddToCart = async (productId) => {
    if (cartMap[productId] || addingCartMap[productId]) return;
    setCartMap((prev) => ({
      ...prev,
      [productId]: true,
    }));
    setAddingCartMap((prev) => ({
      ...prev,
      [productId]: true,
    }));
    try {
      await addToCart({ productId, quantity: 1 }).unwrap();
    } catch (error) {
      console.error("Add to cart error:", error);
      // Rollback
      setCartMap((prev) => {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      });
    } finally {
      setAddingCartMap((prev) => {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      });
    }
  };

  return (
    <div className="container">
      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal">
            <button className="close-btns" onClick={closeModal}>
              X
            </button>
            <span>{t?.oneclickpay || "on"}</span>
            <div className="numberModal">
              <label htmlFor="phone">{t?.num}: +994</label>
              <input type="text" id="phone" name="phone" />
            </div>
            <button className="open-btn">{t?.oneclickpay || "on"}</button>
          </div>
        </div>
      )}

      {/* Tab başlıkları */}
      <div className="productsHeadTitle">
        {tabs.map((tab) => (
          <span
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={tab.id === selectedTab ? "active-tab" : ""}
            style={{
              cursor: "pointer",
              fontWeight: tab.id === selectedTab ? "bold" : "normal",
            }}
          >
            {tab.label}
          </span>
        ))}
      </div>

      {/* Loading spinner (tab değişiminde) */}
      {loadingTab && (
        <div className="tab-loading">
          <div className="spinner"></div>
        </div>
      )}

      {/* Ürün slider */}
      {!loadingTab && (
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          loop={true}
          pagination={{ clickable: true, el: ".my-custom-pagination" }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={4000}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            340: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3.3, spaceBetween: 20 },
            991: { slidesPerView: 3.5, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1440: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="mySwiper custom-overflow-container"
        >
          {displayData.map((product) => {
            const productId = product.id;
            const isWishlisted = !!wishlistedMap[productId];
            const isAddingFav = !!addingFavMap[productId];
            const isInCart = !!cartMap[productId];
            const isAddingCart = !!addingCartMap[productId];

            return (
              <SwiperSlide key={productId} className="productCardSlide">
                <div className="secondHomePageProductsCard">
                  <div className="secondHomePageProductsCardDiv">
                    <Link
                      href={`/products/${product.slug}`}
                      className="blockCardLink"
                    >
                      <div className="secondHomePageProductsCardImage">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={200}
                          height={200}
                        />
                      </div>
                    </Link>
                    <div className="secondHomePageProductsCardContent">
                      <span>{product.name}</span>
                      {product.disc_percent != null && (
                        <div className="discount">
                          <span>{product.disc_percent} %</span>
                        </div>
                      )}
                      <div className="cardBottomContent">
                        <div className="price">
                          {product.old_price && product.old_price !== product.price && (
                            <span className="oldPrice">
                              {product.old_price}
                              <TbCurrencyManat />
                            </span>
                          )}
                          <span className="newPrice">
                            {product.price}
                            <TbCurrencyManat />
                          </span>
                        </div>
                        <div className="wishList">
                          <button className="newScaleBtn">
                            <NewScale className="newScalePR" />
                          </button>
                          {/* Wishlist ikonu: RTK Query ile ekle/remove */}
                          <button
                            onClick={() => handleToggleWishlist(productId)}
                            className="wishlist-btn"
                            disabled={isAddingFav}
                          >
                            {isWishlisted ? (
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
                        onClick={() => handleAddToCart(productId)}
                        disabled={isAddingCart || isInCart}
                      >
                        {isAddingCart ? (
                          <div className="spinner-small"></div>
                        ) : isInCart ? (
                          // "✔︎ Əlavə edildi"
                          <span>✔︎ {t?.added || "added"}</span>
                        ) : (
                          t?.addtocart || "Add to cart"
                        )}
                      </button>
                      <button onClick={openModal} className="clickBtn">
                        {t?.oneclickpay || "Bir kliklə al"}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="my-custom-pagination"></div>
        </Swiper>
      )}

      {/* Styling */}
      <style jsx>{`
        .productsHeadTitle span {
          margin-right: 1rem;
        }
        .active-tab {
          border-bottom: 2px solid #000;
        }
        .tab-loading {
          width: 100%;
          padding: 3rem 0;
          text-align: center;
        }
        .spinner {
          margin: 0 auto;
          width: 30px;
          height: 30px;
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-top-color: #ec1f27;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        .spinner-small {
          width: 16px;
          height: 16px;
          border: 3px solid rgba(0, 0, 0, 0.1);
          border-top-color: #ec1f27;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: inline-block;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .wishlist-btn:disabled,
        .cartBtn:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default HomePageProductsCard;


















// "use client";
// import React, { useState, useEffect, useMemo } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "../../app/[locale]/globals.scss";
// import { Pagination, Autoplay } from "swiper/modules";
// import Link from "next/link";
// import Image from "next/image";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../../public/icons/newScale.svg";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

// // RTK Query hook’ları
// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";

// const HomePageProductsCard = ({
//   t,
//   homePageDataNewProducts = [],
//   homePageDataDiscountedProducts = [],
//   homePageDataBestSellingProducts = [],
// }) => {
//   // Tab seçimi ve loading spinner (tab değişiminde)
//   const [selectedTab, setSelectedTab] = useState("Latest Products");
//   const [loadingTab, setLoadingTab] = useState(false);

//   // Modal state
//   const [showModal, setShowModal] = useState(false);

//   // Local map’ler: productId -> boolean
//   const [wishlistedMap, setWishlistedMap] = useState({}); // favoride mi?
//   const [cartMap, setCartMap] = useState({}); // sepette mi?

//   // Loading map’leri: productId -> boolean
//   const [addingFavMap, setAddingFavMap] = useState({});
//   const [addingCartMap, setAddingCartMap] = useState({});

//   // RTK Query hook’ları
//   const {
//     data: wishlistData,
//     isLoading: isLoadingWishlistData,
//   } = useGetFavQuery();
//   const [addToFav, { isLoading: genericAddingFav }] = useAddToFavMutation();
//   const [removeFromFav, { isLoading: genericRemovingFav }] = useRemoveFromFavMutation();

//   const {
//     data: cartData,
//     isLoading: isLoadingCartData,
//   } = useGetCartQuery();
//   const [addToCart, { isLoading: genericAddingCart }] = useAddToCartMutation();

//   // Modal fonksiyonları
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") closeModal();
//   };

//   // Tab click: seçili tabı değiştirirken loading göster
//   const handleTabClick = (tab) => {
//     if (tab === selectedTab) return;
//     setLoadingTab(true);
//     setTimeout(() => {
//       setSelectedTab(tab);
//       setLoadingTab(false);
//     }, 300);
//   };

//   // Hangi datayı göstereceğiz?
//   const displayData = useMemo(() => {
//     switch (selectedTab) {
//       case "Discounted":
//         return homePageDataDiscountedProducts;
//       case "Best Selling":
//         return homePageDataBestSellingProducts;
//       case "Latest Products":
//       default:
//         return homePageDataNewProducts;
//     }
//   }, [
//     selectedTab,
//     homePageDataNewProducts,
//     homePageDataDiscountedProducts,
//     homePageDataBestSellingProducts,
//   ]);

//   // wishlistData veya cartData değiştiğinde map’leri kur / sync et
//   useEffect(() => {
//     // WishlistData’den favori ürün map’i oluştur
//     if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
//       const newWishMap = {};
//       wishlistData.wishlist.products.forEach((item) => {
//         // item.id backend response’a göre düzenleyin
//         newWishMap[item.id] = true;
//       });
//       setWishlistedMap(newWishMap);
//     }
//   }, [wishlistData]);

//   useEffect(() => {
//     // CartData’den sepetteki ürün map’i oluştur
//     if (cartData && Array.isArray(cartData.cart?.cart_products)) {
//       const newCartMap = {};
//       cartData.cart.cart_products.forEach((cartItem) => {
//         // cartItem.product?.id backend response’a göre düzenleyin
//         const pid = cartItem.product?.id;
//         if (pid != null) {
//           newCartMap[pid] = true;
//         }
//       });
//       setCartMap(newCartMap);
//     }
//   }, [cartData]);

//   // Wishlist toggle handler (optimistic update + rollback)
//   const handleToggleWishlist = async (productId) => {
//     if (addingFavMap[productId]) return;
//     const currentlyFav = !!wishlistedMap[productId];
//     // Optimistic update: hemen map’i toggle et
//     setWishlistedMap((prev) => ({
//       ...prev,
//       [productId]: !currentlyFav,
//     }));
//     setAddingFavMap((prev) => ({
//       ...prev,
//       [productId]: true,
//     }));
//     try {
//       if (currentlyFav) {
//         await removeFromFav(productId).unwrap();
//       } else {
//         await addToFav(productId).unwrap();
//       }
//       // Başarı: RTK Query invalidation/refetch ile data yenilenecek
//     } catch (error) {
//       console.error("Wishlist toggle error:", error);
//       // Rollback: eski değeri geri set et
//       setWishlistedMap((prev) => ({
//         ...prev,
//         [productId]: currentlyFav,
//       }));
//     } finally {
//       setAddingFavMap((prev) => {
//         const copy = { ...prev };
//         delete copy[productId];
//         return copy;
//       });
//     }
//   };

//   // Sepete ekleme handler (optimistic update + rollback)
//   const handleAddToCart = async (productId) => {
//     if (cartMap[productId] || addingCartMap[productId]) return;
//     setCartMap((prev) => ({
//       ...prev,
//       [productId]: true,
//     }));
//     setAddingCartMap((prev) => ({
//       ...prev,
//       [productId]: true,
//     }));
//     try {
//       await addToCart({ productId, quantity: 1 }).unwrap();
//     } catch (error) {
//       console.error("Add to cart error:", error);
//       // Rollback
//       setCartMap((prev) => {
//         const copy = { ...prev };
//         delete copy[productId];
//         return copy;
//       });
//     } finally {
//       setAddingCartMap((prev) => {
//         const copy = { ...prev };
//         delete copy[productId];
//         return copy;
//       });
//     }
//   };

//   return (
//     <div className="container">
//       {/* Modal */}
//       {showModal && (
//         <div className="modal-overlay" onClick={handleOverlayClick}>
//           <div className="modal">
//             <button className="close-btns" onClick={closeModal}>
//               X
//             </button>
//             <span>Bir kliklə al</span>
//             <div className="numberModal">
//               <label htmlFor="phone">Nömrə: +994</label>
//               <input type="text" id="phone" name="phone" />
//             </div>
//             <button className="open-btn">Bir kliklə al</button>
//           </div>
//         </div>
//       )}

//       {/* Tab başlıkları */}
//       <div className="productsHeadTitle">
//         {["Latest Products", "Discounted", "Best Selling"].map((tab) => (
//           <span
//             key={tab}
//             onClick={() => handleTabClick(tab)}
//             className={tab === selectedTab ? "active-tab" : ""}
//             style={{
//               cursor: "pointer",
//               fontWeight: tab === selectedTab ? "bold" : "normal",
//             }}
//           >
//             {tab}
//           </span>
//         ))}
//       </div>




//       {/* Loading spinner (tab değişiminde) */}
//       {loadingTab && (
//         <div className="tab-loading">
//           <div className="spinner"></div>
//         </div>
//       )}

//       {/* Ürün slider */}
//       {!loadingTab && (
//         <Swiper
//           slidesPerView={4}
//           spaceBetween={15}
//           loop={true}
//           pagination={{ clickable: true, el: ".my-custom-pagination" }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           speed={4000}
//           modules={[Pagination, Autoplay]}
//           breakpoints={{
//             340: { slidesPerView: 2, spaceBetween: 20 },
//             640: { slidesPerView: 3.3, spaceBetween: 20 },
//             991: { slidesPerView: 3.5, spaceBetween: 20 },
//             1024: { slidesPerView: 4, spaceBetween: 20 },
//             1440: { slidesPerView: 4, spaceBetween: 20 },
//           }}
//           className="mySwiper custom-overflow-container"
//         >
//           {displayData.map((product) => {
//             const productId = product.id;
//             const isWishlisted = !!wishlistedMap[productId];
//             const isAddingFav = !!addingFavMap[productId];
//             const isInCart = !!cartMap[productId];
//             const isAddingCart = !!addingCartMap[productId];

//             return (
//               <SwiperSlide key={productId} className="productCardSlide">
//                 <div className="secondHomePageProductsCard">
//                   <div className="secondHomePageProductsCardDiv">
//                     <Link
//                       href={`/products/${product.slug}`}
//                       className="blockCardLink"
//                     >
//                       <div className="secondHomePageProductsCardImage">
//                         <Image
//                           src={product.image}
//                           alt={product.name}
//                           width={200}
//                           height={200}
//                         />
//                       </div>
//                     </Link>
//                     <div className="secondHomePageProductsCardContent">
//                       <span>{product.name}</span>
//                       {product.disc_percent != null && (
//                         <div className="discount">
//                           <span>{product.disc_percent} %</span>
//                         </div>
//                       )}
//                       <div className="cardBottomContent">
//                         <div className="price">
//                           {product.old_price && product.old_price !== product.price && (
//                             <span className="oldPrice">
//                               {product.old_price}
//                               <TbCurrencyManat />
//                             </span>
//                           )}
//                           <span className="newPrice">
//                             {product.price}
//                             <TbCurrencyManat />
//                           </span>
//                         </div>
//                         <div className="wishList">
//                           <button className="newScaleBtn">
//                             <NewScale className="newScalePR" />
//                           </button>
//                           {/* Wishlist ikonu: RTK Query ile ekle/remove */}
//                           <button
//                             onClick={() => handleToggleWishlist(productId)}
//                             className="wishlist-btn"
//                             disabled={isAddingFav}
//                           >
//                             {isWishlisted ? (
//                               <FaHeart className="newWishlistPR active" />
//                             ) : (
//                               <FiHeart className="newWishlistPR" />
//                             )}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="addToCartClick">
//                     <div className="addToCartClickItem">
//                       <button
//                         className="cartBtn"
//                         onClick={() => handleAddToCart(productId)}
//                         disabled={isAddingCart || isInCart}
//                       >
//                         {isAddingCart ? (
//                           <div className="spinner-small"></div>
//                         ) : isInCart ? (
//                           "✔︎ Əlavə edildi"
//                         ) : (
//                           "Səbətə at"
//                         )}
//                       </button>
//                       <button onClick={openModal} className="clickBtn">
//                         Bir Kliklə Al
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}

//           <div className="my-custom-pagination"></div>
//         </Swiper>
//       )}

//       {/* Styling */}
//       <style jsx>{`
//         .productsHeadTitle span {
//           margin-right: 1rem;
//         }
//         .active-tab {
//           border-bottom: 2px solid #000;
//         }
//         .tab-loading {
//           width: 100%;
//           padding: 3rem 0;
//           text-align: center;
//         }
//         .spinner {
//           margin: 0 auto;
//           width: 30px;
//           height: 30px;
//           border: 4px solid rgba(0, 0, 0, 0.1);
//           border-top-color: #ec1f27;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//         }
//         .spinner-small {
//           width: 16px;
//           height: 16px;
//           border: 3px solid rgba(0, 0, 0, 0.1);
//           border-top-color: #ec1f27;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//           display: inline-block;
//         }
//         @keyframes spin {
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         /* İsteğe bağlı diğer stil ayarlamaları */
//         .wishlist-btn:disabled,
//         .cartBtn:disabled {
//           cursor: not-allowed;
//           opacity: 0.6;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePageProductsCard;



