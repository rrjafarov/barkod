// "use client";
// import React, { useState, useEffect } from "react";
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
// import axiosInstance from "@/lib/axios";
// import Cookies from "js-cookie";

// // RTK Query hook’ları
// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";

// const HomePageSecondaryProducts = ({
//   homePageTop100,
//   t,
//   homePageDataBestSellingProducts = [],
// }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedCategorySlug, setSelectedCategorySlug] = useState("");
//   const [displayedProducts, setDisplayedProducts] = useState(homePageDataBestSellingProducts);
//   const [loadingProducts, setLoadingProducts] = useState(false);

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") closeModal();
//   };

//   const [wishMap, setWishMap] = useState({});
//   const [addingWishMap, setAddingWishMap] = useState({});
//   const [cartMap, setCartMap] = useState({});
//   const [addingCartMap, setAddingCartMap] = useState({});

//   const { data: wishlistData } = useGetFavQuery();
//   const [addToFav] = useAddToFavMutation();
//   const [removeFromFav] = useRemoveFromFavMutation();

//   const { data: cartData } = useGetCartQuery();
//   const [addToCart] = useAddToCartMutation();

//   // Wishlist sync
//   useEffect(() => {
//     if (wishlistData?.wishlist?.products) {
//       const m = {};
//       wishlistData.wishlist.products.forEach((p) => {
//         m[p.id] = true;
//       });
//       setWishMap(m);
//     }
//   }, [wishlistData]);

//   // Cart sync
//   useEffect(() => {
//     if (cartData?.cart?.cart_products) {
//       const m = {};
//       cartData.cart.cart_products.forEach((c) => {
//         const pid = c.product?.id;
//         if (pid != null) m[pid] = true;
//       });
//       setCartMap(m);
//     }
//   }, [cartData]);

//   // Fetch products when category changes
//   useEffect(() => {
//     const fetchProducts = async () => {
//       if (!selectedCategorySlug) {
//         setDisplayedProducts(homePageDataBestSellingProducts);
//         return;
//       }
//       setLoadingProducts(true);
//       try {
//         const lang = Cookies.get("NEXT_LOCALE");
//         const { data } = await axiosInstance.get(
//           `/product-list?is_best_seller=1&cat_slug=${selectedCategorySlug}`,
//           { headers: { Lang: lang || "az" }, cache: "no-store" }
//         );
//         const raw = data.products;
//         const list = Array.isArray(raw)
//           ? raw
//           : Array.isArray(raw?.data)
//           ? raw.data
//           : [];
//         setDisplayedProducts(list);
//       } catch (error) {
//         console.error("Failed to fetch products for category", error);
//         setDisplayedProducts([]);
//       } finally {
//         setLoadingProducts(false);
//       }
//     };
//     fetchProducts();
//   }, [selectedCategorySlug, homePageDataBestSellingProducts]);

//   // Toggle wishlist
//   const handleToggleWishlist = async (id) => {
//     if (addingWishMap[id]) return;
//     const isNow = !wishMap[id];
//     setWishMap((prev) => ({ ...prev, [id]: isNow }));
//     setAddingWishMap((prev) => ({ ...prev, [id]: true }));
//     try {
//       if (wishMap[id]) await removeFromFav(id).unwrap();
//       else await addToFav(id).unwrap();
//     } catch {
//       setWishMap((prev) => ({ ...prev, [id]: !isNow }));
//     } finally {
//       setAddingWishMap((prev) => {
//         const c = { ...prev };
//         delete c[id];
//         return c;
//       });
//     }
//   };

//   // Add to cart
//   const handleAddToCart = async (id) => {
//     if (cartMap[id] || addingCartMap[id]) return;
//     setCartMap((prev) => ({ ...prev, [id]: true }));
//     setAddingCartMap((prev) => ({ ...prev, [id]: true }));
//     try {
//       await addToCart({ productId: id, quantity: 1 }).unwrap();
//     } catch {
//       setCartMap((prev) => {
//         const c = { ...prev };
//         delete c[id];
//         return c;
//       });
//     } finally {
//       setAddingCartMap((prev) => {
//         const c = { ...prev };
//         delete c[id];
//         return c;
//       });
//     }
//   };

//   return (
//     <div className="container">
//       {showModal && (
//         <div className="modal-overlay" onClick={handleOverlayClick}>
//           <div className="modal">
//             <button className="close-btns" onClick={closeModal}>X</button>
//             <span>{t?.oneclickpay || "Bir kliklə al"}</span>
//             <div className="numberModal">
//               <label htmlFor="phone">{t?.num || "Nomre"}: +994</label>
//               <input type="text" id="phone" name="phone" />
//             </div>
//             <button className="open-btn">{t?.oneclickpay || "Al"}</button>
//           </div>
//         </div>
//       )}

//       <div className="secondaryProductsHeadTitle">
//         <div className="secondaryTitleRight">
//           <strong>Top 100</strong>
//           {homePageTop100.map((cat) => (
//             <span
//               key={cat.slug}
//               onClick={() =>
//                 setSelectedCategorySlug(
//                   selectedCategorySlug === cat.slug ? "" : cat.slug
//                 )
//               }
//               style={{
//                 cursor: "pointer",
//                 fontWeight:
//                   selectedCategorySlug === cat.slug ? "bold" : "normal",
//               }}
//             >
//               {cat.name}
//             </span>
//           ))}
//         </div>
//       </div>

//       <Swiper
//         slidesPerView={4}
//         spaceBetween={15}
//         loop
//         pagination={{ clickable: true, el: ".my-custom-pagination" }}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         speed={4000}
//         modules={[Pagination, Autoplay]}
//         breakpoints={{
//           340: { slidesPerView: 2, spaceBetween: 20, loop: true },
//           640: { slidesPerView: 2, spaceBetween: 20 },
//           991: { slidesPerView: 3, spaceBetween: 20 },
//           1024: { slidesPerView: 4, spaceBetween: 20 },
//           1440: { slidesPerView: 4, spaceBetween: 20 },
//         }}
//         className="mySwiper custom-overflow-container"
//       >
//         {loadingProducts ? (
//           <div className="tab-loading">
//             <div className="spinner" />
//           </div>
//         ) : (
//           displayedProducts.map((product) => {
//             const id = product.id;
//             const isWish = !!wishMap[id];
//             const addingWish = !!addingWishMap[id];
//             const inCart = !!cartMap[id];
//             const addingCart = !!addingCartMap[id];

//             return (
//               <SwiperSlide key={id} className="productCardSlide">
//                 <div className="secondHomePageProductsCard">
//                   <div className="secondHomePageProductsCardDiv">
//                     <Link href={`/products/${product.slug}`} className="blockCardLink">
//                       <div className="secondHomePageProductsCardImage">
//                         <Image
//                           src={product.image || "/images/defaultImage.png"}
//                           alt={product.name}
//                           width={200}
//                           height={200}
//                         />
//                       </div>
//                     </Link>
//                     <div className="secondHomePageProductsCardContent">
//                       <p>{product.name}</p>
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
//                             onClick={() => handleToggleWishlist(id)}
//                             disabled={addingWish}
//                             className="wishlist-btn"
//                           >
//                             {isWish ? (
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
//                         onClick={() => handleAddToCart(id)}
//                         disabled={addingCart || inCart}
//                         className="cartBtn"
//                       >
//                         {addingCart ? (
//                           <div className="spinner-small" />
//                         ) : inCart ? (
//                           <span>✔︎ {t?.added || "added"}</span>
//                         ) : (
//                           t?.addtocart || "Add to cart"
//                         )}
//                       </button>
//                       <button onClick={openModal} className="clickBtn">
//                         {t?.oneclickpay || "Bir kliklə al"}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })
//         )}
//         <div className="my-custom-pagination" />
//       </Swiper>

//       <style jsx>{`
//         .custom-overflow-container {
//           /* slider konteynerinin minimum hündürlüyü */
//           min-height: 360px;
//         }
//         .wishlist-btn:disabled,
//         .cartBtn:disabled {
//           cursor: not-allowed;
//           opacity: 0.6;
//         }
//         .spinner-small {
//           width: 35px;
//           height: 35px;
//           border: 4px solid rgba(0, 0, 0, 0.1);
//           border-top-color: #ec1f27;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//           display: inline-block;
//         }
//         .tab-loading {
//           /* yüklenme zamanı konteyner sabit qalır, spinner ortalanır */
//           min-height: 360px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .spinner {
//           width: 40px;
//           height: 40px;
//           border: 5px solid rgba(0, 0, 0, 0.1);
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

// export default HomePageSecondaryProducts;
// ! compare yoxdur yuxarida amma ela isleyir














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
import axiosInstance from "@/lib/axios";
import Cookies from "js-cookie";

// RTK Query hook'ları
import {
  useGetFavQuery,
  useAddToFavMutation,
  useRemoveFromFavMutation,
} from "@/redux/wishlistService";
import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";
import { useAddToCompareMutation } from "@/redux/compareService";

const HomePageSecondaryProducts = ({
  homePageTop100,
  t,
  homePageDataBestSellingProducts = [],
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState(homePageDataBestSellingProducts);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") closeModal();
  };

  const [wishMap, setWishMap] = useState({});
  const [addingWishMap, setAddingWishMap] = useState({});
  const [cartMap, setCartMap] = useState({});
  const [addingCartMap, setAddingCartMap] = useState({});
  const [addingCompareMap, setAddingCompareMap] = useState({});

  const { data: wishlistData } = useGetFavQuery();
  const [addToFav] = useAddToFavMutation();
  const [removeFromFav] = useRemoveFromFavMutation();

  const { data: cartData } = useGetCartQuery();
  const [addToCart] = useAddToCartMutation();

  // Compare
  const [addToCompare, { isLoading: isAddingCompare }] = useAddToCompareMutation();

  // Wishlist sync
  useEffect(() => {
    if (wishlistData?.wishlist?.products) {
      const m = {};
      wishlistData.wishlist.products.forEach((p) => {
        m[p.id] = true;
      });
      setWishMap(m);
    }
  }, [wishlistData]);

  // Cart sync
  useEffect(() => {
    if (cartData?.cart?.cart_products) {
      const m = {};
      cartData.cart.cart_products.forEach((c) => {
        const pid = c.product?.id;
        if (pid != null) m[pid] = true;
      });
      setCartMap(m);
    }
  }, [cartData]);

  // Fetch products when category changes
  useEffect(() => {
    const fetchProducts = async () => {
      if (!selectedCategorySlug) {
        setDisplayedProducts(homePageDataBestSellingProducts);
        return;
      }
      setLoadingProducts(true);
      try {
        const lang = Cookies.get("NEXT_LOCALE");
        const { data } = await axiosInstance.get(
          `/product-list?is_best_seller=1&cat_slug=${selectedCategorySlug}`,
          { headers: { Lang: lang || "az" }, cache: "no-store" }
        );
        const raw = data.products;
        const list = Array.isArray(raw)
          ? raw
          : Array.isArray(raw?.data)
          ? raw.data
          : [];
        setDisplayedProducts(list);
      } catch (error) {
        console.error("Failed to fetch products for category", error);
        setDisplayedProducts([]);
      } finally {
        setLoadingProducts(false);
      }
    };
    fetchProducts();
  }, [selectedCategorySlug, homePageDataBestSellingProducts]);

  // Compare handler
  const handleAddToCompare = async (productId) => {
    if (!productId) {
      console.error("Product ID boşdur və ya undefined gəldi");
      return;
    }

    // Loading state
    if (addingCompareMap[productId]) return;
    
    setAddingCompareMap((prev) => ({
      ...prev,
      [productId]: true,
    }));

    try {
      await addToCompare(productId).unwrap();
      console.log(`Məhsul ${productId} müqayisəyə əlavə edildi.`);
    } catch (error) {
      console.error("Məhsul müqayisəyə əlavə edilərkən xəta baş verdi:", error);
    } finally {
      setAddingCompareMap((prev) => {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      });
    }
  };

  // Toggle wishlist
  const handleToggleWishlist = async (id) => {
    if (addingWishMap[id]) return;
    const isNow = !wishMap[id];
    setWishMap((prev) => ({ ...prev, [id]: isNow }));
    setAddingWishMap((prev) => ({ ...prev, [id]: true }));
    try {
      if (wishMap[id]) await removeFromFav(id).unwrap();
      else await addToFav(id).unwrap();
    } catch {
      setWishMap((prev) => ({ ...prev, [id]: !isNow }));
    } finally {
      setAddingWishMap((prev) => {
        const c = { ...prev };
        delete c[id];
        return c;
      });
    }
  };

  // Add to cart
  const handleAddToCart = async (id) => {
    if (cartMap[id] || addingCartMap[id]) return;
    setCartMap((prev) => ({ ...prev, [id]: true }));
    setAddingCartMap((prev) => ({ ...prev, [id]: true }));
    try {
      await addToCart({ productId: id, quantity: 1 }).unwrap();
    } catch {
      setCartMap((prev) => {
        const c = { ...prev };
        delete c[id];
        return c;
      });
    } finally {
      setAddingCartMap((prev) => {
        const c = { ...prev };
        delete c[id];
        return c;
      });
    }
  };

  return (
    <div className="container">
      {showModal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal">
            <button className="close-btns" onClick={closeModal}>X</button>
            <span>{t?.oneclickpay || "Bir kliklə al"}</span>
            <div className="numberModal">
              <label htmlFor="phone">{t?.num || "Nomre"}: +994</label>
              <input type="text" id="phone" name="phone" />
            </div>
            <button className="open-btn">{t?.oneclickpay || "Al"}</button>
          </div>
        </div>
      )}

      <div className="secondaryProductsHeadTitle">
        <div className="secondaryTitleRight">
          <strong>Top 100</strong>
          {homePageTop100.map((cat) => (
            <span
              key={cat.slug}
              onClick={() =>
                setSelectedCategorySlug(
                  selectedCategorySlug === cat.slug ? "" : cat.slug
                )
              }
              style={{
                cursor: "pointer",
                fontWeight:
                  selectedCategorySlug === cat.slug ? "bold" : "normal",
              }}
            >
              {cat.name}
            </span>
          ))}
        </div>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        loop
        pagination={{ clickable: true, el: ".my-custom-pagination" }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={4000}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          340: { slidesPerView: 2, spaceBetween: 20, loop: true },
          640: { slidesPerView: 2, spaceBetween: 20 },
          991: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1440: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="mySwiper custom-overflow-container"
      >
        {loadingProducts ? (
          <div className="tab-loading">
            <div className="spinner" />
          </div>
        ) : (
          displayedProducts.map((product) => {
            const id = product.id;
            const isWish = !!wishMap[id];
            const addingWish = !!addingWishMap[id];
            const inCart = !!cartMap[id];
            const addingCart = !!addingCartMap[id];
            const isAddingCompareItem = !!addingCompareMap[id];

            return (
              <SwiperSlide key={id} className="productCardSlide">
                <div className="secondHomePageProductsCard">
                  <div className="secondHomePageProductsCardDiv">
                    <Link href={`/products/${product.slug}`} className="blockCardLink">
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
                          <button
                            className="newScaleBtn"
                            onClick={() => handleAddToCompare(id)}
                            disabled={isAddingCompareItem}
                          >
                            {isAddingCompareItem ? (
                              <div className="spinner-small"></div>
                            ) : (
                              <NewScale className="newScalePR" />
                            )}
                          </button>
                          <button
                            onClick={() => handleToggleWishlist(id)}
                            disabled={addingWish}
                            className="wishlist-btn"
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
                        onClick={() => handleAddToCart(id)}
                        disabled={addingCart || inCart}
                        className="cartBtn"
                      >
                        {addingCart ? (
                          <div className="spinner-small" />
                        ) : inCart ? (
                          <span>{t?.added || "added"}</span>
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
          })
        )}
        <div className="my-custom-pagination" />
      </Swiper>

      <style jsx>{`
        .custom-overflow-container {
          /* slider konteynerinin minimum hündürlüyü */
          min-height: 360px;
        }
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
        .tab-loading {
          /* yüklenme zamanı konteyner sabit qalır, spinner ortalanır */
          min-height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 5px solid rgba(0, 0, 0, 0.1);
          border-top-color: #ec1f27;
          border-radius: 50%;
          animation: spin 1s linear infinite;
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
      `}</style>
    </div>
  );
};

export default HomePageSecondaryProducts;
