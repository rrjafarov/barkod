"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { TbCurrencyManat } from "react-icons/tb";
import NewScale from "../../public/icons/newScale.svg";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { CompareService } from "@/lib/compareService";

import {
 useGetFavQuery,
 useAddToFavMutation,
 useRemoveFromFavMutation,
} from "@/redux/wishlistService";
import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";
import { useCompare } from "@/hooks/useCompare";
import OneClickPay from "./Header/OneClickPay";

export default function ComparePage({ t }) {
 const [compareData, setCompareData] = useState({
   products: [],
   categories: [],
 });
 const [selectedCategoryId, setSelectedCategoryId] = useState(null);
 const [removingProducts, setRemovingProducts] = useState(new Set());
 const [isClearing, setIsClearing] = useState(false);
 const [showModal, setShowModal] = useState(false);
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

 // Fetch compare data from localStorage
 const fetchCompareData = () => {
   const data = CompareService.getAllProducts();
   setCompareData(data);

   if (data.categories.length > 0 && !selectedCategoryId) {
     setSelectedCategoryId(Number(data.categories[0].id));
   }
 };

 useEffect(() => {
   fetchCompareData();

   const handler = () => fetchCompareData();
   window.addEventListener("compare_updated", handler);
   return () => window.removeEventListener("compare_updated", handler);
 }, []);

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
     1;

   if (addingCompareMap[productId]) return;

   setAddingCompareMap((prev) => ({
     ...prev,
     [productId]: true,
   }));

   try {
     const result = await addToCompare(product, categoryId);

     if (result.success) {
       console.log(`Məhsul ${productId} müqayisəyə əlavə edildi`);
     } else {
       console.error("Compare əlavə etmə xətası:", result.error);
       alert(result.error);
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

 const handleRemoveFromCompare = async (productId) => {
   if (removingProducts.has(productId)) return;
   setRemovingProducts((prev) => new Set(prev).add(productId));

   try {
     CompareService.removeFromCompare(productId);
   } catch (error) {
     console.error("Remove from compare error:", error);
   } finally {
     setRemovingProducts((prev) => {
       const newSet = new Set(prev);
       newSet.delete(productId);
       return newSet;
     });
   }
 };

 const handleClearCompare = () => {
   if (isClearing) return;
   setIsClearing(true);
   try {
     CompareService.clearCompareList();
   } catch (error) {
     console.error("Clear compare error:", error);
   } finally {
     setIsClearing(false);
   }
 };

 const openModal = () => setShowModal(true);
 const closeModal = () => setShowModal(false);
 const handleOverlayClick = (e) => {
   if (e.target.className === "modal-overlay") closeModal();
 };

 const categories = compareData.categories || [];
 const allProducts = compareData.products || [];
 const displayedProducts = allProducts.filter((p) => {
   if (!selectedCategoryId) return true;
   return p.categories?.some(
     (c) => Number(c.id) === Number(selectedCategoryId)
   );
 });
 console.log("Compare məhsullar:", allProducts);

 // Boş-state: eynən Wishlist.jsx-də olduğu kimi **tam ortada**
 if (displayedProducts.length === 0) {
   return (
     <div
       className="container"
       style={{
         minHeight: "60vh",
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
       }}
     >
       <div className="cartTitleEmpty" style={{ textAlign: "center" }}>
         <p className="cartTitleEmptyPop">
           {t?.comparenotproduct || "Müqayisə ediləcək məhsul yoxdur"}
         </p>
         <Link href="/">
           <button
             className="officialPaymentBtn"
             style={{ marginTop: "1rem" }}
           >
             {t?.compareshowproduct || "Məhsullara bax"}
           </button>
         </Link>
       </div>
     </div>
   );
 }

 return (
   <div className="container">
     {showModal && (
       <OneClickPay
         t={t}
         closeModal={closeModal}
         handleOverlayClick={handleOverlayClick}
       />
     )}

     <div className="breadCrumb breadCrumbsHideMobile">
       <Link href="/">
         <span>{t?.homePageLabel || "Ana Sayfa"}</span>
       </Link>
       <strong>
         <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
       </strong>
       <span className="lastChildBread">{t?.compareLabel || "Müqayisə"}</span>
     </div>

     <div className="compare-wrapper">
       <div className="compare-left">
         <h4>{t?.categories || "Kateqoriyalar"}</h4>
         <ul>
           {categories.map((cat) => (
             <li
               key={cat.id}
               onClick={() => setSelectedCategoryId(Number(cat.id))}
               style={{
                 cursor: "pointer",
                 fontWeight:
                   selectedCategoryId === Number(cat.id) ? "600" : "normal",
                 color:
                   selectedCategoryId === Number(cat.id) ? "#ec1f27" : "#333",
                 marginBottom: "0.5rem",
               }}
             >
               {cat.name} (
               {
                 allProducts.filter((p) =>
                   p.categories?.some((c) => Number(c.id) === Number(cat.id))
                 ).length
               }
               )
             </li>
           ))}
         </ul>
         <button
           onClick={handleClearCompare}
           disabled={isClearing}
           style={{
             background: isClearing ? "#ccc" : "#ec1f27",
             color: "#fff",
             border: "none",
             cursor: isClearing ? "not-allowed" : "pointer",
           }}
         >
           {isClearing ? "Təmizlənir..." : t?.clearall || "Hamısını sil"}
         </button>
       </div>

       <div className="compare-right">
         <div className="products-grid">
           {displayedProducts.map((product) => {
             const productId = product?.id;
             const isWishlisted = !!wishlistedMap[productId];
             const isAddingFav = !!addingFavMap[productId];
             const isInCart = !!cartMap[productId];
             const isAddingCart = !!addingCartMap[productId];
             const isAddingCompareItem = !!addingCompareMap[productId];
             const isProductInCompare = isInCompare(productId);

             return (
               <div key={productId} className="productCardSlide">
                 <div className="secondHomePageProductsCard">
                   <div className="compare-remove-btn">
                     <button
                       onClick={() => handleRemoveFromCompare(productId)}
                       className="remove-from-compare"
                       disabled={removingProducts.has(productId)}
                       title={t?.removeFromCompare || "Müqayisədən çıxar"}
                     >
                       {removingProducts.has(productId) ? (
                         <div className="spinner-small"></div>
                       ) : (
                         <IoCloseSharp />
                       )}
                     </button>
                   </div>

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
                             disabled={
                               isAddingCompareItem || isProductInCompare
                             }
                             title={
                               isProductInCompare
                                 ? "Artıq müqayisədə"
                                 : "Müqayisəyə əlavə et"
                             }
                           >
                             {isAddingCompareItem ? (
                               <div className="spinner-small"></div>
                             ) : (
                               <NewScale
                                 className={`newScalePR ${
                                   isProductInCompare ? "active" : ""
                                 }`}
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
                       <button onClick={openModal} className="clickBtn">
                         {t?.oneclickpay || "Bir kliklə al"}
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
             );
           })}
         </div>
       </div>
     </div>

     <style jsx>{`
       .compare-wrapper {
         display: flex;
         gap: 2rem;
         margin: 5rem 0;
       }
       .compare-left {
         width: 300px;
       }
       .compare-right {
         flex: 1;
       }
       .products-grid {
         display: grid;
         grid-template-columns: repeat(auto-fill, minmax(26.5rem, 1fr));
         gap: 2rem;
       }
       .productCardSlide {
         width: 100%;
       }

       /* Compare remove button (X) - yalnız bu burada qalır */
       .compare-remove-btn {
         position: absolute;
         top: 15px;
         right: 15px;
         z-index: 1000;
       }
       .remove-from-compare {
         background: rgba(255, 255, 255, 0.95);
         border: 1px solid #ddd;
         border-radius: 50%;
         width: 32px;
         height: 32px;
         display: flex;
         align-items: center;
         justify-content: center;
         cursor: pointer;
         color: #ec1f27;
         transition: all 0.3s ease;
         box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
         font-size: 18px;
       }
       .remove-from-compare:hover {
         background: #ec1f27;
         color: white;
         transform: scale(1.1);
       }
       .remove-from-compare:disabled {
         cursor: not-allowed;
         opacity: 0.6;
         transform: none;
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

       @media (max-width: 768px) {
         .compare-wrapper {
           flex-direction: column;
         }
         .compare-left {
           width: 100%;
         }
         .products-grid {
           grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
         }
       }
     `}</style>
   </div>
 );
}
