"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../app/[locale]/globals.scss";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { Rating, Box } from "@mui/material";
import Image from "next/image";
import { TbCurrencyManat } from "react-icons/tb";
import NewScale from "../../../public/icons/newScale.svg";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const HomePageSecondaryProducts = ({ homePageDataBestSellingProducts }) => {
  const [value, setValue] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  // const [isWishlisted, setIsWishlisted] = useState(false);
  const [wishlistedMap, setWishlistedMap] = useState({});

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  const toggleWishlist = (productId) => {
    setWishlistedMap((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
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
      <div className="secondaryProductsHeadTitle">
        <div className="secondaryTitleLeft">
          <span>Ən çox satilanlar</span>
        </div>
        <div className="secondaryTitleRight">
          <strong>Top 100</strong>
          <span>Smartfonlar</span>
          <span>Televizorlar</span>
        </div>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        loop={true}
        pagination={{
          clickable: true,
          el: ".my-custom-pagination",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={4000}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 20,
            // centeredSlides: true,
            loop: true,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper custom-overflow-container"
      >
        {homePageDataBestSellingProducts.map((product) => {
          const isWishlisted = wishlistedMap[product.id] === true;
          return (
            <SwiperSlide key={product.id} className="productCardSlide">
              <div className="secondHomePageProductsCard">
                <div className="secondHomePageProductsCardDiv">
                  <Link
                    href={`/products/${product.slug}`}
                    className="blockCardLink"
                  >
                    <div className="secondHomePageProductsCardImage">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                      />
                    </div>
                  </Link>
                  <div className="secondHomePageProductsCardContent">
                    <span>{product.name}</span>
                    {product.disc_percent != null && (
                      <div className="discount">
                        <span>{product.disc_percent} %</span>
                      </div>
                    )}
                    <div className="cardBottomContent">
                      <div className="price">
                        {product.old_price && (
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
                        <button>
                          <NewScale className="newScalePR" />
                        </button>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="wishlist-btn"
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
                    <button className="cartBtn">Səbətə at</button>
                    <button onClick={openModal} className="clickBtn">
                      Bir Kliklə Al
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="my-custom-pagination"></div>
      </Swiper>
    </div>
  );
};

export default HomePageSecondaryProducts;
