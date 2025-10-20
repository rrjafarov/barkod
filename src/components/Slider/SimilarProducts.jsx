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
// import { MdOutlineNotificationsActive } from "react-icons/md";

// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";
// import { useCompare } from "@/hooks/useCompare";
// import OneClickPay from "../Header/OneClickPay";

// const SimilarProducts = ({ similarData ,t}) => {
//     console.log("similarData in SimilarProducts:", similarData);
//   return (
//     <div>
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={15}
//         loop
//         pagination={{ clickable: true, el: ".my-custom-pagination" }}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         speed={4000}
//         modules={[Pagination, Autoplay]}
//         breakpoints={{
//           340: { slidesPerView: 2, spaceBetween: 20 },
//           640: { slidesPerView: 3.3, spaceBetween: 20 },
//           991: { slidesPerView: 3.5, spaceBetween: 20 },
//           1024: { slidesPerView: 4, spaceBetween: 20 },
//           1440: { slidesPerView: 4, spaceBetween: 20 },
//         }}
//         className="mySwiper custom-overflow-container"
//       >
//         {displayData.map((similarData) => {
//           const productId = similarData?.id;
//           const isWishlisted = !!wishlistedMap[productId];
//           const isAddingFav = !!addingFavMap[productId];
//           const isInCart = !!cartMap[productId];
//           const isAddingCart = !!addingCartMap[productId];
//           const isAddingCompareItem = !!addingCompareMap[productId];
//           const isProductInCompare = isInCompare(productId);

//           return (
//             <SwiperSlide key={productId} className="productCardSlide">
//               <div className="secondHomePageProductsCard">
//                 <div className="secondHomePageProductsCardDiv">
//                   <Link
//                     href={`/products/${product.slug}`}
//                     className="blockCardLink"
//                   >
//                     <div className="secondHomePageProductsCardImage">
//                       <Image
//                         src={product.image || "/images/defaultImage.png"}
//                         alt={product.name}
//                         width={200}
//                         height={200}
//                       />
//                     </div>
//                   </Link>
//                   <div className="secondHomePageProductsCardContent">
//                     <p>{product.name}</p>
//                     {product.disc_percent != null && (
//                       <div className="discount">
//                         <span>{product.disc_percent} %</span>
//                       </div>
//                     )}
//                     <div className="cardBottomContent">
//                       <div className="price">
//                         {product.old_price &&
//                           product.old_price !== product.price && (
//                             <span className="oldPrice">
//                               {product.old_price}
//                               <TbCurrencyManat />
//                             </span>
//                           )}
//                         <span className="newPrice">
//                           {product.price}
//                           <TbCurrencyManat />
//                         </span>
//                       </div>
//                       <div className="wishList">
//                         <button
//                           className={`newScaleBtn ${
//                             isProductInCompare ? "in-compare" : ""
//                           }`}
//                           onClick={() => handleAddToCompare(product)}
//                           disabled={isAddingCompareItem || isProductInCompare}
//                           title={
//                             isProductInCompare
//                               ? "Artıq müqayisədə"
//                               : "Müqayisəyə əlavə et"
//                           }
//                           style={
//                             isProductInCompare ? { opacity: 1 } : undefined
//                           }
//                         >
//                           {isAddingCompareItem ? (
//                             <div className="spinner-small"></div>
//                           ) : (
//                             <NewScale
//                               className={`newScalePR ${
//                                 isProductInCompare ? "active" : ""
//                               }`}
//                               style={
//                                 isProductInCompare
//                                   ? {
//                                       transition:
//                                         "filter 0.3s ease, transform 0.15s ease",
//                                       filter:
//                                         "invert(15%) sepia(100%) saturate(7490%) hue-rotate(-10deg) brightness(100%) contrast(100%)",
//                                       opacity: 1,
//                                       transform: "scale(1.2)",
//                                       transformOrigin: "center",
//                                       strokeWidth: 1.6,
//                                       width: "20px",
//                                       height: "20px",
//                                     }
//                                   : undefined
//                               }
//                             />
//                           )}
//                         </button>
//                         <button
//                           onClick={() => handleToggleWishlist(productId)}
//                           className="wishlist-btn"
//                           disabled={isAddingFav}
//                         >
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
//                     <button
//                       className="cartBtn"
//                       onClick={() => handleAddToCart(productId)}
//                       disabled={isAddingCart || isInCart}
//                     >
//                       {isAddingCart ? (
//                         <div className="spinner-small"></div>
//                       ) : isInCart ? (
//                         <span>{t?.added || "added"}</span>
//                       ) : (
//                         t?.addtocart || "Add to cart"
//                       )}
//                     </button>
//                     <button
//                       onClick={() => openModal(product)}
//                       className="clickBtn"
//                     >
//                       {t?.oneclickpay || "Bir kliklə al"}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//         <div className="my-custom-pagination"></div>
//       </Swiper>
//       ;
//     </div>
//   );
// };

// export default SimilarProducts;













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
import { MdOutlineNotificationsActive } from "react-icons/md";

import {
  useGetFavQuery,
  useAddToFavMutation,
  useRemoveFromFavMutation,
} from "@/redux/wishlistService";
  import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";
import { useCompare } from "@/hooks/useCompare";
import OneClickPay from "../Header/OneClickPay";

const SimilarProducts = ({
  similarData,
  t,

  // Aşağıdakı props-lar gəlmirsə, komponent sırf render üçün çökməsin deyə default veririk:
  wishlistedMap = {},
  addingFavMap = {},
  cartMap = {},
  addingCartMap = {},
  addingCompareMap = {},
  isInCompare = () => false,
  handleAddToCompare = () => {},
  handleToggleWishlist = () => {},
  handleAddToCart = () => {},
  openModal = () => {},
}) => {
  const items = Array.isArray(similarData) ? similarData : [];

  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        loop
        pagination={{ clickable: true, el: ".my-custom-pagination" }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={4000}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          340: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 1.5, spaceBetween: 15 },
          991: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 2, spaceBetween: 15 },
          1440: { slidesPerView: 2, spaceBetween: 15 },
        }}
        className="mySwiper custom-overflow-containere similarContainer"
      >
        {items.map((product) => {
          const productId = product?.id;
          const isWishlisted = !!wishlistedMap[productId];
          const isAddingFav = !!addingFavMap[productId];
          const isInCart = !!cartMap[productId];
          const isAddingCart = !!addingCartMap[productId];
          const isAddingCompareItem = !!addingCompareMap[productId];
          const isProductInCompare = typeof isInCompare === "function" ? isInCompare(productId) : false;

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
                        src={product.image || "/images/defaultImage.png"}
                        alt={product.name}
                        width={200}
                        height={200}
                      />
                    </div>
                  </Link>

                  <div className="secondHomePageProductsCardContent">
                    <p>{product.name}</p>

                    {product.disc_percent != null && (
                      <div className="discount">
                        <span>{product.disc_percent} %</span>
                      </div>
                    )}

                    <div className="cardBottomContent">
                      <div className="price">
                        {product.old_price &&
                          product.old_price !== product.price && (
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
                        <button
                          className={`newScaleBtn ${isProductInCompare ? "in-compare" : ""}`}
                          onClick={() => handleAddToCompare(product)}
                          disabled={isAddingCompareItem || isProductInCompare}
                          title={isProductInCompare ? "Artıq müqayisədə" : "Müqayisəyə əlavə et"}
                          style={isProductInCompare ? { opacity: 1 } : undefined}
                        >
                          {isAddingCompareItem ? (
                            <div className="spinner-small"></div>
                          ) : (
                            <NewScale
                              className={`newScalePR ${isProductInCompare ? "active" : ""}`}
                              style={
                                isProductInCompare
                                  ? {
                                      transition: "filter 0.3s ease, transform 0.15s ease",
                                      filter:
                                        "invert(15%) sepia(100%) saturate(7490%) hue-rotate(-10deg) brightness(100%) contrast(100%)",
                                      opacity: 1,
                                      transform: "scale(1.2)",
                                      transformOrigin: "center",
                                      strokeWidth: 1.6,
                                      width: "20px",
                                      height: "20px",
                                    }
                                  : undefined
                              }
                            />
                          )}
                        </button>

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
                        <span>{t?.added || "added"}</span>
                      ) : (
                        t?.addtocart || "Add to cart"
                      )}
                    </button>

                    <button
                      onClick={() => openModal(product)}
                      className="clickBtn"
                    >
                      {t?.oneclickpay || "Bir kliklə al"}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* <div className="my-custom-pagination"></div> */}
      </Swiper>
    </div>
  );
};

export default SimilarProducts;
