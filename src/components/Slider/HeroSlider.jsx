// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "../../app/[locale]/globals.scss";
// import { Pagination, Autoplay } from "swiper/modules";

// export default function Home({ homePageDataSlider }) {
//   return (
//     <div className="container">
//       <section id="homePageBanner">
//         <div className="row">
//           <div className="xl-8 lg-8 md-8 sm-12" id="bannerLeft">
//             <Swiper
//               slidesPerView={"1"}
//               spaceBetween={20}
//               loop={true}
//               pagination={{
//                 clickable: true,
//                 el: ".hero-custom-pagination",
//               }}
//               autoplay={{
//                 delay: 3000,
//                 disableOnInteraction: false,
//               }}
//               speed={3000}
//               modules={[Pagination, Autoplay]}
//               className="mySwiper heroSlider"
//             >
//               {homePageDataSlider.slice(2).map((slider) => (
//                 <SwiperSlide className="sldr"  key={slider.id} >
//                   <Link href={slider.redirect_url || "#"} className="heroSliderLink" target="_blank">
//                     <div className="heroSliderItem">
//                       <Image
//                         className="homePageBanner"
//                         src={slider.src}
//                         alt={slider.alt}
//                         width={3000}
//                         height={2000}
//                       />
//                     </div>
//                   </Link>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <div className="hero-custom-pagination"></div>
//           </div>

//           <div className="xl-4 lg-4 md-4 sm-12">
//             <div className="bannerStaticCards">
//               <div className="row" id="rowFill">
//                 <div className="xl-12 lg-12 md-12 sm-6">
//                   <div className="bannerStaticCard">
//                     <Image
//                       src={homePageDataSlider[0]?.src || "/images/staticBnnr01.jpg"}
//                       alt="banner"
//                       width={400}
//                       height={400}
//                     />
//                   </div>
//                 </div>
//                 <div className="xl-12 lg-12 md-12 sm-6">
//                   <div className="bannerStaticCard">
//                     <Image
//                       src={homePageDataSlider[1]?.src || "/images/staticBnnr01.jpg"}
//                       alt="banner"
//                       width={400}
//                       height={400}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




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
  const staticSliders = (homePageDataSlider || []).filter(
    (s) => Number(s.is_static) === 1
  );
  const dynamicSliders = (homePageDataSlider || []).filter(
    (s) => Number(s.is_static) === 0
  );

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
              {dynamicSliders.map((slider) => (
                <SwiperSlide className="sldr" key={slider.id}>
                  <Link
                    href={slider.redirect_url || "#"}
                    className="heroSliderLink"
                    target="_blank"
                  >
                    <div className="heroSliderItem">
                      <Image
                        className="homePageBanner"
                        src={slider.src}
                        alt={slider.alt || "banner"}
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
                      src={staticSliders[0]?.src}
                      alt={staticSliders[0]?.alt || "banner"}
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="xl-12 lg-12 md-12 sm-6">
                  <div className="bannerStaticCard">
                    <Image
                      src={staticSliders[1]?.src}
                      alt={staticSliders[1]?.alt || "banner"}
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




















// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import React, { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "../../app/[locale]/globals.scss";
// import { Pagination, Autoplay } from "swiper/modules";

// export default function Home({ homePageDataSlider }) {
//   // Responsive state: desktop yoxlamasi (min-width: 768px)
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     // server-side safe: window only used inside useEffect
//     const mq = window.matchMedia("(min-width: 768px)");
//     const handle = (e) => setIsDesktop(e.matches);

//     // initial
//     setIsDesktop(mq.matches);

//     // listen
//     if (mq.addEventListener) {
//       mq.addEventListener("change", handle);
//     } else {
//       // Safari fallback
//       mq.addListener(handle);
//     }

//     return () => {
//       if (mq.removeEventListener) {
//         mq.removeEventListener("change", handle);
//       } else {
//         mq.removeListener(handle);
//       }
//     };
//   }, []);

//   const allSliders = homePageDataSlider || [];

//   // Desktopdə: is_static === 1 -> statik sağ kartlar, is_static === 0 -> hero swiper
//   // Mobiledə (<768px): bütün sliderlər hero swiper içindədir (is_static fərqi nəzərə alınmır)
//   const staticSliders = isDesktop
//     ? allSliders.filter((s) => Number(s.is_static) === 1)
//     : [];
//   const dynamicSliders = isDesktop
//     ? allSliders.filter((s) => Number(s.is_static) === 0)
//     : allSliders;

//   return (
//     <div className="container">
//       <section id="homePageBanner">
//         <div className="row">
//           <div className="xl-8 lg-8 md-8 sm-12" id="bannerLeft">
//             <Swiper
//               slidesPerView={"1"}
//               spaceBetween={20}
//               loop={true}
//               pagination={{
//                 clickable: true,
//                 el: ".hero-custom-pagination",
//               }}
//               autoplay={{
//                 delay: 3000,
//                 disableOnInteraction: false,
//               }}
//               speed={3000}
//               modules={[Pagination, Autoplay]}
//               className="mySwiper heroSlider"
//             >
//               {dynamicSliders.map((slider) => (
//                 <SwiperSlide className="sldr" key={slider.id}>
//                   <Link
//                     href={slider.redirect_url || "#"}
//                     className="heroSliderLink"
//                     target="_blank"
//                   >
//                     <div className="heroSliderItem">
//                       <Image
//                         className="homePageBanner"
//                         src={slider.src || "/images/staticBnnr01.jpg"}
//                         alt={slider.alt || "banner"}
//                         width={3000}
//                         height={2000}
//                       />
//                     </div>
//                   </Link>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <div className="hero-custom-pagination"></div>
//           </div>

//           {/* Bu sağ kolon yalnız desktopda (>=768px) görünəcək */}
//           {isDesktop && (
//             <div className="xl-4 lg-4 md-4 sm-12">
//               <div className="bannerStaticCards">
//                 <div className="row" id="rowFill">
//                   <div className="xl-12 lg-12 md-12 sm-6">
//                     <div className="bannerStaticCard">
//                       <Image
//                         src={staticSliders[0]?.src || "/images/staticBnnr01.jpg"}
//                         alt={staticSliders[0]?.alt || "banner"}
//                         width={400}
//                         height={400}
//                       />
//                     </div>
//                   </div>
//                   <div className="xl-12 lg-12 md-12 sm-6">
//                     <div className="bannerStaticCard">
//                       <Image
//                         src={staticSliders[1]?.src || "/images/staticBnnr01.jpg"}
//                         alt={staticSliders[1]?.alt || "banner"}
//                         width={400}
//                         height={400}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }
