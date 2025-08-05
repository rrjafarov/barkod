// "use client";
// import Link from "next/link";
// import Form from "next/form";
// import React, { useState } from "react";
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

// const ProductsDetailPage = ({ product, t }) => {
//   const productDetail = product?.product_detail || [];
//   const productBreadCrumbs = product?.bread_crumbs || [];
//   const attributes = product?.product_detail?.attributes || [];
//   const ratingValue = productDetail.raiting ?? 0;
//   const [value, setValue] = useState(2);
//   const [activeTab, setActiveTab] = useState("tech");
//   const [showModal, setShowModal] = useState(false);
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };
//   const toggleWishlist = () => {
//     setIsWishlisted((prev) => !prev);
//   };

//   return (
//     <div id="productsDetailPage">
//       <div className="container">
//         {showModal && (
//           <div className="modal-overlay" onClick={handleOverlayClick}>
//             <div className="modal">
//               <button className="close-btns" onClick={closeModal}>
//                 X
//               </button>
//               <span>Bir kliklə al</span>
//               <div></div>
//               <div className="numberModal">
//                 <label htmlFor="phone">Nömrə: +994</label>
//                 <input type="text" id="phone" name="phone" />
//               </div>
//               <button className="open-btn">Bir kliklə al</button>
//             </div>
//           </div>
//         )}

//         <div className="breadCrumb" id="productDPbreadCrumbs">
//           {productBreadCrumbs.map((item, index) => {
//             const isFirst = index === 0;
//             const isLast = index === productBreadCrumbs.length - 1;

//             return (
//               <React.Fragment key={index}>
//                 {item.clickable === "true" ? (
//                   <Link
//                   // href={item.slug}
//                     href={`/products?cat_slug=${item.slug}`}

//                   >
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
//                       onChange={(event, newValue) => setValue(newValue)}
//                     />
//                   </Box>
//                   <p>({ratingValue})</p>
//                 </div>
//               </div>
//               <span className="depo">{t?.aviableproducts || "Məhsul Mövcuddur"} </span>

//               {/* <span className="productCode">
//                 Məhsul kodu : <strong>{productDetail.product_code}</strong>
//               </span> */}

//               <div className="productDPPrices">
//                 <span className="productDPOldPrice">
//                   {productDetail.old_price} <TbCurrencyManat />
//                 </span>
//                 <span className="productDPNewPrice">
//                   {productDetail.price} <TbCurrencyManat />
//                 </span>
//               </div>
//               <div className="productsDPButtons">
//                 <Link href="#">
//                   <button className="productsDPaddToCart">
//                     <IoCartOutline /> {t?.addtocart	}
//                   </button>
//                 </Link>
//                 <Link href="#">
//                   <button onClick={openModal} className="productsDPbuyNow">
//                     {t?.oneclickpay}
//                   </button>
//                 </Link>
//                 <Link href="#">
//                   {/* <button className="productsDPwishlist">
//                     <NewWishList className="productsDPwishIcon" />
//                   </button> */}
//                   <button
//                     onClick={toggleWishlist}
//                     className="wishlist-btn productsDPwishlist"
//                   >
//                     {isWishlisted ? (
//                       <FaHeart className="productsDPwishIcon newWishlistPR active" />
//                     ) : (
//                       <FiHeart className="productsDPwishIcon newWishlistPR" />
//                     )}
//                   </button>
//                 </Link>
//                 <Link href="#">
//                   <button className="productsDPscale">
//                     <NewScale className="productsDPwishIcon" />
//                   </button>
//                 </Link>
//               </div>
//               <div className="paymentCalculator">
//                 <div className="paymentCalculatorTitle">
//                   <span>{t?.productdetailparofpart || "Hissə-hissə ödə"}</span>
//                   <strong>* {t?.productdetailterms || "Şərtlər endrimsiz qiymətə tətbiq olunur"}</strong>
//                 </div>
//                 <div className="paymentCalculatorButtons">
//                   <div className="paymentCalculatorButton">
//                     <p>0%</p>
//                     <button>3 {t?.moon}</button>
//                   </div>
//                   <div className="paymentCalculatorButton">
//                     <p>0%</p>
//                     <button>6 {t?.moon}</button>
//                   </div>
//                   <div className="paymentCalculatorButton">
//                     <p>0%</p>
//                     <button>9 {t?.moon}</button>
//                   </div>
//                   <div className="paymentCalculatorButton">
//                     <p>0%</p>
//                     <button>12 {t?.moon}</button>
//                   </div>
//                   <div className="paymentCalculatorButton">
//                     <p>0%</p>
//                     <button>18 {t?.moon}</button>
//                   </div>
//                   <div className="monthPayment">
//                     <span>{t?.productdetailmonthpay || "Aylıq Ödəniş"}</span>
//                     <strong>
//                       50.00 <TbCurrencyManat />
//                     </strong>
//                   </div>
//                 </div>
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
//               <button onClick={() => setActiveTab("desc")}>{t?.destcription || "Təsvir"}</button>
//               <button onClick={() => setActiveTab("reviews")}>{t?.comment || "Rəylər"}</button>
//             </div>

//             {activeTab === "tech" && (
//               <div className="technicalDetailsContent">
//                 <div className="technicalContentAll">
//                   {attributes.map((attribute) => (
//                     <div className="technicalContent">
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
//                     <label htmlFor="">{t?.namesurname || "Adınız Soyadınız"}</label>
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
//                           onChange={(event, newValue) => setValue(newValue)}
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
//     </div>
//   );
// };

// export default ProductsDetailPage;

// !Ayliq odenis buttonlari normal islemir















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

  // RTK Query hook'ları
  const {
    data: wishlistData,
    isLoading: isLoadingWishlistData,
  } = useGetFavQuery();
  const [addToFav] = useAddToFavMutation();
  const [removeFromFav] = useRemoveFromFavMutation();

  const {
    data: cartData,
    isLoading: isLoadingCartData,
  } = useGetCartQuery();
  const [addToCart] = useAddToCartMutation();

  const productId = productDetail.id;

  // Modal functions
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
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

  // find the current installment object
  const currentInst =
    installments.find((inst) => inst.month === selectedMonth) || {};

  return (
    <div id="productsDetailPage">
      <div className="container">
        {showModal && (
          <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal">
              <button className="close-btns" onClick={closeModal}>
                X
              </button>
              <span>Bir kliklə al</span>
              <div></div>
              <div className="numberModal">
                <label htmlFor="phone">Nömrə: +994</label>
                <input type="text" id="phone" name="phone" />
              </div>
              <button className="open-btn">Bir kliklə al</button>
            </div>
          </div>
        )}

        <div className="breadCrumb breadCrumbsHideMobile" id="productDPbreadCrumbs">
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
                    <>
                      <IoCartOutline /> ✔︎ {t?.added || "Əlavə edildi"}
                    </>
                  ) : (
                    <>
                      <IoCartOutline /> {t?.addtocart}
                    </>
                  )}
                </button>

                <button onClick={openModal} className="productsDPbuyNow">
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

                <button className="productsDPscale">
                  <NewScale className="productsDPwishIcon" />
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
              <button onClick={() => setActiveTab("tech")}>
                {t?.spesification || "Texniki Xüsusiyyətlər"}
              </button>
              <button onClick={() => setActiveTab("desc")}>
                {t?.destcription || "Təsvir"}
              </button>
              <button onClick={() => setActiveTab("reviews")}>
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
                  <Form className="formComment" action="/search">
                    <label htmlFor="">
                      {t?.namesurname || "Adınız Soyadınız"}
                    </label>
                    <input type="text" placeholder="..." />
                    <label htmlFor="">{t?.incoment || "Rəy Bildir"}</label>
                    <textarea
                      placeholder="..."
                      name="comment"
                      id="commentArea"
                    ></textarea>
                    <label htmlFor="">{t?.rate}:</label>
                    <div className="commentsRating">
                      <Box className="commentsRatingBox">
                        <Rating
                          name="star-rating"
                          value={value}
                          onChange={(e, newValue) => setValue(newValue)}
                        />
                      </Box>
                    </div>
                    <button className="submitCommentBTN" type="submit">
                      {t?.send || "Gonder"}
                    </button>
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
        .wishlist-btn:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
        .productsDPaddToCart {
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default ProductsDetailPage;





















// ? bu calculator buttons isleyir tam olaraq
// "use client";
// import Link from "next/link";
// import Form from "next/form";
// import React, { useState } from "react";
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

// const ProductsDetailPage = ({ product, t }) => {
//   const productDetail = product?.product_detail || [];
//   const productBreadCrumbs = product?.bread_crumbs || [];
//   const attributes = product?.product_detail?.attributes || [];
//   const ratingValue = productDetail.raiting ?? 0;
//   const [value, setValue] = useState(2);
//   const [activeTab, setActiveTab] = useState("tech");
//   const [showModal, setShowModal] = useState(false);
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const installments = productDetail.installments || [];
//   // track which installment month is selected
//   const [selectedMonth, setSelectedMonth] = useState(
//     installments[0]?.month || null
//   );

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") {
//       closeModal();
//     }
//   };
//   const toggleWishlist = () => {
//     setIsWishlisted((prev) => !prev);
//   };

//   // find the current installment object
//   const currentInst =
//     installments.find((inst) => inst.month === selectedMonth) || {};

//   return (
//     <div id="productsDetailPage">
//       <div className="container">
//         {showModal && (
//           <div className="modal-overlay" onClick={handleOverlayClick}>
//             <div className="modal">
//               <button className="close-btns" onClick={closeModal}>
//                 X
//               </button>
//               <span>Bir kliklə al</span>
//               <div></div>
//               <div className="numberModal">
//                 <label htmlFor="phone">Nömrə: +994</label>
//                 <input type="text" id="phone" name="phone" />
//               </div>
//               <button className="open-btn">Bir kliklə al</button>
//             </div>
//           </div>
//         )}

//         <div className="breadCrumb" id="productDPbreadCrumbs">
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
//                 <Link href="#">
//                   <button className="productsDPaddToCart">
//                     <IoCartOutline /> {t?.addtocart}
//                   </button>
//                 </Link>
//                 <Link href="#">
//                   <button onClick={openModal} className="productsDPbuyNow">
//                     {t?.oneclickpay}
//                   </button>
//                 </Link>
//                 <Link href="#">
//                   <button
//                     onClick={toggleWishlist}
//                     className="wishlist-btn productsDPwishlist"
//                   >
//                     {isWishlisted ? (
//                       <FaHeart className="productsDPwishIcon newWishlistPR active" />
//                     ) : (
//                       <FiHeart className="productsDPwishIcon newWishlistPR" />
//                     )}
//                   </button>
//                 </Link>
//                 <Link href="#">
//                   <button className="productsDPscale">
//                     <NewScale className="productsDPwishIcon" />
//                   </button>
//                 </Link>
//               </div>

//               <div className="paymentCalculator">
//                 {Array.isArray(installments) && installments.length > 0 && (
//                   <>
//                     <div className="paymentCalculatorTitle">
//                       <span>
//                         {t?.productdetailparofpart || "Hissə-hissə ödə"}
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

//               {/* Installments with selectable buttons */}
//               {/* <div className="paymentCalculator">
//                 <div className="paymentCalculatorTitle">
//                   <span>
//                     {t?.productdetailparofpart || "Hissə-hissə ödə"}
//                   </span>
//                   <strong>
//                     *{" "}
//                     {t?.productdetailterms ||
//                       "Şərtlər endrimsiz qiymətə tətbiq olunur"}
//                   </strong>
//                 </div>
//                 <div className="paymentCalculatorButtons">
//                   {installments.map((inst) => (
//                     <div key={inst.month} className="paymentCalculatorButton">
//                       <p>0%</p>
//                       <button
//                         onClick={() => setSelectedMonth(inst.month)}
//                         style={{
//                           border:
//                             selectedMonth === inst.month
//                               ? "3px solid black"
//                               : "1px solid #ccc",
//                           padding: 4,
//                         }}
//                       >
//                         {inst.month} {t?.moon}
//                       </button>
//                     </div>
//                   ))}
//                   <div className="monthPayment">
//                     <span>
//                       {t?.productdetailmonthpay || "Aylıq Ödəniş"}
//                     </span>
//                     <strong>
//                       {currentInst.monthly_amount?.toFixed(2)}{" "}
//                       <TbCurrencyManat />
//                     </strong>
//                   </div>
//                 </div>
//               </div> */}
//               {/* End installments */}
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
//     </div>
//   );
// };

// export default ProductsDetailPage;
