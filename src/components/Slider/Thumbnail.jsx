"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import "../../app/globals.scss";
import Link from "next/link";
import Image from "next/image";
// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Thumbnail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeImage, setActiveImage] = useState("/images/iphone16pro.png");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const thumbSlides = ["/images/iphone16pro.png", "/images/macbookProIMG.png"];

  return (
      <div className="detailPageContainer">
        {/* Thumbnail Slider */}
        {!isMobile && thumbSlides.length > 0 && (
          <Swiper
            onSwiper={setThumbsSwiper}
            direction="vertical"
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbnailSwiper"
          >
            {thumbSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="productDetailPageImgSlider"
                  onClick={() => setActiveImage(slide)}
                >
                  <Image
                    src={slide}
                    alt={`Thumbnail image ${index + 1}`}
                    width={800}
                    height={800}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Main Image Slider */}
        <div className="mainSwiperPP">
          <Swiper
            key={activeImage} // bu önemli!
            slidesPerView={1}
            loop={false}
            modules={[FreeMode, Thumbs, Navigation, Pagination]}
            className="mainSwiper"
            pagination={isMobile ? { clickable: true } : undefined}
          >
            <SwiperSlide>
              <div className="mainSwiperImages">
                <Link
                  href={activeImage}
                  className="DPgalleryImg block"
                  data-fancybox="videos"
                >
                  <Image
                    src={activeImage}
                    alt="Main product image"
                    width={800}
                    height={800}
                  />
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
  );
};

export default Thumbnail;
