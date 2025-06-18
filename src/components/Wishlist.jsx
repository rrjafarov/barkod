// "use client";
// import React, { useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { TbCurrencyManat } from "react-icons/tb";
// // import NewScale from "../../../public/icons/newScale.svg";
// import NewScale from "../../public/icons/newScale.svg";

// import NewWishList from "../../public/icons/newWishlist.svg";

// import {
//   MdKeyboardDoubleArrowRight,
//   MdKeyboardArrowRight,
// } from "react-icons/md";

// import { AiFillHeart } from "react-icons/ai";

// const Wishlist = () => {
//   const [showModal, setShowModal] = useState(false);
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };

//   return (
//     <div className="container">
//       <div className="breadCrumb">
//         <Link href="/">
//           <span>Ana Səhifə</span>
//         </Link>
//         <strong>
//           <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//         </strong>
//         <span className="lastChildBread">Seçilmişlər</span>
//       </div>

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

//       <div className="wishlistPage">
//         <span className="wishTitle">Seçilmişlər</span>
//         <div className="ptop row">
//           <div className="xl-3 lg-4 md-4 sm-6">
//             <div className="secondHomePageProductsCard">
//               <div className="secondHomePageProductsCardDiv">
//                 <Link href="/products/id" className="blockCardLink">
//                   <div className="secondHomePageProductsCardImage">
//                     <Image
//                       src="/images/iphone16pro.png"
//                       alt="sony"
//                       width={200}
//                       height={200}
//                     />
//                   </div>
//                 </Link>
//                 <div className="secondHomePageProductsCardContent">
//                   <span>iPhone 16 Pro Max 256 GB Black Titanium</span>
//                   <div className="discount">
//                     <span>
//                       -350 <TbCurrencyManat />
//                     </span>
//                   </div>
//                   <div className="cardBottomContent">
//                     <div className="price">
//                       <span className="oldPrice">
//                         3000,00
//                         <TbCurrencyManat />
//                       </span>
//                       <span className="newPrice">
//                         2400,00
//                         <TbCurrencyManat />
//                       </span>
//                     </div>

//                     <div className="wishList">
//                       <button>
//                         <NewScale className="newScalePR" />
//                       </button>
//                       <button>
//                         {/* <NewWishList className="newWishlistPR" /> */}
//                         <AiFillHeart className="wishlistFillIcon" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="addToCartClick">
//                 <div className="addToCartClickItem">
//                   <button className="cartBtn">Səbətə at</button>
//                   <button onClick={openModal} className="clickBtn">
//                     Bir Klikle Al
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Wishlist;










// // ! 18.06.25
// // src/components/Wishlist.jsx
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../public/icons/newScale.svg";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { AiFillHeart } from "react-icons/ai";
// import {
//   useGetFavQuery,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";

// const Wishlist = () => {
//   // RTK Query ile wishlist data'sını çəkmək
//   const { data: favData, isLoading, isError } = useGetFavQuery();
//   const [removeFromFav] = useRemoveFromFavMutation();

//   // Modal state (əgər “Bir kliklə al” modalı lazımdırsa istifadə edərsən)
//   const [showModal, setShowModal] = useState(false);
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };

//   // Backend-dən gələn struktur: favData?.wishlist?.products içində array
//   const products = favData?.wishlist?.products || [];

//   // İstəsən loading/hata göstərə bilərsən, amma minimal deyilsə bunları da saxla:
//   if (isLoading) {
//     return (
//       <div className="container">
//         <p></p>
//       </div>
//     );
//   }
//   if (isError) {
//     return (
//       <div className="container">
//         <p>Favorit məhsullar alınarkən xəta baş verdi.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container">
//       {/* Breadcrumb */}
//       <div className="breadCrumb">
//         <Link href="/">
//           <span>Ana Səhifə</span>
//         </Link>
//         <strong>
//           <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//         </strong>
//         <span className="lastChildBread">Seçilmişlər</span>
//       </div>

//       {/* Modal (əgər lazım deyilsə bu bloku olduğu kimi saxla və ya çıxar) */}
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

//       <div className="wishlistPage">
//         <span className="wishTitle">Seçilmişlər</span>
//         <div className="ptop row">
//           {products.length === 0 ? (
//             <p>Seçilmişlər siyahınız boşdur.</p>
//           ) : (
//             products.map((product) => {
//               const productId = product.id;
//               // Backend-dən gələn property’lərə görə uyğunlaşdır:
//               const name = product.name;
//               const imageUrl = product.image; // tam URL və ya path olmalıdır
//               const oldPrice = product.old_price; // varsa
//               const newPrice = product.price;
//               const discPercent = product.disc_percent; // varsa

//               return (
//                 <div className="xl-3 lg-4 md-4 sm-6" key={productId}>
//                   <div className="secondHomePageProductsCard">
//                     <div className="secondHomePageProductsCardDiv">
//                       <Link
//                         href={`/products/${product.slug}`}
//                         className="blockCardLink"
//                       >
//                         <div className="secondHomePageProductsCardImage">
//                           {imageUrl && (
//                             <Image
//                               src={imageUrl}
//                               alt={name}
//                               width={200}
//                               height={200}
//                             />
//                           )}
//                         </div>
//                       </Link>
//                       <div className="secondHomePageProductsCardContent">
//                         <span>{name}</span>
//                         {discPercent != null && (
//                           <div className="discount">
//                             <span>{discPercent} %</span>
//                           </div>
//                         )}
//                         <div className="cardBottomContent">
//                           <div className="price">
//                             {oldPrice != null && oldPrice !== newPrice && (
//                               <span className="oldPrice">
//                                 {oldPrice}
//                                 <TbCurrencyManat />
//                               </span>
//                             )}
//                             <span className="newPrice">
//                               {newPrice}
//                               <TbCurrencyManat />
//                             </span>
//                           </div>

//                           <div className="wishList">
//                             <button>
//                               <NewScale className="newScalePR" />
//                             </button>
//                             {/* Heart ikonu: avtomatik dolu görünür, tıklayınca remove əməliyyatı */}
//                             <button
//                               className="wishlist-btn"
//                               onClick={() => {
//                                 if (productId != null) {
//                                   removeFromFav(productId);
//                                 }
//                               }}
//                             >
//                               <AiFillHeart className="wishlistFillIcon" />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="addToCartClick">
//                       <div className="addToCartClickItem">
//                         <button className="cartBtn">Səbətə at</button>
//                         <button onClick={openModal} className="clickBtn">
//                           Bir Kliklə Al
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>

//       {/* Stil nümunəsi; mövcud SCSS fayllarına əlavə et */}
//       <style jsx>{`
//         .wishlistPage .wishTitle {
//           font-size: 1.5rem;
//           font-weight: bold;
//           margin-bottom: 1rem;
//           display: block;
//         }
//         .ptop.row {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 1rem;
//         }
//         .secondHomePageProductsCard {
//           /* Mevcut stilin varsa onu saxla */
//         }
//         .wishlist-btn {
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 0;
//         }
//         .wishlistFillIcon {
//           color: red; /* ya mevcut stildə istənilən rəng */
//           font-size: 1.2rem;
//         }
//         /* Əlavə mövcud stil qaydalarınızı burada saxlayın */
//       `}</style>
//     </div>
//   );
// };

// export default Wishlist;

// ! 18.06.25














// src/components/Wishlist.jsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { TbCurrencyManat } from "react-icons/tb";
import NewScale from "../../public/icons/newScale.svg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

// RTK Query hook’ları
import {
  useGetFavQuery,
  useRemoveFromFavMutation,
} from "@/redux/wishlistService";
import {
  useGetCartQuery,
  useAddToCartMutation,
} from "@/redux/cartService";

const Wishlist = () => {
  // Wishlist data
  const { data: favData, isLoading: isLoadingFav, isError: isErrorFav } = useGetFavQuery();
  const [removeFromFav] = useRemoveFromFavMutation();

  // Cart data
  const { data: cartData, isLoading: isLoadingCart, isError: isErrorCart } = useGetCartQuery();
  const [addToCart] = useAddToCartMutation();

  // Local state: productId -> boolean map
  const [cartMap, setCartMap] = useState({}); // sepette mi?
  const [addingCartMap, setAddingCartMap] = useState({}); // sepete ekleme işlemi devam mı?

  // Modal state (əgər “Bir kliklə al” modalı lazımdırsa istifadə edərsən)
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  // Wishlist məhsulları array
  const products = favData?.wishlist?.products || [];

  // Sync cartMap whenever cartData dəyişir
  useEffect(() => {
    if (cartData && Array.isArray(cartData.cart?.cart_products)) {
      const newMap = {};
      cartData.cart.cart_products.forEach((cartItem) => {
        const pid = cartItem.product?.id;
        if (pid != null) {
          newMap[pid] = true;
        }
      });
      setCartMap(newMap);
    }
  }, [cartData]);

  // Add to cart handler (optimistic update + rollback)
  const handleAddToCart = async (productId) => {
    // Əgər artıq sepetteyse və ya işlem devam ediyorsa engelle
    if (cartMap[productId] || addingCartMap[productId]) return;

    // Optimistic update: map-də işarələyirik
    setCartMap((prev) => ({ ...prev, [productId]: true }));
    setAddingCartMap((prev) => ({ ...prev, [productId]: true }));
    try {
      await addToCart({ productId, quantity: 1 }).unwrap();
      // Uğur: RTK Query invalidation/refetch ilə cartData yenilənəcək, useEffect də sync edəcək
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

  // Loading/Error minimal: isLoadingFav və isErrorFav üçün
  if (isLoadingFav) {
    return (
      <div className="container">
        {/* Minimal empty yüklenir */}
        <p></p>
      </div>
    );
  }
  if (isErrorFav) {
    return (
      <div className="container">
        <p>Favorit məhsullar alınarkən xəta baş verdi.</p>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Breadcrumb */}
      <div className="breadCrumb">
        <Link href="/">
          <span>Ana Səhifə</span>
        </Link>
        <strong>
          <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
        </strong>
        <span className="lastChildBread">Seçilmişlər</span>
      </div>

      {/* Modal bölümü (ehtiyac varsa) */}
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

      <div className="wishlistPage">
        <span className="wishTitle">Seçilmişlər</span>
        <div className="row">
          {products.length === 0 ? (
            <p>Seçilmişlər siyahınız boşdur.</p>
          ) : (
            products.map((product) => {
              const productId = product.id;
              const name = product.name;
              const imageUrl = product.image;
              const oldPrice = product.old_price;
              const newPrice = product.price;
              const discPercent = product.disc_percent;
              // Cart state for this product
              const isInCart = !!cartMap[productId];
              const isAddingCart = !!addingCartMap[productId];

              return (
                <div className="xl-3 lg-4 md-4 sm-6" key={productId}>
                  <div className="secondHomePageProductsCard">
                    <div className="secondHomePageProductsCardDiv">
                      <Link
                        href={`/products/${product.slug}`}
                        className="blockCardLink"
                      >
                        <div className="secondHomePageProductsCardImage">
                          {imageUrl && (
                            <Image
                              src={imageUrl}
                              alt={name}
                              width={200}
                              height={200}
                            />
                          )}
                        </div>
                      </Link>
                      <div className="secondHomePageProductsCardContent">
                        <span>{name}</span>
                        {discPercent != null && (
                          <div className="discount">
                            <span>{discPercent} %</span>
                          </div>
                        )}
                        <div className="cardBottomContent">
                          <div className="price">
                            {oldPrice != null && oldPrice !== newPrice && (
                              <span className="oldPrice">
                                {oldPrice}
                                <TbCurrencyManat />
                              </span>
                            )}
                            <span className="newPrice">
                              {newPrice}
                              <TbCurrencyManat />
                            </span>
                          </div>

                          <div className="wishList">
                            <button>
                              <NewScale className="newScalePR" />
                            </button>
                            {/* Heart ikonu: dolu, tıklayınca remove */}
                            <button
                              className="wishlist-btn"
                              onClick={() => {
                                if (productId != null) {
                                  removeFromFav(productId);
                                }
                              }}
                            >
                              <AiFillHeart className="wishlistFillIcon" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="addToCartClick">
                      <div className="addToCartClickItem">
                        {/* Add to Cart butonu aktiv */}
                        <button
                          className="cartBtn"
                          onClick={() => handleAddToCart(productId)}
                          disabled={isAddingCart || isInCart}
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
                          Bir Kliklə Al
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Stil nümunəsi; mövcud SCSS fayllarına əlavə et */}
      <style jsx>{`
        .wishlistPage .wishTitle {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          display: block;
        }
        .ptop.row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .secondHomePageProductsCard {
          /* Mevcut stilin varsa onu saxla */
        }
        .wishlist-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .wishlistFillIcon {
          color: red; /* ya mevcut stildə istənilən rəng */
          font-size: 1.2rem;
        }
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
        /* Əlavə mövcud stil qaydalarınızı burada saxlayın */
      `}</style>
    </div>
  );
};

export default Wishlist;


