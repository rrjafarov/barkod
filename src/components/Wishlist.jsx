// ! 1 klickle al ve compare
// src/components/Wishlist.jsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { TbCurrencyManat } from "react-icons/tb";
import NewScale from "../../public/icons/newScale.svg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
import {
  useGetFavQuery,
  useRemoveFromFavMutation,
} from "@/redux/wishlistService";
import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";
// Compare hook-u əlavə edildi
import { useCompare } from "@/hooks/useCompare";
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
  const [addingCompareMap, setAddingCompareMap] = useState({}); // Compare üçün əlavə edildi

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Seçilən məhsul üçün state əlavə edildi

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
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

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
          product={selectedProduct} // Seçilən məhsul obyektini göndər
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
            const isAddingCompareItem = !!addingCompareMap[productId];
            const isProductInCompare = isInCompare(productId); // Compare vəziyyətini yoxla

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
                                // İnline style override - active olduğu zaman qırmızı rəng
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
                            onClick={() => openModal(product)} // Tam məhsul obyektini göndər
                            className="clickBtn"
                          >
                            {t?.oneclickpay || "Bir kliklə al"}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .wishlist-btn:disabled {
          border: none;
        }
        .cartBtn:disabled {
          cursor: not-allowed;
          border: 1px solid #0CED4C;
          background: #fff;
          span {
            color: #000;
          }
        }
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

export default Wishlist;
// ! 1 klickle al ve compare
