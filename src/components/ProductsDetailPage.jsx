"use client";
import Link from "next/link";
import Form from "next/form";
import React, { useState } from "react";
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

const ProductsDetailPage = ({ product, t }) => {
  const productDetail = product?.product_detail || [];
  const productBreadCrumbs = product?.bread_crumbs || [];
  const attributes = product?.product_detail?.attributes || [];
  const ratingValue = productDetail.raiting ?? 0;
  const [value, setValue] = useState(2);
  const [activeTab, setActiveTab] = useState("tech");
  const [showModal, setShowModal] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };
  const toggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
  };

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

        <div className="breadCrumb" id="productDPbreadCrumbs">
          {productBreadCrumbs.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === productBreadCrumbs.length - 1;

            return (
              <React.Fragment key={index}>
                {item.clickable === "true" ? (
                  <Link 
                  // href={item.slug}
                    href={`/products?cat_slug=${item.slug}`}  

                  >
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
                      onChange={(event, newValue) => setValue(newValue)}
                    />
                  </Box>
                  <p>({ratingValue})</p>
                </div>
              </div>
              <span className="depo">{t?.aviableproducts || "Məhsul Mövcuddur"} </span>

              {/* <span className="productCode">
                Məhsul kodu : <strong>{productDetail.product_code}</strong>
              </span> */}

              <div className="productDPPrices">
                <span className="productDPOldPrice">
                  {productDetail.old_price} <TbCurrencyManat />
                </span>
                <span className="productDPNewPrice">
                  {productDetail.price} <TbCurrencyManat />
                </span>
              </div>
              <div className="productsDPButtons">
                <Link href="#">
                  <button className="productsDPaddToCart">
                    <IoCartOutline /> {t?.addtocart	}
                  </button>
                </Link>
                <Link href="#">
                  <button onClick={openModal} className="productsDPbuyNow">
                    {t?.oneclickpay}
                  </button>
                </Link>
                <Link href="#">
                  {/* <button className="productsDPwishlist">
                    <NewWishList className="productsDPwishIcon" />
                  </button> */}
                  <button
                    onClick={toggleWishlist}
                    className="wishlist-btn productsDPwishlist"
                  >
                    {isWishlisted ? (
                      <FaHeart className="productsDPwishIcon newWishlistPR active" />
                    ) : (
                      <FiHeart className="productsDPwishIcon newWishlistPR" />
                    )}
                  </button>
                </Link>
                <Link href="#">
                  <button className="productsDPscale">
                    <NewScale className="productsDPwishIcon" />
                  </button>
                </Link>
              </div>
              <div className="paymentCalculator">
                <div className="paymentCalculatorTitle">
                  <span>{t?.productdetailparofpart || "Hissə-hissə ödə"}</span>
                  <strong>* {t?.productdetailterms || "Şərtlər endrimsiz qiymətə tətbiq olunur"}</strong>
                </div>
                <div className="paymentCalculatorButtons">
                  <div className="paymentCalculatorButton">
                    <p>0%</p>
                    <button>3 {t?.moon}</button>
                  </div>
                  <div className="paymentCalculatorButton">
                    <p>0%</p>
                    <button>6 {t?.moon}</button>
                  </div>
                  <div className="paymentCalculatorButton">
                    <p>0%</p>
                    <button>9 {t?.moon}</button>
                  </div>
                  <div className="paymentCalculatorButton">
                    <p>0%</p>
                    <button>12 {t?.moon}</button>
                  </div>
                  <div className="paymentCalculatorButton">
                    <p>0%</p>
                    <button>18 {t?.moon}</button>
                  </div>
                  <div className="monthPayment">
                    <span>{t?.productdetailmonthpay || "Aylıq Ödəniş"}</span>
                    <strong>
                      50.00 <TbCurrencyManat />
                    </strong>
                  </div>
                </div>
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
              <button onClick={() => setActiveTab("desc")}>{t?.destcription || "Təsvir"}</button>
              <button onClick={() => setActiveTab("reviews")}>{t?.comment || "Rəylər"}</button>
            </div>

            {activeTab === "tech" && (
              <div className="technicalDetailsContent">
                <div className="technicalContentAll">
                  {attributes.map((attribute) => (
                    <div className="technicalContent">
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
                    <label htmlFor="">{t?.namesurname || "Adınız Soyadınız"}</label>
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
                          onChange={(event, newValue) => setValue(newValue)}
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
    </div>
  );
};

export default ProductsDetailPage;
