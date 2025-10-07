// // components/HomePageProductsCard.jsx
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

// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";
// import { useCompare } from "@/hooks/useCompare";
// import OneClickPay from "../Header/OneClickPay";

// const HomePageProductsCard = ({
//   t,
//   homePageDataNewProducts = [],
//   homePageDataDiscountedProducts = [],
//   homePageDataBestSellingProducts = [],
// }) => {
//   const [selectedTab, setSelectedTab] = useState("bestselling");
//   const [loadingTab, setLoadingTab] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null); // Seçilən məhsul
//   const [wishlistedMap, setWishlistedMap] = useState({});
//   const [cartMap, setCartMap] = useState({});
//   const [addingFavMap, setAddingFavMap] = useState({});
//   const [addingCartMap, setAddingCartMap] = useState({});
//   const [addingCompareMap, setAddingCompareMap] = useState({});

//   // Compare hook
//   const { addToCompare, isInCompare } = useCompare();

//   // Wishlist
//   const { data: wishlistData } = useGetFavQuery();
//   const [addToFav] = useAddToFavMutation();
//   const [removeFromFav] = useRemoveFromFavMutation();

//   // Cart
//   const { data: cartData } = useGetCartQuery();
//   const [addToCart] = useAddToCartMutation();

//   // Effects to build maps
//   useEffect(() => {
//     if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
//       const newWishMap = {};
//       wishlistData.wishlist.products.forEach((item) => {
//         newWishMap[item.id] = true;
//       });
//       setWishlistedMap(newWishMap);
//     }
//   }, [wishlistData]);

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

//   // Helper to extract category id from product object (fallbacks)
//   const extractCategoryId = (product) => {
//     if (!product) return null;
//     if (product.category && typeof product.category === "object") {
//       return (
//         product.category.id ?? product.categoryId ?? product.category_id ?? null
//       );
//     }
//     if (product.category_id) return product.category_id;
//     if (product.categoryId) return product.categoryId;
//     if (product.parent_category_id) return product.parent_category_id;
//     // fallback null -> use 'uncategorized' or 1 as before
//     return null;
//   };

//   // Compare handler - localStorage ilə
//   const handleAddToCompare = async (product) => {
//     if (!product?.id) {
//       console.error("Product ID boşdur");
//       return;
//     }

//     const productId = product.id;
//     const categoryId =
//       extractCategoryId(product) ||
//       product.category_id ||
//       product.categoryId ||
//       1; // Fallback categoryId

//     // Loading state
//     if (addingCompareMap[productId]) return;

//     setAddingCompareMap((prev) => ({
//       ...prev,
//       [productId]: true,
//     }));

//     try {
//       // send full product object so CompareService stores product details locally
//       const result = await addToCompare(product, categoryId);

//       if (result.success) {
//         console.log(`Məhsul ${productId} müqayisəyə əlavə edildi`);
//         // İstəyə bağlı toast notification burada ola bilər
//       } else {
//         console.error("Compare əlavə etmə xətası:", result.error);
//         alert(result.error); // Və ya daha yaxşı notification sistemi
//       }
//     } catch (error) {
//       console.error("Məhsul müqayisəyə əlavə edilərkən xəta:", error);
//       alert("Xəta baş verdi. Yenidən cəhd edin.");
//     } finally {
//       setAddingCompareMap((prev) => {
//         const copy = { ...prev };
//         delete copy[productId];
//         return copy;
//       });
//     }
//   };

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

//   // Modal açma funksiyası - məhsulu seç
//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedProduct(null);
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") closeModal();
//   };

//   // Tabs
//   const tabs = useMemo(
//     () => [
//       { id: "bestselling", label: t?.bestselling || "Best Selling" },
//       { id: "discounted", label: t?.discounted || "Discounted" },
//       { id: "latestproducts", label: t?.latestproducts || "LatestProducts" },
//     ],
//     [t]
//   );

//   const handleTabClick = (tabId) => {
//     if (tabId === selectedTab) return;
//     setLoadingTab(true);
//     setTimeout(() => {
//       setSelectedTab(tabId);
//       setLoadingTab(false);
//     }, 300);
//   };

//   const displayData = useMemo(() => {
//     switch (selectedTab) {
//       case "discounted":
//         return homePageDataDiscountedProducts;
//       case "bestselling":
//         return homePageDataBestSellingProducts;
//       case "latestproducts":
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
//         <OneClickPay
//           t={t}
//           product={selectedProduct}
//           closeModal={closeModal}
//           handleOverlayClick={handleOverlayClick}
//         />
//       )}

//       <div className="productsHeadTitle">
//         {tabs.map((tab) => (
//           <span
//             key={tab.id}
//             onClick={() => handleTabClick(tab.id)}
//             className={tab.id === selectedTab ? "active-tab" : ""}
//             style={{
//               cursor: "pointer",
//               fontWeight: tab.id === selectedTab ? "600" : "normal",
//             }}
//           >
//             {tab.label}
//           </span>
//         ))}
//       </div>

//       {loadingTab && (
//         <div className="tab-loading">
//           <div className="spinner"></div>
//         </div>
//       )}

//       {!loadingTab && (
//         <Swiper
//           slidesPerView={4}
//           spaceBetween={15}
//           loop
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
//             const productId = product?.id;
//             const isWishlisted = !!wishlistedMap[productId];
//             const isAddingFav = !!addingFavMap[productId];
//             const isInCart = !!cartMap[productId];
//             const isAddingCart = !!addingCartMap[productId];
//             const isAddingCompareItem = !!addingCompareMap[productId];
//             const isProductInCompare = isInCompare(productId);

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
//                           {product.old_price &&
//                             product.old_price !== product.price && (
//                               <span className="oldPrice">
//                                 {product.old_price}
//                                 <TbCurrencyManat />
//                               </span>
//                             )}
//                           <span className="newPrice">
//                             {product.price}
//                             <TbCurrencyManat />
//                           </span>
//                         </div>
//                         <div className="wishList">
//                           <button
//                             className={`newScaleBtn ${
//                               isProductInCompare ? "in-compare" : ""
//                             }`}
//                             onClick={() => handleAddToCompare(product)}
//                             disabled={isAddingCompareItem || isProductInCompare}
//                             title={
//                               isProductInCompare
//                                 ? "Artıq müqayisədə"
//                                 : "Müqayisəyə əlavə et"
//                             }
//                             style={isProductInCompare ? { opacity: 1 } : undefined}
//                           >
//                             {isAddingCompareItem ? (
//                               <div className="spinner-small"></div>
//                             ) : (
//                               <NewScale
//                                 className={`newScalePR ${
//                                   isProductInCompare ? "active" : ""
//                                 }`}
//                                 style={
//                                   isProductInCompare
//                                     ? {
//                                         transition: "filter 0.3s ease, transform 0.15s ease",
//                                         filter:
//                                           "invert(15%) sepia(100%) saturate(7490%) hue-rotate(-10deg) brightness(100%) contrast(100%)",
//                                         opacity: 1,
//                                         transform: "scale(1.2)",
//                                         transformOrigin: "center",
//                                         strokeWidth: 1.6,
//                                         width: "20px",
//                                         height: "20px",
//                                       }
//                                     : undefined
//                                 }
//                               />
//                             )}
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
//                         {isAddingCart ? (
//                           <div className="spinner-small"></div>
//                         ) : isInCart ? (
//                           <span>{t?.added || "added"}</span>
//                         ) : (
//                           t?.addtocart || "Add to cart"
//                         )}
//                       </button>
//                       <button
//                         onClick={() => openModal(product)}
//                         className="clickBtn"
//                       >
//                         {t?.oneclickpay || "Bir kliklə al"}
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

//       <style jsx>{`
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
//         .wishlist-btn:disabled,
//         .cartBtn:disabled {
//           cursor: not-allowed;
//           opacity: 0.6;
//         }
//         .newScaleBtn {
//           cursor: pointer;
//         }
//         .newScaleBtn:disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//         }
//         /* override only for compare state so disabled doesn't cause opacity */
//         .newScaleBtn.in-compare:disabled {
//           opacity: 1;
//         }
//         .newScaleBtn.in-compare {
//           background-color: #ec1f27;
//           color: white;
//         }
//         .newScalePR.active {
//           color: #ec1f27;
//           transition: filter 0.3s ease, transform 0.15s ease;
//           filter: invert(15%) sepia(100%) saturate(7490%) hue-rotate(-10deg)
//             brightness(100%) contrast(100%);
//           opacity: 1;
//           transform-origin: center;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePageProductsCard;




// components/HomePageProductsCard.jsx
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

const HomePageProductsCard = ({
  t,
  homePageDataNewProducts = [],
  homePageDataDiscountedProducts = [],
  homePageDataBestSellingProducts = [],
}) => {
  const [selectedTab, setSelectedTab] = useState("bestselling");
  const [loadingTab, setLoadingTab] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Seçilən məhsul
  const [wishlistedMap, setWishlistedMap] = useState({});
  const [cartMap, setCartMap] = useState({});
  const [addingFavMap, setAddingFavMap] = useState({});
  const [addingCartMap, setAddingCartMap] = useState({});
  const [addingCompareMap, setAddingCompareMap] = useState({});

  // Compare hook
  const { addToCompare, isInCompare } = useCompare();

  // Wishlist
  const { data: wishlistData } = useGetFavQuery();
  const [addToFav] = useAddToFavMutation();
  const [removeFromFav] = useRemoveFromFavMutation();

  // Cart
  const { data: cartData } = useGetCartQuery();
  const [addToCart] = useAddToCartMutation();

  // Effects to build maps
  useEffect(() => {
    if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
      const newWishMap = {};
      wishlistData.wishlist.products.forEach((item) => {
        newWishMap[item.id] = true;
      });
      setWishlistedMap(newWishMap);
    }
  }, [wishlistData]);

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

  // Helper to extract category id from product object (fallbacks)
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
    // fallback null -> use 'uncategorized' or 1 as before
    return null;
  };

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
      // send full product object so CompareService stores product details locally
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

  const handleToggleWishlist = async (productId) => {
    if (addingFavMap[productId]) return;
    const currentlyFav = !!wishlistedMap[productId];
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
    } catch (error) {
      console.error("Wishlist toggle error:", error);
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

  // Modal açma funksiyası - məhsulu seç
  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") closeModal();
  };

  // Tabs
  const tabs = useMemo(
    () => [
      { id: "bestselling", label: t?.bestselling || "Best Selling" },
      { id: "discounted", label: t?.discounted || "Discounted" },
      { id: "latestproducts", label: t?.latestproducts || "LatestProducts" },
    ],
    [t]
  );

  const handleTabClick = (tabId) => {
    if (tabId === selectedTab) return;
    setLoadingTab(true);
    setTimeout(() => {
      setSelectedTab(tabId);
      setLoadingTab(false);
    }, 300);
  };

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

  return (
    <div className="container">
      {showModal && (
        <OneClickPay
          t={t}
          product={selectedProduct}
          closeModal={closeModal}
          handleOverlayClick={handleOverlayClick}
        />
      )}

      <div className="productsHeadTitle">
        {tabs.map((tab) => (
          <span
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={tab.id === selectedTab ? "active-tab" : ""}
            style={{
              cursor: "pointer",
              fontWeight: tab.id === selectedTab ? "600" : "normal",
            }}
          >
            {tab.label}
          </span>
        ))}
      </div>

      {loadingTab && (
        <div className="tab-loading">
          <div className="spinner"></div>
        </div>
      )}

      {!loadingTab && (
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          loop
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
            const productId = product?.id;
            const isWishlisted = !!wishlistedMap[productId];
            const isAddingFav = !!addingFavMap[productId];
            const isInCart = !!cartMap[productId];
            const isAddingCart = !!addingCartMap[productId];
            const isAddingCompareItem = !!addingCompareMap[productId];
            const isProductInCompare = isInCompare(productId);

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
                            onClick={() => handleAddToCompare(product)}
                            disabled={isAddingCompareItem || isProductInCompare}
                            title={
                              isProductInCompare
                                ? "Artıq müqayisədə"
                                : "Müqayisəyə əlavə et"
                            }
                            style={
                              isProductInCompare ? { opacity: 1 } : undefined
                            }
                          >
                            {isAddingCompareItem ? (
                              <div className="spinner-small"></div>
                            ) : (
                              <NewScale
                                className={`newScalePR ${
                                  isProductInCompare ? "active" : ""
                                }`}
                                style={
                                  isProductInCompare
                                    ? {
                                        transition:
                                          "filter 0.3s ease, transform 0.15s ease",
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
                      {Number(product.in_stock) === 0 ? (
                        <div className="outOfStockMessage">
                          <button>
                            <MdOutlineNotificationsActive className="comingSoonIcon" />
                            <span>{t?.comingsoon || "Gələndə bildir"}</span>
                          </button>
                        </div>
                      ) : (
                        <>
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
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="my-custom-pagination"></div>
        </Swiper>
      )}

      <style jsx>{`
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
        .wishlist-btn:disabled {
          border: none;
        }
        .cartBtn:disabled {
          cursor: not-allowed;
          border: 1px solid #0CED4C;
          background: #fff;
          span{
          color: #000;
          }
        }
        .newScaleBtn {
          cursor: pointer;
        }
        .newScaleBtn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
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

export default HomePageProductsCard;
