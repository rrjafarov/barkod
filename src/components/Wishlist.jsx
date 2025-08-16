// src/components/Wishlist.jsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { TbCurrencyManat } from "react-icons/tb";
import NewScale from "../../public/icons/newScale.svg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

import {
  useGetFavQuery,
  useRemoveFromFavMutation,
} from "@/redux/wishlistService";
import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";
import OneClickPay from "./Header/OneClickPay";

const Wishlist = ({ t }) => {
  const {
    data: favData,
    isLoading: isLoadingFav,
    isError: isErrorFav,
  } = useGetFavQuery();
  const [removeFromFav] = useRemoveFromFavMutation();

  const {
    data: cartData,
    isLoading: isLoadingCart,
    isError: isErrorCart,
  } = useGetCartQuery();
  const [addToCart] = useAddToCartMutation();

  const [cartMap, setCartMap] = useState({});
  const [addingCartMap, setAddingCartMap] = useState({});

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  const products = favData?.wishlist?.products || [];

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

  const handleAddToCart = async (productId) => {
    if (cartMap[productId] || addingCartMap[productId]) return;
    setCartMap((prev) => ({ ...prev, [productId]: true }));
    setAddingCartMap((prev) => ({ ...prev, [productId]: true }));
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

  if (isLoadingFav) {
    return (
      <div className="container">
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

  if (products.length === 0) {
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
            {t?.wishlistempty || "Favorit siyahınız boşdur"}
          </p>
          <Link href="/">
            <button
              className="officialPaymentBtn"
              style={{ marginTop: "1rem" }}
            >
              {t?.homebreadcrumbs || "Ana Səhifə"}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Breadcrumb */}
      <div className="breadCrumb breadCrumbsHideMobile">
        <Link href="/">
          <span>{t?.homebreadcrumbs}</span>
        </Link>
        <strong>
          <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
        </strong>
        <span className="lastChildBread">{t?.favorites || "Favorites"}</span>
      </div>

      {/* Modal */}
      {showModal && (
        <OneClickPay
          t={t}
          closeModal={closeModal}
          handleOverlayClick={handleOverlayClick}
        />
      )}

      <div className="wishlistPage">
        <span className="wishTitle">{t?.favorites || "Favorites"}</span>
        <div className="row">
          {products.map((product) => {
            const productId = product.id;
            const name = product.name;
            const imageUrl = product.image;
            const oldPrice = product.old_price;
            const newPrice = product.price;
            const discPercent = product.disc_percent;
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
                      <p>{name}</p>
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
        .wishlist-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .wishlistFillIcon {
          color: red;
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
      `}</style>
    </div>
  );
};

export default Wishlist;
