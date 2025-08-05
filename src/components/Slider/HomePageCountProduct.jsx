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
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const Circle = ({ value, label }) => (
  <div style={{ textAlign: "center" }}>
    <div
      style={{
        width: "3.5rem",
        height: "3.5rem",
        borderRadius: "50%",
        backgroundColor: "#ec1f27",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ fontSize: 13, fontWeight: "bold" }}>{value}</span>
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
          padding: "0.5rem 0 0 0rem",
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
              // width: "10rem",
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
                    <div className="countCampaignButtons">
                      <button className="cartBtn cartBtnCampaign">
                        {t?.addtocart || "Add to cart"}
                      </button>
                      <div
                        style={{
                          // position: "absolute",
                          // top: "10px",
                          // right: "15px",
                          backgroundColor: "#f1f1f1",
                          // color: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          // padding: "5px",
                          borderRadius: "0.7rem",
                          fontSize: "2.4rem",
                          height:"4rem",
                          width:"4rem",
                          // fontWeight: "bold",
                        }}
                      >
                        <FiHeart />
                      </div>
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
