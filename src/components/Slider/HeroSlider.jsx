"use client";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";
// import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../app/globals.scss";
import { Pagination, Autoplay } from "swiper/modules";

export default function Home() {
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
              <SwiperSlide>
                <Link href="#">
                  <div className="heroSliderItem">
                    <Image
                      className="homePageBanner"
                      src="/images/homeBannerd.png"
                      alt="banner"
                      width={800}
                      height={800}
                    />
                    <div className="heroSliderContent">
                      <span>Heavy on features. Light on price.</span>
                      <strong>START FORM $399</strong>
                      <Link href="#">
                        <button>
                          Learn More <MdKeyboardArrowRight />
                        </button>
                      </Link>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="#">
                  <div className="heroSliderItem">
                    <Image
                      className="homePageBanner"
                      src="/images/homeBannerd.png"
                      alt="banner"
                      width={800}
                      height={800}
                    />
                    <div className="heroSliderContent">
                      <span>Heavy on features. Light on price.</span>
                      <strong>START FORM $399</strong>
                      <Link href="#">
                        <button>
                          Learn More <MdKeyboardArrowRight />
                        </button>
                      </Link>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="#">
                  <div className="heroSliderItem">
                    <Image
                      className="homePageBanner"
                      src="/images/homeBannerd.png"
                      alt="banner"
                      width={800}
                      height={800}
                    />
                    <div className="heroSliderContent">
                      <span>Heavy on features. Light on price.</span>
                      <strong>START FORM $399</strong>
                      <Link href="#">
                        <button>
                          Learn More <MdKeyboardArrowRight />
                        </button>
                      </Link>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
            <div className="hero-custom-pagination"></div>
          </div>

          <div className="xl-4 lg-4 md-4 sm-12">
            <div className="bannerStaticCards">
              <div className="bannerStaticCard">
                <Image
                  src="/images/bannerStaticCard01.png"
                  alt="banner"
                  width={200}
                  height={200}
                />
                <div className="bannerStaticCardItem">
                  <strong className="bannerSale">Sale Up to 50%</strong>
                  <span>
                    Drone <br /> Photography
                  </span>
                  <Link href="#">
                    <button>
                      Shop Now <MdKeyboardArrowRight className="shoopNowIcon" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bannerStaticCard">
                <Image
                  src="/images/bannerStaticCard02.png"
                  alt="banner"
                  width={200}
                  height={200}
                />
                <div className="bannerStaticCardItemRight">
                  <strong className="bannerSale">Sale Up to 60%</strong>
                  <span>
                    Best <br /> Headphone
                  </span>
                  <Link href="#">
                    <button>
                      Shop Now <MdKeyboardArrowRight className="shoopNowIcon" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
