// "use client";
// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "../../app/[locale]/globals.scss";
// import { Pagination, Autoplay } from "swiper/modules";
// import Link from "next/link";
// import { Rating, Box } from "@mui/material";
// import Image from "next/image";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../../public/icons/newScale.svg";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

// const HomePageSecondaryProducts = ({ homePageDataBestSellingProducts }) => {
//   const [value, setValue] = useState(4);
//   const [showModal, setShowModal] = useState(false);
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   // const [isWishlisted, setIsWishlisted] = useState(false);
//   const [wishlistedMap, setWishlistedMap] = useState({});

//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };

//   const toggleWishlist = (productId) => {
//     setWishlistedMap((prev) => ({
//       ...prev,
//       [productId]: !prev[productId],
//     }));
//   };

//   return (
//     <div className="container">
//       {showModal && (
//         <div className="modal-overlay" onClick={handleOverlayClick}>
//           <div className="modal">
//             <button className="close-btns" onClick={closeModal}>
//               X
//             </button>
//             <span>Bir kliklə al</span>
//             <div></div>
//             <div className="numberModal">
//               <label htmlFor="phone">Nömrə: +994</label>
//               <input type="text" id="phone" name="phone" />
//             </div>
//             <button className="open-btn">Bir kliklə al</button>
//           </div>
//         </div>
//       )}
//       <div className="secondaryProductsHeadTitle">
//         <div className="secondaryTitleLeft">
//           <span>Ən çox satilanlar</span>
//         </div>
//         <div className="secondaryTitleRight">
//           <strong>Top 100</strong>
//           <span>Smartfonlar</span>
//           <span>Televizorlar</span>
//         </div>
//       </div>

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
//           340: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//             // centeredSlides: true,
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
//         className="mySwiper custom-overflow-container"
//       >
//         {homePageDataBestSellingProducts.map((product) => {
//           const isWishlisted = wishlistedMap[product.id] === true;
//           return (
//             <SwiperSlide key={product.id} className="productCardSlide">
//               <div className="secondHomePageProductsCard">
//                 <div className="secondHomePageProductsCardDiv">
//                   <Link
//                     href={`/products/${product.slug}`}
//                     className="blockCardLink"
//                   >
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
//                         <button
//                           onClick={() => toggleWishlist(product.id)}
//                           className="wishlist-btn"
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
//                     <button className="cartBtn">Səbətə at</button>
//                     <button onClick={openModal} className="clickBtn">
//                       Bir Kliklə Al
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//         <div className="my-custom-pagination"></div>
//       </Swiper>
//     </div>
//   );
// };

// export default HomePageSecondaryProducts;

"use client";
import React, { useState, useEffect } from "react";
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

const HomePageSecondaryProducts = ({
  t,
  homePageDataBestSellingProducts = [],
}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  // Local map’ler
  const [wishlistedMap, setWishlistedMap] = useState({}); // productId -> bool
  const [addingFavMap, setAddingFavMap] = useState({});
  const [cartMap, setCartMap] = useState({}); // productId -> bool
  const [addingCartMap, setAddingCartMap] = useState({});

  // RTK Query hook’ları
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

  return (
    <div className="container">
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
      <div className="secondaryProductsHeadTitle">
        <div className="secondaryTitleLeft">
          <span>{t?.bestselling || "En chox satilanlar"}</span>
        </div>
        <div className="secondaryTitleRight">
          <strong>Top 100</strong>
          <span>Smartfonlar</span>
          <span>Televizorlar</span>
        </div>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        loop={true}
        pagination={{
          clickable: true,
          el: ".my-custom-pagination",
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
        className="mySwiper custom-overflow-container"
      >
        {homePageDataBestSellingProducts.map((product) => {
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
      `}</style>
    </div>
  );
};

export default HomePageSecondaryProducts;
