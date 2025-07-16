"use client";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../app/[locale]/globals.scss";
import { Pagination, Autoplay } from "swiper/modules";

export default function Home({ homePageDataSlider }) {
  return (
    <div className="container">
      <section id="homePageBanner">
        <div className="row">
          <div className="xl-8 lg-8 md-8 sm-12" id="bannerLeft">
            <Swiper
              slidesPerView={"1"}
              spaceBetween={20}
              loop={true}
              pagination={{
                clickable: true,
                el: ".hero-custom-pagination",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={3000}
              modules={[Pagination, Autoplay]}
              className="mySwiper heroSlider"
            >
              {homePageDataSlider.map((slider) => (
                <SwiperSlide className="sldr"  key={slider.id} >
                  <Link href={slider.redirect_url || "#"} className="heroSliderLink" target="_blank">
                    <div className="heroSliderItem">
                      {/* <img src={slider.src} alt="de" /> */}
                      <Image
                        className="homePageBanner"
                        // src="/images/slideBnnrBarkod.jpg"
                        src={slider.src}
                        alt={slider.alt}
                        width={3000}
                        height={2000}
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="hero-custom-pagination"></div>
          </div>

          <div className="xl-4 lg-4 md-4 sm-12">
            <div className="bannerStaticCards">
              <div className="row" id="rowFill">
                <div className="xl-12 lg-12 md-12 sm-6">
                  <div className="bannerStaticCard">
                    <Image
                      // src="/images/staticBnnr01.jpg"
                      src={homePageDataSlider[0]?.src || "/images/staticBnnr01.jpg"}
                      alt="banner"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="xl-12 lg-12 md-12 sm-6">
                  <div className="bannerStaticCard">
                    <Image
                      // src="/images/staticBnnr02.jpg"
                      src={homePageDataSlider[1]?.src || "/images/staticBnnr01.jpg"}
                      alt="banner"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
