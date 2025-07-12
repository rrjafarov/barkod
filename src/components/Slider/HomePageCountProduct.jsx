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

// countDown
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

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>Offer Ended</span>;
  }
  return (
    <div
      className="countUpDown"
      style={{
        maxWidth: "310px",
        width: "100%",
        padding: "1.5rem 0 0 1rem",
        textAlign: "start",
        display: "flex",
        justifyContent: "space-between",
        gap: "2rem",
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
        <h2 style={{ fontSize: "1.2rem", textAlign: "start" }}>Count UP!</h2>
        <p style={{ fontSize: "1.1rem", opacity: "0.7", textAlign: "start" }}>
          Offer end in:
        </p>
      </div>

      <div
        style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}
      >
        <Circle value={days} label="DAYS" />
        <Circle value={hours} label="HOURS" />
        <Circle value={minutes} label="MINS" />
        <Circle value={seconds} label="SECS" />
      </div>
    </div>
  );
};


// countDown
const { Text } = Typography;

const HomePageCountProduct = () => {
  const total = 300;
  const sold = 50;
  const available = total - sold;
  const percent = (sold / total) * 100;
  const [value, setValue] = useState(4);
  const targetDate = Date.now() + 2 * 24 * 60 * 60 * 1000;
  
  return (
    <div id="homePageCountProduct">
      <div className="container">
        <div className="homePageCountProductTitle">
          <span>Deals of the day</span>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
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
              // centeredSlides: true,
              loop: true,
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
          <SwiperSlide>
            <div className="homePageCountProducts">
              <div className="homePageCountProductsImage">
                <Image
                  src="/images/macbookProIMG.png"
                  alt="products"
                  width={800}
                  height={800}
                />
              </div>
              <div className="homePageCountProductsContent">
                {/* <div className="countDownRating">
                  <Box>
                    <Rating
                      name="star-rating"
                      value={value}
                      onChange={(event, newValue) => setValue(newValue)}
                    />
                  </Box>
                  <p>({value})</p>
                </div> */}

                <span className="miniTitle">Mobile&Tablet</span>
                <h5 className="productsMiniTitle">Galaxy Smart Phone</h5>
                <span className="miniPrice">200.00$</span>

                <div className="soldAviable">
                  {/* <Progress
                    percent={Math.round(percent)}
                    showInfo={false}
                    strokeColor="#ec1f27"
                  />
                  <Row justify="space-between">
                    <Col>
                      <Text className="aviableText">
                        Available:<strong>{available}</strong>
                      </Text>
                    </Col>
                    <Col>
                      <Text className="soldText">
                        Sold: <strong>{sold}</strong>
                      </Text>
                    </Col>
                  </Row> */}
                </div>
                <div>
                  <Countdown date={targetDate} renderer={renderer} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomePageCountProduct;
