"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../app/globals.scss";
// import "../../app/[locale]/globals.scss"
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { TbCurrencyManat } from "react-icons/tb";
// import BlackComparison from "../../../public/icons/blackComparison.svg";
// import RedComparison from "../../../public/icons/redComparison.svg";
// import BlackWishlist from "../../../public/icons/blackWishlist.svg";
// import RedWishlist from "../../../public/icons/redWishlist.svg";
// import OneClickPayment from "@/components/OneClickPayment";
import NewScale from "../../../public/icons/newScale.svg";
import NewWishList from "../../../public/icons/newWishlist.svg";
import ProductCard from "../ProductCard";

const HomePageProductsCard = () => {
  const [value, setValue] = useState(4);
  // const [showModal, setShowModal] = useState(false);
  // const openModal = () => setShowModal(true);
  // const closeModal = () => setShowModal(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div className="container">
      {showModal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>
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

      <div className="productsHeadTitle">
        <span>Latest Products</span>
        <span>Top Raitings</span>
        <span>Best Selling</span>
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
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={3000}
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
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <Link href="/products/id">
            <div className="homePageProductsCard">
              <div className="homePageProductsCardImage">
                <Image
                  src="/images/sonySpeaker.png"
                  alt="sony"
                  width={100}
                  height={100}
                />
              </div>
              <div className="homePageProductsCardContent">
                <div className="rating">
                  <Box>
                    <Rating
                      name="star-rating"
                      value={value}
                      onChange={(event, newValue) => setValue(newValue)}
                    />
                  </Box>
                  <p>({value})</p>
                </div>
                <strong>Audio&Video</strong>
                <span className="productTitle">Bluetooth Headphones</span>
                <div className="price">
                  <span className="oldPrice">$300</span>
                  <span className="newPrice">$400</span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/products/id">
            <div className="homePageProductsCard">
              <div className="homePageProductsCardImage">
                <Image
                  src="/images/sonySpeaker.png"
                  alt="sony"
                  width={100}
                  height={100}
                />
              </div>
              <div className="homePageProductsCardContent">
                <div className="rating">
                  <Box>
                    <Rating
                      name="star-rating"
                      value={value}
                      onChange={(event, newValue) => setValue(newValue)}
                    />
                  </Box>
                  <p>({value})</p>
                </div>
                <strong>Audio&Video</strong>
                <span className="productTitle">Bluetooth Headphones</span>
                <div className="price">
                  <span className="oldPrice">$300</span>
                  <span className="newPrice">$400</span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide> */}




        <SwiperSlide>
          <div className="secondHomePageProductsCard">
            <Link href="/products/id" className="blockCardLink">
              <div className="secondHomePageProductsCardImage">
                <Image
                  src="/images/iphone16pro.png"
                  alt="sony"
                  width={200}
                  height={200}
                />
              </div>
            </Link>
            <div className="secondHomePageProductsCardContent">
              <span>iPhone 16 Pro Max 256 GB Black Titanium</span>
              <div className="discount">
                <span>
                  -350 <TbCurrencyManat />
                </span>
              </div>
              <div className="cardBottomContent">
                <div className="price">
                  <span className="oldPrice">
                    3000,00
                    <TbCurrencyManat />
                  </span>
                  <span className="newPrice">
                    2400,00
                    <TbCurrencyManat />
                  </span>
                </div>

                <div className="wishList">
                  <button>
                    <NewScale className="newScalePR" />
                  </button>
                  <button>
                    <NewWishList className="newWishlistPR" />
                  </button>
                </div>
              </div>
            </div>
            <div className="addToCartClick">
              <div className="addToCartClickItem">
                <button className="cartBtn">Səbətə at</button>
                <button onClick={openModal} className="clickBtn">
                  Bir Klikle Al
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="secondHomePageProductsCard">
            <Link href="/products/id" className="blockCardLink">
              <div className="secondHomePageProductsCardImage">
                <Image
                  src="/images/iphone16pro.png"
                  alt="sony"
                  width={200}
                  height={200}
                />
              </div>
            </Link>
            <div className="secondHomePageProductsCardContent">
              <span>iPhone 16 Pro Max 256 GB Black Titanium</span>
              <div className="discount">
                <span>
                  -350 <TbCurrencyManat />
                </span>
              </div>
              <div className="cardBottomContent">
                <div className="price">
                  <span className="oldPrice">
                    3000,00
                    <TbCurrencyManat />
                  </span>
                  <span className="newPrice">
                    2400,00
                    <TbCurrencyManat />
                  </span>
                </div>

                <div className="wishList">
                  <button>
                    <NewScale className="newScalePR" />
                  </button>
                  <button>
                    <NewWishList className="newWishlistPR" />
                  </button>
                </div>
              </div>
            </div>
            <div className="addToCartClick">
              <div className="addToCartClickItem">
                <button className="cartBtn">Səbətə at</button>
                <button onClick={openModal} className="clickBtn">
                  Bir Klikle Al
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="secondHomePageProductsCard">
            <Link href="/products/id" className="blockCardLink">
              <div className="secondHomePageProductsCardImage">
                <Image
                  src="/images/iphone16pro.png"
                  alt="sony"
                  width={200}
                  height={200}
                />
              </div>
            </Link>
            <div className="secondHomePageProductsCardContent">
              <span>iPhone 16 Pro Max 256 GB Black Titanium</span>
              <div className="discount">
                <span>
                  -350 <TbCurrencyManat />
                </span>
              </div>
              <div className="cardBottomContent">
                <div className="price">
                  <span className="oldPrice">
                    3000,00
                    <TbCurrencyManat />
                  </span>
                  <span className="newPrice">
                    2400,00
                    <TbCurrencyManat />
                  </span>
                </div>

                <div className="wishList">
                  <button>
                    <NewScale className="newScalePR" />
                  </button>
                  <button>
                    <NewWishList className="newWishlistPR" />
                  </button>
                </div>
              </div>
            </div>
            <div className="addToCartClick">
              <div className="addToCartClickItem">
                <button className="cartBtn">Səbətə at</button>
                <button onClick={openModal} className="clickBtn">
                  Bir Klikle Al
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="secondHomePageProductsCard">
            <Link href="/products/id" className="blockCardLink">
              <div className="secondHomePageProductsCardImage">
                <Image
                  src="/images/iphone16pro.png"
                  alt="sony"
                  width={200}
                  height={200}
                />
              </div>
            </Link>
            <div className="secondHomePageProductsCardContent">
              <span>iPhone 16 Pro Max 256 GB Black Titanium</span>
              <div className="discount">
                <span>
                  -350 <TbCurrencyManat />
                </span>
              </div>
              <div className="cardBottomContent">
                <div className="price">
                  <span className="oldPrice">
                    3000,00
                    <TbCurrencyManat />
                  </span>
                  <span className="newPrice">
                    2400,00
                    <TbCurrencyManat />
                  </span>
                </div>

                <div className="wishList">
                  <button>
                    <NewScale className="newScalePR" />
                  </button>
                  <button>
                    <NewWishList className="newWishlistPR" />
                  </button>
                </div>
              </div>
            </div>
            <div className="addToCartClick">
              <div className="addToCartClickItem">
                <button className="cartBtn">Səbətə at</button>
                <button onClick={openModal} className="clickBtn">
                  Bir Klikle Al
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="secondHomePageProductsCard">
            <Link href="/products/id" className="blockCardLink">
              <div className="secondHomePageProductsCardImage">
                <Image
                  src="/images/iphone16pro.png"
                  alt="sony"
                  width={200}
                  height={200}
                />
              </div>
            </Link>
            <div className="secondHomePageProductsCardContent">
              <span>iPhone 16 Pro Max 256 GB Black Titanium</span>
              <div className="discount">
                <span>
                  -350 <TbCurrencyManat />
                </span>
              </div>
              <div className="cardBottomContent">
                <div className="price">
                  <span className="oldPrice">
                    3000,00
                    <TbCurrencyManat />
                  </span>
                  <span className="newPrice">
                    2400,00
                    <TbCurrencyManat />
                  </span>
                </div>

                <div className="wishList">
                  <button>
                    <NewScale className="newScalePR" />
                  </button>
                  <button>
                    <NewWishList className="newWishlistPR" />
                  </button>
                </div>
              </div>
            </div>
            <div className="addToCartClick">
              <div className="addToCartClickItem">
                <button className="cartBtn">Səbətə at</button>
                <button onClick={openModal} className="clickBtn">
                  Bir Klikle Al
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="my-custom-pagination"></div>
      </Swiper>
    </div>
  );
};

export default HomePageProductsCard;
