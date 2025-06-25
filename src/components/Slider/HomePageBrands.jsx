"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../app/[locale]/globals.scss";
// import "../../app/[locale]/globals.scss"
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const HomePageBrands = ({ brandData, homePageDataBrands,t }) => {
  return (
    <section id="homePageBrands">
      <div className="container">
        <div className="homePageBrands">
          <div className="homePageBrandsTitle">
            <span>{t?.brands || "brands"}</span>
          </div>
          <Swiper
            slidesPerView={6}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              340: {
                slidesPerView: 2.5,
                spaceBetween: 10,
                // centeredSlides: true,
                loop: true,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={3000}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {brandData.map((brands) => (
              <SwiperSlide key={brands.id}>
                <Link href="#">
                  <div className="homePageBrandCard">
                    <div className="homePageBrandCardImage">
                      <Image
                        src={brands?.img_url}
                        alt={brands?.brand_name}
                        width={800}
                        height={800}
                      />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomePageBrands;
