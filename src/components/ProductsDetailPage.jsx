// "use client";
// import Link from "next/link";
// import Form from "next/form";
// import React, { useState, useEffect } from "react";
// import {
//   MdKeyboardDoubleArrowRight,
//   MdKeyboardArrowRight,
// } from "react-icons/md";
// import ProductsDPFancybox from "./ProductsDPFancybox";
// import { Rating, Box } from "@mui/material";
// import { Progress, Row, Col, Typography } from "antd";
// import NewScale from "../../public/icons/newScale.svg";
// import NewWishList from "../../public/icons/newWishlist.svg";
// import BlackBasket from "../../public/icons/blackBasket.svg";
// import { IoCartOutline } from "react-icons/io5";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";
// import { TbCurrencyManat } from "react-icons/tb";

// // RTK Query hook'ları
// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";
// import OneClickPay from "./Header/OneClickPay";

// const ProductsDetailPage = ({ product, t }) => {
//   const productDetail = product?.product_detail || [];
//   const productBreadCrumbs = product?.bread_crumbs || [];
//   const attributes = product?.product_detail?.attributes || [];
//   const ratingValue = productDetail.raiting ?? 0;
//   const [value, setValue] = useState(2);
//   const [activeTab, setActiveTab] = useState("tech");
//   const [showModal, setShowModal] = useState(false);
//   const installments = productDetail.installments || [];

//   // track which installment month is selected
//   const [selectedMonth, setSelectedMonth] = useState(
//     installments[0]?.month || null
//   );

//   // RTK Query states
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [isInCart, setIsInCart] = useState(false);
//   const [isAddingFav, setIsAddingFav] = useState(false);
//   const [isAddingCart, setIsAddingCart] = useState(false);

//   // RTK Query hook'ları
//   const { data: wishlistData, isLoading: isLoadingWishlistData } =
//     useGetFavQuery();
//   const [addToFav] = useAddToFavMutation();
//   const [removeFromFav] = useRemoveFromFavMutation();

//   const { data: cartData, isLoading: isLoadingCartData } = useGetCartQuery();
//   const [addToCart] = useAddToCartMutation();

//   const productId = productDetail.id;

//   // Modal functions
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };

//   // Wishlist durumunu sync et
//   useEffect(() => {
//     if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
//       const isProductInWishlist = wishlistData.wishlist.products.some(
//         (item) => item.id === productId
//       );
//       setIsWishlisted(isProductInWishlist);
//     }
//   }, [wishlistData, productId]);

//   // Cart durumunu sync et
//   useEffect(() => {
//     if (cartData && Array.isArray(cartData.cart?.cart_products)) {
//       const isProductInCart = cartData.cart.cart_products.some(
//         (cartItem) => cartItem.product?.id === productId
//       );
//       setIsInCart(isProductInCart);
//     }
//   }, [cartData, productId]);

//   // Wishlist toggle handler
//   const toggleWishlist = async () => {
//     if (isAddingFav) return;

//     const currentlyFav = isWishlisted;

//     // Optimistic update
//     setIsWishlisted(!currentlyFav);
//     setIsAddingFav(true);

//     try {
//       if (currentlyFav) {
//         await removeFromFav(productId).unwrap();
//       } else {
//         await addToFav(productId).unwrap();
//       }
//     } catch (error) {
//       console.error("Wishlist toggle error:", error);
//       // Rollback
//       setIsWishlisted(currentlyFav);
//     } finally {
//       setIsAddingFav(false);
//     }
//   };

//   // Add to cart handler
//   const handleAddToCart = async () => {
//     if (isInCart || isAddingCart) return;

//     // Optimistic update
//     setIsInCart(true);
//     setIsAddingCart(true);

//     try {
//       await addToCart({ productId, quantity: 1 }).unwrap();
//     } catch (error) {
//       console.error("Add to cart error:", error);
//       // Rollback
//       setIsInCart(false);
//     } finally {
//       setIsAddingCart(false);
//     }
//   };

//   // find the current installment object
//   const currentInst =
//     installments.find((inst) => inst.month === selectedMonth) || {};

//   return (
//     <div id="productsDetailPage">
//       <div className="container">
//         {showModal && (
//           <OneClickPay
//             t={t}
//             closeModal={closeModal}
//             handleOverlayClick={handleOverlayClick}
//           />
//         )}

//         <div
//           className="breadCrumb breadCrumbsHideMobile"
//           id="productDPbreadCrumbs"
//         >
//           {productBreadCrumbs.map((item, index) => {
//             const isFirst = index === 0;
//             const isLast = index === productBreadCrumbs.length - 1;

//             return (
//               <React.Fragment key={index}>
//                 {item.clickable === "true" ? (
//                   <Link href={`/products?cat_slug=${item.slug}`}>
//                     <span>{item.name}</span>
//                   </Link>
//                 ) : (
//                   <span className="lastChildBread">{item.name}</span>
//                 )}

//                 {!isLast && (
//                   <strong>
//                     {isFirst ? (
//                       <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//                     ) : (
//                       <MdKeyboardArrowRight className="breadCrumpIcon" />
//                     )}
//                   </strong>
//                 )}
//               </React.Fragment>
//             );
//           })}
//         </div>

//         <div className="row">
//           <div className="xl-6 lg-6 md-6 sm-12">
//             <ProductsDPFancybox productDetail={productDetail} />
//           </div>

//           <div className="xl-6 lg-6 md-6 sm-12">
//             <div className="productDPDetail">
//               <div className="productDPTitle">
//                 <h2>{productDetail.name}</h2>
//                 <div className="productDPRating">
//                   <Box className="productDPRatingBox">
//                     <Rating
//                       name="star-rating"
//                       value={ratingValue}
//                       onChange={(e, newValue) => setValue(newValue)}
//                     />
//                   </Box>
//                   <p>({ratingValue})</p>
//                 </div>
//               </div>
//               <span className="depo">
//                 {t?.aviableproducts || "Məhsul Mövcuddur"}{" "}
//               </span>

//               <div className="productDPPrices">
//                 <span className="productDPOldPrice">
//                   {productDetail.old_price} <TbCurrencyManat />
//                 </span>
//                 <span className="productDPNewPrice">
//                   {productDetail.price} <TbCurrencyManat />
//                 </span>
//               </div>
//               <div className="productsDPButtons">
//                 <button
//                   className="productsDPaddToCart"
//                   onClick={handleAddToCart}
//                   disabled={isAddingCart || isInCart}
//                 >
//                   {isAddingCart ? (
//                     <div className="spinner-small"></div>
//                   ) : isInCart ? (
//                     <>{t?.added || "Əlavə edildi"}</>
//                   ) : (
//                     <>
//                       <IoCartOutline /> {t?.addtocart}
//                     </>
//                   )}
//                 </button>

//                 <button onClick={openModal} className="productsDPbuyNow">
//                   {t?.oneclickpay}
//                 </button>

//                 <button
//                   onClick={toggleWishlist}
//                   className="wishlist-btn productsDPwishlist"
//                   disabled={isAddingFav}
//                 >
//                   {isWishlisted ? (
//                     <FaHeart className="productsDPwishIcon newWishlistPR active" />
//                   ) : (
//                     <FiHeart className="productsDPwishIcon newWishlistPR" />
//                   )}
//                 </button>

//                 <button className="productsDPscale">
//                   <NewScale className="productsDPwishIcon" />
//                 </button>
//               </div>

//               <div className="paymentCalculator">
//                 {Array.isArray(installments) && installments.length > 0 && (
//                   <>
//                     <div className="paymentCalculatorTitle">
//                       <span>
//                         {t?.productdetailparofpart || "Hissə-hissə ödə"}
//                       </span>
//                       <strong>
//                         *{" "}
//                         {t?.productdetailterms ||
//                           "Şərtlər endrimsiz qiymətə tətbiq olunur"}
//                       </strong>
//                     </div>

//                     <div className="paymentCalculatorButtons">
//                       {installments.map((inst) => (
//                         <div
//                           key={inst.month}
//                           className="paymentCalculatorButton"
//                         >
//                           <p>0%</p>
//                           <button
//                             onClick={() => setSelectedMonth(inst.month)}
//                             style={{
//                               border:
//                                 selectedMonth === inst.month
//                                   ? "2px solid black"
//                                   : "1px solid #ccc",
//                               padding: 4,
//                             }}
//                           >
//                             {inst.month} {t?.moon}
//                           </button>
//                         </div>
//                       ))}
//                       <div className="monthPayment">
//                         <span>
//                           {t?.productdetailmonthpay || "Aylıq Ödəniş"}
//                         </span>
//                         <strong>
//                           {currentInst.monthly_amount?.toFixed(2)}{" "}
//                           <TbCurrencyManat />
//                         </strong>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <section>
//           <div className="productsDPTechnicalSection">
//             <div className="productsDPTechnicalSectionTitle">
//               <button onClick={() => setActiveTab("tech")}>
//                 {t?.spesification || "Texniki Xüsusiyyətlər"}
//               </button>
//               <button onClick={() => setActiveTab("desc")}>
//                 {t?.destcription || "Təsvir"}
//               </button>
//               <button onClick={() => setActiveTab("reviews")}>
//                 {t?.comment || "Rəylər"}
//               </button>
//             </div>

//             {activeTab === "tech" && (
//               <div className="technicalDetailsContent">
//                 <div className="technicalContentAll">
//                   {attributes.map((attribute) => (
//                     <div key={attribute.id} className="technicalContent">
//                       <span className="techContentLeft">{attribute.name}</span>
//                       <span className="techContentRight">
//                         {attribute.value}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeTab === "desc" && (
//               <div className="descriptionContent">
//                 <p>Məhsulun təsviri burada göstəriləcək.</p>
//               </div>
//             )}

//             {activeTab === "reviews" && (
//               <div className="productsDPComments">
//                 <span>{t?.incoment || "Rəy Bildir"}</span>
//                 <div className="commentsFormSection">
//                   <Form className="formComment" action="/search">
//                     <label htmlFor="">
//                       {t?.namesurname || "Adınız Soyadınız"}
//                     </label>
//                     <input type="text" placeholder="..." />
//                     <label htmlFor="">{t?.incoment || "Rəy Bildir"}</label>
//                     <textarea
//                       placeholder="..."
//                       name="comment"
//                       id="commentArea"
//                     ></textarea>
//                     <label htmlFor="">{t?.rate}:</label>
//                     <div className="commentsRating">
//                       <Box className="commentsRatingBox">
//                         <Rating
//                           name="star-rating"
//                           value={value}
//                           onChange={(e, newValue) => setValue(newValue)}
//                         />
//                       </Box>
//                     </div>
//                     <button className="submitCommentBTN" type="submit">
//                       {t?.send || "Gonder"}
//                     </button>
//                   </Form>
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>
//       </div>

//       {/* Styling */}
//       <style jsx>{`
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
//         .productsDPaddToCart:disabled,
//         .wishlist-btn:disabled {
//           cursor: not-allowed;
//           opacity: 0.6;
//         }
//         .productsDPaddToCart {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           justify-content: center;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProductsDetailPage;




















































"use client";
import Link from "next/link";
import Form from "next/form";
import React, { useState, useEffect } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";
import ProductsDPFancybox from "./ProductsDPFancybox";
import { Rating, Box } from "@mui/material";
import { Progress, Row, Col, Typography } from "antd";
import NewScale from "../../public/icons/newScale.svg";
import NewWishList from "../../public/icons/newWishlist.svg";
import BlackBasket from "../../public/icons/blackBasket.svg";
import { IoCartOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { TbCurrencyManat } from "react-icons/tb";

// RTK Query hook'ları
import {
  useGetFavQuery,
  useAddToFavMutation,
  useRemoveFromFavMutation,
} from "@/redux/wishlistService";
import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";
import OneClickPay from "./Header/OneClickPay";
import { useCompare } from "@/hooks/useCompare";

const ProductsDetailPage = ({ product, t }) => {
  const productDetail = product?.product_detail || [];
  const productBreadCrumbs = product?.bread_crumbs || [];
  const attributes = product?.product_detail?.attributes || [];
  const ratingValue = productDetail.raiting ?? 0;
  const [value, setValue] = useState(2);
  const [activeTab, setActiveTab] = useState("tech");
  const [showModal, setShowModal] = useState(false);
  const installments = productDetail.installments || [];

  // track which installment month is selected
  const [selectedMonth, setSelectedMonth] = useState(
    installments[0]?.month || null
  );

  // RTK Query states
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [isAddingFav, setIsAddingFav] = useState(false);
  const [isAddingCart, setIsAddingCart] = useState(false);

  // Compare states
  const { addToCompare, isInCompare } = useCompare();
  const [isAddingCompare, setIsAddingCompare] = useState(false);

  // Comment form states
  const [commentForm, setCommentForm] = useState({
    full_name: "",
    comment: "",
    rating: 5,
  });
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [commentSuccess, setCommentSuccess] = useState(false);
  const [commentError, setCommentError] = useState("");

  // RTK Query hook'ları
  const { data: wishlistData, isLoading: isLoadingWishlistData } =
    useGetFavQuery();
  const [addToFav] = useAddToFavMutation();
  const [removeFromFav] = useRemoveFromFavMutation();

  const { data: cartData, isLoading: isLoadingCartData } = useGetCartQuery();
  const [addToCart] = useAddToCartMutation();

  const productId = productDetail.id;

  // One Click Pay state
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Modal functions
  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  // Handle comment form input changes
  const handleCommentInputChange = (e) => {
    const { name, value } = e.target;
    setCommentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle rating change
  const handleRatingChange = (event, newValue) => {
    setCommentForm((prev) => ({
      ...prev,
      rating: newValue,
    }));
  };

  // Submit comment function
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!commentForm.full_name.trim()) {
      setCommentError(t?.errormessageuser);
      return;
    }

    if (!commentForm.comment.trim()) {
      setCommentError(t?.errormessage);
      return;
    }

    if (
      !commentForm.rating ||
      commentForm.rating < 1 ||
      commentForm.rating > 5
    ) {
      setCommentError(t?.errormessagerating);
      return;
    }

    setIsSubmittingComment(true);
    setCommentError("");
    setCommentSuccess(false);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/product-comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Əgər authentication lazımdırsa
            // 'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            product_id: productId,
            full_name: commentForm.full_name,
            comment: commentForm.comment,
            rating: commentForm.rating,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Rəy göndərilərkən xəta baş verdi"
        );
      }

      const result = await response.json();

      // Success
      setCommentSuccess(true);
      setCommentForm({
        full_name: "",
        comment: "",
        rating: 5,
      });
      setValue(5); // Reset rating display

      // Success mesajını bir müddət sonra gizlət
      setTimeout(() => {
        setCommentSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Comment submission error:", error);
      setCommentError(error.message || "Rəy göndərilərkən xəta baş verdi");
    } finally {
      setIsSubmittingComment(false);
    }
  };

  // Wishlist durumunu sync et
  useEffect(() => {
    if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
      const isProductInWishlist = wishlistData.wishlist.products.some(
        (item) => item.id === productId
      );
      setIsWishlisted(isProductInWishlist);
    }
  }, [wishlistData, productId]);

  // Cart durumunu sync et
  useEffect(() => {
    if (cartData && Array.isArray(cartData.cart?.cart_products)) {
      const isProductInCart = cartData.cart.cart_products.some(
        (cartItem) => cartItem.product?.id === productId
      );
      setIsInCart(isProductInCart);
    }
  }, [cartData, productId]);

  // Wishlist toggle handler
  const toggleWishlist = async () => {
    if (isAddingFav) return;

    const currentlyFav = isWishlisted;

    // Optimistic update
    setIsWishlisted(!currentlyFav);
    setIsAddingFav(true);

    try {
      if (currentlyFav) {
        await removeFromFav(productId).unwrap();
      } else {
        await addToFav(productId).unwrap();
      }
    } catch (error) {
      console.error("Wishlist toggle error:", error);
      // Rollback
      setIsWishlisted(currentlyFav);
    } finally {
      setIsAddingFav(false);
    }
  };

  // Add to cart handler
  const handleAddToCart = async () => {
    if (isInCart || isAddingCart) return;

    // Optimistic update
    setIsInCart(true);
    setIsAddingCart(true);

    try {
      await addToCart({ productId, quantity: 1 }).unwrap();
    } catch (error) {
      console.error("Add to cart error:", error);
      // Rollback
      setIsInCart(false);
    } finally {
      setIsAddingCart(false);
    }
  };

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
    if (isAddingCompare) return;

    setIsAddingCompare(true);

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
      setIsAddingCompare(false);
    }
  };

  // find the current installment object
  const currentInst =
    installments.find((inst) => inst.month === selectedMonth) || {};

  const isProductInCompare = isInCompare(productId);

  return (
    <div id="productsDetailPage">
      <div className="container">
        {showModal && (
          <OneClickPay
            t={t}
            product={selectedProduct}
            closeModal={closeModal}
            handleOverlayClick={handleOverlayClick}
          />
        )}

        <div
          className="breadCrumb breadCrumbsHideMobile"
          id="productDPbreadCrumbs"
        >
          {productBreadCrumbs.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === productBreadCrumbs.length - 1;

            return (
              <React.Fragment key={index}>
                {item.clickable === "true" ? (
                  <Link href={`/products?cat_slug=${item.slug}`}>
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <span className="lastChildBread">{item.name}</span>
                )}

                {!isLast && (
                  <strong>
                    {isFirst ? (
                      <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
                    ) : (
                      <MdKeyboardArrowRight className="breadCrumpIcon" />
                    )}
                  </strong>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="row">
          <div className="xl-6 lg-6 md-6 sm-12">
            <ProductsDPFancybox productDetail={productDetail} />
          </div>

          <div className="xl-6 lg-6 md-6 sm-12">
            <div className="productDPDetail">
              <div className="productDPTitle">
                <h2>{productDetail.name}</h2>
                <div className="productDPRating">
                  <Box className="productDPRatingBox">
                    <Rating
                      name="star-rating"
                      value={ratingValue}
                      onChange={(e, newValue) => setValue(newValue)}
                    />
                  </Box>
                  <p>({ratingValue})</p>
                </div>
              </div>
              <span className="depo">
                {t?.aviableproducts || "Məhsul Mövcuddur"}{" "}
              </span>

              <div className="productDPPrices">
                <span className="productDPOldPrice">
                  {productDetail.old_price} <TbCurrencyManat />
                </span>
                <span className="productDPNewPrice">
                  {productDetail.price} <TbCurrencyManat />
                </span>
              </div>
              <div className="productsDPButtons">
                <button
                  className="productsDPaddToCart"
                  onClick={handleAddToCart}
                  disabled={isAddingCart || isInCart}
                >
                  {isAddingCart ? (
                    <div className="spinner-small"></div>
                  ) : isInCart ? (
                    <>{t?.added || "Əlavə edildi"}</>
                  ) : (
                    <>
                      <IoCartOutline /> {t?.addtocart}
                    </>
                  )}
                </button>

                <button onClick={() => openModal(productDetail)} className="productsDPbuyNow">
                  {t?.oneclickpay}
                </button>

                <button
                  onClick={toggleWishlist}
                  className="wishlist-btn productsDPwishlist"
                  disabled={isAddingFav}
                >
                  {isWishlisted ? (
                    <FaHeart className="productsDPwishIcon newWishlistPR active" />
                  ) : (
                    <FiHeart className="productsDPwishIcon newWishlistPR" />
                  )}
                </button>

                <button
                  className={`productsDPscale newScaleBtn ${isProductInCompare ? "in-compare" : ""}`}
                  onClick={() => handleAddToCompare(productDetail)}
                  disabled={isAddingCompare || isProductInCompare}
                  title={isProductInCompare ? "Artıq müqayisədə" : "Müqayisəyə əlavə et"}
                >
                  {isAddingCompare ? (
                    <div className="spinner-small"></div>
                  ) : (
                    <NewScale
                      className={`productsDPwishIcon newScalePR ${isProductInCompare ? "active" : ""}`}
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
              </div>

              <div className="paymentCalculator">
                {Array.isArray(installments) && installments.length > 0 && (
                  <>
                    <div className="paymentCalculatorTitle">
                      <span>
                        {t?.productdetailparofpart || "Hissə-hissə ödə"}
                      </span>
                      <strong>
                        *{" "}
                        {t?.productdetailterms ||
                          "Şərtlər endrimsiz qiymətə tətbiq olunur"}
                      </strong>
                    </div>

                    <div className="paymentCalculatorButtons">
                      {installments.map((inst) => (
                        <div
                          key={inst.month}
                          className="paymentCalculatorButton"
                        >
                          <p>0%</p>
                          <button
                            onClick={() => setSelectedMonth(inst.month)}
                            style={{
                              border:
                                selectedMonth === inst.month
                                  ? "2px solid black"
                                  : "1px solid #ccc",
                              padding: 4,
                            }}
                          >
                            {inst.month} {t?.moon}
                          </button>
                        </div>
                      ))}
                      <div className="monthPayment">
                        <span>
                          {t?.productdetailmonthpay || "Aylıq Ödəniş"}
                        </span>
                        <strong>
                          {currentInst.monthly_amount?.toFixed(2)}{" "}
                          <TbCurrencyManat />
                        </strong>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="productsDPTechnicalSection">
            <div className="productsDPTechnicalSectionTitle">
              <button 
                onClick={() => setActiveTab("tech")}
                className={activeTab === "tech" ? "active-tab" : ""}
              >
                {t?.spesification || "Texniki Xüsusiyyətlər"}
              </button>
              <button 
                onClick={() => setActiveTab("desc")}
                className={activeTab === "desc" ? "active-tab" : ""}
              >
                {t?.destcription || "Təsvir"}
              </button>
              <button 
                onClick={() => setActiveTab("reviews")}
                className={activeTab === "reviews" ? "active-tab" : ""}
              >
                {t?.comment || "Rəylər"}
              </button>
            </div>

            {activeTab === "tech" && (
              <div className="technicalDetailsContent">
                <div className="technicalContentAll">
                  {attributes.map((attribute) => (
                    <div key={attribute.id} className="technicalContent">
                      <span className="techContentLeft">{attribute.name}</span>
                      <span className="techContentRight">
                        {attribute.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "desc" && (
              <div className="descriptionContent">
                <p>Məhsulun təsviri burada göstəriləcək.</p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="productsDPComments">
                <span>{t?.incoment || "Rəy Bildir"}</span>

                <div className="commentsFormSection">
                  <Form className="formComment" onSubmit={handleCommentSubmit}>
                    <label htmlFor="">
                      {t?.namesurname || "Adınız Soyadınız"}
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      placeholder="..."
                      value={commentForm.full_name}
                      onChange={handleCommentInputChange}
                    />
                    <label htmlFor="">{t?.incoment || "Rəy Bildir"}</label>
                    <textarea
                      placeholder="..."
                      name="comment"
                      id="commentArea"
                      value={commentForm.comment}
                      onChange={handleCommentInputChange}
                    ></textarea>
                    <label htmlFor="">{t?.rate}:</label>
                    <div className="commentsRating">
                      <Box className="commentsRatingBox">
                        <Rating
                          name="star-rating"
                          value={commentForm.rating}
                          onChange={handleRatingChange}
                        />
                      </Box>
                    </div>
                    <button
                      className="submitCommentBTN"
                      type="submit"
                      disabled={isSubmittingComment}
                    >
                      {isSubmittingComment ? (
                        <div className="spinner-small"></div>
                      ) : (
                        t?.send || "Gonder"
                      )}
                    </button>

                    {/* Success Message - button altında */}
                    {commentSuccess && (
                      <div className="comment-success">
                        <p>{t?.succesmessage}</p>
                      </div>
                    )}

                    {/* Error Message */}
                    {commentError && (
                      <div className="comment-error">
                        <p>{commentError}</p>
                      </div>
                    )}
                  </Form>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Styling */}
      <style jsx>{`
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
        .productsDPaddToCart:disabled,
        .wishlist-btn:disabled,
        .submitCommentBTN:disabled,
        .newScaleBtn:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
        /* override only for compare state so disabled doesn't cause opacity */
        .newScaleBtn.in-compare:disabled {
          opacity: 1;
        }
        /* Compare button - background f5f5f5, iconun özü qırmızı olur */
        .newScaleBtn.in-compare {
          background-color: #f5f5f5 !important;
          border: none;
        }
        .newScalePR.active {
          transition: filter 0.3s ease, transform 0.15s ease;
          filter: invert(15%) sepia(100%) saturate(7490%) hue-rotate(-10deg)
            brightness(100%) contrast(100%);
          opacity: 1;
          transform-origin: center;
        }
        
        /* Active tab style */
        .productsDPTechnicalSectionTitle .active-tab {
          border: 0.15rem solid #ec1f27 !important;
        }
        
        .productsDPaddToCart,
        .submitCommentBTN {
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: center;
        }
        .comment-success {
          background-color: #d4edda;
          color: #155724;
          padding: 10px;
          border: 1px solid #c3e6cb;
          border-radius: 4px;
          margin-top: 10px;
          width: 18rem;
        }
        .comment-error {
          background-color: #f8d7da;
          color: #721c24;
          padding: 10px;
          border: 1px solid #f5c6cb;
          border-radius: 4px;
          margin: 10px 0;
          width: 18rem;
        }
        .newScaleBtn {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ProductsDetailPage;



















































// "use client";
// import Link from "next/link";
// import Form from "next/form";
// import React, { useState, useEffect } from "react";
// import {
//   MdKeyboardDoubleArrowRight,
//   MdKeyboardArrowRight,
// } from "react-icons/md";
// import ProductsDPFancybox from "./ProductsDPFancybox";
// import { Rating, Box } from "@mui/material";
// import { Progress, Row, Col, Typography } from "antd";
// import NewScale from "../../public/icons/newScale.svg";
// import NewWishList from "../../public/icons/newWishlist.svg";
// import BlackBasket from "../../public/icons/blackBasket.svg";
// import { IoCartOutline } from "react-icons/io5";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";
// import { TbCurrencyManat } from "react-icons/tb";

// // RTK Query hook'ları
// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";
// import OneClickPay from "./Header/OneClickPay";
// import { useCompare } from "@/hooks/useCompare";

// const ProductsDetailPage = ({ product, t }) => {
//   const productDetail = product?.product_detail || [];
//   const productBreadCrumbs = product?.bread_crumbs || [];
//   const attributes = product?.product_detail?.attributes || [];
//   const ratingValue = productDetail.raiting ?? 0;
//   const [value, setValue] = useState(2);
//   const [activeTab, setActiveTab] = useState("tech");
//   const [showModal, setShowModal] = useState(false);
//   const installments = productDetail.installments || [];

//   // track which installment month is selected
//   const [selectedMonth, setSelectedMonth] = useState(
//     installments[0]?.month || null
//   );

//   // RTK Query states
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [isInCart, setIsInCart] = useState(false);
//   const [isAddingFav, setIsAddingFav] = useState(false);
//   const [isAddingCart, setIsAddingCart] = useState(false);

//   // Compare states
//   const { addToCompare, isInCompare } = useCompare();
//   const [isAddingCompare, setIsAddingCompare] = useState(false);

//   // Comment form states
//   const [commentForm, setCommentForm] = useState({
//     full_name: "",
//     comment: "",
//     rating: 5,
//   });
//   const [isSubmittingComment, setIsSubmittingComment] = useState(false);
//   const [commentSuccess, setCommentSuccess] = useState(false);
//   const [commentError, setCommentError] = useState("");

//   // RTK Query hook'ları
//   const { data: wishlistData, isLoading: isLoadingWishlistData } =
//     useGetFavQuery();
//   const [addToFav] = useAddToFavMutation();
//   const [removeFromFav] = useRemoveFromFavMutation();

//   const { data: cartData, isLoading: isLoadingCartData } = useGetCartQuery();
//   const [addToCart] = useAddToCartMutation();

//   const productId = productDetail.id;

//   // One Click Pay state
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Modal functions
//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };
//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedProduct(null);
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };

//   // Handle comment form input changes
//   const handleCommentInputChange = (e) => {
//     const { name, value } = e.target;
//     setCommentForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle rating change
//   const handleRatingChange = (event, newValue) => {
//     setCommentForm((prev) => ({
//       ...prev,
//       rating: newValue,
//     }));
//   };

//   // Submit comment function
//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form
//     if (!commentForm.full_name.trim()) {
//       setCommentError(t?.errormessageuser);
//       return;
//     }

//     if (!commentForm.comment.trim()) {
//       setCommentError(t?.errormessage);
//       return;
//     }

//     if (
//       !commentForm.rating ||
//       commentForm.rating < 1 ||
//       commentForm.rating > 5
//     ) {
//       setCommentError(t?.errormessagerating);
//       return;
//     }

//     setIsSubmittingComment(true);
//     setCommentError("");
//     setCommentSuccess(false);

//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/product-comment`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             // Əgər authentication lazımdırsa
//             // 'Authorization': `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             product_id: productId,
//             full_name: commentForm.full_name,
//             comment: commentForm.comment,
//             rating: commentForm.rating,
//           }),
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(
//           errorData.message || "Rəy göndərilərkən xəta baş verdi"
//         );
//       }

//       const result = await response.json();

//       // Success
//       setCommentSuccess(true);
//       setCommentForm({
//         full_name: "",
//         comment: "",
//         rating: 5,
//       });
//       setValue(5); // Reset rating display

//       // Success mesajını bir müddət sonra gizlət
//       setTimeout(() => {
//         setCommentSuccess(false);
//       }, 5000);
//     } catch (error) {
//       console.error("Comment submission error:", error);
//       setCommentError(error.message || "Rəy göndərilərkən xəta baş verdi");
//     } finally {
//       setIsSubmittingComment(false);
//     }
//   };

//   // Wishlist durumunu sync et
//   useEffect(() => {
//     if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
//       const isProductInWishlist = wishlistData.wishlist.products.some(
//         (item) => item.id === productId
//       );
//       setIsWishlisted(isProductInWishlist);
//     }
//   }, [wishlistData, productId]);

//   // Cart durumunu sync et
//   useEffect(() => {
//     if (cartData && Array.isArray(cartData.cart?.cart_products)) {
//       const isProductInCart = cartData.cart.cart_products.some(
//         (cartItem) => cartItem.product?.id === productId
//       );
//       setIsInCart(isProductInCart);
//     }
//   }, [cartData, productId]);

//   // Wishlist toggle handler
//   const toggleWishlist = async () => {
//     if (isAddingFav) return;

//     const currentlyFav = isWishlisted;

//     // Optimistic update
//     setIsWishlisted(!currentlyFav);
//     setIsAddingFav(true);

//     try {
//       if (currentlyFav) {
//         await removeFromFav(productId).unwrap();
//       } else {
//         await addToFav(productId).unwrap();
//       }
//     } catch (error) {
//       console.error("Wishlist toggle error:", error);
//       // Rollback
//       setIsWishlisted(currentlyFav);
//     } finally {
//       setIsAddingFav(false);
//     }
//   };

//   // Add to cart handler
//   const handleAddToCart = async () => {
//     if (isInCart || isAddingCart) return;

//     // Optimistic update
//     setIsInCart(true);
//     setIsAddingCart(true);

//     try {
//       await addToCart({ productId, quantity: 1 }).unwrap();
//     } catch (error) {
//       console.error("Add to cart error:", error);
//       // Rollback
//       setIsInCart(false);
//     } finally {
//       setIsAddingCart(false);
//     }
//   };

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
//     if (isAddingCompare) return;

//     setIsAddingCompare(true);

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
//       setIsAddingCompare(false);
//     }
//   };

//   // find the current installment object
//   const currentInst =
//     installments.find((inst) => inst.month === selectedMonth) || {};

//   const isProductInCompare = isInCompare(productId);

//   return (
//     <div id="productsDetailPage">
//       <div className="container">
//         {showModal && (
//           <OneClickPay
//             t={t}
//             product={selectedProduct}
//             closeModal={closeModal}
//             handleOverlayClick={handleOverlayClick}
//           />
//         )}

//         <div
//           className="breadCrumb breadCrumbsHideMobile"
//           id="productDPbreadCrumbs"
//         >
//           {productBreadCrumbs.map((item, index) => {
//             const isFirst = index === 0;
//             const isLast = index === productBreadCrumbs.length - 1;

//             return (
//               <React.Fragment key={index}>
//                 {item.clickable === "true" ? (
//                   <Link href={`/products?cat_slug=${item.slug}`}>
//                     <span>{item.name}</span>
//                   </Link>
//                 ) : (
//                   <span className="lastChildBread">{item.name}</span>
//                 )}

//                 {!isLast && (
//                   <strong>
//                     {isFirst ? (
//                       <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//                     ) : (
//                       <MdKeyboardArrowRight className="breadCrumpIcon" />
//                     )}
//                   </strong>
//                 )}
//               </React.Fragment>
//             );
//           })}
//         </div>

//         <div className="row">
//           <div className="xl-6 lg-6 md-6 sm-12">
//             <ProductsDPFancybox productDetail={productDetail} />
//           </div>

//           <div className="xl-6 lg-6 md-6 sm-12">
//             <div className="productDPDetail">
//               <div className="productDPTitle">
//                 <h2>{productDetail.name}</h2>
//                 <div className="productDPRating">
//                   <Box className="productDPRatingBox">
//                     <Rating
//                       name="star-rating"
//                       value={ratingValue}
//                       onChange={(e, newValue) => setValue(newValue)}
//                     />
//                   </Box>
//                   <p>({ratingValue})</p>
//                 </div>
//               </div>
//               <span className="depo">
//                 {t?.aviableproducts || "Məhsul Mövcuddur"}{" "}
//               </span>

//               <div className="productDPPrices">
//                 <span className="productDPOldPrice">
//                   {productDetail.old_price} <TbCurrencyManat />
//                 </span>
//                 <span className="productDPNewPrice">
//                   {productDetail.price} <TbCurrencyManat />
//                 </span>
//               </div>
//               <div className="productsDPButtons">
//                 <button
//                   className="productsDPaddToCart"
//                   onClick={handleAddToCart}
//                   disabled={isAddingCart || isInCart}
//                 >
//                   {isAddingCart ? (
//                     <div className="spinner-small"></div>
//                   ) : isInCart ? (
//                     <>{t?.added || "Əlavə edildi"}</>
//                   ) : (
//                     <>
//                       <IoCartOutline /> {t?.addtocart}
//                     </>
//                   )}
//                 </button>

//                 <button onClick={() => openModal(productDetail)} className="productsDPbuyNow">
//                   {t?.oneclickpay}
//                 </button>

//                 <button
//                   onClick={toggleWishlist}
//                   className="wishlist-btn productsDPwishlist"
//                   disabled={isAddingFav}
//                 >
//                   {isWishlisted ? (
//                     <FaHeart className="productsDPwishIcon newWishlistPR active" />
//                   ) : (
//                     <FiHeart className="productsDPwishIcon newWishlistPR" />
//                   )}
//                 </button>

//                 <button
//                   className={`productsDPscale newScaleBtn ${isProductInCompare ? "in-compare" : ""}`}
//                   onClick={() => handleAddToCompare(productDetail)}
//                   disabled={isAddingCompare || isProductInCompare}
//                   title={isProductInCompare ? "Artıq müqayisədə" : "Müqayisəyə əlavə et"}
//                   style={isProductInCompare ? { opacity: 1 } : undefined}
//                 >
//                   {isAddingCompare ? (
//                     <div className="spinner-small"></div>
//                   ) : (
//                     <NewScale
//                       className={`productsDPwishIcon newScalePR ${isProductInCompare ? "active" : ""}`}
//                       style={
//                         isProductInCompare
//                           ? {
//                               transition: "filter 0.3s ease, transform 0.15s ease",
//                               filter:
//                                 "invert(15%) sepia(100%) saturate(7490%) hue-rotate(-10deg) brightness(100%) contrast(100%)",
//                               opacity: 1,
//                               transform: "scale(1.2)",
//                               transformOrigin: "center",
//                               strokeWidth: 1.6,
//                               width: "20px",
//                               height: "20px",
//                             }
//                           : undefined
//                       }
//                     />
//                   )}
//                 </button>
//               </div>

//               <div className="paymentCalculator">
//                 {Array.isArray(installments) && installments.length > 0 && (
//                   <>
//                     <div className="paymentCalculatorTitle">
//                       <span>
//                         {t?.productdetailparofpart || "Hissə-hissə ödə"}
//                       </span>
//                       <strong>
//                         *{" "}
//                         {t?.productdetailterms ||
//                           "Şərtlər endrimsiz qiymətə tətbiq olunur"}
//                       </strong>
//                     </div>

//                     <div className="paymentCalculatorButtons">
//                       {installments.map((inst) => (
//                         <div
//                           key={inst.month}
//                           className="paymentCalculatorButton"
//                         >
//                           <p>0%</p>
//                           <button
//                             onClick={() => setSelectedMonth(inst.month)}
//                             style={{
//                               border:
//                                 selectedMonth === inst.month
//                                   ? "2px solid black"
//                                   : "1px solid #ccc",
//                               padding: 4,
//                             }}
//                           >
//                             {inst.month} {t?.moon}
//                           </button>
//                         </div>
//                       ))}
//                       <div className="monthPayment">
//                         <span>
//                           {t?.productdetailmonthpay || "Aylıq Ödəniş"}
//                         </span>
//                         <strong>
//                           {currentInst.monthly_amount?.toFixed(2)}{" "}
//                           <TbCurrencyManat />
//                         </strong>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <section>
//           <div className="productsDPTechnicalSection">
//             <div className="productsDPTechnicalSectionTitle">
//               <button onClick={() => setActiveTab("tech")}>
//                 {t?.spesification || "Texniki Xüsusiyyətlər"}
//               </button>
//               <button onClick={() => setActiveTab("desc")}>
//                 {t?.destcription || "Təsvir"}
//               </button>
//               <button onClick={() => setActiveTab("reviews")}>
//                 {t?.comment || "Rəylər"}
//               </button>
//             </div>

//             {activeTab === "tech" && (
//               <div className="technicalDetailsContent">
//                 <div className="technicalContentAll">
//                   {attributes.map((attribute) => (
//                     <div key={attribute.id} className="technicalContent">
//                       <span className="techContentLeft">{attribute.name}</span>
//                       <span className="techContentRight">
//                         {attribute.value}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeTab === "desc" && (
//               <div className="descriptionContent">
//                 <p>Məhsulun təsviri burada göstəriləcək.</p>
//               </div>
//             )}

//             {activeTab === "reviews" && (
//               <div className="productsDPComments">
//                 <span>{t?.incoment || "Rəy Bildir"}</span>

//                 <div className="commentsFormSection">
//                   <Form className="formComment" onSubmit={handleCommentSubmit}>
//                     <label htmlFor="">
//                       {t?.namesurname || "Adınız Soyadınız"}
//                     </label>
//                     <input
//                       type="text"
//                       name="full_name"
//                       placeholder="..."
//                       value={commentForm.full_name}
//                       onChange={handleCommentInputChange}
//                     />
//                     <label htmlFor="">{t?.incoment || "Rəy Bildir"}</label>
//                     <textarea
//                       placeholder="..."
//                       name="comment"
//                       id="commentArea"
//                       value={commentForm.comment}
//                       onChange={handleCommentInputChange}
//                     ></textarea>
//                     <label htmlFor="">{t?.rate}:</label>
//                     <div className="commentsRating">
//                       <Box className="commentsRatingBox">
//                         <Rating
//                           name="star-rating"
//                           value={commentForm.rating}
//                           onChange={handleRatingChange}
//                         />
//                       </Box>
//                     </div>
//                     <button
//                       className="submitCommentBTN"
//                       type="submit"
//                       disabled={isSubmittingComment}
//                     >
//                       {isSubmittingComment ? (
//                         <div className="spinner-small"></div>
//                       ) : (
//                         t?.send || "Gonder"
//                       )}
//                     </button>

//                     {/* Success Message - button altında */}
//                     {commentSuccess && (
//                       <div className="comment-success">
//                         <p>{t?.succesmessage}</p>
//                       </div>
//                     )}

//                     {/* Error Message */}
//                     {commentError && (
//                       <div className="comment-error">
//                         <p>{commentError}</p>
//                       </div>
//                     )}
//                   </Form>
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>
//       </div>

//       {/* Styling */}
//       <style jsx>{`
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
//         .productsDPaddToCart:disabled,
//         .wishlist-btn:disabled,
//         .submitCommentBTN:disabled,
//         .newScaleBtn:disabled {
//           cursor: not-allowed;
//           opacity: 0.6;
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
//         .productsDPaddToCart,
//         .submitCommentBTN {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           justify-content: center;
//         }
//         .comment-success {
//           background-color: #d4edda;
//           color: #155724;
//           padding: 10px;
//           border: 1px solid #c3e6cb;
//           border-radius: 4px;
//           margin-top: 10px;
//           width: 18rem;
//         }
//         .comment-error {
//           background-color: #f8d7da;
//           color: #721c24;
//           padding: 10px;
//           border: 1px solid #f5c6cb;
//           border-radius: 4px;
//           margin: 10px 0;
//           width: 18rem;
//         }
//         .newScaleBtn {
//           cursor: pointer;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProductsDetailPage;



