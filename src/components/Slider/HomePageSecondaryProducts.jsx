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

// // RTK Query hook'ları
// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";
// import { useAddToCompareMutation } from "@/redux/compareService";
// import OneClickPay from "../Header/OneClickPay";

// const HomePageSecondaryProducts = ({
//   homePageTop100,
//   t,
//   homePageDataBestSellingProducts = [],
// }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedCategorySlug, setSelectedCategorySlug] = useState("");
//   const [displayedProducts, setDisplayedProducts] = useState(
//     homePageDataBestSellingProducts
//   );
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
//   const [addingCompareMap, setAddingCompareMap] = useState({});

//   const { data: wishlistData } = useGetFavQuery();
//   const [addToFav] = useAddToFavMutation();
//   const [removeFromFav] = useRemoveFromFavMutation();

//   const { data: cartData } = useGetCartQuery();
//   const [addToCart] = useAddToCartMutation();

//   // Compare
//   const [addToCompare, { isLoading: isAddingCompare }] =
//     useAddToCompareMutation();

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

//   // Compare handler
//   const handleAddToCompare = async (productId) => {
//     if (!productId) {
//       console.error("Product ID boşdur və ya undefined gəldi");
//       return;
//     }

//     // Loading state
//     if (addingCompareMap[productId]) return;

//     setAddingCompareMap((prev) => ({
//       ...prev,
//       [productId]: true,
//     }));

//     try {
//       await addToCompare(productId).unwrap();
//       console.log(`Məhsul ${productId} müqayisəyə əlavə edildi.`);
//     } catch (error) {
//       console.error("Məhsul müqayisəyə əlavə edilərkən xəta baş verdi:", error);
//     } finally {
//       setAddingCompareMap((prev) => {
//         const copy = { ...prev };
//         delete copy[productId];
//         return copy;
//       });
//     }
//   };

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
//         <OneClickPay
//           t={t}
//           closeModal={closeModal}
//           handleOverlayClick={handleOverlayClick}
//         />
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
//             const isAddingCompareItem = !!addingCompareMap[id];

//             return (
//               <SwiperSlide key={id} className="productCardSlide">
//                 <div className="secondHomePageProductsCard">
//                   <div className="secondHomePageProductsCardDiv">
//                     <Link
//                       href={`/products/${product.slug}`}
//                       className="blockCardLink"
//                     >
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
//                           <button
//                             className="newScaleBtn"
//                             onClick={() => handleAddToCompare(id)}
//                             disabled={isAddingCompareItem}
//                           >
//                             {isAddingCompareItem ? (
//                               <div className="spinner-small"></div>
//                             ) : (
//                               <NewScale className="newScalePR" />
//                             )}
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
//                           <span>{t?.added || "added"}</span>
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
//           width: 16px;
//           height: 16px;
//           border: 3px solid rgba(0, 0, 0, 0.1);
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
//         .newScaleBtn {
//           cursor: pointer;
//         }
//         .newScaleBtn:disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePageSecondaryProducts;










// ! 1 klikle al ve compare


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
// Compare hook-u əlavə edildi
import { useCompare } from "@/hooks/useCompare";
import OneClickPay from "../Header/OneClickPay";

const HomePageSecondaryProducts = ({
  homePageTop100,
  t,
  homePageDataBestSellingProducts = [],
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Seçilən məhsul üçün state əlavə edildi
  const [selectedCategorySlug, setSelectedCategorySlug] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState(
    homePageDataBestSellingProducts
  );
  const [loadingProducts, setLoadingProducts] = useState(false);

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

  // Yenilənmiş Compare handler - localStorage ilə işləyir
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
        <OneClickPay
          t={t}
          product={selectedProduct} // Seçilən məhsul obyektini göndər
          closeModal={closeModal}
          handleOverlayClick={handleOverlayClick}
        />
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
            const isProductInCompare = isInCompare(id); // Compare vəziyyətini yoxla

            return (
              <SwiperSlide key={id} className="productCardSlide">
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

export default HomePageSecondaryProducts;

// ! 1 klikle al ve compare