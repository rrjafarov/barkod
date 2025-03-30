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
import { Rating, Box } from "@mui/material";
import Image from "next/image";
import { TbCurrencyManat } from "react-icons/tb";
import BlackComparison from "../../../public/icons/blackComparison.svg";
import RedComparison from "../../../public/icons/redComparison.svg";
import BlackWishlist from "../../../public/icons/blackWishlist.svg";
import RedWishlist from "../../../public/icons/redWishlist.svg";

const HomePageSecondaryProducts = () => {
  const [value, setValue] = useState(4);
  return (
    <div className="container">
      <div className="secondaryProductsHeadTitle">
        <div className="secondaryTitleLeft">
          <span>Ən çox satilanlar</span>
        </div>
        <div className="secondaryTitleRight">
          <strong>Top 100</strong>
          <span>Smartfonlar</span>
          <span>Televizorlar</span>
          <span>Soyuducular</span>
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
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={3000}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <Link href="/products/id" className="blockCardLink"> */}
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
                    {/* <FaRegHeart /> */}
                    <BlackComparison className="rightPagesIconBlackIcons" />
                    <RedComparison className="rightPagesIconRedIcons" />
                  </button>
                  <button>
                    {/* <RiScales3Fill /> */}
                    <BlackWishlist className="rightPagesIconBlackIcons" />
                    <RedWishlist className="rightPagesIconRedIcons" />
                  </button>
                </div>
              </div>
            </div>
            <div className="addToCartClick">
              <div className="addToCartClickItem">
                <button className="cartBtn">Səbətə at</button>
                <button className="clickBtn">Bir Klikle Al</button>
              </div>
            </div>
          </div>
          {/* </Link> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <Link href="/products/id" className="blockCardLink"> */}
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
                    {/* <FaRegHeart /> */}
                    <BlackComparison className="rightPagesIconBlackIcons" />
                    <RedComparison className="rightPagesIconRedIcons" />
                  </button>
                  <button>
                    {/* <RiScales3Fill /> */}
                    <BlackWishlist className="rightPagesIconBlackIcons" />
                    <RedWishlist className="rightPagesIconRedIcons" />
                  </button>
                </div>
              </div>
            </div>
            <div className="addToCartClick">
              <div className="addToCartClickItem">
                <button className="cartBtn">Səbətə at</button>
                <button className="clickBtn">Bir Klikle Al</button>
              </div>
            </div>
          </div>
          {/* </Link> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <Link href="/products/id" className="blockCardLink"> */}
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
                    {/* <FaRegHeart /> */}
                    <BlackComparison className="rightPagesIconBlackIcons" />
                    <RedComparison className="rightPagesIconRedIcons" />
                  </button>
                  <button>
                    {/* <RiScales3Fill /> */}
                    <BlackWishlist className="rightPagesIconBlackIcons" />
                    <RedWishlist className="rightPagesIconRedIcons" />
                  </button>
                </div>
              </div>
            </div>
            <div className="addToCartClick">
              <div className="addToCartClickItem">
                <button className="cartBtn">Səbətə at</button>
                <button className="clickBtn">Bir Klikle Al</button>
              </div>
            </div>
          </div>
          {/* </Link> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <Link href="/products/id" className="blockCardLink"> */}
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
                    {/* <FaRegHeart /> */}
                    <BlackComparison className="rightPagesIconBlackIcons" />
                    <RedComparison className="rightPagesIconRedIcons" />
                  </button>
                  <button>
                    {/* <RiScales3Fill /> */}
                    <BlackWishlist className="rightPagesIconBlackIcons" />
                    <RedWishlist className="rightPagesIconRedIcons" />
                  </button>
                </div>
              </div>
            </div>
            <div className="addToCartClick">
              <div className="addToCartClickItem">
                <button className="cartBtn">Səbətə at</button>
                <button className="clickBtn">Bir Klikle Al</button>
              </div>
            </div>
          </div>
          {/* </Link> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <Link href="/products/id" className="blockCardLink"> */}
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
                    {/* <FaRegHeart /> */}
                    <BlackComparison className="rightPagesIconBlackIcons" />
                    <RedComparison className="rightPagesIconRedIcons" />
                  </button>
                  <button>
                    {/* <RiScales3Fill /> */}
                    <BlackWishlist className="rightPagesIconBlackIcons" />
                    <RedWishlist className="rightPagesIconRedIcons" />
                  </button>
                </div>
              </div>
            </div>
            <div className="addToCartClick">
              <div className="addToCartClickItem">
                <button className="cartBtn">Səbətə at</button>
                <button className="clickBtn">Bir Klikle Al</button>
              </div>
            </div>
          </div>
          {/* </Link> */}
        </SwiperSlide>

        <div className="my-custom-pagination"></div>
      </Swiper>
    </div>
  );
};

export default HomePageSecondaryProducts;
