"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../app/globals.scss";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const ProductsPageBannerSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
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
        // breakpoints={{
        //   340: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //     loop: true,
        //   },
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   991: {
        //     slidesPerView: 3,
        //     spaceBetween: 20,
        //   },
        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 20,
        //   },
        //   1440: {
        //     slidesPerView: 4,
        //     spaceBetween: 20,
        //   },
        // }}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="productsBannerSliders">
            <div className="productsBannerSlider">
              <Image
                src="/images/iphone16pro.png"
                alt="productsBannerSlider1"
                width={500}
                height={500}
              />
            </div>
            <span>Phone</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsPageBannerSlider;
