// "use client";
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "../app/[locale]/globals.scss";
// import { Pagination, Autoplay } from "swiper/modules";
// import Link from "next/link";
// import Image from "next/image";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../public/icons/newScale.svg";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

// // RTK Query hook'ları
// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";
// import OneClickPay from "./Header/OneClickPay";

// const CategoryBestSeller = ({ t, bestSellerProducts = [], categorySlug }) => {
//   const [showModal, setShowModal] = useState(false);
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };

//   // Local map'ler
//   const [wishlistedMap, setWishlistedMap] = useState({}); // productId -> bool
//   const [addingFavMap, setAddingFavMap] = useState({});
//   const [cartMap, setCartMap] = useState({}); // productId -> bool
//   const [addingCartMap, setAddingCartMap] = useState({});

//   // RTK Query hook'ları
//   const {
//     data: wishlistData,
//     isLoading: isLoadingWishlistData,
//     isError: isErrorWishlistData,
//   } = useGetFavQuery();
//   const [addToFav, { isLoading: genericAddingFav }] = useAddToFavMutation();
//   const [removeFromFav, { isLoading: genericRemovingFav }] =
//     useRemoveFromFavMutation();

//   const {
//     data: cartData,
//     isLoading: isLoadingCartData,
//     isError: isErrorCartData,
//   } = useGetCartQuery();
//   const [addToCart, { isLoading: genericAddingCart }] = useAddToCartMutation();

//   // Sync wishlist map when data arrives
//   useEffect(() => {
//     if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
//       const newWishMap = {};
//       wishlistData.wishlist.products.forEach((item) => {
//         newWishMap[item.id] = true;
//       });
//       setWishlistedMap(newWishMap);
//     }
//   }, [wishlistData]);

//   // Sync cart map when data arrives
//   useEffect(() => {
//     if (cartData && Array.isArray(cartData.cart?.cart_products)) {
//       const newCartMap = {};
//       cartData.cart.cart_products.forEach((cartItem) => {
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
//     // Optimistic update
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
//       // RTK Query invalidation/refetch ile data yenilənəcək
//     } catch (error) {
//       console.error("Wishlist toggle error:", error);
//       // Rollback
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

//   // Add to cart handler (optimistic update + rollback)
//   const handleAddToCart = async (productId) => {
//     if (cartMap[productId] || addingCartMap[productId]) return;
//     // Optimistic update
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
//       // RTK Query invalidation/refetch ilə cartData yenilənəcək
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

//   // Əgər bestSellerProducts boşdursa, komponenti göstərmə
//   if (!bestSellerProducts || bestSellerProducts.length === 0) {
//     return null;
//   }

//   return (
//     <div className="container">
//       {showModal && (
//         <OneClickPay
//           t={t}
//           closeModal={closeModal}
//           handleOverlayClick={handleOverlayClick}
//         />
//       )}
//       <div className="secondaryProductsHeadTitle categorySecondaryProductsHeadTitle">
//         <div className="secondaryTitleLeft">
//           <span>{t?.bestselling || "En chox satilanlar"}</span>
//         </div>
//       </div>

//       <Swiper
//         slidesPerView={4}
//         spaceBetween={15}
//         loop={true}
//         pagination={{
//           clickable: true,
//           el: ".my-custom-pagination-category",
//         }}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         speed={4000}
//         modules={[Pagination, Autoplay]}
//         breakpoints={{
//           340: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//             loop: true,
//           },
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           991: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 20,
//           },
//           1440: {
//             slidesPerView: 4,
//             spaceBetween: 20,
//           },
//         }}
//         className="mySwiper custom-overflow-container categorySwiperMargin"
//       >
//         {bestSellerProducts.map((product) => {
//           const productId = product.id;
//           const isWishlisted = !!wishlistedMap[productId];
//           const isAddingFav = !!addingFavMap[productId];
//           const isInCart = !!cartMap[productId];
//           const isAddingCart = !!addingCartMap[productId];

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
//                         // "✔︎ Əlavə edildi"
//                         <span>✔︎ {t?.added || "added"}</span>
//                       ) : (
//                         t?.addtocart || "Add to cart"
//                       )}
//                     </button>
//                     <button onClick={openModal} className="clickBtn">
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
//       {/* Styling qalır olduğu kimi */}
//       <style jsx>{`
//         /* Əvvəlki stil kodlarınız burada qalır */
//         .wishlist-btn:disabled,
//         .cartBtn:disabled {
//           cursor: not-allowed;
//           opacity: 0.6;
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
//       `}</style>
//     </div>
//   );
// };

// export default CategoryBestSeller;























// ! 1 klickle al ve compare
"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../app/[locale]/globals.scss";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { TbCurrencyManat } from "react-icons/tb";
import NewScale from "../../public/icons/newScale.svg";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

// RTK Query hook'ları
import {
  useGetFavQuery,
  useAddToFavMutation,
  useRemoveFromFavMutation,
} from "@/redux/wishlistService";
import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";
// Compare hook-u əlavə edildi
import { useCompare } from "@/hooks/useCompare";
import OneClickPay from "./Header/OneClickPay";

const CategoryBestSeller = ({ t, bestSellerProducts = [], categorySlug }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Seçilən məhsul üçün state əlavə edildi

  // Modal üçün yenilənmiş funksiyalar
  const openModal = (product) => {
    setSelectedProduct(product); // Məhsul obyektini yadda saxla
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null); // State-i təmizlə
  };
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  // Local map'ler
  const [wishlistedMap, setWishlistedMap] = useState({}); // productId -> bool
  const [addingFavMap, setAddingFavMap] = useState({});
  const [cartMap, setCartMap] = useState({}); // productId -> bool
  const [addingCartMap, setAddingCartMap] = useState({});
  const [addingCompareMap, setAddingCompareMap] = useState({}); // Compare üçün əlavə edildi

  // RTK Query hook'ları
  const {
    data: wishlistData,
    isLoading: isLoadingWishlistData,
    isError: isErrorWishlistData,
  } = useGetFavQuery();
  const [addToFav, { isLoading: genericAddingFav }] = useAddToFavMutation();
  const [removeFromFav, { isLoading: genericRemovingFav }] =
    useRemoveFromFavMutation();

  const {
    data: cartData,
    isLoading: isLoadingCartData,
    isError: isErrorCartData,
  } = useGetCartQuery();
  const [addToCart, { isLoading: genericAddingCart }] = useAddToCartMutation();

  // Compare hook-u əlavə edildi
  const { addToCompare, isInCompare } = useCompare();

  // Helper funksiya - category id çıxarmaq üçün
  const extractCategoryId = (product) => {
    if (!product) return null;
    if (product.category && typeof product.category === "object") {
      return (
        product.category.id ?? product.categoryId ?? product.category_id ?? null
      );
    }
    if (product.category_id) return product.category_id;
    if (product.categoryId) return product.categoryId;
    if (product.parent_category_id) return product.parent_category_id;
    return null;
  };

  // Sync wishlist map when data arrives
  useEffect(() => {
    if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
      const newWishMap = {};
      wishlistData.wishlist.products.forEach((item) => {
        newWishMap[item.id] = true;
      });
      setWishlistedMap(newWishMap);
    }
  }, [wishlistData]);

  // Sync cart map when data arrives
  useEffect(() => {
    if (cartData && Array.isArray(cartData.cart?.cart_products)) {
      const newCartMap = {};
      cartData.cart.cart_products.forEach((cartItem) => {
        const pid = cartItem.product?.id;
        if (pid != null) {
          newCartMap[pid] = true;
        }
      });
      setCartMap(newCartMap);
    }
  }, [cartData]);

  // Compare handler - localStorage ilə
  const handleAddToCompare = async (product) => {
    if (!product?.id) {
      console.error("Product ID boşdur");
      return;
    }

    const productId = product.id;
    const categoryId =
      extractCategoryId(product) ||
      product.category_id ||
      product.categoryId ||
      1; // Fallback categoryId

    // Loading state
    if (addingCompareMap[productId]) return;

    setAddingCompareMap((prev) => ({
      ...prev,
      [productId]: true,
    }));

    try {
      // Tam məhsul obyektini göndər ki, CompareService məhsul detallarını yerli olaraq saxlasın
      const result = await addToCompare(product, categoryId);

      if (result.success) {
        console.log(`Məhsul ${productId} müqayisəyə əlavə edildi`);
        // İstəyə bağlı toast notification burada ola bilər
      } else {
        console.error("Compare əlavə etmə xətası:", result.error);
        alert(result.error); // Və ya daha yaxşı notification sistemi
      }
    } catch (error) {
      console.error("Məhsul müqayisəyə əlavə edilərkən xəta:", error);
      alert("Xəta baş verdi. Yenidən cəhd edin.");
    } finally {
      setAddingCompareMap((prev) => {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      });
    }
  };

  // Wishlist toggle handler (optimistic update + rollback)
  const handleToggleWishlist = async (productId) => {
    if (addingFavMap[productId]) return;
    const currentlyFav = !!wishlistedMap[productId];
    // Optimistic update
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
      // RTK Query invalidation/refetch ile data yenilənəcək
    } catch (error) {
      console.error("Wishlist toggle error:", error);
      // Rollback
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

  // Add to cart handler (optimistic update + rollback)
  const handleAddToCart = async (productId) => {
    if (cartMap[productId] || addingCartMap[productId]) return;
    // Optimistic update
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
      // RTK Query invalidation/refetch ilə cartData yenilənəcək
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

  // Əgər bestSellerProducts boşdursa, komponenti göstərmə
  if (!bestSellerProducts || bestSellerProducts.length === 0) {
    return null;
  }

  return (
    <div className="container">
      {showModal && (
        <OneClickPay
          t={t}
          product={selectedProduct} // Seçilən məhsul obyektini göndər
          closeModal={closeModal}
          handleOverlayClick={handleOverlayClick}
        />
      )}
      <div className="secondaryProductsHeadTitle categorySecondaryProductsHeadTitle">
        <div className="secondaryTitleLeft">
          <span>{t?.bestselling || "En chox satilanlar"}</span>
        </div>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        loop={true}
        pagination={{
          clickable: true,
          el: ".my-custom-pagination-category",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={4000}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper custom-overflow-container categorySwiperMargin"
      >
        {bestSellerProducts.map((product) => {
          const productId = product.id;
          const isWishlisted = !!wishlistedMap[productId];
          const isAddingFav = !!addingFavMap[productId];
          const isInCart = !!cartMap[productId];
          const isAddingCart = !!addingCartMap[productId];
          const isAddingCompareItem = !!addingCompareMap[productId];
          const isProductInCompare = isInCompare(productId); // Compare vəziyyətini yoxla

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
                          className={`newScaleBtn ${
                            isProductInCompare ? "in-compare" : ""
                          }`}
                          onClick={() => handleAddToCompare(product)} // Tam məhsul obyektini göndər
                          disabled={isAddingCompareItem || isProductInCompare}
                          title={
                            isProductInCompare
                              ? "Artıq müqayisədə"
                              : "Müqayisəyə əlavə et"
                          }
                          // Disabled olduğu zaman opacity-ni override et
                          style={isProductInCompare ? { opacity: 1 } : undefined}
                        >
                          {isAddingCompareItem ? (
                            <div className="spinner-small"></div>
                          ) : (
                            <NewScale
                              className={`newScalePR ${
                                isProductInCompare ? "active" : ""
                              }`}
                              // İnline style override - active olduğu zaman qırmızı rəng
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
                        // "✔︎ Əlavə edildi"
                        <span>✔︎ {t?.added || "added"}</span>
                      ) : (
                        t?.addtocart || "Add to cart"
                      )}
                    </button>
                    <button 
                      onClick={() => openModal(product)} // Tam məhsul obyektini göndər
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
        {/* <div className="my-custom-pagination-category"></div> */}
      </Swiper>
      {/* Styling qalır olduğu kimi */}
      <style jsx>{`
        /* Əvvəlki stil kodlarınız burada qalır */
        .wishlist-btn:disabled,
        .cartBtn:disabled {
          cursor: not-allowed;
          opacity: 0.6;
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
        .newScaleBtn {
          cursor: pointer;
        }
        .newScaleBtn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        /* Compare active vəziyyəti üçün override */
        .newScaleBtn.in-compare:disabled {
          opacity: 1;
        }
        .newScaleBtn.in-compare {
          background-color: #ec1f27;
          color: white;
        }
        .newScalePR.active {
          color: #ec1f27;
          transition: filter 0.3s ease, transform 0.15s ease;
          filter: invert(15%) sepia(100%) saturate(7490%) hue-rotate(-10deg)
            brightness(100%) contrast(100%);
          opacity: 1;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};

export default CategoryBestSeller;
// ! 1 klickle al ve compare