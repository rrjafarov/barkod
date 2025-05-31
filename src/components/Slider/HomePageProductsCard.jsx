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





















"use client";
import React, { useState } from "react";
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

const HomePageProductsCard = ({
  homePageDataNewProducts = [],
  homePageDataDiscountedProducts = [],
  homePageDataBestSellingProducts = [],
}) => {
  // State-lər
  const [selectedTab, setSelectedTab] = useState("Latest Products");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // her ürünün favori durumu için map
  const [wishlistedMap, setWishlistedMap] = useState({}); // { [productId]: true/false }

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const toggleWishlist = (productId) => {
    setWishlistedMap(prev => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") closeModal();
  };

  // Tab klik funksiyası
  const handleTabClick = (tab) => {
    if (tab === selectedTab) return;
    setLoading(true);
    setTimeout(() => {
      setSelectedTab(tab);
      setLoading(false);
    }, 500);
  };

  // Hansı datanı göstərək
  const displayData = React.useMemo(() => {
    switch (selectedTab) {
      case "Discounted":
        return homePageDataDiscountedProducts;
      case "Best Selling":
        return homePageDataBestSellingProducts;
      case "Latest Products":
      default:
        return homePageDataNewProducts;
    }
  }, [
    selectedTab,
    homePageDataNewProducts,
    homePageDataDiscountedProducts,
    homePageDataBestSellingProducts,
  ]);

  return (
    <div className="container">
      {/* Modal */}
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

      {/* Tab başlıqları */}
      <div className="productsHeadTitle">
        {["Latest Products", "Discounted", "Best Selling"].map((tab) => (
          <span
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={tab === selectedTab ? "active-tab" : ""}
            style={{
              cursor: "pointer",
              fontWeight: tab === selectedTab ? "bold" : "normal",
            }}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Loading spinner */}
      {loading && (
        <div className="tab-loading">
          <div className="spinner"></div>
        </div>
      )}

      {/* Məhsul slideri */}
      {!loading && (
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
            const isWishlisted = wishlistedMap[product.id] === true;
            return (
              <SwiperSlide key={product.id} className="productCardSlide">
                <div className="secondHomePageProductsCard">
                  <div className="secondHomePageProductsCardDiv">
                    <Link href={product.slug} className="blockCardLink">
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
                          {product.old_price && (
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
                          <button>
                            <NewScale className="newScalePR" />
                          </button>
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className="wishlist-btn"
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
                      <button className="cartBtn">Səbətə at</button>
                      <button onClick={openModal} className="clickBtn">
                        Bir Kliklə Al
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
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePageProductsCard;
