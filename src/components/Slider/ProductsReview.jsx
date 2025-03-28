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

const HomePageProductsCard = () => {
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
          speed={1000}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="productsReviewSlide">
              <Link
                href={
                  "https://www.https://www.youtube.com/watch?v=_ZiAzlHF8nM.com/watch?v=93H-FqHYiEE"
                }
                target="_blank"
                className="productsReviewLink"
                data-fancybox="videos"
              >
                <div className="productsReviewCard">
                  <Image
                    src="/images/homeBannerd.png"
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
          <SwiperSlide>
            <div className="productsReviewSlide">
              <Link
                href={
                  "https://www.https://www.youtube.com/watch?v=_ZiAzlHF8nM.com/watch?v=93H-FqHYiEE"
                }
                target="_blank"
                className="productsReviewLink"
                data-fancybox="videos"
              >
                <div className="productsReviewCard">
                  <Image
                    src="/images/productsIcmal.png"
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
          <SwiperSlide>
            <div className="productsReviewSlide">
              <Link
                href={
                  "https://www.https://www.youtube.com/watch?v=_ZiAzlHF8nM.com/watch?v=93H-FqHYiEE"
                }
                target="_blank"
                className="productsReviewLink"
                data-fancybox="videos"
              >
                <div className="productsReviewCard">
                  <Image
                    src="/images/homeBannerd.png"
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

          {/* <div className="review-custom-pagination"></div> */}
        </Swiper>
      </div>
    </section>
  );
};

export default HomePageProductsCard;
