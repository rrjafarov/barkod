// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { IoCloseSharp } from "react-icons/io5";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../public/icons/newScale.svg";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";
// import { CompareService } from "@/lib/compareService";

// import {
//  useGetFavQuery,
//  useAddToFavMutation,
//  useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";
// import { useCompare } from "@/hooks/useCompare";
// import OneClickPay from "./Header/OneClickPay";

// export default function ComparePage({ t }) {
//  const [compareData, setCompareData] = useState([]);
//  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
//  const [removingProducts, setRemovingProducts] = useState(new Set());
//  const [isClearing, setIsClearing] = useState(false);
//  const [showModal, setShowModal] = useState(false);
//  const [wishlistedMap, setWishlistedMap] = useState({});
//  const [cartMap, setCartMap] = useState({});
//  const [addingFavMap, setAddingFavMap] = useState({});
//  const [addingCartMap, setAddingCartMap] = useState({});
//  const [addingCompareMap, setAddingCompareMap] = useState({});

//  // Compare hook
//  const { addToCompare, isInCompare } = useCompare();

//  // Wishlist
//  const { data: wishlistData } = useGetFavQuery();
//  const [addToFav] = useAddToFavMutation();
//  const [removeFromFav] = useRemoveFromFavMutation();

//  // Cart
//  const { data: cartData } = useGetCartQuery();
//  const [addToCart] = useAddToCartMutation();

//  // Effects to build maps
//  useEffect(() => {
//    if (wishlistData && Array.isArray(wishlistData.wishlist?.products)) {
//      const newWishMap = {};
//      wishlistData.wishlist.products.forEach((item) => {
//        newWishMap[item.id] = true;
//      });
//      setWishlistedMap(newWishMap);
//    }
//  }, [wishlistData]);

//  useEffect(() => {
//    if (cartData && Array.isArray(cartData.cart?.cart_products)) {
//      const newCartMap = {};
//      cartData.cart.cart_products.forEach((cartItem) => {
//        const pid = cartItem.product?.id;
//        if (pid != null) {
//          newCartMap[pid] = true;
//        }
//      });
//      setCartMap(newCartMap);
//    }
//  }, [cartData]);

//  // Fetch compare data from localStorage
// const fetchCompareData = async () => {
//   try {
//     const data = await CompareService.getAllProducts(); // [{category, products, count}, ...]
//     setCompareData(data || []);
//   } catch (error) {
//     console.error("Compare data fetch error:", error);
//   }
// };

//  useEffect(() => {
//    fetchCompareData();
//    const handler = () => fetchCompareData();
//    window.addEventListener("compare_updated", handler);
//    return () => window.removeEventListener("compare_updated", handler);
//  }, []);

//  // İlk kateqoriyanı default seç
//  useEffect(() => {
//    if (compareData.length > 0 && !selectedCategoryId) {
//      setSelectedCategoryId(compareData[0].category.id);
//    }
//    // eslint-disable-next-line react-hooks/exhaustive-deps
//  }, [compareData]);

//  // Helper to extract category id from product object (fallbacks)
//  const extractCategoryId = (product) => {
//    if (!product) return null;
//    if (product.category && typeof product.category === "object") {
//      return (
//        product.category.id ?? product.categoryId ?? product.category_id ?? null
//      );
//    }
//    if (product.category_id) return product.category_id;
//    if (product.categoryId) return product.categoryId;
//    if (product.parent_category_id) return product.parent_category_id;
//    return null;
//  };

//  // Compare handler - localStorage ilə
//  const handleAddToCompare = async (product) => {
//    if (!product?.id) {
//      console.error("Product ID boşdur");
//      return;
//    }

//    const productId = product.id;
//    const categoryId =
//      extractCategoryId(product) ||
//      product.category_id ||
//      product.categoryId ||
//      1;

//    if (addingCompareMap[productId]) return;

//    setAddingCompareMap((prev) => ({
//      ...prev,
//      [productId]: true,
//    }));

//    try {
//      const result = await addToCompare(product, categoryId);

//      if (result.success) {
//        console.log(`Məhsul ${productId} müqayisəyə əlavə edildi`);
//      } else {
//        console.error("Compare əlavə etmə xətası:", result.error);
//        alert(result.error);
//      }
//    } catch (error) {
//      console.error("Məhsul müqayisəyə əlavə edilərkən xəta:", error);
//      alert("Xəta baş verdi. Yenidən cəhd edin.");
//    } finally {
//      setAddingCompareMap((prev) => {
//        const copy = { ...prev };
//        delete copy[productId];
//        return copy;
//      });
//    }
//  };

//  const handleToggleWishlist = async (productId) => {
//    if (addingFavMap[productId]) return;
//    const currentlyFav = !!wishlistedMap[productId];
//    setWishlistedMap((prev) => ({
//      ...prev,
//      [productId]: !currentlyFav,
//    }));
//    setAddingFavMap((prev) => ({
//      ...prev,
//      [productId]: true,
//    }));
//    try {
//      if (currentlyFav) {
//        await removeFromFav(productId).unwrap();
//      } else {
//        await addToFav(productId).unwrap();
//      }
//    } catch (error) {
//      console.error("Wishlist toggle error:", error);
//      setWishlistedMap((prev) => ({
//        ...prev,
//        [productId]: currentlyFav,
//      }));
//    } finally {
//      setAddingFavMap((prev) => {
//        const copy = { ...prev };
//        delete copy[productId];
//        return copy;
//      });
//    }
//  };

//  const handleAddToCart = async (productId) => {
//    if (cartMap[productId] || addingCartMap[productId]) return;
//    setCartMap((prev) => ({
//      ...prev,
//      [productId]: true,
//    }));
//    setAddingCartMap((prev) => ({
//      ...prev,
//      [productId]: true,
//    }));
//    try {
//      await addToCart({ productId, quantity: 1 }).unwrap();
//    } catch (error) {
//      console.error("Add to cart error:", error);
//      setCartMap((prev) => {
//        const copy = { ...prev };
//        delete copy[productId];
//        return copy;
//      });
//    } finally {
//      setAddingCartMap((prev) => {
//        const copy = { ...prev };
//        delete copy[productId];
//        return copy;
//      });
//    }
//  };

//  const handleRemoveFromCompare = async (productId) => {
//    if (removingProducts.has(productId)) return;
//    setRemovingProducts((prev) => new Set(prev).add(productId));

//    try {
//      CompareService.removeFromCompare(productId);
//    } catch (error) {
//      console.error("Remove from compare error:", error);
//    } finally {
//      setRemovingProducts((prev) => {
//        const newSet = new Set(prev);
//        newSet.delete(productId);
//        return newSet;
//      });
//    }
//  };

//  const handleClearCompare = () => {
//    if (isClearing) return;
//    setIsClearing(true);
//    try {
//      CompareService.clearCompareList();
//    } catch (error) {
//      console.error("Clear compare error:", error);
//    } finally {
//      setIsClearing(false);
//    }
//  };

//  const openModal = () => setShowModal(true);
//  const closeModal = () => setShowModal(false);
//  const handleOverlayClick = (e) => {
//    if (e.target.className === "modal-overlay") closeModal();
//  };

//  // Kateqoriyalar və məhsulların çıxarılması
//  const categories = compareData.map((item) => item.category);
//  // Seçilmiş kateqoriyaya görə məhsulları çıxar
//  let displayedProducts = [];
//  if (selectedCategoryId) {
//    const found = compareData.find((item) => Number(item.category.id) === Number(selectedCategoryId));
//    displayedProducts = found ? found.products : [];
//  } else {
//    displayedProducts = compareData.flatMap((item) => item.products);
//  }

//  if (displayedProducts.length === 0) {
//    return (
//      <div
//        className="container"
//        style={{
//          minHeight: "60vh",
//          display: "flex",
//          alignItems: "center",
//          justifyContent: "center",
//        }}
//      >
//        <div className="cartTitleEmpty" style={{ textAlign: "center" }}>
//          <p className="cartTitleEmptyPop">
//            {t?.comparenotproduct || "Müqayisə ediləcək məhsul yoxdur"}
//          </p>
//          <Link href="/">
//            <button
//              className="officialPaymentBtn"
//              style={{ marginTop: "1rem" }}
//            >
//              {t?.compareshowproduct || "Məhsullara bax"}
//            </button>
//          </Link>
//        </div>
//      </div>
//    );
//  }

//  return (
//    <div className="container">
//      {showModal && (
//        <OneClickPay
//          t={t}
//          closeModal={closeModal}
//          handleOverlayClick={handleOverlayClick}
//        />
//      )}

//      <div className="breadCrumb breadCrumbsHideMobile">
//        <Link href="/">
//          <span>{t?.homePageLabel || "Ana Sayfa"}</span>
//        </Link>
//        <strong>
//          <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//        </strong>
//        <span className="lastChildBread">{t?.compareLabel || "Müqayisə"}</span>
//      </div>

//      <div className="compare-wrapper">
//        <div className="compare-left">
//          <h4>{t?.categories || "Kateqoriyalar"}</h4>
//          <ul>

//            {categories.map((cat) => {
//              // Hər kateqoriyadakı məhsul sayı
//              const catObj = compareData.find((item) => item.category.id === cat.id);
//              const count = catObj ? (catObj.products?.length || 0) : 0;
//              return (
//                <li
//                  key={cat.id}
//                  onClick={() => setSelectedCategoryId(Number(cat.id))}
//                  style={{
//                    cursor: "pointer",
//                    fontWeight:
//                      selectedCategoryId === Number(cat.id) ? "600" : "normal",
//                    color:
//                      selectedCategoryId === Number(cat.id) ? "#ec1f27" : "#333",
//                    marginBottom: "0.5rem",
//                  }}
//                >
//                  {cat.name} ({count})
//                </li>
//              );
//            })}
//          </ul>
//          <button
//            onClick={handleClearCompare}
//            disabled={isClearing}
//            style={{
//              background: isClearing ? "#ccc" : "#ec1f27",
//              color: "#fff",
//              border: "none",
//              cursor: isClearing ? "not-allowed" : "pointer",
//            }}
//          >
//            {isClearing ? "Təmizlənir..." : t?.clearall || "Hamısını sil"}
//          </button>
//        </div>

//        <div className="compare-right">
//          <div className="products-grid">
//            {displayedProducts.map((product) => {
//              const productId = product?.id;
//              const isWishlisted = !!wishlistedMap[productId];
//              const isAddingFav = !!addingFavMap[productId];
//              const isInCart = !!cartMap[productId];
//              const isAddingCart = !!addingCartMap[productId];
//              const isAddingCompareItem = !!addingCompareMap[productId];
//              const isProductInCompare = isInCompare(productId);

//              return (
//                <div key={productId} className="productCardSlide">
//                  <div className="secondHomePageProductsCard">
//                    <div className="compare-remove-btn">
//                      <button
//                        onClick={() => handleRemoveFromCompare(productId)}
//                        className="remove-from-compare"
//                        disabled={removingProducts.has(productId)}
//                        title={t?.removeFromCompare || "Müqayisədən çıxar"}
//                      >
//                        {removingProducts.has(productId) ? (
//                          <div className="spinner-small"></div>
//                        ) : (
//                          <IoCloseSharp />
//                        )}
//                      </button>
//                    </div>

//                    <div className="secondHomePageProductsCardDiv">
//                      <Link
//                        href={`/products/${product.slug}`}
//                        className="blockCardLink"
//                      >
//                        <div className="secondHomePageProductsCardImage">
//                          <Image
//                            src={product.image || "/images/defaultImage.png"}
//                            alt={product.name}
//                            width={200}
//                            height={200}
//                          />
//                        </div>
//                      </Link>
//                      <div className="secondHomePageProductsCardContent">
//                        <p>{product.name}</p>
//                        {product.disc_percent != null && (
//                          <div className="discount">
//                            <span>{product.disc_percent} %</span>
//                          </div>
//                        )}
//                        <div className="cardBottomContent">
//                          <div className="price">
//                            {product.old_price &&
//                              product.old_price !== product.price && (
//                                <span className="oldPrice">
//                                  {product.old_price}
//                                  <TbCurrencyManat />
//                                </span>
//                              )}
//                            <span className="newPrice">
//                              {product.price}
//                              <TbCurrencyManat />
//                            </span>
//                          </div>
//                          <div className="wishList">
//                            <button
//                              className={`newScaleBtn ${
//                                isProductInCompare ? "in-compare" : ""
//                              }`}
//                              onClick={() => handleAddToCompare(product)}
//                              disabled={
//                                isAddingCompareItem || isProductInCompare
//                              }
//                              title={
//                                isProductInCompare
//                                  ? "Artıq müqayisədə"
//                                  : "Müqayisəyə əlavə et"
//                              }
//                            >
//                              {isAddingCompareItem ? (
//                                <div className="spinner-small"></div>
//                              ) : (
//                                <NewScale
//                                  className={`newScalePR ${
//                                    isProductInCompare ? "active" : ""
//                                  }`}
//                                />
//                              )}
//                            </button>
//                            <button
//                              onClick={() => handleToggleWishlist(productId)}
//                              className="wishlist-btn"
//                              disabled={isAddingFav}
//                            >
//                              {isWishlisted ? (
//                                <FaHeart className="newWishlistPR active" />
//                              ) : (
//                                <FiHeart className="newWishlistPR" />
//                              )}
//                            </button>
//                          </div>
//                        </div>
//                      </div>
//                    </div>

//                    <div className="addToCartClick">
//                      <div className="addToCartClickItem">
//                        <button
//                          className="cartBtn"
//                          onClick={() => handleAddToCart(productId)}
//                          disabled={isAddingCart || isInCart}
//                        >
//                          {isAddingCart ? (
//                            <div className="spinner-small"></div>
//                          ) : isInCart ? (
//                            <span>{t?.added || "added"}</span>
//                          ) : (
//                            t?.addtocart || "Add to cart"
//                          )}
//                        </button>
//                        <button onClick={openModal} className="clickBtn">
//                          {t?.oneclickpay || "Bir kliklə al"}
//                        </button>
//                      </div>
//                    </div>
//                  </div>
//                  <div>
//                   {/* {product.attributes} */}
//                  </div>
//                </div>
//              );
//            })}
//          </div>
//        </div>
//      </div>

//      <style jsx>{`
//        .compare-wrapper {
//          display: flex;
//          gap: 2rem;
//          margin: 5rem 0;
//        }
//        .compare-left {
//          width: 300px;
//        }
//        .compare-right {
//          flex: 1;
//        }
//        .products-grid {
//          display: grid;
//          grid-template-columns: repeat(auto-fill, minmax(26.5rem, 1fr));
//          gap: 2rem;
//        }
//        .productCardSlide {
//          width: 100%;
//        }

//        /* Compare remove button (X) - yalnız bu burada qalır */
//        .compare-remove-btn {
//          position: absolute;
//          top: 15px;
//          right: 15px;
//          z-index: 1000;
//        }
//        .remove-from-compare {
//          background: rgba(255, 255, 255, 0.95);
//          border: 1px solid #ddd;
//          border-radius: 50%;
//          width: 32px;
//          height: 32px;
//          display: flex;
//          align-items: center;
//          justify-content: center;
//          cursor: pointer;
//          color: #ec1f27;
//          transition: all 0.3s ease;
//          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
//          font-size: 18px;
//        }
//        .remove-from-compare:hover {
//          background: #ec1f27;
//          color: white;
//          transform: scale(1.1);
//        }
//        .remove-from-compare:disabled {
//          cursor: not-allowed;
//          opacity: 0.6;
//          transform: none;
//        }
//        .spinner-small {
//          width: 16px;
//          height: 16px;
//          border: 3px solid rgba(0, 0, 0, 0.1);
//          border-top-color: #ec1f27;
//          border-radius: 50%;
//          animation: spin 1s linear infinite;
//          display: inline-block;
//        }
//        @keyframes spin {
//          to {
//            transform: rotate(360deg);
//          }
//        }

//        @media (max-width: 768px) {
//          .compare-wrapper {
//            flex-direction: column;
//          }
//          .compare-left {
//            width: 100%;
//          }
//          .products-grid {
//            grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
//          }
//        }
//      `}</style>
//    </div>
//  );
// }



"use client";
import React, { useState, useEffect, useRef } from "react";
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
  const [compareData, setCompareData] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [removingProducts, setRemovingProducts] = useState(new Set());
  const [isClearing, setIsClearing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [wishlistedMap, setWishlistedMap] = useState({});
  const [cartMap, setCartMap] = useState({});
  const [addingFavMap, setAddingFavMap] = useState({});
  const [addingCartMap, setAddingCartMap] = useState({});
  const [addingCompareMap, setAddingCompareMap] = useState({});
  const [cardWidth, setCardWidth] = useState(null); // measured card width in px

  const productsGridRef = useRef(null);
  const attributesRightRef = useRef(null);
  const isSyncingRef = useRef(false);

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
  const fetchCompareData = async () => {
    try {
      const data = await CompareService.getAllProducts(); // [{category, products, count}, ...]
      setCompareData(data || []);
    } catch (error) {
      console.error("Compare data fetch error:", error);
    }
  };

  useEffect(() => {
    fetchCompareData();
    const handler = () => fetchCompareData();
    window.addEventListener("compare_updated", handler);
    return () => window.removeEventListener("compare_updated", handler);
  }, []);

  // İlk kateqoriyanı default seç
  useEffect(() => {
    if (compareData.length > 0 && !selectedCategoryId) {
      setSelectedCategoryId(compareData[0].category.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compareData]);

  // Measure card width so attribute columns can match exactly
  useEffect(() => {
    if (!productsGridRef.current) return;

    const measure = () => {
      try {
        const grid = productsGridRef.current;
        // find first rendered card
        const firstCard = grid.querySelector(".productCardSlide");
        if (firstCard) {
          const w = firstCard.getBoundingClientRect().width;
          setCardWidth(Math.round(w));
          return;
        }
        // fallback: try to parse CSS var --card-min if no card found yet
        const cs = getComputedStyle(grid);
        const varVal = cs.getPropertyValue("--card-min").trim();
        if (varVal) {
          // convert rem/px to px
          if (varVal.endsWith("rem")) {
            const rem = parseFloat(varVal);
            const rootFont =
              parseFloat(getComputedStyle(document.documentElement).fontSize) ||
              16;
            setCardWidth(Math.round(rem * rootFont));
          } else if (varVal.endsWith("px")) {
            setCardWidth(Math.round(parseFloat(varVal)));
          }
        }
      } catch (e) {
        // ignore
      }
    };

    measure();

    // Use ResizeObserver to re-measure when grid size changes (responsive)
    let ro = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        measure();
      });
      ro.observe(productsGridRef.current);
    }

    // also listen to window resize as fallback
    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    return () => {
      if (ro && productsGridRef.current) ro.unobserve(productsGridRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [displayedProductsLength(compareData, selectedCategoryId)]); // eslint-disable-line

  // Sync horizontal scroll between products-grid and attributes-right (mobile)
  useEffect(() => {
    const prod = productsGridRef.current;
    const attr = attributesRightRef.current;
    if (!prod || !attr) return;

    let prodRaf = null;
    let attrRaf = null;

    const isMobile = () => window.innerWidth <= 768;

    const onProdScroll = () => {
      if (!isMobile()) return;
      if (isSyncingRef.current) return;
      if (attr) {
        isSyncingRef.current = true;
        if (prodRaf) cancelAnimationFrame(prodRaf);
        prodRaf = requestAnimationFrame(() => {
          try {
            attr.scrollLeft = prod.scrollLeft;
          } finally {
            isSyncingRef.current = false;
          }
        });
      }
    };

    const onAttrScroll = () => {
      if (!isMobile()) return;
      if (isSyncingRef.current) return;
      if (prod) {
        isSyncingRef.current = true;
        if (attrRaf) cancelAnimationFrame(attrRaf);
        attrRaf = requestAnimationFrame(() => {
          try {
            prod.scrollLeft = attr.scrollLeft;
          } finally {
            isSyncingRef.current = false;
          }
        });
      }
    };

    prod.addEventListener("scroll", onProdScroll, { passive: true });
    attr.addEventListener("scroll", onAttrScroll, { passive: true });

    // If user resizes and mobile toggles off, reset syncing positions
    const onWindowResize = () => {
      if (!isMobile()) {
        // ensure no stuck flags and align to 0
        isSyncingRef.current = false;
      } else {
        // when switching to mobile, align attribute scroll to product scroll to avoid jump
        attr.scrollLeft = prod.scrollLeft;
      }
    };
    window.addEventListener("resize", onWindowResize);

    return () => {
      prod.removeEventListener("scroll", onProdScroll);
      attr.removeEventListener("scroll", onAttrScroll);
      window.removeEventListener("resize", onWindowResize);
      if (prodRaf) cancelAnimationFrame(prodRaf);
      if (attrRaf) cancelAnimationFrame(attrRaf);
      isSyncingRef.current = false;
    };
  }, [productsGridRef.current, attributesRightRef.current]);

  // Helper used in dependency: compute displayedProducts length based on compareData + selectedCategoryId
  function displayedProductsLength(data, selCatId) {
    if (!data) return 0;
    let displayed = [];
    if (selCatId) {
      const found = data.find(
        (item) => Number(item.category.id) === Number(selCatId)
      );
      displayed = found ? found.products || [] : [];
    } else {
      displayed = data.flatMap((item) => item.products || []);
    }
    return displayed.length;
  }

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

  // Kateqoriyalar və məhsulların çıxarılması
  const categories = compareData.map((item) => item.category);
  // Seçilmiş kateqoriyaya görə məhsulları çıxar
  let displayedProducts = [];
  if (selectedCategoryId) {
    const found = compareData.find(
      (item) => Number(item.category.id) === Number(selectedCategoryId)
    );
    displayedProducts = found ? found.products : [];
  } else {
    displayedProducts = compareData.flatMap((item) => item.products);
  }

  // Bütün atributların adlarını topla - yalnız məlumatlardan
  const getAllAttributeNames = () => {
    const attributeNames = [];
    const seenAttributes = new Set();

    // Bütün məhsulların atributlarını topla
    displayedProducts.forEach((product) => {
      if (product.attributes && Array.isArray(product.attributes)) {
        product.attributes.forEach((attr) => {
          const name = attr.name || attr.attribute_name;
          if (name && !seenAttributes.has(name)) {
            attributeNames.push(name);
            seenAttributes.add(name);
          }
        });
      }
    });

    return attributeNames;
  };

  const allAttributeNames = getAllAttributeNames();

  // Məhsul üçün atribut dəyərini tap
  const getAttributeValue = (product, attributeName) => {
    if (!product.attributes || !Array.isArray(product.attributes)) {
      return "-";
    }
    const attr = product.attributes.find(
      (a) => (a.name || a.attribute_name) === attributeName
    );
    return attr ? attr.value || attr.attribute_value || "-" : "-";
  };

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

  // build inline style for attributes-right-grid to match cardWidth
  const attributesRightGridStyle = {};
  if (cardWidth && displayedProducts.length > 0) {
    // ensure a tiny gap compensation if desired; currently exact width used
    attributesRightGridStyle.gridTemplateColumns = `repeat(${displayedProducts.length}, ${cardWidth}px)`;
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
          <ul className="category-list">
            {categories.map((cat) => {
              const catObj = compareData.find(
                (item) => item.category.id === cat.id
              );
              const count = catObj ? catObj.products?.length || 0 : 0;
              return (
                <li
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(Number(cat.id))}
                  style={{
                    cursor: "pointer",
                    fontWeight:
                      selectedCategoryId === Number(cat.id) ? "600" : "normal",
                    color:
                      selectedCategoryId === Number(cat.id)
                        ? "#ec1f27"
                        : "#333",
                    marginBottom: "0.5rem",
                  }}
                >
                  {cat.name} ({count})
                </li>
              );
            })}
          </ul>
          <button
            onClick={handleClearCompare}
            disabled={isClearing}
            style={{
              background: isClearing ? "#ccc" : "#ec1f27",
              color: "#fff",
              border: "none",
              cursor: isClearing ? "not-allowed" : "pointer",
              marginBottom: "2rem",
            }}
          >
            {isClearing ? "Təmizlənir..." : t?.clearall || "Hamısını sil"}
          </button>
        </div>

        <div className="compare-right">
          {/* burada CSS variable vasitəsilə həm kart üçün, həm də atributların sağ grid üçün eyni minimal eni istifadə edirik */}
          <div className="products-grid" ref={productsGridRef}>
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
                            src={
                              product.images?.find((img) => img.is_main === 1)
                                ?.img_url || "/images/defaultImage.png"
                            }
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
                            {/* <button
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
                            </button> */}

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
                    {/* Product Attributes Section - saxlanir, amma UI-da gizlədilib */}
                    {product.attributes && product.attributes.length > 0 && (
                      <div className="product-attributes">
                        <h5>{t?.attributes || "Atributlar"}</h5>
                        <div className="attributes-list">
                          {product.attributes.map((attribute, index) => (
                            <div key={index} className="attribute-item">
                              <span className="attribute-name">
                                {attribute.name || attribute.attribute_name}:
                              </span>
                              <span className="attribute-value">
                                {attribute.value || attribute.attribute_value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {allAttributeNames.length > 0 && (
        <div className="attributes-table" role="table" aria-label="Atributlar">
          <div className="attributes-left" role="rowheader">
            <div className="attributes-left-inner">
              {allAttributeNames.map((attrName, idx) => (
                <div className="attribute-name-item" key={idx}>
                  {attrName}
                </div>
              ))}
            </div>
          </div>

          <div
            className="attributes-right"
            role="rowgroup"
            ref={attributesRightRef}
          >
            <div
              className="attributes-right-grid"
              style={attributesRightGridStyle}
            >
              {displayedProducts.map((product) => (
                <div
                  className="attribute-column"
                  key={product.id}
                  // ensure each column keeps the same width as measured card (used on mobile)
                  style={cardWidth ? { minWidth: `${cardWidth}px` } : undefined}
                >
                  {allAttributeNames.map((attrName, k) => (
                    <div className="attribute-value-item" key={k}>
                      {getAttributeValue(product, attrName)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .compare-wrapper {
          display: flex;
          gap: 2rem;
          margin: 5rem 0;
          align-items: flex-start;
        }
        .compare-left {
          width: 300px;
          position: sticky;
          top: 2rem;
        }
        .compare-right {
          flex: 1;
          --card-min: 26.5rem;
        }

        /* PRODUCTS GRID: card layout */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(
            auto-fill,
            minmax(var(--card-min), 1fr)
          );
          gap: 2rem;
        }

        .productCardSlide {
          width: 100%;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .secondHomePageProductsCard {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* Compare remove button (X) */
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

        .category-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1rem 0;
        }

        .attribute-name-item {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #f5f5f5;
          color: #323232;
          font-weight: 500;
          height: 4rem;
          display: flex;
          align-items: center;
          font-size: 1.15rem;
        }

        .attribute-name-item:last-child {
          border-bottom: none;
        }

        /* Hide per-card product attributes UI (we render unified table below) */
        .product-attributes {
          display: none;
        }

        /* Attributes table (unified, under cards) */
        .attributes-table {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 2rem;
          margin: 1.5rem 0;
          align-items: start;
          width: 100%;
        }

        .attributes-left {
          width: 300px;
          border-radius: 2rem;
        }
        .attributes-left-inner {
          border: 1px solid #f5f5f5;
          border-radius: 2rem;
          overflow: hidden;
          background: #fff;
        }

        .attributes-right {
          overflow-x: auto;
        }

        /* RIGHT GRID: columns sized via inline style to match measured card width */
        .attributes-right-grid {
          display: grid;
          gap: 2rem;
          align-items: start;
        }

        .attribute-column {
          border: 1px solid #f5f5f5;
          border-radius: 2rem;
          overflow: hidden;
          background: #fff;
          min-height: 1px;
        }

        .attribute-value-item {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #f5f5f5;
          color: #323232;
          text-align: center;
          font-weight: 400;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 1.3rem;
        }

        .attribute-value-item:last-child {
          border-bottom: none;
        }

        @media (max-width: 1024px) {
          .compare-right {
            --card-min: 22rem;
          }
        }

        /* ---------- MOBILE-SPECIFIC (ONLY) ---------- */
        @media (max-width: 768px) {
          /* hide left attribute names on mobile */
          .attributes-left {
            display: none;
          }

          /* make wrapper columnar */
          .compare-wrapper {
            flex-direction: column;
          }
          .compare-left {
            width: 100%;
            position: relative;
            top: 0;
          }

          /* products become a horizontal scrollable row (no visible scrollbar) */
          .products-grid {
            display: flex;
            gap: 1.5rem;
            overflow-x: auto;
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          .products-grid::-webkit-scrollbar {
            display: none; /* Chrome/Safari/WebKit */
          }

          /* ensure each card keeps its width (same as measured) */
          .productCardSlide {
            flex: 0 0 auto;
            width: auto;
          }

          /* attributes-right becomes a horizontal scroller aligned with cards */
          .attributes-right {
            overflow-x: auto;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .attributes-right::-webkit-scrollbar {
            display: none;
          }

          .attributes-right-grid {
            display: flex;
            gap: 1.5rem;
            align-items: flex-start;
          }

          /* each attribute column should use inline minWidth (set from cardWidth) so it matches card width */
          .attribute-column {
            min-width: 200px; /* fallback if cardWidth not measured yet */
          }

          .attribute-value-item {
            justify-content: center;
          }

          /* stacked table on mobile: names hidden, values visible under each card */
          .attributes-table {
            grid-template-columns: 1fr;
          }
        }
        /* ---------- END MOBILE-SPECIFIC ---------- */
      `}</style>
    </div>
  );
}


























// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { IoCloseSharp } from "react-icons/io5";
// import { TbCurrencyManat } from "react-icons/tb";
// import NewScale from "../../public/icons/newScale.svg";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";
// import { CompareService } from "@/lib/compareService";

// import {
//   useGetFavQuery,
//   useAddToFavMutation,
//   useRemoveFromFavMutation,
// } from "@/redux/wishlistService";
// import { useGetCartQuery, useAddToCartMutation } from "@/redux/cartService";
// import { useCompare } from "@/hooks/useCompare";
// import OneClickPay from "./Header/OneClickPay";

// export default function ComparePage({ t }) {
//   const [compareData, setCompareData] = useState([]);
//   const [selectedCategoryId, setSelectedCategoryId] = useState(null);
//   const [removingProducts, setRemovingProducts] = useState(new Set());
//   const [isClearing, setIsClearing] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [wishlistedMap, setWishlistedMap] = useState({});
//   const [cartMap, setCartMap] = useState({});
//   const [addingFavMap, setAddingFavMap] = useState({});
//   const [addingCartMap, setAddingCartMap] = useState({});
//   const [addingCompareMap, setAddingCompareMap] = useState({});
//   const [cardWidth, setCardWidth] = useState(null); // measured card width in px

//   const productsGridRef = useRef(null);
//   const attributesRightRef = useRef(null);
//   const isSyncingRef = useRef(false);

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

//   // Fetch compare data from localStorage
//   const fetchCompareData = async () => {
//     try {
//       const data = await CompareService.getAllProducts(); // [{category, products, count}, ...]
//       setCompareData(data || []);
//     } catch (error) {
//       console.error("Compare data fetch error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCompareData();
//     const handler = () => fetchCompareData();
//     window.addEventListener("compare_updated", handler);
//     return () => window.removeEventListener("compare_updated", handler);
//   }, []);

//   // İlk kateqoriyanı default seç
//   useEffect(() => {
//     if (compareData.length > 0 && !selectedCategoryId) {
//       setSelectedCategoryId(compareData[0].category.id);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [compareData]);

//   // Measure card width so attribute columns can match exactly
//   useEffect(() => {
//     if (!productsGridRef.current) return;

//     const measure = () => {
//       try {
//         const grid = productsGridRef.current;
//         // find first rendered card
//         const firstCard = grid.querySelector(".productCardSlide");
//         if (firstCard) {
//           const w = firstCard.getBoundingClientRect().width;
//           setCardWidth(Math.round(w));
//           return;
//         }
//         // fallback: try to parse CSS var --card-min if no card found yet
//         const cs = getComputedStyle(grid);
//         const varVal = cs.getPropertyValue("--card-min").trim();
//         if (varVal) {
//           // convert rem/px to px
//           if (varVal.endsWith("rem")) {
//             const rem = parseFloat(varVal);
//             const rootFont =
//               parseFloat(getComputedStyle(document.documentElement).fontSize) ||
//               16;
//             setCardWidth(Math.round(rem * rootFont));
//           } else if (varVal.endsWith("px")) {
//             setCardWidth(Math.round(parseFloat(varVal)));
//           }
//         }
//       } catch (e) {
//         // ignore
//       }
//     };

//     measure();

//     // Use ResizeObserver to re-measure when grid size changes (responsive)
//     let ro = null;
//     if (typeof ResizeObserver !== "undefined") {
//       ro = new ResizeObserver(() => {
//         measure();
//       });
//       ro.observe(productsGridRef.current);
//     }

//     // also listen to window resize as fallback
//     const onResize = () => measure();
//     window.addEventListener("resize", onResize);

//     return () => {
//       if (ro && productsGridRef.current) ro.unobserve(productsGridRef.current);
//       window.removeEventListener("resize", onResize);
//     };
//   }, [displayedProductsLength(compareData, selectedCategoryId)]); // eslint-disable-line

//   // Sync horizontal scroll between products-grid and attributes-right (mobile)
//   useEffect(() => {
//     const prod = productsGridRef.current;
//     const attr = attributesRightRef.current;
//     if (!prod || !attr) return;

//     let prodRaf = null;
//     let attrRaf = null;

//     const isMobile = () => window.innerWidth <= 768;

//     const onProdScroll = () => {
//       if (!isMobile()) return;
//       if (isSyncingRef.current) return;
//       if (attr) {
//         isSyncingRef.current = true;
//         if (prodRaf) cancelAnimationFrame(prodRaf);
//         prodRaf = requestAnimationFrame(() => {
//           try {
//             attr.scrollLeft = prod.scrollLeft;
//           } finally {
//             isSyncingRef.current = false;
//           }
//         });
//       }
//     };

//     const onAttrScroll = () => {
//       if (!isMobile()) return;
//       if (isSyncingRef.current) return;
//       if (prod) {
//         isSyncingRef.current = true;
//         if (attrRaf) cancelAnimationFrame(attrRaf);
//         attrRaf = requestAnimationFrame(() => {
//           try {
//             prod.scrollLeft = attr.scrollLeft;
//           } finally {
//             isSyncingRef.current = false;
//           }
//         });
//       }
//     };

//     prod.addEventListener("scroll", onProdScroll, { passive: true });
//     attr.addEventListener("scroll", onAttrScroll, { passive: true });

//     // If user resizes and mobile toggles off, reset syncing positions
//     const onWindowResize = () => {
//       if (!isMobile()) {
//         // ensure no stuck flags and align to 0
//         isSyncingRef.current = false;
//       } else {
//         // when switching to mobile, align attribute scroll to product scroll to avoid jump
//         attr.scrollLeft = prod.scrollLeft;
//       }
//     };
//     window.addEventListener("resize", onWindowResize);

//     return () => {
//       prod.removeEventListener("scroll", onProdScroll);
//       attr.removeEventListener("scroll", onAttrScroll);
//       window.removeEventListener("resize", onWindowResize);
//       if (prodRaf) cancelAnimationFrame(prodRaf);
//       if (attrRaf) cancelAnimationFrame(attrRaf);
//       isSyncingRef.current = false;
//     };
//   }, [productsGridRef.current, attributesRightRef.current]);

//   // Helper used in dependency: compute displayedProducts length based on compareData + selectedCategoryId
//   function displayedProductsLength(data, selCatId) {
//     if (!data) return 0;
//     let displayed = [];
//     if (selCatId) {
//       const found = data.find(
//         (item) => Number(item.category.id) === Number(selCatId)
//       );
//       displayed = found ? found.products || [] : [];
//     } else {
//       displayed = data.flatMap((item) => item.products || []);
//     }
//     return displayed.length;
//   }

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
//       1;

//     if (addingCompareMap[productId]) return;

//     setAddingCompareMap((prev) => ({
//       ...prev,
//       [productId]: true,
//     }));

//     try {
//       const result = await addToCompare(product, categoryId);

//       if (result.success) {
//         console.log(`Məhsul ${productId} müqayisəyə əlavə edildi`);
//       } else {
//         console.error("Compare əlavə etmə xətası:", result.error);
//         alert(result.error);
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

//   const handleRemoveFromCompare = async (productId) => {
//     if (removingProducts.has(productId)) return;
//     setRemovingProducts((prev) => new Set(prev).add(productId));

//     try {
//       CompareService.removeFromCompare(productId);
//     } catch (error) {
//       console.error("Remove from compare error:", error);
//     } finally {
//       setRemovingProducts((prev) => {
//         const newSet = new Set(prev);
//         newSet.delete(productId);
//         return newSet;
//       });
//     }
//   };

//   const handleClearCompare = () => {
//     if (isClearing) return;
//     setIsClearing(true);
//     try {
//       CompareService.clearCompareList();
//     } catch (error) {
//       console.error("Clear compare error:", error);
//     } finally {
//       setIsClearing(false);
//     }
//   };

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "modal-overlay") closeModal();
//   };

//   // Kateqoriyalar və məhsulların çıxarılması
//   const categories = compareData.map((item) => item.category);
//   // Seçilmiş kateqoriyaya görə məhsulları çıxar
//   let displayedProducts = [];
//   if (selectedCategoryId) {
//     const found = compareData.find(
//       (item) => Number(item.category.id) === Number(selectedCategoryId)
//     );
//     displayedProducts = found ? found.products : [];
//   } else {
//     displayedProducts = compareData.flatMap((item) => item.products);
//   }

//   // Bütün atributların adlarını topla - yalnız məlumatlardan
//   const getAllAttributeNames = () => {
//     const attributeNames = [];
//     const seenAttributes = new Set();

//     // Bütün məhsulların atributlarını topla
//     displayedProducts.forEach((product) => {
//       if (product.attributes && Array.isArray(product.attributes)) {
//         product.attributes.forEach((attr) => {
//           const name = attr.name || attr.attribute_name;
//           if (name && !seenAttributes.has(name)) {
//             attributeNames.push(name);
//             seenAttributes.add(name);
//           }
//         });
//       }
//     });

//     return attributeNames;
//   };

//   const allAttributeNames = getAllAttributeNames();

//   // Məhsul üçün atribut dəyərini tap
//   const getAttributeValue = (product, attributeName) => {
//     if (!product.attributes || !Array.isArray(product.attributes)) {
//       return "-";
//     }
//     const attr = product.attributes.find(
//       (a) => (a.name || a.attribute_name) === attributeName
//     );
//     return attr ? attr.value || attr.attribute_value || "-" : "-";
//   };

//   if (displayedProducts.length === 0) {
//     return (
//       <div
//         className="container"
//         style={{
//           minHeight: "60vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div className="cartTitleEmpty" style={{ textAlign: "center" }}>
//           <p className="cartTitleEmptyPop">
//             {t?.comparenotproduct || "Müqayisə ediləcək məhsul yoxdur"}
//           </p>
//           <Link href="/">
//             <button
//               className="officialPaymentBtn"
//               style={{ marginTop: "1rem" }}
//             >
//               {t?.compareshowproduct || "Məhsullara bax"}
//             </button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // build inline style for attributes-right-grid to match cardWidth
//   const attributesRightGridStyle = {};
//   if (cardWidth && displayedProducts.length > 0) {
//     // ensure a tiny gap compensation if desired; currently exact width used
//     attributesRightGridStyle.gridTemplateColumns = `repeat(${displayedProducts.length}, ${cardWidth}px)`;
//   }

//   return (
//     <div className="container">
//       {showModal && (
//         <OneClickPay
//           t={t}
//           closeModal={closeModal}
//           handleOverlayClick={handleOverlayClick}
//         />
//       )}

//       <div className="breadCrumb breadCrumbsHideMobile">
//         <Link href="/">
//           <span>{t?.homePageLabel || "Ana Sayfa"}</span>
//         </Link>
//         <strong>
//           <MdKeyboardDoubleArrowRight className="breadCrumpIcon" />
//         </strong>
//         <span className="lastChildBread">{t?.compareLabel || "Müqayisə"}</span>
//       </div>

//       <div className="compare-wrapper">
//         <div className="compare-left">
//           <h4>{t?.categories || "Kateqoriyalar"}</h4>
//           <ul className="category-list">
//             {categories.map((cat) => {
//               const catObj = compareData.find(
//                 (item) => item.category.id === cat.id
//               );
//               const count = catObj ? catObj.products?.length || 0 : 0;
//               return (
//                 <li
//                   key={cat.id}
//                   onClick={() => setSelectedCategoryId(Number(cat.id))}
//                   style={{
//                     cursor: "pointer",
//                     fontWeight:
//                       selectedCategoryId === Number(cat.id) ? "600" : "normal",
//                     color:
//                       selectedCategoryId === Number(cat.id)
//                         ? "#ec1f27"
//                         : "#333",
//                     marginBottom: "0.5rem",
//                   }}
//                 >
//                   {cat.name} ({count})
//                 </li>
//               );
//             })}
//           </ul>
//           <button
//             onClick={handleClearCompare}
//             disabled={isClearing}
//             style={{
//               background: isClearing ? "#ccc" : "#ec1f27",
//               color: "#fff",
//               border: "none",
//               cursor: isClearing ? "not-allowed" : "pointer",
//               marginBottom: "2rem",
//             }}
//           >
//             {isClearing ? "Təmizlənir..." : t?.clearall || "Hamısını sil"}
//           </button>
//         </div>

//         <div className="compare-right">
//           {/* burada CSS variable vasitəsilə həm kart üçün, həm də atributların sağ grid üçün eyni minimal eni istifadə edirik */}
//           <div className="products-grid" ref={productsGridRef}>
//             {displayedProducts.map((product) => {
//               const productId = product?.id;
//               const isWishlisted = !!wishlistedMap[productId];
//               const isAddingFav = !!addingFavMap[productId];
//               const isInCart = !!cartMap[productId];
//               const isAddingCart = !!addingCartMap[productId];
//               const isAddingCompareItem = !!addingCompareMap[productId];
//               const isProductInCompare = isInCompare(productId);

//               return (
//                 <div key={productId} className="productCardSlide">
//                   <div className="secondHomePageProductsCard">
//                     <div className="compare-remove-btn">
//                       <button
//                         onClick={() => handleRemoveFromCompare(productId)}
//                         className="remove-from-compare"
//                         disabled={removingProducts.has(productId)}
//                         title={t?.removeFromCompare || "Müqayisədən çıxar"}
//                       >
//                         {removingProducts.has(productId) ? (
//                           <div className="spinner-small"></div>
//                         ) : (
//                           <IoCloseSharp />
//                         )}
//                       </button>
//                     </div>

//                     <div className="secondHomePageProductsCardDiv">
//                       <Link
//                         href={`/products/${product.slug}`}
//                         className="blockCardLink"
//                       >
//                         <div className="secondHomePageProductsCardImage">
                          
//                           <Image
//                             src={
//                               product.images?.find((img) => img.is_main === 1)
//                                 ?.img_url || "/images/defaultImage.png"
//                             }
//                             alt={product.name}
//                             width={200}
//                             height={200}
//                           />
//                         </div>
//                       </Link>
//                       <div className="secondHomePageProductsCardContent">
//                         <p>{product.name}</p>
//                         {product.disc_percent != null && (
//                           <div className="discount">
//                             <span>{product.disc_percent} %</span>
//                           </div>
//                         )}
//                         <div className="cardBottomContent">
//                           <div className="price">
//                             {product.old_price &&
//                               product.old_price !== product.price && (
//                                 <span className="oldPrice">
//                                   {product.old_price}
//                                   <TbCurrencyManat />
//                                 </span>
//                               )}
//                             <span className="newPrice">
//                               {product.price}
//                               <TbCurrencyManat />
//                             </span>
//                           </div>
//                           <div className="wishList">
//                             <button
//                               className={`newScaleBtn ${
//                                 isProductInCompare ? "in-compare" : ""
//                               }`}
//                               onClick={() => handleAddToCompare(product)}
//                               disabled={
//                                 isAddingCompareItem || isProductInCompare
//                               }
//                               title={
//                                 isProductInCompare
//                                   ? "Artıq müqayisədə"
//                                   : "Müqayisəyə əlavə et"
//                               }
//                             >
//                               {isAddingCompareItem ? (
//                                 <div className="spinner-small"></div>
//                               ) : (
//                                 <NewScale
//                                   className={`newScalePR ${
//                                     isProductInCompare ? "active" : ""
//                                   }`}
//                                 />
//                               )}
//                             </button>
//                             <button
//                               onClick={() => handleToggleWishlist(productId)}
//                               className="wishlist-btn"
//                               disabled={isAddingFav}
//                             >
//                               {isWishlisted ? (
//                                 <FaHeart className="newWishlistPR active" />
//                               ) : (
//                                 <FiHeart className="newWishlistPR" />
//                               )}
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="addToCartClick">
//                       <div className="addToCartClickItem">
//                         <button
//                           className="cartBtn"
//                           onClick={() => handleAddToCart(productId)}
//                           disabled={isAddingCart || isInCart}
//                         >
//                           {isAddingCart ? (
//                             <div className="spinner-small"></div>
//                           ) : isInCart ? (
//                             <span>{t?.added || "added"}</span>
//                           ) : (
//                             t?.addtocart || "Add to cart"
//                           )}
//                         </button>
//                         <button onClick={openModal} className="clickBtn">
//                           {t?.oneclickpay || "Bir kliklə al"}
//                         </button>
//                       </div>
//                     </div>
//                     {/* Product Attributes Section - saxlanir, amma UI-da gizlədilib */}
//                     {product.attributes && product.attributes.length > 0 && (
//                       <div className="product-attributes">
//                         <h5>{t?.attributes || "Atributlar"}</h5>
//                         <div className="attributes-list">
//                           {product.attributes.map((attribute, index) => (
//                             <div key={index} className="attribute-item">
//                               <span className="attribute-name">
//                                 {attribute.name || attribute.attribute_name}:
//                               </span>
//                               <span className="attribute-value">
//                                 {attribute.value || attribute.attribute_value}
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       {allAttributeNames.length > 0 && (
//         <div className="attributes-table" role="table" aria-label="Atributlar">
//           <div className="attributes-left" role="rowheader">
//             <div className="attributes-left-inner">
//               {allAttributeNames.map((attrName, idx) => (
//                 <div className="attribute-name-item" key={idx}>
//                   {attrName}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div
//             className="attributes-right"
//             role="rowgroup"
//             ref={attributesRightRef}
//           >
//             <div
//               className="attributes-right-grid"
//               style={attributesRightGridStyle}
//             >
//               {displayedProducts.map((product) => (
//                 <div
//                   className="attribute-column"
//                   key={product.id}
//                   // ensure each column keeps the same width as measured card (used on mobile)
//                   style={cardWidth ? { minWidth: `${cardWidth}px` } : undefined}
//                 >
//                   {allAttributeNames.map((attrName, k) => (
//                     <div className="attribute-value-item" key={k}>
//                       {getAttributeValue(product, attrName)}
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .compare-wrapper {
//           display: flex;
//           gap: 2rem;
//           margin: 5rem 0;
//           align-items: flex-start;
//         }
//         .compare-left {
//           width: 300px;
//           position: sticky;
//           top: 2rem;
//         }
//         .compare-right {
//           flex: 1;
//           --card-min: 26.5rem;
//         }

//         /* PRODUCTS GRID: card layout */
//         .products-grid {
//           display: grid;
//           grid-template-columns: repeat(
//             auto-fill,
//             minmax(var(--card-min), 1fr)
//           );
//           gap: 2rem;
//         }

//         .productCardSlide {
//           width: 100%;
//           display: flex;
//           flex-direction: column;
//           height: 100%;
//         }

//         .secondHomePageProductsCard {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//         }

//         /* Compare remove button (X) */
//         .compare-remove-btn {
//           position: absolute;
//           top: 15px;
//           right: 15px;
//           z-index: 1000;
//         }
//         .remove-from-compare {
//           background: rgba(255, 255, 255, 0.95);
//           border: 1px solid #ddd;
//           border-radius: 50%;
//           width: 32px;
//           height: 32px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           color: #ec1f27;
//           transition: all 0.3s ease;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
//           font-size: 18px;
//         }
//         .remove-from-compare:hover {
//           background: #ec1f27;
//           color: white;
//           transform: scale(1.1);
//         }
//         .remove-from-compare:disabled {
//           cursor: not-allowed;
//           opacity: 0.6;
//           transform: none;
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

//         .category-list {
//           list-style: none;
//           padding: 0;
//           margin: 0 0 1rem 0;
//         }

//         .attribute-name-item {
//           padding: 0.75rem 1rem;
//           border-bottom: 1px solid #f5f5f5;
//           color: #323232;
//           font-weight: 500;
//           height: 4rem;
//           display: flex;
//           align-items: center;
//           font-size: 1.15rem;
//         }

//         .attribute-name-item:last-child {
//           border-bottom: none;
//         }

//         /* Hide per-card product attributes UI (we render unified table below) */
//         .product-attributes {
//           display: none;
//         }

//         /* Attributes table (unified, under cards) */
//         .attributes-table {
//           display: grid;
//           grid-template-columns: 300px 1fr;
//           gap: 2rem;
//           margin: 1.5rem 0;
//           align-items: start;
//           width: 100%;
//         }

//         .attributes-left {
//           width: 300px;
//           border-radius: 2rem;
//         }
//         .attributes-left-inner {
//           border: 1px solid #f5f5f5;
//           border-radius: 2rem;
//           overflow: hidden;
//           background: #fff;
//         }

//         .attributes-right {
//           overflow-x: auto;
//         }

//         /* RIGHT GRID: columns sized via inline style to match measured card width */
//         .attributes-right-grid {
//           display: grid;
//           gap: 2rem;
//           align-items: start;
//         }

//         .attribute-column {
//           border: 1px solid #f5f5f5;
//           border-radius: 2rem;
//           overflow: hidden;
//           background: #fff;
//           min-height: 1px;
//         }

//         .attribute-value-item {
//           padding: 0.75rem 1rem;
//           border-bottom: 1px solid #f5f5f5;
//           color: #323232;
//           text-align: center;
//           font-weight: 400;
//           height: 4rem;
//           display: flex;
//           align-items: center;
//           justify-content: flex-start;
//           font-size: 1.3rem;
//         }

//         .attribute-value-item:last-child {
//           border-bottom: none;
//         }

//         @media (max-width: 1024px) {
//           .compare-right {
//             --card-min: 22rem;
//           }
//         }

//         /* ---------- MOBILE-SPECIFIC (ONLY) ---------- */
//         @media (max-width: 768px) {
//           /* hide left attribute names on mobile */
//           .attributes-left {
//             display: none;
//           }

//           /* make wrapper columnar */
//           .compare-wrapper {
//             flex-direction: column;
//           }
//           .compare-left {
//             width: 100%;
//             position: relative;
//             top: 0;
//           }

//           /* products become a horizontal scrollable row (no visible scrollbar) */
//           .products-grid {
//             display: flex;
//             gap: 1.5rem;
//             overflow-x: auto;
//             -ms-overflow-style: none; /* IE and Edge */
//             scrollbar-width: none; /* Firefox */
//           }
//           .products-grid::-webkit-scrollbar {
//             display: none; /* Chrome/Safari/WebKit */
//           }

//           /* ensure each card keeps its width (same as measured) */
//           .productCardSlide {
//             flex: 0 0 auto;
//             width: auto;
//           }

//           /* attributes-right becomes a horizontal scroller aligned with cards */
//           .attributes-right {
//             overflow-x: auto;
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//           .attributes-right::-webkit-scrollbar {
//             display: none;
//           }

//           .attributes-right-grid {
//             display: flex;
//             gap: 1.5rem;
//             align-items: flex-start;
//           }

//           /* each attribute column should use inline minWidth (set from cardWidth) so it matches card width */
//           .attribute-column {
//             min-width: 200px; /* fallback if cardWidth not measured yet */
//           }

//           .attribute-value-item {
//             justify-content: center;
//           }

//           /* stacked table on mobile: names hidden, values visible under each card */
//           .attributes-table {
//             grid-template-columns: 1fr;
//           }
//         }
//         /* ---------- END MOBILE-SPECIFIC ---------- */
//       `}</style>
//     </div>
//   );
// }

