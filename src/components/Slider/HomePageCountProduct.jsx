// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "../../app/[locale]/globals.scss";

// import { Pagination, Autoplay } from "swiper/modules";
// import { Rating, Box } from "@mui/material";
// import { Progress, Row, Col, Typography } from "antd";
// import Countdown from "react-countdown";

// const Circle = ({ value, label }) => (
//   <div style={{ textAlign: "center" }}>
//     <div
//       style={{
//         width: "3.8rem",
//         height: "3.8rem",
//         borderRadius: "50%",
//         backgroundColor: "#ec1f27",
//         color: "#fff",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <span style={{ fontSize: 14, fontWeight: "bold" }}>{value}</span>
//     </div>
//     <span style={{ fontSize: 8, color: "black", fontWeight: "500" }}>
//       {label}
//     </span>
//   </div>
// );

// const { Text } = Typography;

// const HomePageCountProduct = ({ t , campaignProducts}) => {

//   const renderer = ({ days, hours, minutes, seconds, completed }) => {
//     if (completed) {
//       return <span>{t?.offer || "Offer Ended"}</span>;
//     }
//     return (
//       <div
//         className="countUpDown"
//         style={{
//           maxWidth: "310px",
//           width: "100%",
//           padding: "1.5rem 0 0 1rem",
//           textAlign: "start",
//           display: "flex",
//           justifyContent: "space-between",
//           gap: "2rem",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "flex-start",
//             textAlign: "start",
//           }}
//         >
//           <h2 style={{ fontSize: "1.2rem", textAlign: "start" }}>
//             {t?.countUpTitle || "Count UP!"}
//           </h2>
//           <p style={{ fontSize: "1.1rem", opacity: "0.7", textAlign: "start" }}>
//             {t?.offerEndsIn || "Offer end in:"}
//           </p>
//         </div>

//         <div
//           style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}
//         >
//           <Circle value={days} label={t?.dayslabel || "DAYS"} />
//           <Circle value={hours} label={t?.hourslabel || "HOURS"} />
//           <Circle value={minutes} label={t?.minuteslabel || "MINS"} />
//           <Circle value={seconds} label={t?.secondslabel || "SECS"} />
//         </div>
//       </div>
//     );
//   };

//   const total = 300;
//   const sold = 50;
//   const available = total - sold;
//   const percent = (sold / total) * 100;
//   const [value, setValue] = useState(4);
//   const targetDate = Date.now() + 2 * 24 * 60 * 60 * 1000;

//   return (
//     <div id="homePageCountProduct">
//       <div className="container">
//         <div className="homePageCountProductTitle">
//           <span>{t?.dealsday || "Deals of the day"}</span>
//         </div>
//         <Swiper
//           slidesPerView={2}
//           spaceBetween={20}
//           loop={true}
//           pagination={{
//             clickable: true,
//             el: ".count-custom-pagination",
//           }}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             340: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//               loop: true,
//             },
//             640: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             991: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             1024: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             1440: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//           }}
//           speed={3000}
//           modules={[Pagination, Autoplay]}
//           className="mySwiper"
//         >
//           <SwiperSlide>
//             <div className="homePageCountProducts">
//               <div className="homePageCountProductsImage">
//                 <Image
//                   src="/images/macbookProIMG.png"
//                   alt="products"
//                   width={800}
//                   height={800}
//                 />
//               </div>
//               <div className="homePageCountProductsContent">
//                 <h5 className="productsMiniTitle">Galaxy Smart Phone</h5>
//                 <span className="miniPrice">200.00$</span>

//                 <div>
//                   <Countdown date={targetDate} renderer={renderer} />
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default HomePageCountProduct;

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../app/[locale]/globals.scss";

import { Pagination, Autoplay } from "swiper/modules";
import { Rating, Box } from "@mui/material";
import { Progress, Row, Col, Typography } from "antd";
import Countdown from "react-countdown";

const Circle = ({ value, label }) => (
  <div style={{ textAlign: "center" }}>
    <div
      style={{
        width: "3.8rem",
        height: "3.8rem",
        borderRadius: "50%",
        backgroundColor: "#ec1f27",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ fontSize: 14, fontWeight: "bold" }}>{value}</span>
    </div>
    <span style={{ fontSize: 8, color: "black", fontWeight: "500" }}>
      {label}
    </span>
  </div>
);

const { Text } = Typography;

const HomePageCountProduct = ({ t, campaignProducts }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <span style={{ color: "#ec1f27", fontWeight: "bold" }}>
          {t?.offer || "Offer Ended"}
        </span>
      );
    }
    return (
      <div
        className="countUpDown"
        style={{
          maxWidth: "310px",
          width: "100%",
          padding: "1.5rem 0 0 0rem",
          textAlign: "start",
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "start",
          }}
        >
          <h2
            style={{
              fontSize: "1.3rem",
              opacity: "0.7",
              textAlign: "start",
              width: "10rem",
            }}
          >
            {t?.offerend || "Offer end:"}
          </h2>
        </div>

        <div
          style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}
        >
          <Circle value={days} label={t?.dayslabel || "DAYS"} />
          <Circle value={hours} label={t?.hourslabel || "HOURS"} />
          <Circle value={minutes} label={t?.minuteslabel || "MINS"} />
          <Circle value={seconds} label={t?.secondslabel || "SECS"} />
        </div>
      </div>
    );
  };

  // Function to convert end_date string to timestamp
  const getTargetDate = (endDateString) => {
    // Parse the date string "2025-07-31 09:52:00"
    const endDate = new Date(endDateString);
    return endDate.getTime();
  };

  // Check if campaignProducts exists and has items
  if (!campaignProducts || campaignProducts.length === 0) {
    return (
      <div id="homePageCountProduct">
        <div className="container">
          <div className="homePageCountProductTitle">
            <span>{t?.dealsday || "Deals of the day"}</span>
          </div>
          <p>{t?.noDeals || "No deals available at the moment"}</p>
        </div>
      </div>
    );
  }

  return (
    <div id="homePageCountProduct">
      <div className="container">
        <div className="homePageCountProductTitle">
          <span>{t?.dealsday || "Deals of the day"}</span>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={campaignProducts.length > 1}
          pagination={{
            clickable: true,
            el: ".count-custom-pagination",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 20,
              loop: campaignProducts.length > 1,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          speed={3000}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {campaignProducts.map((campaign) => {
            const { product } = campaign;
            const targetDate = getTargetDate(campaign.end_date);

            return (
              <SwiperSlide key={campaign.id}>
                <div className="homePageCountProducts">
                  <div className="homePageCountProductsImage">
                    <Link href={`/products/${product.slug}`}>
                      <Image
                        src={product.image || "/images/placeholder-product.png"}
                        alt={product.name}
                        width={800}
                        height={800}
                      />
                    </Link>

                    {product.is_discount && (
                      <div
                        style={{
                          position: "absolute",
                          top: "15px",
                          right: "15px",
                          backgroundColor: "#ec1f27",
                          color: "white",
                          padding: "5px 10px",
                          borderRadius: "7px",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        -{product.disc_percent}%
                      </div>
                    )}
                    {/* {product.is_best_seller && (
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          backgroundColor: "#28a745",
                          color: "white",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        {t?.bestSeller || "Best Seller"}
                      </div>
                    )} */}
                    {/* <Link
                      href={`/products/${product.slug
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    ></Link> */}
                  </div>
                  <div className="homePageCountProductsContent">
                    {/* Rating */}

                    {parseFloat(product.raiting) > 0 && (
                      <div
                        style={{
                          marginBottom: "5px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Rating
                          value={parseFloat(product.raiting)}
                          readOnly
                          style={{ fontSize: "2rem" }}
                        />
                        <span
                          style={{
                            marginLeft: "5px",
                            fontSize: "1.4rem",
                            color: "#666",
                          }}
                        >
                          ({product.raiting})
                        </span>
                      </div>
                    )}

                    <h5 className="productsMiniTitle">{product.name}</h5>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span
                        className="miniPrice"
                        style={{ color: "#ec1f27", fontWeight: "bold" }}
                      >
                        {product.price}₼
                      </span>
                      {product.old_price &&
                        parseFloat(product.old_price) > 0 && (
                          <span
                            style={{
                              textDecoration: "line-through",
                              color: "#999",
                              fontSize: "1.2rem",
                            }}
                          >
                            {product.old_price}₼
                          </span>
                        )}
                    </div>
                    <div>
                      <Countdown
                        date={targetDate}
                        renderer={renderer}
                        key={`countdown-${campaign.id}-${targetDate}`} // Key to force re-render when needed
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom pagination */}
        <div
          className="count-custom-pagination"
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HomePageCountProduct;
