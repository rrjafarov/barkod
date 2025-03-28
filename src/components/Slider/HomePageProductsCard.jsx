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
import { RiScales3Fill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

const HomePageProductsCard = () => {
  const [value, setValue] = useState(4);
  return (
    <div className="container">
      <div className="productsHeadTitle">
        <span>Latest Products</span>
        <span>Top Raitings</span>
        <span>Best Selling</span>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        loop={false}
        pagination={{
          clickable: true,
          el: ".my-custom-pagination",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Pagination, Autoplay]}
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
                    <FaRegHeart />
                  </button>
                  <button>
                    <RiScales3Fill />
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
                    <FaRegHeart />
                  </button>
                  <button>
                    <RiScales3Fill />
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
                    <FaRegHeart />
                  </button>
                  <button>
                    <RiScales3Fill />
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
                    <FaRegHeart />
                  </button>
                  <button>
                    <RiScales3Fill />
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
                    <FaRegHeart />
                  </button>
                  <button>
                    <RiScales3Fill />
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
                    <FaRegHeart />
                  </button>
                  <button>
                    <RiScales3Fill />
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

export default HomePageProductsCard;
