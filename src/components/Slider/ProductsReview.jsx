"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../app/[locale]/globals.scss";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaPlay } from "react-icons/fa";

Fancybox.bind("[data-fancybox]", {
  dragToClose: false,
  Image: {
    zoom: false,
  },
});





const HomePageProductsCard = ({ homePageDataVideo }) => {
  return (
    <section id="homePageProductReview">
      <div className="container reviewRow">
        <div className="productReviewTitle">
          <div className="reviewTitleLeft">
            <span>Barkodda məhsul icmalı</span>
          </div>
          <div className="reviewTitleRight">
            <Link href="https://www.youtube.com/@Barkod_az">
              <button>Kanalımıza keçid et</button>
            </Link>
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
            el: ".review-custom-pagination",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
              loop: true,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          speed={3000}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {homePageDataVideo.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="productsReviewSlide">
                <Link
                  href={video.src}
                  target="_blank"
                  className="productsReviewLink"
                  data-fancybox="videos"
                >
                  <div className="productsReviewCard">
                    <Image
                      src="/images/homeBanner.png"
                      // src={video.video_thumbnail}
                      className="reviewCardImage"
                      alt="review"
                      width={800}
                      height={800}
                    />
                    <div className="reviewPlayIcon">
                      <FaPlay className="revPlayIcon" />
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomePageProductsCard;
